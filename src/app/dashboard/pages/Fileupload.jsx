import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/app/components/Input/input';
import axios from 'axios';

const FileUploadPage = () => {
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [uploadedData, setUploadedData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { employeeId } = useParams();

    useEffect(() => {
        if (!employeeId) {
            console.error('Employee ID is not provided.');
            navigate('/'); // Redirect to a relevant page if employeeId is missing
        }
    }, [employeeId, navigate]);

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const uploadFiles = async (data, userId) => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                throw new Error('No auth token found');
            }

            const url = `https://localhost:5001/api/EmployeeFile?userId=${userId}`;

            const response = await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            return response.data;
        } catch (error) {
            console.error('Error uploading files:', error);
            throw error;
        }
    };

    const formik = useFormik({
        initialValues: {
            resume: null,
            certificates: null,
            educationalCredential: null,
            profilePhoto: null,
        },
        validationSchema: Yup.object({
            resume: Yup.mixed()
                .required('Resume is required')
                .test('fileFormat', 'PDF only', (value) => value && value.type === 'application/pdf'),
            certificates: Yup.mixed().test('fileFormat', 'Document or PDF only', (value) =>
                !value || (value.type === 'application/pdf' || value.type.includes('document'))
            ),
            educationalCredential: Yup.mixed()
                .required('Educational credential is required')
                .test('fileFormat', 'PDF only', (value) => value && value.type === 'application/pdf'),
            profilePhoto: Yup.mixed()
                .required('Profile photo is required')
                .test('fileFormat', 'Image only', (value) => value && value.type.startsWith('image/')),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
            setError('');
            try {
                const data = {
                    resume: values.resume ? await toBase64(values.resume) : null,
                    certificates: values.certificates ? await toBase64(values.certificates) : null,
                    educationalCredential: values.educationalCredential ? await toBase64(values.educationalCredential) : null,
                    profilePhoto: values.profilePhoto ? await toBase64(values.profilePhoto) : null,
                };

                const response = await uploadFiles(data, employeeId);
                setUploadedData(response); // Save the uploaded data to state for display
                setSubmissionStatus('Submitted successfully');
                setIsLoading(false);
                navigate('/EmployeeDetail');
            } catch (error) {
                setSubmissionStatus('Submission failed');
                setError('Failed to upload files. Please try again.');
                setIsLoading(false);
                console.error('Error uploading files:', error);
            }
        },
    });

    const handleFileChange = (e) => {
        const { name } = e.target;
        formik.setFieldValue(name, e.target.files[0]);
    };

    return (
        <main className="bg-[#26313c] min-h-screen flex items-center justify-center p-10">
            <div className="bg-white max-w-md mx-auto p-4 shadow-md rounded-md">
                <h2 className="text-3xl font-semibold mb-6 text-center">File Upload</h2>
                <form className="grid grid-cols-1 gap-4" onSubmit={formik.handleSubmit}>
                    <div className="hover:bg-gray-100 p-2 rounded-md">
                        <Label htmlFor="resume">Upload Resume:</Label>
                        <Input
                            id="resume"
                            name="resume"
                            type="file"
                            onChange={handleFileChange}
                            className={formik.errors.resume && formik.touched.resume ? 'border-red-500' : ''}
                        />
                        {formik.errors.resume && formik.touched.resume && (
                            <div className="text-red-500 text-sm">{formik.errors.resume}</div>
                        )}
                    </div>
                    <div className="hover:bg-gray-100 p-2 rounded-md">
                        <Label htmlFor="certificates">Upload Certificates:</Label>
                        <Input
                            id="certificates"
                            name="certificates"
                            type="file"
                            onChange={handleFileChange}
                            className={formik.errors.certificates && formik.touched.certificates ? 'border-red-500' : ''}
                        />
                        {formik.errors.certificates && formik.touched.certificates && (
                            <div className="text-red-500 text-sm">{formik.errors.certificates}</div>
                        )}
                    </div>
                    <div className="hover:bg-gray-100 p-2 rounded-md">
                        <Label htmlFor="educationalCredential">Upload Educational Credential:</Label>
                        <Input
                            id="educationalCredential"
                            name="educationalCredential"
                            type="file"
                            onChange={handleFileChange}
                            className={formik.errors.educationalCredential && formik.touched.educationalCredential ? 'border-red-500' : ''}
                        />
                        {formik.errors.educationalCredential && formik.touched.educationalCredential && (
                            <div className="text-red-500 text-sm">{formik.errors.educationalCredential}</div>
                        )}
                    </div>
                    <div className="hover:bg-gray-100 p-2 rounded-md">
                        <Label htmlFor="profilePhoto">Upload Profile Photo:</Label>
                        <Input
                            id="profilePhoto"
                            name="profilePhoto"
                            accept="image/*"
                            type="file"
                            onChange={handleFileChange}
                            className={formik.errors.profilePhoto && formik.touched.profilePhoto ? 'border-red-500' : ''}
                        />
                        {formik.errors.profilePhoto && formik.touched.profilePhoto && (
                            <div className="text-red-500 text-sm">{formik.errors.profilePhoto}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 24c-3.313 0-6.254-1.344-8.485-3.515L0 20c2.784 2.784 6.523 4 10.34 4 1.812 0 3.56-.353 5.19-1.003l-2.356-2.357C12.556 
                                    21.785 12.356 22 12 22"
                                ></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                    {submissionStatus && (
                        <div className={`mt-4 text-center ${submissionStatus === 'Submitted successfully' ? 'text-green-500' : 'text-red-500'}`}>
                            {submissionStatus}
                        </div>
                    )}
                    {error && (
                        <div className="mt-4 text-center text-red-500">
                            {error}
                        </div>
                    )}
                </form>
                {uploadedData && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Uploaded Data:</h3>
                        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                            {JSON.stringify(uploadedData, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </main>
    );
};

export default FileUploadPage;