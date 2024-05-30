import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DoctorDashboard from "./components/DoctorDashboard";
import MeetingScheduler from "./components/MeetingScheduler";
import AdminOnboard from "./components/AdminOnboard";
import PregnancyQA from "./components/PregnancyQA";
import ClassCalendar from "./components/ClassCalendar";
import AddClassForm from "./components/AddClassForm";
import GoogleMapsComponent from "./components/GoogleMapsComponent";
import ErrorBoundary from "./components/ErrorBoundary";
import DoctorPatientSession from "./components/DoctorPatientSession";
import SendMessagePage from "./components/SendMessagePage";
import Inbox from "./components/Inbox";
import SentMessages from "./components/SentMessages";
import MessageDetail from "./components/MessageDetail";

function App() {
  const [meeting, setMeeting] = useState(null);

  const handleMeetingCreated = (meetingData) => {
    setMeeting(meetingData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/GoogleMaps"
            element={
              <ErrorBoundary>
                <GoogleMapsComponent />
              </ErrorBoundary>
            }
          />
          <Route path="/Classes" element={<ClassCalendar />} />
          <Route path="/AddClasses" element={<AddClassForm />} />
          <Route path="/FAQ" element={<PregnancyQA />} />
          <Route path="/admin/onboard" element={<AdminOnboard />} />
          <Route path="/schedule" element={<MeetingScheduler />} />
          <Route path="/doctor_dashboard" element={<DoctorDashboard />} />
          <Route path="/send-message" element={<SendMessagePage />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sent-messages" element={<SentMessages />} />
          <Route path="/message/:messageId" element={<MessageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
