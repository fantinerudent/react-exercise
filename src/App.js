import "./App.css";
import { useState } from "react";
import Profile from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPreniumContext } from "./contexts/UserPreniumContext";
import SwitchPrenium from "./components/SwitchPrenium";
import MenuAppBar from "./components/MenuAppBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MenuAppBar />
        <Profile />
      </div>
    ),
  },
  {
    path: "/blabla",
    element: (
      <ProtectedRoute>
        <MenuAppBar />
        <div>
          blabla
          <SwitchPrenium />
        </div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/prenium",
    element: (
      <div>
        <MenuAppBar />
        Prenium
      </div>
    ),
  },
]);

function App() {
  const [userPreniumState, setUserPreniumState] = useState("false");
  console.log("userPreniumState in app =>", userPreniumState);
  return (
    <div className="App">
      <UserPreniumContext.Provider
        value={[userPreniumState, setUserPreniumState]}
      >
        <RouterProvider router={router} />
      </UserPreniumContext.Provider>
    </div>
  );
}

export default App;
