import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Image/banner/pic1.jpg'
import pic2 from '../../../Image/banner/pic2.jpg'
import pic3 from '../../../Image/banner/pic3.webp'

const Banner = () => {
    return (
        <div>
            <h1 className='text-center my-3'>Anik Gym warehouse management website</h1>

            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "80vh" }}
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Anik munna Gym...</h3>
                        <p>Welcome to Anik munna fitness..this one of the best fitness center in chittagong</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "80vh" }}
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Anik munna Gym...</h3>
                        <p>Welcome to Anik munna fitness..this one of the best fitness center in chittagong.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "80vh" }}
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Anik munna Gym...</h3>
                        <p>Welcome to Anik munna fitness..this one of the best fitness center in chittagong</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;