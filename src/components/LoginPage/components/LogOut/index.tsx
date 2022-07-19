/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useAppDispatch } from "redux/hooks/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";
import { firebaseLogout } from "helpers/firebaseHelpers";
import LoginErrorBlock from "../LoginStatusBlock";
import styles from "./LogOut.module.scss";

function LogOut() {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await firebaseLogout();
      dispatch(logout());
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
