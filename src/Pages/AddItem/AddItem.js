import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './AddItem.css'

const AddItem = () => {
    const handleAddItem = event => {
        event.preventDefault()
        const name = event.target.name.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const sold = event.target.sold.value
        const img = event.target.image.value
        const newEquipment = { name, price, quantity, sold, img }

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
    }
    return (
        <div>
            <h2 className='text-center mb-3'>please add item</h2>
            <form onSubmit={handleAddItem} className='form'>
                <input placeholder='equipment name' className='d-block' type="text" name='name' required />

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