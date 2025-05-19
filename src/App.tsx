import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { ProfileProvider } from "./context/profleContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ProfileProvider>
          <ProfilePage />
        </ProfileProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
