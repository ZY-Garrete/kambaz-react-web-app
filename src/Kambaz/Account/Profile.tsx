import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";  // ✅ 引入 Bootstrap 组件

export default function Profile() {
  return (
    <div id="wd-profile-screen" >
      <h1 className="mb-2">Profile</h1>

      <Form>
        {/* ✅ 用户名 & 密码 */}
        <Form.Control
          id="wd-username"
          defaultValue="alice"
          placeholder="Username"
          className="mb-2"
        />
        <Form.Control
          id="wd-password"
          defaultValue="123"
          placeholder="Password"
          type="password"
          className="mb-2"
        />

        <Form.Control
          id="wd-firstname"
          defaultValue="Alice"
          placeholder="First Name"
          className="mb-2"
        />
        <Form.Control
          id="wd-lastname"
          defaultValue="Wonderland"
          placeholder="Last Name"
          className="mb-2"
        />
        <Form.Control
          id="wd-dob"
          defaultValue="2000-01-01"
          type="date"
          className="mb-2"
        />
        <Form.Control
          id="wd-email"
          defaultValue="alice@wonderland"
          type="email"
          placeholder="Email"
          className="mb-2"
        />

        {/* ✅ 角色选择 */}
        <Form.Select id="wd-role" defaultValue="FACULTY" className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>

        {/* ✅ Sign Out 按钮 */}
        <Link to="/Kambaz/Account/Signin">
          <Button id="wd-signout-btn" variant="danger" className="w-100">
            Sign out
          </Button>
        </Link>
      </Form>
    </div>
  );
}
