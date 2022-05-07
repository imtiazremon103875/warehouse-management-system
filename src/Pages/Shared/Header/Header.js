import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Home </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/blog">Blogs</Nav.Link>
                            <Nav.Link href="home#items">items</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ? <>  <Nav.Link as={Link} to="/manageInventory">Manage item</Nav.Link>  <Nav.Link as={Link} to="/myItem">My item</Nav.Link>  <Nav.Link as={Link} to="/addItem">Add item</Nav.Link> <Nav.Link onClick={handleSignout} as={Link} to="/login">Log Out</Nav.Link> </> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>

    );
};

export default Header;