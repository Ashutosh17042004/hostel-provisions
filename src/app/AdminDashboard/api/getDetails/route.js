import { connectToDatabase } from "@/lib/mongodb";
import Hostel from "../hostel_modal/hostel";

export async function GET() {
  try {
    await connectToDatabase();
    const hostels = await Hostel.find({}, "hostelname");

    const hostelNames = hostels.map((h) => h.hostelname);
    return Response.json( hostelNames );
  } catch (error) {
    console.log(error);
  }
}
