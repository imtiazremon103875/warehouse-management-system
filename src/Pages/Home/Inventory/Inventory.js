import React, { useEffect, useState } from 'react';
import CardBox from '../CardBox/CardBox';



const Inventory = () => {

    const [equipments, setEquipment] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/equipment')
            .then(response => response.json())
            .then(data => setEquipment(data))
    }, [])
    return (
        <div className='text-center my-3'>
            <h2>inventory items</h2>

            <div className='row'>
                {
                    equipments.map(equipment => <CardBox key={equipment._id} equipment={equipment}></CardBox>)
                }
            </div>
        </div>
    );
};

export default Inventory;