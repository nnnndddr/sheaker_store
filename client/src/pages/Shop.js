import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ShoeList from "../components/ShoeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchShoes, fetchTypes} from "../http/shoeAPI";


const Shop = observer(() => {
    const {shoe} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => shoe.setTypes(data))
        fetchBrands().then(data => shoe.setBrands(data))
        fetchShoes().then(data => shoe.setShoes(data.rows))
    }, [])

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
});

export default Shop;