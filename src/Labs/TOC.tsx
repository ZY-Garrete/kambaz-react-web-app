import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills" id="wd-toc">
      <li className="nav-item"><a id="wd-a" href="#/Labs" className="nav-link">Labs</a></li>
      <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
        className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>
      <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
        className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>
      <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
        className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>
      <li className="nav-item"><a id="wd-a4" href="#/Labs/Lab4"
        className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>Lab 4</a></li>
      <li className="nav-item"><a id="wd-a5" href="#/Labs/Lab5"
        className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>Lab 5</a></li>


      <li className="nav-item"><a id="wd-k" href="#/Kambaz" className="nav-link">Kambaz</a></li>
      <li className="nav-item"><a id="wd-github" href="https://github.com/ZY-Garrete" target="_blank"
        className="nav-link">My GitHub</a></li>
      <li className="nav-item"><a id="wd-as2" href="https://github.com/ZY-Garrete/kambaz-react-web-app/tree/a2" target="_blank"
        className="nav-link" > Zuyu Guo's A2 branch </a></li>
      <li className="nav-item"><a id="wd-as3" href="https://github.com/ZY-Garrete/kambaz-react-web-app/tree/a3" target="_blank" className="nav-link">Zuyu Guo's A3 branch</a></li>
      <li className="nav-item"><a id="wd-server-link" href="https://kambaz-node-server-app-9dvi.onrender.com/" target="_blank" className="nav-link">Render Server Home</a></li>
      <li className="nav-item"><a id="wd-as5" href="https://github.com/ZY-Garrete/kambaz-react-web-app/tree/a5" target="_blank"
        className="nav-link" > Zuyu Guo's A5 branch </a></li>
      <li className="nav-item"><a id="wd-as6" href="https://github.com/ZY-Garrete/kambaz-react-web-app/tree/a6" target="_blank"
        className="nav-link" > Zuyu Guo's A6 branch </a>


      </li>
    </ul>
  );
}


/* import Nav from "react-bootstrap/Nav";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3">Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/ZY-Garrete" id="wd-github">Zuyu Guo's GitHub</Nav.Link>
      </Nav.Item>
      <Nav.Link href="https://github.com/ZY-Garrete/kambaz-react-web-app/tree/a2" id="wd-github"> Zuyu Guo's A2 branch
      </Nav.Link>

    </Nav>
  );
}
 */