import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const isFormValid = otp.trim() !== "";

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Verify OTP:", otp);
    navigate("/stage");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-sm w-[400px] p-6 text-center mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Enter OTP to verify
        </h2>

        <form onSubmit={handleVerify}>
          <input
            className="w-full px-4 py-2 my-2 border border-blue-400 rounded-lg text-sm outline-none text-gray-700 focus:border-blue-600 transition-colors"
            type="text"
            placeholder=""
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-2.5 mt-4 text-white border-none rounded-lg text-base font-semibold transition-all duration-300 shadow-md ${
              isFormValid
                ? "bg-blue-600 cursor-pointer hover:bg-blue-700 hover:shadow-lg"
                : "bg-[#94A6FD] cursor-not-allowed opacity-70 shadow-none"
            }`}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
