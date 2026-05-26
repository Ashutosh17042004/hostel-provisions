import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/api/user_modal/User";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    return Response.json({
      ok: true,
      message: "Login successful",
      user: {
        role: user.role,
        name:user.name,
        profilepic: user.profilepic,
      },
    });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
