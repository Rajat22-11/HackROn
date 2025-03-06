import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {Form1} from "../components/Form1";
import {Form2} from "../components/Form2";
import {Form3} from "../components/Form3";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FrontPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex flex-col items-center w-full h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center w-full py-10 gap-10">
        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/71992eca-90b8-4045-b139-1cfc6b8f4210/ZqLYAFWjfc.lottie"
          loop
          autoplay
          className="w-44 h-44"
        />

        {/* Show Forms Based on Step */}
        {step === 1 && <Form1 nextStep={nextStep} />}
        {step === 2 && <Form2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Form3 prevStep={prevStep} navigate={navigate} />}
      </div>
    </div>
  );
}
