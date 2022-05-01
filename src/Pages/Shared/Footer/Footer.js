import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5 text-white bg-dark  p-5 '>
            <p>Copyright © {year} by Anik Fitness </p>
        </div>
    );
};

export default Footer;