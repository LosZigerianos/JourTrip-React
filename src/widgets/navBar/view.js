import React from 'react';
import Logo from '../../widgets/SVGLogo';
import { Navbar, FormControl, Form } from 'react-bootstrap';
import { FaUser, FaSearchLocation } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './style.css';

const ICON_SIZE = '1.8em';

const NavBar = props => (
    <Navbar
        bg="white"
        variant="white"
        className="fixed-top mb-5 border-bottom d-flex justify-content-around"
    >
        <Navbar.Brand href="#home" className="">
            <Logo alt="JourTrip Logo" width="200" height="30" />
        </Navbar.Brand>
        <Form inline className="d-none d-lg-block">
            <FormControl type="text" placeholder="Search Friends..." className="mr-sm-2" />
        </Form>
        <IconContext.Provider value={{ className: 'color-theme', size: ICON_SIZE }}>
            <div>
                <span className="pr-md-3 p-xs-0">
                    <FaSearchLocation />
                </span>
                <span
                    onClick={() =>
                        confirmAlert({
                            title: 'Logout',
                            message: 'Are you sure to do this.',
                            buttons: [
                                {
                                    label: 'Yes',
                                    onClick: () => props.logout(),
                                },
                                {
                                    label: 'No',
                                    onClick: () => {},
                                },
                            ],
                        })
                    }
                >
                    <FaUser />
                </span>
            </div>
        </IconContext.Provider>
    </Navbar>
);

export default NavBar;
