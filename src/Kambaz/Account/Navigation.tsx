import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {!currentUser && (
        <>
          <NavLink to="/Kambaz/Account/Signin" id="wd-account-signin-link"
            className={({ isActive }) => `list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}>
            Signin
          </NavLink>
          <NavLink to="/Kambaz/Account/Signup" id="wd-account-signup-link"
            className={({ isActive }) => `list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}>
            Signup
          </NavLink>
        </>
      )}

      {currentUser && (
        <>
          <NavLink to="/Kambaz/Account/Profile" id="wd-account-profile-link"
            className={({ isActive }) => `list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}>
            Profile
          </NavLink>

          {currentUser.role === "ADMIN" && (
            <NavLink to="/Kambaz/Account/Users"
              className={({ isActive }) => `list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}>
              Users
            </NavLink>
          )}
        </>
      )}
    </div>
  );
}
