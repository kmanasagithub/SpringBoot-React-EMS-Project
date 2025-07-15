import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import {
    FaUsers,
    FaPlusCircle,
    FaEdit,
    FaTrashAlt,
    FaSearch,
    FaUserTie,
    FaEnvelope,
    FaIdCard,
} from "react-icons/fa";
import './css/ListEmployee.css'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(err => {
            console.error(err);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            console.log(id);
            deleteEmployee(id)
                .then((response) => {
                    getAllEmployees();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    return (
        <div className="employee-list-container pt-5">
            {/* Header Section */}
            <div className="employee-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="header-content">
                                <div className="header-icon">
                                    <FaUsers />
                                </div>
                                <div>
                                    <h1 className="page-title">Employee Directory</h1>
                                    <p className="page-subtitle">
                                        Manage your team members and their information
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <button className="btn btn-add-employee" onClick={addNewEmployee}>
                                <FaPlusCircle className="me-2" />
                                Add New Employee
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container py-4">

                {/* Employee Table for Desktop */}
                <div className="d-none d-lg-block">
                    <div className="table-container">
                        <div className="table-responsive">
                            <table className="table employee-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <FaIdCard className="me-2" />
                                            Employee ID
                                        </th>
                                        <th>
                                            <FaUserTie className="me-2" />
                                            First Name
                                        </th>
                                        <th>
                                            <FaUserTie className="me-2" />
                                            Last Name
                                        </th>
                                        <th>
                                            <FaEnvelope className="me-2" />
                                            Email
                                        </th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>
                                                <span className="employee-id-badge">{employee.id}</span>
                                            </td>
                                            <td>
                                                <div className="employee-name-cell">
                                                    <div className="employee-avatar-small">
                                                        <FaUserTie />
                                                    </div>
                                                    {employee.firstName}
                                                </div>
                                            </td>
                                            <td>{employee.lastName}</td>
                                            <td>
                                                <a
                                                    href={`mailto:${employee.email}`}
                                                    className="email-link"
                                                >
                                                    {employee.email}
                                                </a>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button
                                                        className="btn btn-action btn-edit"
                                                        onClick={() => updateEmployee(employee.id)}
                                                        title="Edit Employee"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        className="btn btn-action btn-delete"
                                                        onClick={() => removeEmployee(employee.id)}
                                                        title="Delete Employee"
                                                    >
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ListEmployeeComponent