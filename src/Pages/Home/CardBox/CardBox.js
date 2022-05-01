import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardBox = ({ equipment }) => {
    const navigate = useNavigate()

    const { name, _id, price, quantity, img, description, supplierName, sold } = equipment;

    const gotoDetails = () => {
        navigate(`/inventory/${_id}`)

    }
    return (
        <div className='col-lg-4'>
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
                            sold:- {sold}
                        </Card.Text>

                    </Card.Body>
                    <Button onClick={gotoDetails} variant='dark'>Stock Update</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CardBox;