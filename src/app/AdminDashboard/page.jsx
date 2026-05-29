"use client";

import { useEffect, useState } from "react";
import RegistrationForm from "./components/registrationForm";

export default function AdminDashboard() {
  const [existingHostels, setexistingHostels] = useState([]);
  const [registrationForm, setregistrationForm] = useState(false);
  async function getExistingHostelDetails() {
    const res = await fetch("/AdminDashboard/api/getDetails");
    const data = await res.json();
    console.log(data)
    if (data) {
      setexistingHostels(data);
    }
  }
  useEffect(() => {
    getExistingHostelDetails();
  }, []);

  // return (
  //   <div className="flex flex-col min-h-screen items-center justify-center">
  //     <div className="text-2xl font-semibold">
  //       {existingHostels.map((hostel, index) => (
  //         <div key={index}>{hostel}</div>
  //       ))}
  //     </div>
  //     <div className="text-2xl font-semibold">
  //       <button
  //         onClick={() => {
  //           setregistrationForm(!registrationForm);
  //         }}
  //       >
  //         + Add New Hostel
  //       </button>
  //     </div>
  //     {registrationForm && <RegistrationForm />}
  //   </div>
  // );

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="text-2xl font-semibold">
        {existingHostels.map((hostel, index) => (
          // Make sure you render a string here, e.g., hostel.hostelname
          // React will crash if you try to render an entire object directly
          <div key={index}>{hostel}</div>
        ))}
      </div>
      <div className="text-2xl font-semibold">
        <button
          onClick={() => {
            setregistrationForm(!registrationForm);
          }}
        >
          {registrationForm ? "Cancel" : "+ Add New Hostel"}
        </button>
      </div>

      {/* MINIMUM FIX HERE: Pass the onSuccess prop */}
      {registrationForm && (
        <RegistrationForm
          onSuccess={() => {
            setregistrationForm(false); // Closes the form
            getExistingHostelDetails(); // Refreshes the list
          }}
        />
      )}
    </div>
  );
}
