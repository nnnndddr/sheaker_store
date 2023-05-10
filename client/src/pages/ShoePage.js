import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";

const ShoePage = () => {
    const shoe = {
        id: 1,
        name: 'Chuck Taylor 70 HI',
        price: 256,
        size: 5,
        img: 'https://6fc2cc26-685a-4c6d-87fa-cc155b3870b1.selcdn.net/S1ZKIccsi/670-image.jpg'
    }
    const description = [
        {id: 1, title: 'Год выпуска', description: '1990'},
        {id: 2, title: 'Гендер', description: 'Мужской'},
        {id: 3, title: 'Сезон', description: 'Всена/Лето'},
        {id: 4, title: 'Производитель', description: 'США'},
    ]
    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={400} height={320} src={shoe.img}/>
                    <Card className="border-white">
                        <div className="d-flex justify-content-between">
                            <h3>{shoe.price}$</h3>
                            <h3>{shoe.size}US</h3>
                        </div>


                        <Button>В корзину</Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>Converse {shoe.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda commodi cumque
                            cupiditate, delectus dolores dolorum eligendi fugiat in maxime minima nisi nulla, rem unde,
                            vero. Aliquam aspernatur beatae, corporis deleniti, distinctio ea ex fugiat illum libero
                            odit quo reiciendis reprehenderit repudiandae similique temporibus ut voluptas? Accusantium
                            atque natus nemo non nostrum officiis quasi quos sapiente voluptates? Ad animi cumque enim
                            error exercitationem expedita facere illo impedit incidunt iste magni minus, mollitia natus
                            neque nisi numquam odit omnis porro possimus provident quam rem saepe sapiente sed similique
                            suscipit tempore tenetur? Cupiditate, fuga, iste? Et illo modi placeat provident sapiente
                            vero!</p>
                    </Row>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>О товаре:</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                        {info.title}:{info.description}
                    </Row>)}
            </Row>
        </Container>
    );
};

export default ShoePage;