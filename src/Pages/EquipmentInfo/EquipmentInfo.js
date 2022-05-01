import React from 'react';
import { Table } from 'react-bootstrap';

const EquipmentInfo = ({ equipment }) => {
    const { name, price, description, quantity, sold } = equipment;
    return (
        <div className='col-lg-12'>

            <Table striped bordered hover variant="dark">

                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{price}</td>
                        {/* <td>{description}</td> */}
                        <td>{quantity}</td>
                        <td>{sold}</td>
                        <td>x</td>
                    </tr>

                </tbody>
            </Table>

        </div>
    );
};

export default EquipmentInfo;