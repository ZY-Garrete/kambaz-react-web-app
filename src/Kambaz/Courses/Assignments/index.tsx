import { ListGroup, Button } from "react-bootstrap"
import LessonControlButtons from "../Modules/LessonControlButtons"
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { BsThreeDotsVertical, BsPlus } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";  // ✅ 确保导入 Link 组件
import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs"; // ✅ 实心箭头


export default function Assignments() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div id="wd-assignments">


      <AssignmentsControls /><br />

      <ListGroup className="rounded-0" id="wd-modules">

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray" id="wd-Assignment">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            {/*  左侧：拖拽图标 + 下拉箭头 + 文字 */}
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                className="p-0 me-2 border-0"
                onClick={() => setIsExpanded(!isExpanded)} // 点击切换
              >
                {isExpanded ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />}
              </Button>
              <BsGripVertical className="me-2 fs-5 text-secondary" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>

            {/*  右侧：按钮组 */}
            <div className="d-flex align-items-center">
              {/* 40% of Total 按钮（灰色圆角） */}
              <Button variant="outline-secondary" size="lg" className="rounded-pill px-3 me-2">
                40% of Total
              </Button>

              {/* + 号按钮 */}
              <Button variant="light" size="lg" className="me-2">
                <BsPlus />
              </Button>

              {/* 竖着的 ... 省略号按钮 */}
              <Button variant="light" size="lg">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>

          {isExpanded && (
            <>
              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">

                {/* 左侧 - 拖拽 & 编辑图标 */}
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilDuotone className="me-2 fs-3" />
                </div>

                {/* 中间 - 任务文本信息 */}
                <div className="flex-grow-1">
                  <Link to="/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-decoration-none text-dark">
                    A1 - ENV + HTML
                  </Link>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="text-muted"> Not available until May 6 at 12:00am </span> |
                  <span className="fw-bold">Due</span>
                  <small className="text-muted"> May 13 at 11:59pm | 100 pts</small>
                </div>

                {/* 右侧 - 绿色对勾 & 省略号按钮 */}
                <LessonControlButtons />
              </ListGroup.Item>


              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilDuotone className="me-2 fs-3" />
                </div>

                <div className="flex-grow-1">
                  <Link to="/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-decoration-none text-dark">
                    A2 -CSS + BOOTSTRAP
                  </Link>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="text-muted"> Not available until May 13 at 12:00am </span> |
                  <span className="fw-bold">Due</span>
                  <small className="text-muted"> May 20 at 11:59pm | 100 pts</small>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>



              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilDuotone className="me-2 fs-3" />
                </div>

                <div className="flex-grow-1">
                  <Link to="/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-decoration-none text-dark">
                    A3 -JAVASCRIPT + REACT
                  </Link>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="text-muted"> Not available until May 20 at 12:00am </span> |
                  <span className="fw-bold">Due</span>
                  <small className="text-muted"> May 27 at 11:59pm | 100 pts</small>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
            </>)}
        </ListGroup.Item>
      </ListGroup>

    </div>
  );
}
