/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginErrorBlock from "../LoginStatusBlock";
import styles from "./LogOut.module.scss";

function LogOut() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out!");
    }
  };

  return (
    <div onClick={handleLogout} className={styles.logout}>
      {error && <LoginErrorBlock message={error} />}
      Sign Out
    </div>
  );
}

export default LogOut;
