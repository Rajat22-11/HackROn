import React from "react";
import Navbar from "../components/Navbar"; // Updated import path
import Form from "../components/Form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FrontPage() {
  return (
    <div style={styles.appContainer}>
      <Navbar />
      <div style={styles.content}>
        <div style={styles.formWrapper}>
          {/* Left Lottie Animation */}
          <div style={styles.lottieContainer}>
            <DotLottieReact
              src="https://lottie.host/71992eca-90b8-4045-b139-1cfc6b8f4210/ZqLYAFWjfc.lottie"
              loop
              autoplay
              style={styles.lottie}
            />
          </div>

          {/* Form Component */}
          <div style={styles.formContainer}>
            <Form />
          </div>

          {/* Right Lottie Animation */}
          <div style={styles.lottieContainer}>
            <DotLottieReact
              src="https://lottie.host/71992eca-90b8-4045-b139-1cfc6b8f4210/ZqLYAFWjfc.lottie"
              loop
              autoplay
              style={styles.lottie}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
    backgroundColor: "#FFFFFF", // White background
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    paddingTop: "90px", // Adjusted to avoid overlapping with fixed navbar
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  formWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px", // Increased spacing to prevent form compression
    width: "80%", // Adjusts the form and animations within the page
    maxWidth: "1200px", // Prevents excessive stretching on large screens
  },
  formContainer: {
    flexShrink: 0, // Prevents the form from shrinking
    minWidth: "400px", // Ensures a minimum width for the form
    maxWidth: "500px", // Limits form width for better design
    width: "100%",
  },
  lottieContainer: {
    flex: 1, // Allows animations to take available space without squeezing form
    display: "flex",
    justifyContent: "center",
  },
  lottie: {
    width: "180px", // Adjusted to fit well on both sides
    height: "180px",
  },
};
