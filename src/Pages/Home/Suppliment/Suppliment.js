import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic1 from '../../../Image/gym suppliment/body-supplement-250x250.jpg'
import './suppliment.css'

const Suppliment = () => {
    return (
        <div >
            <h2 className='text-dark text-center my-5'>Recommended storage</h2>
            <div className='d-flex justify-content-center align-items-center my-5 mass-container'>
                <img className='mass-img' src={pic1} alt="" />
                <div className='p-5 ms-5 bg-primary mass-text' >
                    <h3 className='bg-white p-3'>Mass Grainer important</h3>

                    <p className='p-3 bg-white'>
                        Mass Gainers contain a rich amount of carbohydrates. These carbohydrates supply you with the required energy that is very helpful for an intense workout. Mass Gainers contain high quality of Whey Protein, which is an amazing supplement for bodybuilding. Some Mass Gainers also come with dietary fat
                    </p>
                    <Button as={Link} to='/addItem' variant='dark w-100'> Stock suppliment</Button>
                </div>
            </div>
        </div>
    );
};

export default Suppliment;