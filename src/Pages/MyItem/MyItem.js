import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [items, setItems] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/addedItem?email=${email}`
            try {
                const { data } = await axios.get(url);
                setItems(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getItems()
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("do you want to delete")


        if (proceed) {
            const url = `http://localhost:5000/addedItem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const rest = items.filter(item => item._id !== id)
                    setItems(rest)
                })
        }

    }
    return (
        <div>
            <h2>those are my items :{items.length}</h2>


            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th style={{ width: "20%" }}>Name and picture</th>
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
                    items.map(item => <Table striped bordered hover variant="dark">

                        <tbody>
                            <tr>
                                <td style={{ width: "20%" }}>{item.name} <img className='img' src={item.img} alt="" /></td>
                                <td style={{ width: "20%" }}>{item.price}</td>
                                {/* <td style={{ width: "30px" }}>{description}</td> */}
                                <td style={{ width: "20%" }}>{item.quantity}</td>
                                <td style={{ width: "20%" }}>{item.sold}</td>
                                <td onClick={() => handleDelete(item._id)} style={{ width: "20%" }}>

                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                                </td>
                            </tr>

                        </tbody>
                    </Table>)
                }
            </div>
        </div>
    );
};

export default MyItem;