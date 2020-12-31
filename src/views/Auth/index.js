import React, { useState } from "react";
import SignUp from "./Signup";
import Login from "./SignIn";

function Index(props) {
  const [auth, setauth] = useState("SIGNUP");

  const login = () => setauth("LOGIN");
  const signUp = () => setauth("SIGNUP");
  return (
    <div className="w-full h-screen bg-violet grid items-center">
      {auth === "SIGNUP" ? <SignUp login={login}  /> : <Login signup={signUp} />}
    </div>
  );
}

export default Index;
