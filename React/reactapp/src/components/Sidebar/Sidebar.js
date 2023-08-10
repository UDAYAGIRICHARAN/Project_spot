import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaTasks,
  FaUser,
  FaCommentAlt,
  FaSignOutAlt,
  FaThList,
} from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaThList />,
    },
    {
      path: "/mytasks",
      name: "MyTasks",
      icon: <FaTasks />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <IoIcons.IoIosPaper />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUser />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <FaCommentAlt />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar">
        <div className="top_section">
          <h2 className="Dashboard">
            <b>My Dashboard</b>
          </h2>
          </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon pt-1">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
