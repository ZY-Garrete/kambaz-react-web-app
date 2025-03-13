import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

      <NavLink to="/Kambaz/Account/Signin" id="wd-course-home-link"
        className="list-group-item active border border-0" > Signin  </NavLink>
      <NavLink to="/Kambaz/Account/Signup" id="wd-course-home-link"
        className="list-group-item text-danger border border-0"  > Signup  </NavLink>
      <NavLink to="/Kambaz/Account/Profile" id="wd-course-home-link"
        className="list-group-item text-danger border border-0" > Profile </NavLink>
    </div>
  );
}
