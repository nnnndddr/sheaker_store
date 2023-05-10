import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация': 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Пароль"
                    />
                </Form>
                <Row className="d-flex justify-content-between mt-1">
                    {isLogin ?
                        <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></div>
                        :
                        <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                    }
                    <Button className="mt-2">
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Row>

            </Card>

        </Container>
    );
};

export default Auth;