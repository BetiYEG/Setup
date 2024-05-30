import React, { useState, useEffect } from 'react';
import AttendanceFormService from '../services/AttendanceFormService';

const AttendanceForm = () => {
  const [attendanceStatus, setAttendanceStatus] = useState({
    checkedIn: false,
    checkInTime: null,
    checkOutTime: null,
    totalTimeAttended: 0,
  });

  useEffect(() => {
    if (attendanceStatus.checkInTime && attendanceStatus.checkOutTime) {
      const duration = attendanceStatus.checkOutTime - attendanceStatus.checkInTime;
      setAttendanceStatus((prevState) => ({
        ...prevState,
        totalTimeAttended: duration,
      }));
    }
  }, [attendanceStatus.checkInTime, attendanceStatus.checkOutTime]);

  const handleCheckIn = async () => {
    try {
      if (!attendanceStatus.checkedIn) {
        const date = new Date();
        const response = await AttendanceFormService.checkIn(date);
        if (response.success) {
          setAttendanceStatus((prevState) => ({
            ...prevState,
            checkedIn: true,
            checkInTime: date.getTime(),
          }));
        } else {
          alert(`${response.message} Failed to check in.`);
        }
      } else {
        alert('You have already checked in. You can only check in once.');
      }
    } catch (error) {
      console.error('Error checking in:', error);
      alert('An error occurred while checking in.');
    }
  };

  const handleCheckOut = async () => {
    try {
      if (attendanceStatus.checkedIn) {
        const date = new Date();
        const response = await AttendanceFormService.checkOut(date);
        if (response.success) {
          setAttendanceStatus((prevState) => ({
            ...prevState,
            checkedIn: false,
            checkOutTime: date.getTime(),
          }));
        } else {
          alert(`${response.message} Failed to check out.`);
        }
      } else {
        alert('You have not checked in yet. You can only check out after checking in.');
      }
    } catch (error) {
      console.error('Error checking out:', error);
      alert('An error occurred while checking out.');
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance Tracker</h1>
      {attendanceStatus.checkedIn ? (
        <div>
          <p className="mb-4">Checked in at: {new Date(attendanceStatus.checkInTime).toLocaleString()}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckIn}
        >
          Check In
        </button>
      )}
      {attendanceStatus.checkOutTime && (
        <div className="mt-4">
          <p className="mb-2">Checked out at: {new Date(attendanceStatus.checkOutTime).toLocaleString()}</p>
          <p className="mb-2">Total time attended: {formatTime(attendanceStatus.totalTimeAttended)}</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceForm;
