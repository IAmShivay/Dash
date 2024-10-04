"use client";

import React, { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";
import {
  ChevronDown,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Mail,
  LogOut,
  CircleUser,
  Crown,
} from "lucide-react";
import styles from "../Styles/Sidebar.module.css";

// Plan data and menu items defined outside to avoid re-creation on every render
const userPlanData = {
  currentPlan: "Pro",
  usagePercent: 85,
  daysRemaining: 15,
};

const menuItems = [
  { icon: LayoutDashboard, text: "Dashboard" },
  {
    icon: Users,
    text: "Users",
    hasDropdown: true,
    menuKey: "users",
    dropdownItems: ["View Users", "Add User", "User Roles"],
  },
  { icon: Settings, text: "Settings" },
  {
    icon: FileText,
    text: "Reports",
    hasDropdown: true,
    menuKey: "reports",
    dropdownItems: ["Sales Report", "User Activity", "Analytics"],
  },
  { icon: Mail, text: "Messages" },
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    users: false,
    reports: false,
  });

  const toggleMenu = useCallback((menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  }, []);

  return (
    <div className={styles.sidebar}>
      {/* Company Logo */}
      <div className={styles.logo}>
        <img
          src="/api/placeholder/120/40"
          alt="Company Logo"
          className={styles.logoImage}
        />
      </div>

      {/* Navigation Menu */}
      <nav className={styles.navigation}>
        {menuItems.map((menuItem, index) => (
          <MemoizedMenuItem
            key={index}
            icon={menuItem.icon}
            text={menuItem.text}
            hasDropdown={menuItem.hasDropdown}
            dropdownItems={menuItem.dropdownItems}
            menuKey={menuItem.menuKey}
            isOpen={openMenus[menuItem.menuKey]}
            toggleMenu={toggleMenu}
          />
        ))}
      </nav>

      {/* User Section */}
      <UserSection userPlanData={userPlanData} />
    </div>
  );
};

// Memoized MenuItem to prevent unnecessary re-renders
const MemoizedMenuItem = memo(({ icon: Icon, text, hasDropdown, dropdownItems, menuKey, isOpen, toggleMenu }) => (
  <div className={styles.menuItem}>
    <button
      onClick={() => hasDropdown && toggleMenu(menuKey)}
      className={styles.menuButton}
    >
      <Icon className={styles.menuIcon} />
      <span className={styles.menuText}>{text}</span>
      {hasDropdown && (
        <ChevronDown
          className={`${styles.dropdownIcon} ${isOpen ? styles.dropdownIconOpen : ""}`}
        />
      )}
    </button>
    {hasDropdown && isOpen && (
      <div className={styles.dropdownMenu}>
        {dropdownItems.map((item, index) => (
          <button key={index} className={styles.dropdownItem}>
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
));

MemoizedMenuItem.displayName = "MemoizedMenuItem";

MemoizedMenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  hasDropdown: PropTypes.bool,
  dropdownItems: PropTypes.arrayOf(PropTypes.string),
  menuKey: PropTypes.string,
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

const UserSection = ({ userPlanData }) => (
  <div className={styles.userSection}>
    <PlanCard userPlanData={userPlanData} />
    <UserInfo />
    <LogoutButton />
  </div>
);

const PlanCard = ({ userPlanData }) => (
  <div className={styles.planCard}>
    <div className={styles.planHeader}>
      <div className={styles.planTitle}>
        <Crown className={styles.crownIcon} />
        <span>{userPlanData.currentPlan} Plan</span>
      </div>
      <button className={styles.upgradeButton}>Upgrade</button>
    </div>
    <div className={styles.usageSection}>
      <div className={styles.usageHeader}>
        <span>Storage Usage</span>
        <span>{userPlanData.usagePercent}%</span>
      </div>
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBar}
          style={{ width: `${userPlanData.usagePercent}%` }}
        ></div>
      </div>
      <p className={styles.daysRemaining}>
        {userPlanData.daysRemaining} days remaining
      </p>
    </div>
  </div>
);

PlanCard.propTypes = {
  userPlanData: PropTypes.shape({
    currentPlan: PropTypes.string,
    usagePercent: PropTypes.number,
    daysRemaining: PropTypes.number,
  }).isRequired,
};

const UserInfo = () => (
  <div className={styles.userInfo}>
    <CircleUser className={styles.userIcon} />
    <div className={styles.userDetails}>
      <p className={styles.userName}>John Doe</p>
      <p className={styles.userRole}>Admin</p>
    </div>
  </div>
);

const LogoutButton = () => (
  <button className={styles.logoutButton}>
    <LogOut className={styles.logoutIcon} />
    <span>Logout</span>
  </button>
);

export default Sidebar;
