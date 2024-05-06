import React, { useEffect, useState } from 'react';
import { fetchSubmittedProfiles } from '../services/SubmittedProfileService';

const SubmittedProfile = () => {
  const [submittedProfiles, setSubmittedProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const profiles = await fetchSubmittedProfiles();
        setSubmittedProfiles(profiles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Submitted Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Education Credentials</th>
            <th>Profile Photo</th>
          </tr>
        </thead>
        <tbody>
          {submittedProfiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.firstName}</td>
              <td>{profile.lastName}</td>
              <td>{profile.employeeId}</td>
              <td>{profile.gender}</td>
              <td>{profile.employeeDOB}</td>
              <td>{profile.employeeAddress}</td>
              <td>{profile.educationCredentialFiles.join(', ')}</td>
              <td>{profile.profilePhoto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedProfile;
