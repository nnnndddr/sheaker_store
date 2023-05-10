import React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ShoeItem from "./ShoeItem";

const ShoeList = observer(() => {
    const {shoe} = useContext(Context)
    return (
        <Row className="d-flex">
            {shoe.shoes.map(shoe =>
                <ShoeItem key={shoe.id} shoe={shoe}/>
            )}
        </Row>
    );
});

export default ShoeList;