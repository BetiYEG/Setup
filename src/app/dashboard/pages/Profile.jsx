import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idFile, setIdFile] = useState(null);
  const [tinCertificateFile, setTinCertificateFile] = useState(null);
  const [educationCredentialFiles, setEducationCredentialFiles] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleIdFileChange = (event) => {
    setIdFile(event.target.files[0]);
  };

  const handleTinCertificateFileChange = (event) => {
    setTinCertificateFile(event.target.files[0]);
  };

  const handleEducationCredentialFilesChange = (event) => {
    const files = Array.from(event.target.files);
    setEducationCredentialFiles(files);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or API call with the collected data
    // You can access the form data in these variables: name, contact, idFile, tinCertificateFile, educationCredentialFiles, profilePhoto

    // Reset form fields
    setName('');
    setContact('');
    setIdFile(null);
    setTinCertificateFile(null);
    setEducationCredentialFiles([]);
    setProfilePhoto(null);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block mb-1">
            Contact Details:
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={handleContactChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="idFile" className="block mb-1">
            ID File:
          </label>
          <input
            type="file"
            id="idFile"
            accept=".pdf,.jpg,.png"
            onChange={handleIdFileChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tinCertificateFile" className="block mb-1">
            TIN Certificate File:
          </label>
          <input
            type="file"
            id="tinCertificateFile"
            accept=".pdf,.jpg,.png"
            onChange={handleTinCertificateFileChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="educationCredentialFiles" className="block mb-1">
            Education Credentials:
          </label>
          <input
            type="file"
            id="educationCredentialFiles"
            accept=".pdf,.jpg,.png"
            multiple
            onChange={handleEducationCredentialFilesChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block mb-1">
            Profile Photo:
          </label>
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={handleProfilePhotoChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default Profile;