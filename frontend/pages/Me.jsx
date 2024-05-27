import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Me = () => {
  const navigate = useNavigate();
  useEffect(
    function () {
      if (localStorage.getItem("token")) {
        navigate("/dashboard");
      } else {
        navigate("/signup");
      }
    },
    [navigate]
  );
  return <div>Loading..</div>;
};
