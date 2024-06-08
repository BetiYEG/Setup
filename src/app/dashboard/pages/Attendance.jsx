import React, { useState, useEffect } from 'react';
import AttendanceService from '../services/AttendanceService';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const data = await AttendanceService.getAttendanceRecords();
        console.log(data); // Log data to check the fetched records

        const formattedData = data.map(record => {
          const [clockinHours, clockinMinutes, clockinSeconds] = record.clockinTime.split(':').map(Number);
          const clockinTime = new Date();
          clockinTime.setHours(clockinHours, clockinMinutes, clockinSeconds, 0);

          let totalTime = null;
          if (record.clockoutTime) {
            const [clockoutHours, clockoutMinutes, clockoutSeconds] = record.clockoutTime.split(':').map(Number);
            const clockoutTime = new Date();
            clockoutTime.setHours(clockoutHours, clockoutMinutes, clockoutSeconds, 0);

            totalTime = clockoutTime - clockinTime;
          }

          return { ...record, totalTime };
        });

        setAttendanceRecords(formattedData);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };
    fetchAttendanceRecords();
  }, []);

  const formatTime = (milliseconds) => {
    if (typeof milliseconds !== 'number' || isNaN(milliseconds) || milliseconds < 0) {
      return '00:00:00';
    }

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
              <td className="py-2 px-4">{record.clockoutTime || 'Still Clocked In'}</td>
              <td className="py-2 px-4">{record.totalTime !== null ? formatTime(record.totalTime) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
