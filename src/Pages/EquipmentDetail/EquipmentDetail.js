import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({})
    const [quantityData, setQuantityData] = useState("")
    const { name, price, quantity, img, description, supplierName, sold } = detail;

    const [info, setInfo] = useState(quantity)

    useEffect(() => {
        if (Object.keys(detail).length !== 0) {
            setInfo(detail.quantity)
        }
    }, [detail])


    useEffect(() => {


        const getDetail = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/equipment/${id}`,
                )
                setDetail(res?.data)
                setQuantityData(res?.data?.quantity)

            } catch (err) {
                console.log(err)
            }
        }
        getDetail()


    }, [id]);

    const handleDelivered = () => {
        let newQuantity = quantityData - 1;

        const updatedQuantity = { quantity: newQuantity }
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)


                setInfo(updatedQuantity.quantity)
                setQuantityData(newQuantity)
            })



    }

    const handleRestore = event => {
        event.preventDefault()
        const value = event.target.number.value;
        let newQuantity = parseInt(quantityData) + parseInt(value);

        const updatedQuantity = { quantity: newQuantity }
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data)
                setInfo(updatedQuantity.quantity)
                setQuantityData(newQuantity)

            })

        event.target.reset();

    }
    return (
        <div className='row'>
            <div className='col-lg-4 mx-auto mt-3'>
                <CardGroup>

                    <Card >
                        <Card.Img style={{ height: "400px", width: "270px" }} className="mx-auto" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                price: {price} taka.
                            </Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text>
                                Quantity: {info}
                            </Card.Text>
                            <Card.Text>
                                supplier Name:- {supplierName}
                            </Card.Text>
                            <Card.Text>
                                Sold:- {sold}
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={handleDelivered} variant='dark'>delivered</Button>
                    </Card>
                </CardGroup>


            </div >
            <form onSubmit={handleRestore} className='col-lg-6 pt-5'>

                <h3>Restock the item</h3>
                <input className='mt-3 w-25' name="number" type="number" />
                <br />
                <input className='mt-3 w-25' type="submit" value="Restock" />
                <br />
                <Button className='ms-5 mt-5' as={Link} to='/manageInventory' variant='dark w-50 d-block mx-auto my-3'>Manage Inventory</Button>
            </form>


        </div>
    );
};

export default EquipmentDetail;