import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const CardBox = ({ equipment }) => {

    const { name, price, quantity, img, description, supplierName } = equipment;
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
                    </Card.Body>
                    <Button variant='dark'>Stock Update</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CardBox;