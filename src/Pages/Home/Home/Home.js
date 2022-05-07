import React from 'react';
import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Suppliment from '../Suppliment/Suppliment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Suppliment></Suppliment>
            <Award></Award>
        </div>
    );
};

export default Home;