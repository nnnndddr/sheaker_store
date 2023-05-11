import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {SHOE_ROUTE} from "../utils/consts";

const ShoeItem = ({shoe}) => {
    const history = useNavigate()
    console.log(history)
    return (
        <Col md={4} onClick={() => history(SHOE_ROUTE+"/"+shoe.id)}>
            <Card className="border-white" style={{width:300, cursor:'pointer'}}>
                <Image width={300} height={200} src={process.env.REACT_APP_API_URL + shoe.img}/>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Nike</div>
                    <div>
                        <div>{shoe.size} US</div>
                    </div>
                </div>
                <div style={{color:"grey"}}>{shoe.name}</div>
                <div style={{color:"black"}}>{shoe.price}$</div>
            </Card>
        </Col>
    );
};

export default ShoeItem;