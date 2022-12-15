import { useContext } from "react";

import { UserPreniumContext } from "../contexts/UserPreniumContext";

import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SwitchPrenium = () => {
  const [userPreniumState, setUserPreniumState] =
    useContext(UserPreniumContext);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={userPreniumState === "false" ? false : true}
          onChange={() => {
            userPreniumState === "true"
              ? setUserPreniumState("false")
              : setUserPreniumState("true");
          }}
        />
      }
      label="Prenium"
    />
  );
};

export default SwitchPrenium;
