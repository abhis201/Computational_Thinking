import React from 'react';
import Slider from 'react-slick';
import { Button, Paper, Typography } from '@mui/material';

export const Home = () => {
    return (
        <Carousel />
    )
}

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <center>
                        <div>
                            <Typography variant="h4" style={{ fontWeight: 'bold' }}>Welcome to Computational Thinking</Typography><br /><br />
                            <Typography variant="h5"><a href="">Click Here</a> TO GET STARTED</Typography>
                        </div>
                    </center>
                </Paper>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '60vh' }}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <center>
                        <div >
                            <div><Button href="/datatypes"><img src='/datatypes1.jpg' width={100}></img></Button>
                                <Typography>1. Data Types</Typography>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div>
                                    <Button href="/conditionals"><img src='/conditionals.jpg' width={100}></img></Button>
                                    <Typography>2. Conditionals</Typography>
                                </div>
                                <div>
                                    <Button href='/loops'><img src='/loops.jpg' width={100}></img></Button>
                                    <Typography>3. Loops</Typography>
                                </div>
                            </div>
                            <div>
                                <Button href='/operators'><img src='/operators.jpg' width={100}></img></Button>
                                <Typography>4. Operators</Typography>
                            </div>
                        </div>
                    </center>
                </Paper>
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
};