// "use client";

// import { useState } from "react";

// export default function RegistrationForm() {
//   const [hostelname, setHostelname] = useState("");
//   const [hostelAdminName, sethostelAdminName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [businessEmail, setBusinessEmail] = useState("");
//   const [buisness_email_password, setbuisness_email_password] = useState("");
//   const [telegramToken, setTelegramToken] = useState("");
//   const [telegramChatId, setTelegramChatId] = useState("");
//   const [logo, setLogo] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const res = await fetch("/AdminDashboard/api/setDetails", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           hostelname,
//           businessEmail,
//           telegramToken,
//           telegramChatId,
//           logo,
//           hostelAdminName,
//           phone,
//           buisness_email_password,
//           loginPassword
//         }),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     console.log({
//       hostelname,
//       businessEmail,
//       telegramToken,
//       telegramChatId,
//       logo,
//       hostelAdminName,
//       phone,
//       buisness_email_password,loginPassword
//     });
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="mt-6 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900"
//     >
//       <h2 className="mb-6 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
//         Register New Hostel
//       </h2>
//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Name
//         </span>
//         <input
//           type="text"
//           required
//           value={hostelAdminName}
//           onChange={(e) => sethostelAdminName(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="Green Valley Hostel"
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Hostel name
//         </span>
//         <input
//           type="text"
//           required
//           value={hostelname}
//           onChange={(e) => setHostelname(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="Green Valley Hostel"
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           phone{" "}
//         </span>
//         <input
//           type="number"
//           required
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="Green Valley Hostel"
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Business email
//         </span>
//         <input
//           type="email"
//           value={businessEmail}
//           onChange={(e) => setBusinessEmail(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="hostel@example.com"
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Business email SMTP key
//         </span>
//         <input
//           type="pasword"
//           value={buisness_email_password}
//           onChange={(e) => setbuisness_email_password(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="hostel@example.com"
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Telegram bot token
//         </span>
//         <input
//           type="text"
//           value={telegramToken}
//           onChange={(e) => setTelegramToken(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="123456:ABC-DEF..."
//         />
//       </label>

//       <label className="mb-4 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Telegram chat ID
//         </span>
//         <input
//           type="text"
//           value={telegramChatId}
//           onChange={(e) => setTelegramChatId(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="-1001234567890"
//         />
//       </label>

//       <label className="mb-6 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Logo URL
//         </span>
//         <input
//           type="url"
//           value={logo}
//           onChange={(e) => setLogo(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="https://..."
//         />
//       </label>
//       <label className="mb-6 block">
//         <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
//           Login Password
//         </span>
//         <input
//           type="text"
//           value={loginPassword}
//           onChange={(e) => setLoginPassword(e.target.value)}
//           className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
//           placeholder="https://..."
//         />
//       </label>

//       <button
//         type="submit"
//         className="w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
//       >
//         Register
//       </button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";

export default function RegistrationForm({ onSuccess }) {
  const [hostelname, setHostelname] = useState("");
  const [hostelAdminName, sethostelAdminName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [buisness_email_password, setbuisness_email_password] = useState("");
  const [telegramToken, setTelegramToken] = useState("");
  const [telegramChatId, setTelegramChatId] = useState("");
  const [logo, setLogo] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/AdminDashboard/api/setDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hostelname,
          businessEmail,
          telegramToken,
          telegramChatId,
          logo,
          hostelAdminName,
          phone,
          buisness_email_password,
          loginPassword,
        }),
      });

      if (res.ok) {
        // Trigger the parent component to close this form and refresh data
        if (onSuccess) onSuccess();
      } else {
        const errorData = await res.json();
        console.error("Registration failed:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900"
    >
      <h2 className="mb-6 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        Register New Hostel
      </h2>
      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Admin Name
        </span>
        <input
          type="text"
          required
          value={hostelAdminName}
          onChange={(e) => sethostelAdminName(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="John Doe"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Hostel name
        </span>
        <input
          type="text"
          required
          value={hostelname}
          onChange={(e) => setHostelname(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="Green Valley Hostel"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Phone
        </span>
        <input
          type="number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="1234567890"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Business email
        </span>
        <input
          type="email"
          required
          value={businessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="hostel@example.com"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Business email SMTP key
        </span>
        <input
          type="password"
          value={buisness_email_password}
          onChange={(e) => setbuisness_email_password(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="SMTP Key..."
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Telegram bot token
        </span>
        <input
          type="text"
          value={telegramToken}
          onChange={(e) => setTelegramToken(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="123456:ABC-DEF..."
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Telegram chat ID
        </span>
        <input
          type="text"
          value={telegramChatId}
          onChange={(e) => setTelegramChatId(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="-1001234567890"
        />
      </label>

      <label className="mb-6 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Logo URL
        </span>
        <input
          type="url"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="https://..."
        />
      </label>

      <label className="mb-6 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Login Password
        </span>
        <input
          type="password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-200"
          placeholder="Secure password..."
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        Register
      </button>
    </form>
  );
}
