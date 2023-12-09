import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Paper, Typography, Modal, Box, Input } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState(null);

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
                <Paper className='mx-5 mt-5 px-10' elevation={3} style={{height:'73vh'}}>
                    <div className='flex flex-col items-center justify-center' style={{paddingTop:'15%'}}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>Welcome to Computational Thinking</Typography><br />
                        <Input onChange={(e) => { setName(e.target.value) }} value={name} placeholder='Enter your name here'></Input><br />
                        <Typography variant="h5"><a onClick={() => { setOpenModal(true) }}>Click here</a> to get started</Typography>
                        {openModal && <MyModal data={name} open={openModal} setOpen={setOpenModal} />}
                    </div>
                </Paper>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Paper className='mx-5 mt-5' elevation={3} style={{ padding: 20, height: '73vh' }}>
                    <center style={{ paddingTop: '10vh' }}>
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
            <div>
                <Paper className='mx-5 mt-5' elevation={3} style={{ padding: 20, height: '73vh' }}>
                    <Newsletter />
                </Paper>
            </div>
        </Slider>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 2
};

const MyModal = ({ data, open, setOpen }) => {
    const handleClose = () => { setOpen(false) }

    console.log({ data })
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={"Welcome to the Website"}
                aria-describedby={"developed Abhishek Singh"}
            >
                <Box sx={style}>
                    <Typography id={data} variant="h6" component="h2">
                        Welcome {data} to the Computational Thinking Website
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

const Newsletter = () => {
    return (
        <div className="bg-gray-900 sm:my-10 py-16 sm:py-32 lg:py-48 text-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="max-w-md">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-300 mb-6">
                            Stay up-to-date with our latest articles and receive exclusive content directly to your inbox.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div>
                        <form className="flex flex-col gap-4 max-w-md">
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-indigo-500 rounded-md text-white font-medium hover:bg-indigo-400 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-gray-400 mt-4">
                            We respect your privacy. Read our{' '}
                            <a href="#" className="text-indigo-500 underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

