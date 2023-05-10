import React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";


const TypeBar = observer(() => {
    const {shoe} = useContext(Context)
    return (
        <ListGroup>
            {shoe.types.map(type =>
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={type.id === shoe.selectedType.id}
                    onClick={()=> shoe.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;

