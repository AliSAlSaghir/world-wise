/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthent } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthent) navigate("/");
    },
    [isAuthent, navigate]
  );
  return isAuthent ? children : null;
}

export default ProtectedRoute;
