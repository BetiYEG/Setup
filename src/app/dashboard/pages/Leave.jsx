import React, { useState, useEffect } from 'react';
import { fetchLeaveHistory, approveLeave, disapproveLeave } from '../services/LeaveService';

const Leave = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const data = await fetchLeaveHistory();
        setLeaveHistory(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching leave history:', error);
        setIsLoading(false);
      }
    };

    fetchLeaveData();
  }, []);

  const handleApprove = async (leaveId) => {
    try {
      await approveLeave(leaveId);
      const updatedLeaveHistory = await fetchLeaveHistory();
      setLeaveHistory(updatedLeaveHistory);
    } catch (error) {
      console.error('Error approving leave:', error);
    }
  };

  const handleDisapprove = async (leaveId) => {
    try {
      await disapproveLeave(leaveId);
      const updatedLeaveHistory = await fetchLeaveHistory();
      setLeaveHistory(updatedLeaveHistory);
    } catch (error) {
      console.error('Error disapproving leave:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Leave History</h2>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {leaveHistory.length === 0 ? (
              <p className="text-center">No leave history available.</p>
            ) : (
              <ul>
                {leaveHistory.map((leave, index) => (
                  <li key={index} className="mb-4">
                    <div>
                      <p><strong>Leave ID:</strong> {leave.leaveId}</p>
                      <p><strong>Leave Type:</strong> {leave.leaveType}</p>
                      <p><strong>Start Date:</strong> {leave.startDate}</p>
                      <p><strong>End Date:</strong> {leave.endDate}</p>
                      <p><strong>Employee ID:</strong> {leave.employeeId}</p>
                      <p><strong>Status:</strong> {leave.status}</p>
                      <p><strong>Employee Name:</strong> {leave.employee}</p>

                    </div>
                    <div className="flex justify-between">
                      <button onClick={() => handleApprove(leave.leaveId)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                        Approve
                      </button>
                      <button onClick={() => handleDisapprove(leave.leaveId)} className="bg-red-500 text-white px-3 py-1 rounded">
                        Disapprove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Leave;
