import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createShoe, fetchBrands, fetchShoes, fetchTypes} from "../../http/shoeAPI";
import {observer} from "mobx-react-lite";

const CreateShoe = observer(({show, onHide}) => {
    const {shoe} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    // const [brand, setBrand] = useState(null)
    // const [type, setType] = useState(null)
    const [size, setSize] = useState(0)
    const [desc, setDesc] = useState('')
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => shoe.setTypes(data))
        fetchBrands().then(data => shoe.setBrands(data))
    }, [])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value}:i))
    }

    const addShoe = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', shoe.selectedBrand.id)
        formData.append('typeId', shoe.selectedType.id)
        formData.append('info', JSON.stringify(info))
        formData.append('desc', desc)
        formData.append('size', `${size}`)
        createShoe(formData).then(data => onHide())
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    return (

        <Modal
            show={show}
            onHide={onHide}
            size="lg"

            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новую обувь.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/*<Form.Control placeholder={"Введите название обуви"}/>*/}
                    <Dropdown className="mt-1">
                        <Dropdown.Toggle>{shoe.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {shoe.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => shoe.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-4">
                        <Dropdown.Toggle>{shoe.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {shoe.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => shoe.setSelectedBrand(brand)}
                                    key={brand.id}
                                >{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-3'
                                  onChange={e => setName(e.target.value)}
                                  value={name}
                                  placeholder="Введите название пары"
                    />
                    <Form.Control className='mt-3'
                                  onChange={e => setPrice(Number(e.target.value))}
                                  value={price}
                                  placeholder="Введите стоимость пары"
                                  type='number'
                    />
                    <Form.Control className='mt-3'
                                  onChange={e => setSize(Number(e.target.value))}
                                  value={size}
                                  placeholder='Введите размер пары'
                                  type='number'
                    />
                    <Form.Control className='mt-3'
                                  onChange={e => setDesc(e.target.value)}
                                  value={desc}
                                  placeholder='Описание'
                    />
                    <Form.Control className='mt-3'
                                  type='file'
                                  onChange={selectFile}
                    />

                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                        className="mt-3"
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-3" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title} onChange={(e)=>changeInfo('title',e.target.value,i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description} onChange={(e)=>changeInfo('description',e.target.value,i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={"outline-danger"}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addShoe}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateShoe;