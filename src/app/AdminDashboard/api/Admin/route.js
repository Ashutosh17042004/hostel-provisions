import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/api/user_modal/User";

export async function GET() {
  try {
    await connectToDatabase();

    const admins = await User.find({ role: "admin" }).select("-password");

    return Response.json({ count: admins.length, admins });
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
