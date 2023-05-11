import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>SNEAKERSTORE</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <Button variant={"outline-warning"} href={ADMIN_ROUTE}>Админ панель</Button>
                        {/*<Button variant={"outline-light"} style={{marginLeft:"10px"}}>Выйти</Button>*/}
                    </Nav>
                    :
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} href={LOGIN_ROUTE}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;