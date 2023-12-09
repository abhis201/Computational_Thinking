import React from 'react';
import { Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Operators = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ marginTop: '20%' }}>
      <center>
        <Typography variant="h5" color="background">
          Operators
        </Typography>
        <Slider {...settings}>
          <div>
            <h3>Cards</h3>
          </div>
          <div>
            <h3>CTA section</h3>
          </div>
          <div>
            <h3>Description List</h3>
          </div>
        </Slider>
      </center>
    </div>
  );
};
