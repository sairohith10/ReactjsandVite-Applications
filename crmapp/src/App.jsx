// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // Make sure to create this CSS file for some basic styling

function App() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/crm/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('There was an error fetching the customers!', error));
    }, []);

    return (
        <div className="App">
            <h1>Customer Relationship Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Account Type</th>
                        <th>Variant of Account</th>
                        <th>Age</th>
                        <th>PWD</th>
                        <th>Current Address</th>
                        <th>Communication Address</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>PAN Number</th>
                        <th>Aadhar Number</th>
                        <th>Debit Card</th>
                        <th>INB Activation</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.accountType}</td>
                            <td>{customer.variantOfAccount}</td>
                            <td>{customer.age}</td>
                            <td>{customer.pwd ? 'Yes' : 'No'}</td>
                            <td>{customer.currentAddress}</td>
                            <td>{customer.communicationAddress}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.panNumber}</td>
                            <td>{customer.aadharNumber}</td>
                            <td>{customer.debitCard ? 'Yes' : 'No'}</td>
                            <td>{customer.inbActivation ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
