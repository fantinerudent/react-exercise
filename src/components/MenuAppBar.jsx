import  { useContext } from "react";
import BlablaButton from "./BlablaButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { UserPreniumContext } from "../contexts/UserPreniumContext";

const MenuAppBar = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [userPreniumState,] = useContext(UserPreniumContext);
  console.log(userPreniumState)
  return (
    <div
      style={{ height: "50px", width: "100%", backgroundColor: "lightblue" }}
    >
      <button onClick={() => navigate("/")}> home</button>
      <BlablaButton />
      {!user && <LoginButton />}
      {user && <LogoutButton />}
      {userPreniumState === "true" && <a href="/prenium"> Prenium</a>}
    </div>
  );
};

export default MenuAppBar;
