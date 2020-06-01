import React from "react";
import Button from 'react-bootstrap/Button';
import { CardHeading } from 'react-bootstrap-icons';
import sections from './sections';

const Sidebar = ({ styles }) => {
    const sidebarStyle = {
        height: "100vh",
        width: styles.sidebarWidth,
        position: "fixed",
        backgroundColor: "#333",
        paddingTop: 40
    };

    const menuItemStyle = {
        display: "flex",
        justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
        alignItems: "center",
        padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
        color: styles.white(0.9)
    };

    const iconStyle = {
        fontSize: 30,
        marginRight: styles.sidebarCollapsed ? 0 : 10
    };

    const logoStyle = {
        textAlign: "center",
        color: styles.white(),
        fontSize: 34,
        marginBottom: 60,
        fontWeight: "bold"
    };
    const handleOpenSidebar = () => {

    }

    return (
        <div style={sidebarStyle}>
            <Button style={{ width: styles.sidebarWidth }} onClick={() => handleOpenSidebar}><CardHeading style={iconStyle} color='white' /> </Button>

        </div>
    );
};

export default Sidebar;