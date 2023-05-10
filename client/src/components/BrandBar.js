import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {shoe} = useContext(Context)
    return (
        <ListGroup className="mt-4">
            {shoe.brands.map(brand =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={brand.id === shoe.selectedBrand.id}
                    onClick={()=> shoe.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandBar;