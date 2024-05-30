import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PayrollService } from '../services/PayrollService';

const Payroll = () => {
    const formik = useFormik({
        initialValues: {
            employeeId: '',
            type: 'Select Salary Type',
            amount: '',
            frequency: 'Select Payment Duration',
            paymentDate: '',
            bonuses: '',
            startDate: '',
            endDate: '',
            paymentStatus: 'Select Payment Status',
            paymentMethod: 'Select Payment Method',
            netPay: 0,
            // Add missing fields
            SalaryType: '',
            PaymentMethod: '',
            PaymentDuration: '',
        },
        validationSchema: Yup.object({
            employeeId: Yup.string().required('Employee ID is required'),
            type: Yup.string().notOneOf(['Select Salary Type'], 'Please select a salary type').required('Salary Type is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
            frequency: Yup.string().notOneOf(['Select Payment Duration'], 'Please select a payment duration').required('Payment Duration is required'),
            paymentDate: Yup.date().required('Payment Date is required'),
            startDate: Yup.date().required('Start Date is required'),
            endDate: Yup.date().required('End Date is required'),
            bonuses: Yup.number().positive('Bonuses must be positive'),
            paymentStatus: Yup.string().notOneOf(['Select Payment Status'], 'Please select a payment status').required('Payment Status is required'),
            paymentMethod: Yup.string().notOneOf(['Select Payment Method'], 'Please select a payment method').required('Payment Method is required'),
            netPay: Yup.number().required('Net Pay is required').positive('Net Pay must be positive'),
            // Add validation for missing fields
            SalaryType: Yup.string().required('Salary Type is required'),
            PaymentMethod: Yup.string().required('Payment Method is required'),
            PaymentDuration: Yup.string().required('Payment Duration is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log('Submitting payroll data:', values);
                await PayrollService.addPayroll(values);
                resetForm();
                // Handle successful payroll addition here, e.g., updating state or redirecting
            } catch (error) {
                console.error('Error adding payroll:', error.response ? error.response.data : error.message);
            }
        }
    });

    return (
        <div className="bg-gray-100">
            <div className="container max-w-screen-md mx-auto px-2 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-4">Payroll Management</h1>
                <form onSubmit={formik.handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Employee ID:</label>
                            <input 
                                type="text" 
                                name="employeeId" 
                                value={formik.values.employeeId} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.employeeId && formik.errors.employeeId ? (
                                <div className="text-red-500 text-sm">{formik.errors.employeeId}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Salary Type:</label>
                            <select 
                                name="type" 
                                value={formik.values.type} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            >
                                <option disabled>Select Salary Type</option>
                                <option value="salaried">Salaried</option>
                                <option value="contractual">Contractual</option>
                            </select>
                            {formik.touched.type && formik.errors.type ? (
                                <div className="text-red-500 text-sm">{formik.errors.type}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                            <input 
                                type="text" 
                                name="amount" 
                                value={formik.values.amount} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.amount && formik.errors.amount ? (
                                <div className="text-red-500 text-sm">{formik.errors.amount}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Duration:</label>
                            <select 
                                name="frequency" 
                                value={formik.values.frequency} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            >
                                <option disabled>Select Payment Duration</option>
                                <option value="monthly">Monthly</option>
                                <option value="bi-weekly">Bi-Weekly</option>
                                <option value="weekly">Weekly</option>
                            </select>
                            {formik.touched.frequency && formik.errors.frequency ? (
                                <div className="text-red-500 text-sm">{formik.errors.frequency}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Date:</label>
                            <input 
                                type="date" 
                                name="paymentDate" 
                                value={formik.values.paymentDate} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.paymentDate && formik.errors.paymentDate ? (
                                <div className="text-red-500 text-sm">{formik.errors.paymentDate}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Start Date:</label>
                            <input 
                                type="date" 
                                name="startDate" 
                                value={formik.values.startDate} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.startDate && formik.errors.startDate ? (
                                <div className="text-red-500 text-sm">{formik.errors.startDate}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">End Date:</label>
                            <input 
                                type="date" 
                                name="endDate" 
                                value={formik.values.endDate} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.endDate && formik.errors.endDate ? (
                                <div className="text-red-500 text-sm">{formik.errors.endDate}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Bonuses:</label>
                            <input 
                                type="text" 
                                name="bonuses" 
                                value={formik.values.bonuses} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.bonuses && formik.errors.bonuses ? (
                                <div className="text-red-500 text-sm">{formik.errors.bonuses}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Net Pay:</label>
                            <input 
                                type="text" 
                                name="netPay" 
                                value={formik.values.netPay} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            />
                            {formik.touched.netPay && formik.errors.netPay ? (
                                <div className="text-red-500 text-sm">{formik.errors.netPay}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Status:</label>
                            <select 
                                name="paymentStatus" 
                                value={formik.values.paymentStatus} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            >
                                <option disabled>Select Payment Status</option>
                                <option value="pending">Pending</option>
                                <option value="paid">Paid</option>
                            </select>
                            {formik.touched.paymentStatus && formik.errors.paymentStatus ? (
                                <div className="text-red-500 text-sm">{formik.errors.paymentStatus}</div>
                            ) : null}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method:</label>
                            <select 
                                name="paymentMethod" 
                                value={formik.values.paymentMethod} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="input-field mb-2 border border-gray-300 p-2 rounded"
                            >
                                <option disabled>Select Payment Method</option>
                                <option value="bank">Bank Transfer</option>
                                <option value="cash">Cash</option>
                                <option value="check">Check</option>
                            </select>
                            {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                                <div className="text-red-500 text-sm">{formik.errors.paymentMethod}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </form>
                <Link to="/dashboard" className="text-blue-500 hover:underline">Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default Payroll;
