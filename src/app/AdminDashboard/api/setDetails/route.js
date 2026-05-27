// import { connectToDatabase } from "@/lib/mongodb";
// import Hostel from "../hostel_modal/hostel";

// export async function POST(request) {
//   try {
//     const {
//       hostelname,
//       businessEmail,
//       telegramToken,
//       telegramChatId,
//       logo,
//       hostelAdminName,
//       phone,
//       buisness_email_password,
//       loginPassword
//     } = await request.json();
//     if (!hostelname || !businessEmail) {
//       return Response.json(
//         { message: "hostelname and businessEmail are required" },
//         { status: 400 },
//       );
//     }

//     await connectToDatabase();

//     const hostel = await Hostel.create({
//       hostelname,
//       buisness_email: businessEmail,
//       buisness_email_password,
//       telegram_token: telegramToken,
//       telegram_chat_id: telegramChatId,
//       logo,
//       phone,
      
//       Admin: hostelAdminName ? [hostelAdminName] : [],
//     });

//     return Response.json({
//       ok: true,
//       message: "Registered successful",
//       hostel: { id: hostel._id, hostelname: hostel.hostelname },
//     });
//   } catch (error) {
//     return Response.json(
//       { message: error.message || "Server error" },
//       { status: 500 },
//     );
//   }
// }



import { connectToDatabase } from "@/lib/mongodb";
import Hostel from "../hostel_modal/hostel";
import User from "@/app/api/user_modal/User"; 
export async function POST(request) {
  try {
    const {
      hostelname,
      businessEmail,
      telegramToken,
      telegramChatId,
      logo,
      hostelAdminName,
      phone,
      buisness_email_password,
      loginPassword,
    } = await request.json();

    // 1. Validate required fields for both User and Hostel
    if (!hostelname || !businessEmail || !loginPassword || !hostelAdminName) {
      return Response.json(
        { message: "Hostel name, Business Email, Admin Name, and Login Password are required" },
        { status: 400 }
      );
    }

    // 2. Connect to the database
    await connectToDatabase();

    // 3. Check if a user with this email already exists to prevent duplicate key errors
    const existingUser = await User.findOne({ email: businessEmail });
    if (existingUser) {
      return Response.json(
        { message: "An account with this business email already exists" },
        { status: 409 }
      );
    }

    // 4. STEP ONE: Create the Admin User
    // (Your userSchema.pre("save") hook will automatically hash the loginPassword here)
    const newAdmin = await User.create({
      email: businessEmail,
      hostelname: hostelname,
      fullname: hostelAdminName,
      password: loginPassword,
      role: "admin",
    });

    // 5. STEP TWO: Create the Hostel using the new Admin's ID
    const hostel = await Hostel.create({
      hostelname,
      buisness_email: businessEmail,
      buisness_email_password,
      telegram_token: telegramToken,
      telegram_chat_id: telegramChatId,
      logo,
      phone,
      // We pass the newly generated MongoDB ObjectId instead of a string
      Admin: [newAdmin._id], 
    });

    // 6. Return success response
    return Response.json(
      {
        ok: true,
        message: "Hostel and Admin registered successfully",
        hostel: { id: hostel._id, hostelname: hostel.hostelname },
        admin: { id: newAdmin._id, email: newAdmin.email }
      },
      { status: 201 } // 201 is the standard HTTP status for "Created"
    );

  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
