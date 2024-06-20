// customerService.js

import axios from 'axios';

const API_URL = 'http://localhost:5172/api/customer';

const saveCustomer = async (customerData) => {
    try {
        const response = await axios.post(API_URL, customerData);
        return response.data; // Assuming backend returns a success message
    } catch (error) {
        console.error('Error saving customer:', error);
        throw new Error('Failed to save customer. Please try again.');
    }
};

export { saveCustomer };
