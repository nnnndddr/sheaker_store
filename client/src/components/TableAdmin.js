import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Table} from "react-bootstrap";
import {Context} from "../index";
import TabItem from "./TabItem";
import {fetchShoes} from "../http/shoeAPI";

const TableAdmin = observer(() => {

    const {shoe} = useContext(Context)

    useEffect(()=>{

        fetchShoes(null,null,1,10).then(data=>{
            shoe.setShoes(data.rows)

        })

    },[])
    console.log(shoe)
    return (
       <Container>
           <Table striped bordered hover>
               <thead>
               <tr>

                   <th>НАЗВАНИЕ</th>
                   <th>Статус</th>
               </tr>
               </thead>
               <tbody>
               {shoe.shoes.map(shoe => <TabItem key={shoe.id} shoe={shoe}></TabItem>)}



               </tbody>
           </Table>
       </Container>
    );
});

export default TableAdmin;