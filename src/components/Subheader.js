import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hmm.css';
import sections from './sections';

const Content = ({ styles }) => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const contentStyle = {
        paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
        paddingRight: 20,
        paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
        paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
    };

    return (
        <Navbar fixed='top' className='navBar'>
            <Navbar.Collapse >
                <Nav>
                    {Object.keys(sections).map((key, index) => {
                        if (sections[key] !== null) {
                            return (
                                <NavDropdown title={key} onMouseEnter={handleOpen} onMouseLeave={handleClose} open={isOpen}>
                                    {Object.keys(sections[key]).map((k, index) => {
                                        return (
                                            <div>
                                                <b>{k}</b>
                                                {sections[key][k].map(item => {
                                                    return <NavDropdown.Item >{item}</NavDropdown.Item>
                                                })}
                                                <NavDropdown.Divider />
                                            </div>
                                        );
                                    })}
                                </NavDropdown>
                            );
                        } else {
                            return (
                                <Nav.Link>{key}</Nav.Link>
                            );
                        }
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Content;
