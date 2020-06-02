import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { CardHeading } from 'react-bootstrap-icons';
import sections from './sections';
import Select from 'react-select';

const Sidebar = ({ styles }) => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(!isOpen);

    const sidebarStyleClosed = {
        height: "100vh",
        width: styles.sidebarWidth,
        position: "fixed",
        backgroundColor: "#333",
        paddingTop: 40
    };
    const sidebarStyleOpen = {
        height: "100vh",
        width: styles.sidebarWidth * 6,
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

    return (
        <div style={isOpen ? sidebarStyleOpen : sidebarStyleClosed}>
            <Button style={{ width: styles.sidebarWidth }} onClick={() => handleOpen()}><CardHeading style={iconStyle} color='white' /> </Button>
            {isOpen ?
                Object.keys(sections).map((key, index) => {
                    return (
                        Object.keys(sections[key]).map(k => {
                            return (
                                <Select options={sections[key][k]} />
                            );
                        })
                    );
                }) :
                ""}

        </div>
    );
};

export default Sidebar;