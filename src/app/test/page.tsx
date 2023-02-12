import React from "react";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold">Welcome to the Application!</h1>
      <p>Please log in or sign up to continue.</p>
      <Link href="test/auth/signup">Sign Up</Link>
      <br />
      <Link href="test/auth/login">Log In</Link>
    </div>
  );
};

export default LandingPage;
