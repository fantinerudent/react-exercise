import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserPreniumContext } from "../contexts/UserPreniumContext";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // si je passais pas une BDD je pourrais gérer les métadatas, bon, la comme ce n'était pas
  // le but de l'exercice je vais les moquer.

  const [userPreniumState,] = useContext(UserPreniumContext);
  console.log("user", user, isAuthenticated);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p> prenium : {userPreniumState}</p>
      </div>
    )
  );
};

export default Profile;
