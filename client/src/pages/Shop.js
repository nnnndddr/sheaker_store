import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ShoeList from "../components/ShoeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchShoes, fetchTypes} from "../http/shoeAPI";
import Pages from "../components/Pages";


const Shop = observer(() => {
    const {shoe} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => shoe.setTypes(data))
        fetchBrands().then(data => shoe.setBrands(data))
        fetchShoes(null, null, 1, 3).then(data => {
            shoe.setShoes(data.rows)
            shoe.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchShoes(shoe.selectedType.id, shoe.selectedBrand.id, shoe.page, 3).then(data => {
            shoe.setShoes(data.rows)
            shoe.setTotalCount(data.count)
        })
    }, [shoe.page, shoe.selectedType, shoe.selectedBrand])

    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <TypeBar/>
                    <BrandBar/>
                </Col>
                <Col md={9}>
                    <ShoeList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;