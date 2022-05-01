import React from 'react';
import { Table } from 'react-bootstrap';
import useEquipment from '../../Hook/UseEuipment';
import EquipmentInfo from '../EquipmentInfo/EquipmentInfo';

const ManageInventory = () => {
    const [equipments] = useEquipment()
    return (
        <div>
            <h2 className='text-center'>this all the equipment stored</h2>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>price</th>
                        {/* <th>description</th> */}
                        <th>quantity</th>
                        <th>sold</th>
                        <th>delete</th>
                    </tr>
                </thead>
            </Table>
            <div className='row'>
                {
                    equipments.map(equipment => <EquipmentInfo key={equipment._id} equipment={equipment}></EquipmentInfo>)
                }</div>
        </div>
    );
};

export default ManageInventory;