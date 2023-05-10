import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ShoeList from "../components/ShoeList";



const Shop = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                     <TypeBar/>
                    <BrandBar/>
                </Col>
                <Col md={9}>
                    <ShoeList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;