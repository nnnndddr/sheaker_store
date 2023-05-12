import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import {useParams} from "react-router";
import {fetchOneShoes} from "../http/shoeAPI";


const ShoePage = () => {
    const [shoe, setShoe] = useState({info:[]})
    const [brand, setBrand] = useState('')
    const {id} = useParams()

    useEffect(() => {
        fetchOneShoes(id).then(data => setShoe(data))
    },[])
    return (
        <Container style={{marginTop:"75px"}}>
            <Row>
                <Col md={3}>
                    <Image width={450} height={600} src={process.env.REACT_APP_API_URL + shoe.img}/>
                    <Card className="border-white">
                        <div className="d-flex justify-content-between" style={{width:"400px"}}>
                            <h3>{shoe.price}$</h3>
                            <h3>{shoe.size}US</h3>
                        </div>


                        <Button variant={"outline-dark"} style={{width:"400px"}}>В корзину</Button>
                    </Card>
                </Col>
                <Col md={3} style={{marginLeft:"125px"}}>
                    <Row>
                        <h2>{shoe.name}</h2>
                        <p>{shoe.desc}</p>
                    </Row>
                </Col>
                <Col md={3}>
                    <Card style={{marginLeft:"50px"}}>
                        <Row className="d-flex flex-column">
                            <h2 style={{background:'transparent',marginLeft:"45px"}}>О товаре:</h2>
                            {shoe.info.map((info) =>
                                <Row key={info.id} style={{background:'transparent', padding:10,marginLeft:"45px"}}>
                                    {info.title}:{info.description}
                                </Row>)}
                        </Row>
                    </Card>

                </Col>
            </Row>

        </Container>
    );
};

export default ShoePage;