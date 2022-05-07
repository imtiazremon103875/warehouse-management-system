import { eventWrapper } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth)
    const handleAddItem = event => {

        event.preventDefault()

        const newEquipment = {
            email: user.email,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            sold: event.target.sold.value,
            img: event.target.image.value,
        }

        fetch('http://localhost:5000/equipment', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                alert("equipment added successful")
                event.target.reset();
            })

        axios.post('http://localhost:5000/addedItem', newEquipment)
            .then(res => {
                const { data } = res;

            })



    }
    return (
        <div>
            <h2 className='text-center mb-3'>please add item</h2>
            <form onSubmit={handleAddItem} className='form'>
                <input placeholder='equipment name' className='d-block' type="text" name='name' required />
                <input placeholder='email' className='d-block' type="email" value={user?.email} required />
                <input placeholder='price' type="number" name='price' required />
                <input placeholder='image' type="text" name='image' required />
                <input placeholder='quantity' type="number" name='quantity' required />
                <input placeholder='sold' type="text" name='sold' required />
                <input className='btn btn-dark' type="submit" value="add item" />

            </form>

        </div>
    );
};

export default AddItem;