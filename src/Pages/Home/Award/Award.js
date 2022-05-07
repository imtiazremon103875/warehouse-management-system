import React from 'react';
import './Award.css';
import img from '../../../Image/award winner/shutterstock_1211814685-1500x1000.png'
import gold from '../../../Image/award winner/gold.jpg'
import sliver from '../../../Image/award winner/sliver.jpg'
import broze from '../../../Image/award winner/blooze.jpg'

const Award = () => {
    return (
        <div >
            <h2 className='text-center my-5'>Best Contributor  Award</h2>

            <div className='award-container w-100'>

                <div className='award-deatils '>
                    <div className='d-flex  align-items-center single-award'>
                        <img src={gold} alt="" />
                        <div> <h3>Gold winner</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, beatae.</p></div>
                    </div>
                    <div className='d-flex  align-items-center single-award'>
                        <img src={sliver} alt="" />
                        <div>         <h3>Sliver winner</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, beatae.</p></div>
                    </div>
                    <div className='d-flex  align-items-center single-award'>
                        <img src={broze} alt="" />
                        <div>   <h3>broze winner</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, beatae.</p></div>
                    </div>
                </div>
                <img className='award-img' src={img} alt="" />


            </div>
        </div>
    );
};

export default Award;