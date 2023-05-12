import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>SNEAKERSTORE</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <Button variant={"outline-warning"} href={ADMIN_ROUTE} className="me-2">Админ панель</Button>
                        <Button variant={"outline-success"} href={BASKET_ROUTE} className="me-2">Корзина</Button>
                        <Button variant={"outline-danger"} onClick={() => logOut()}>Выйти</Button>
                        {/*<Button variant={"outline-light"} style={{marginLeft:"10px"}}>Выйти</Button>*/}
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <Button
                            href={REGISTRATION_ROUTE}
                            variant={"outline-light"}
                            onClick={() => history(LOGIN_ROUTE)}
                        >
                            Войти</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavBar;