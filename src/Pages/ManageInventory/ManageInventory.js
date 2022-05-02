import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useEquipment from '../../Hook/UseEuipment';
import { Link } from 'react-router-dom';



const ManageInventory = () => {


    const [equipments, setEquipments] = useEquipment()
    const handleDelete = id => {
        const proceed = window.confirm("do you want to delete")


        if (proceed) {
            const url = `http://localhost:5000/equipment/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    const rest = equipments.filter(equipment => equipment._id !== id)
                    setEquipments(rest)
                })
        }

    }
    return (
        <div>
            <h2 className='text-center'>this all the equipment stored</h2>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th style={{ width: "20%" }}>Name</th>
                        <th style={{ width: "20%" }}>price</th>
                        {/* <th style={{ width: "30px" }}>description</th> */}
                        <th style={{ width: "20%" }}>quantity</th>
                        <th style={{ width: "20%" }}>sold</th>
                        <th style={{ width: "20%" }}>delete</th>
                    </tr>
                </thead>
            </Table>
            <div className='row'>
                {
                    equipments.map(equipment => <Table striped bordered hover variant="dark">

                        <tbody>
                            <tr>
                                <td style={{ width: "20%" }}>{equipment.name}</td>
                                <td style={{ width: "20%" }}>{equipment.price}</td>
                                {/* <td style={{ width: "30px" }}>{description}</td> */}
                                <td style={{ width: "20%" }}>{equipment.quantity}</td>
                                <td style={{ width: "20%" }}>{equipment.sold}</td>
                                <td onClick={() => handleDelete(equipment._id)} style={{ width: "20%" }}>

                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                                </td>
                            </tr>

                        </tbody>
                    </Table>)
                }
            </div>
            <Button as={Link} to="/addItem" variant='dark  w-25 d-block mx-auto'>Add new item</Button>

        </div>
    );
};

export default ManageInventory;