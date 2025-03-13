import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as db from "../Database";

export default function Signin() {
  // 添加credentials状态变量用于存储用户输入的凭据
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 登录函数，验证用户凭据并处理登录逻辑
  const signin = () => {
    // 在数据库中搜索匹配的用户
    const user = db.users.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    // 如果找到匹配的用户
    if (user) {
      // 将用户存储到Redux中
      dispatch(setCurrentUser(user));
      // 导航到Dashboard页面
      navigate("/Kambaz/Dashboard");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signin}
      >
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div>
  );
}