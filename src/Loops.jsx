import React from 'react';
import { Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Loops = () => {
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
          Loops
        </Typography>
        <Slider {...settings}>
          <div>
            <h3>Stats</h3>
          </div>
          <div>
            <h3>Pricing Section</h3>
          </div>
          <div>
            <h3>Features Section</h3>
          </div>
        </Slider>
      </center>
    </div>
  );
};
