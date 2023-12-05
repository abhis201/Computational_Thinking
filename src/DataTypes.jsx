import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography } from '@mui/material';

export const DataTypes = () => {
    return <div>
        <Carousel/>
    </div>
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
                <br/>
          <Typography variant="h4" fontWeight={'bold'}>Real World Analogy</Typography>
          <br/>
          <Typography variant='h5'>Variables are data containers that hold specific types of values</Typography>
          <br/><br/>
          <Typography variant='h5'>For Instance, water or a liquid is stored in a bottle, while a cartoom or a box can hold larger solid objects such as a compute. Similarly, different types of variables are used to hold different types of data</Typography>
          <img src='/datatypes.jpeg' width={500}></img>
          </center>
        </Paper>
      </div>
      <div>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5">Slide 2</Typography>
          <Typography>Content for Slide 2</Typography>
        </Paper>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};
