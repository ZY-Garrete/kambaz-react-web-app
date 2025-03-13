import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KambazNavigation from "./Navigation";

import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";


export default function Kambaz() {

  const [courses, setCourses] = useState<any[]>(db.courses);

  const [course] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });



  return (
    // Add Account Screen to Kambaz Landing Page
    <div id="wd-kambaz">


      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="Dashboard" element={
            <ProtectedRoute><Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />

        </Routes>
      </div>


    </div>
  );
}