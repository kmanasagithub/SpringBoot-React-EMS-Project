import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserCog,
  FaUsers,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaSearch,
  FaChartBar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Welcome to <span className="text-primary">EMS</span>
                </h1>
                <h2 className="hero-subtitle">Employee Management System</h2>
                <p className="hero-description">
                  Streamline your HR operations with our comprehensive employee
                  management solution. Manage employee records, track
                  information, and maintain your workforce data efficiently.
                </p>
                <div className="hero-buttons">
                  <Link
                    to="/employees"
                    className="btn btn-primary btn-lg me-3 mb-2"
                  >
                    <FaUsers className="me-2" />
                    View All Employees
                  </Link>
                  <Link
                    to="/add-employee"
                    className="btn btn-outline-success btn-lg mb-2"
                  >
                    <FaPlusCircle className="me-2" />
                    Add New Employee
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-card">
                  <div className="card-header">
                    <h5 className="mb-0">Employee Dashboard</h5>
                  </div>
                  <div className="card-body">
                    <div className="demo-stat">
                      <FaUsers className="stat-icon text-primary" />
                      <div>
                        <h6 className="mb-0">Total Employees</h6>
                        <small className="text-muted">Manage your team</small>
                      </div>
                    </div>
                    <div className="demo-stat">
                      <FaPlusCircle className="stat-icon text-success" />
                      <div>
                        <h6 className="mb-0">Quick Add</h6>
                        <small className="text-muted">
                          Onboard new members
                        </small>
                      </div>
                    </div>
                    <div className="demo-stat">
                      <FaEdit className="stat-icon text-warning" />
                      <div>
                        <h6 className="mb-0">Easy Updates</h6>
                        <small className="text-muted">
                          Modify employee data
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;