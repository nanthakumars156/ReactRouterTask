import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navi.css';

const Navi = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? "active" : undefined)} 
          >
            All Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fullstack"
            className={({ isActive }) => (isActive ? "active" : undefined)} 
          >
            Full Stack Development
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/datascience"
            className={({ isActive }) => (isActive ? "active" : undefined)} 
          >
            Data Science
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cybersecurity"
            className={({ isActive }) => (isActive ? "active" : undefined)} 
          >
            Cyber Security
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={({ isActive }) => (isActive ? "active" : undefined)} 
          >
            Career
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
