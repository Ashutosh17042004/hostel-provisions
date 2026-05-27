"use client";

import { useEffect, useState } from "react";
import RegistrationForm from "./components/registrationForm";


export default function AdminDashboard() {
  const [existingHostels, setexistingHostels] = useState([]);
  const [registrationForm, setregistrationForm] = useState(false);
  async function getExistingHostelDetails() {
    const res = await fetch("/api/getDetails");
    const data = await res.json();
    if (res.hostelname) {
      setexistingHostels(data);
    }
  }
  useEffect(() => {
    getExistingHostelDetails();
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="text-2xl font-semibold">
        {existingHostels.map((hostel, index) => (
          <div key={index}>{hostel}</div>
        ))}
      </div>
      <div className="text-2xl font-semibold">
        <button
          onClick={() => {
            setregistrationForm(!registrationForm);
          }}
        >
          + Add New Hostel
        </button>
      </div>
      {registrationForm && <RegistrationForm />}
    </div>
  );
}
