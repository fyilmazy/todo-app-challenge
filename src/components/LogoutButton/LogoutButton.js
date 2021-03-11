import React from "react";

const LogoutButton = ({ userLogOut }) => {
  return (
    <>
      <button onClick={userLogOut}>Logout</button>
    </>
  );
};

export default LogoutButton;
