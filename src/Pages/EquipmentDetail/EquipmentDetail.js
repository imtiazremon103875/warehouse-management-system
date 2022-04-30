import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EquipmentDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({})
    const { name, _id, price, quantity, img, description, supplierName, sold } = detail;
    useEffect(() => {
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setDetail(data))
    }, [])

    const handleDelivered = () => {
        let newQuantity = quantity - 1;

        const updatedQuantity = { quantity: newQuantity }
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(response => response.json())
            .then(data => console.log("success", data))


    }

    const handleRestore = event => {
        event.preventDefault()
        const value = event.target.number.value;
        let newQuantity = parseInt(quantity) + parseInt(value);

        const updatedQuantity = { quantity: newQuantity }
        const url = `http://localhost:5000/equipment/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)

        })
            .then(response => response.json())
            .then(data => console.log("success", data))
        console.log(value)
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
                                Quantity: {quantity}
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
            </form>
        </div>
    );
};

export default EquipmentDetail;