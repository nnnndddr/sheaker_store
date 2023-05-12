import React from 'react';
import {Button, Container} from "react-bootstrap";
import {login, registration} from "../http/userAPI";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {createShoe, deleteShoe} from "../http/shoeAPI";
import {useNavigate} from "react-router";

const TabItem = ({shoe}) => {
    const history = useNavigate()
    const click = (shoe) => {
        const name = shoe.name
        deleteShoe(shoe.id).then(r => alert(shoe.name + "was deleted"))
    }


    return (
        <tr>


            {/*<td>{shoe.id}</td>*/}
            <td>{shoe.name}</td>
            {/*<td>{shoe.size}</td>*/}
            {/*<td>{shoe.price}</td>*/}
            <td><Button variant="outline-danger" onClick={() => {

                 click(shoe);
                history(SHOP_ROUTE)


            }}>УДАЛИТЬ</Button></td>

        </tr>

    );
};

export default TabItem;