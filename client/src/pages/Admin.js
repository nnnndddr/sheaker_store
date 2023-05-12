import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateShoe from "../components/modals/CreateShoe";
import TableAdmin from "../components/TableAdmin";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [shoeVisible, setShoeVisible] = useState(false)
    return (
        <Container className="d-flex flex-column mt-4">
            <TableAdmin/>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setShoeVisible(true)}>Добавить обувь</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateShoe show={shoeVisible} onHide={() => setShoeVisible(false)}/>

        </Container>
    );
};

export default Admin;