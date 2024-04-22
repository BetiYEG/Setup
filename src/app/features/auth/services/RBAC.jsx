// src/app/features/auth/services/RBAC.jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";
const RBAC = ({ allowedRoles, children }) => {
  const { userRole } = useContext(UserContext);

  // Check if the user's role is allowed
  const isAllowed = allowedRoles.includes(userRole);

  // Conditionally render the content based on the user's role
  return isAllowed ? children : null;
};

export default RBAC;