import React, { useState, useEffect } from 'react';
import AttendanceService from '../services/AttendanceService';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const data = await AttendanceService.getAttendanceRecords();
        setAttendanceRecords(data);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };
    fetchAttendanceRecords();
  }, []);
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Employee Name</th>
            <th className="py-2 px-4 text-left">Check-in Time</th>
            <th className="py-2 px-4 text-left">Check-out Time</th>
            <th className="py-2 px-4 text-left">Total Time Attended</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={record.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4">{record.employeeName}</td>
              <td className="py-2 px-4">{record.clockinTime}</td>
              <td className="py-2 px-4">{record.clockoutTime}</td>
              <td className="py-2 px-4">{formatTime(record.totalTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
