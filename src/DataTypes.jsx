import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const DataTypes = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

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
        <Paper elevation={3} style={{ padding: 20, height: '75vh' }}>
          <center>
            <br />
            <Typography variant="h4" fontWeight={'bold'}>
              Real World Analogy
            </Typography>
            <br /><hr /><br/>
            <Typography variant="h5">
              Variables are data containers that hold specific types of values
            </Typography>
            <br />
            <br />
            <Typography variant="h5">
              For Instance, water or a liquid is stored in a bottle, while a
              cartoon or a box can hold larger solid objects such as a computer.
              Similarly, different types of variables are used to hold different
              types of data
            </Typography>
            <img src='/datatypes.jpeg' alt="Datatypes" width={500} />
          </center>
        </Paper>
      </div>
      <div>
        <Paper elevation={3} style={{ padding: 20, height: '75vh', textAlign: 'center' }}>
          <br />
          <Typography variant="h4" fontWeight={'bold'}>
            Data Types in JavaScript
          </Typography>
          <br /><hr/><br/>
          <Typography variant="h5">
            JavaScript is a dynamically-typed language, which means that variables can
            hold values of any data type. Here are some common data types in
            JavaScript:
          </Typography>
          <br />
          <br />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Number: Represents numeric values (e.g., 42, 3.14)</li>
            <li>String: Represents text values (e.g., 'Hello, World!')</li>
            <li>Boolean: Represents true or false values</li>
            <li>Object: Represents a collection of key-value pairs</li>
            <li>Array: Represents an ordered list of values</li>
            <li>Null: Represents the absence of a value</li>
            <li>Undefined: Represents an uninitialized variable</li>
          </ul>
          <br />
          <br />
          <Typography variant="h5">
            JavaScript also has special values like NaN (Not-a-Number) and Infinity.
          </Typography>
        </Paper>
      </div>
      <div>
        <Paper elevation={3} style={{ padding: 20, height: '75vh' }}>
          <center>
            <br />
            <Typography variant="h4" fontWeight={'bold'}>
              Variables in Action
            </Typography>
            <br /><hr /><br/>
            <Typography variant="h5">
              Let's look at how variables work in a simple program. Consider the
              following JavaScript code snippet:
            </Typography>
            <pre>
              {`let age = 25;let name = 'John';console.log(name + ' is ' + age + ' years old.');`}
            </pre>
            <Typography variant="h5">
              This program uses variables to store the age and name of a person and
              then prints a message using those variables.
            </Typography><br /><br />
            <img src='/variables-in-action.png' alt="Variables in Action" width={600} />
          </center>
        </Paper>
      </div>

    </Slider>
  );
};