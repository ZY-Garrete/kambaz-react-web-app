import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS5610 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/cs5100.jpg" width={200} />
                <div>
                <h5> CS5100 Foundations of AI </h5>
                <p className="wd-dashboard-course-title">
                    AI model developer  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/pdp.jpg" width={200} />
                <div>
                <h5> CS5010 Program Design Paradigm </h5>
                <p className="wd-dashboard-course-title">
                    Software Solution developer  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/HCI.png" width={200} />
                <div>
                <h5> CS5340 HCI </h5>
                <p className="wd-dashboard-course-title">
                    HCI  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/cv.jpg" width={200} />
                <div>
                <h5> CS5330 Pattern Recogn & CV </h5>
                <p className="wd-dashboard-course-title">
                    CV model developer  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/Algo.jpg" width={200} />
                <div>
                <h5> CS5800 Algorithm </h5>
                <p className="wd-dashboard-course-title">
                    Algorithm developer  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
        <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link" >
                <img src="/images/DL.jpg" width={200} />
                <div>
                <h5> CS7150 Deep Learning </h5>
                <p className="wd-dashboard-course-title">
                    DL model developer  </p>
                <button> Go </button>
                </div>
            </Link>        
        </div>
        
      </div>
    </div>
);}
