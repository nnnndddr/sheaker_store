import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {useParams} from "react-router";
import {fetchOneShoes} from "../http/shoeAPI";


const ShoePage = () => {
    const [shoe, setShoe] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        fetchOneShoes(id).then(data => setShoe(data))
    },[])
    return (
        <Container style={{marginTop:"75px"}}>
            <Row>
                <Col md={4}>
                    <Image width={450} height={300} src={process.env.REACT_APP_API_URL + shoe.img}/>
                    <Card className="border-white">
                        <div className="d-flex justify-content-between">
                            <h3>{shoe.price}$</h3>
                            <h3>{shoe.size}US</h3>
                        </div>


                        <Button>В корзину</Button>
                    </Card>
                </Col>
                <Col md={4} style={{marginLeft:"75px"}}>
                    <Row>
                        <h2>{shoe.name}</h2>
                        <p>{shoe.desc}</p>
                    </Row>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>О товаре:</h2>
                {shoe.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.title}:{info.description}
                    </Row>)}
            </Row>
        </Container>
    );
};

export default ShoePage;