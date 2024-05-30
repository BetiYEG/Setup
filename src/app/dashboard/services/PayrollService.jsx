import axios from 'axios';

export const PayrollService = {
    addPayroll: async (payrollData) => {
        try {
            const response = await axios.post('https://localhost:5001/api/PayRoll', payrollData);
            return response.data;
        } catch (error) {
            console.error('Error adding payroll:', error.response || error);
            throw error;
        }
    }
};