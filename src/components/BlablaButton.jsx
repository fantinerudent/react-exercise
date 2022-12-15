import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const BlablaButton = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/blabla");
    }
  };
  return <button onClick={handleClick}> Blabla page</button>;
};

export default BlablaButton;
