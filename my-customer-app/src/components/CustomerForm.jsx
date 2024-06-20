import React, { useState } from 'react';
import { saveCustomer } from './api';

const CustomerForm = () => {
    const [customerData, setCustomerData] = useState({
        firstName: '',
        lastName: '',
        accountType: '',
        variantOfAccount: '',
        age: 0,
        pwd: false,
        currentAddress: '',
        communicationAddress: '',
        email: '',
        phoneNumber: '',
        panNumber: '',
        aadharNumber: '',
        debitCard: false,
        inbActivation: false
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCustomerData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await saveCustomer(customerData);
            console.log('Customer saved:', response.data);
            setMessage('Customer saved successfully!');
            // Optionally reset form fields after successful submission
            setCustomerData({
                firstName: '',
                lastName: '',
                accountType: '',
                variantOfAccount: '',
                age: 0,
                pwd: false,
                currentAddress: '',
                communicationAddress: '',
                email: '',
                phoneNumber: '',
                panNumber: '',
                aadharNumber: '',
                debitCard: false,
                inbActivation: false
            });
        } catch (error) {
            console.error('Error saving customer:', error);
            setMessage('Failed to save customer. Please try again.');
        }
    };

    return (
        <div>
            <h2>Customer Form</h2>
            <form onSubmit={handleSubmit}>
            <label>
                    First Name:
                    <input type="text" name="firstName" value={customerData.firstName} onChange={handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={customerData.lastName} onChange={handleChange} />
                </label>
                <label>
                    Account Type:
                    <input type="text" name="accountType" value={customerData.accountType} onChange={handleChange} />
                </label>
                <label>
                    Variant of Account:
                    <input type="text" name="variantOfAccount" value={customerData.variantOfAccount} onChange={handleChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={customerData.age} onChange={handleChange} />
                </label>
                <label>
                    PWD :
                    <input type="checkbox" name="pwd" checked={customerData.pwd} onChange={handleChange} />
                </label>
                <label>
                Current Address:
                <textarea name="currentAddress" value={customerData.currentAddress} onChange={handleChange} required />
            </label>
            <label>
                Communication Address:
                <textarea name="communicationAddress" value={customerData.communicationAddress} onChange={handleChange} required />
            </label>
                <label>
                    Email:
                    <input type="email" name="email" value={customerData.email} onChange={handleChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={customerData.phoneNumber} onChange={handleChange} />
                </label>
                <label>
                    PAN Number:
                    <input type="text" name="panNumber" value={customerData.panNumber} onChange={handleChange} />
                </label>
                <label>
                    Aadhar Number:
                    <input type="text" name="aadharNumber" value={customerData.aadharNumber} onChange={handleChange} />
                </label>
                <label>
                    Debit Card:
                    <input type="checkbox" name="debitCard" checked={customerData.debitCard} onChange={handleChange} />
                </label>
                <label>
                    INB Activation:
                    <input type="checkbox" name="inbActivation" checked={customerData.inbActivation} onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CustomerForm;
