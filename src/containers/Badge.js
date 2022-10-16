import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";

const Badge = ({ children, styleInfo }) => {
  const colorKey = {
    Events: "primary",
    Interviews: "success",
    Updates: "danger",
  };
  return (
    <h5 style={styleInfo}>
      <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
    </h5>
  );
};

export default Badge;
