import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useEquipment from '../../../Hook/UseEuipment';
import CardBox from '../CardBox/CardBox';



const Inventory = () => {

    const [equipments, setEquipment] = useEquipment([])

    const threeItems = equipments.slice(0, 3)


    return (
        <div className='text-center my-3'>
            <h2>inventory items</h2>

            <div className='row'>
                {
                    threeItems.map(equipment => <CardBox key={equipment._id} equipment={equipment}></CardBox>)
                }
            </div>
            <Button as={Link} to='/manageInventory' variant='dark w-50 d-block mx-auto my-3'>Manage Inventory</Button>
        </div>
    );
};

export default Inventory;