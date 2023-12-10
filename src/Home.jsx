import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Paper, Typography, Modal, Box, Input } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Home = () => {

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
                <Paper elevation={3} style={{ height: '75vh' }}>
                    <HeroSection/>
                </Paper>
            </div>
            <div>
                <Paper style={{ height: '75vh' }}>
                        <div className='px-10' style={{paddingTop:'7%', display: 'flex', justifyContent:'space-between'}}>
                            <div>
                                <Button href="/conditionals"><img src='/conditionals.jpg' width={300}></img></Button>
                                <p style={{textAlign:'center', fontWeight:'bold'}}>1. Conditionals</p>
                            </div>
                            <div><Button href="/datatypes"><img src='/datatypes1.jpg' width={300}></img></Button>
                                <p style={{textAlign:'center', fontWeight:'bold'}}>2. Data Types</p>
                            </div>
                            <div>
                                <Button href='/loops'><img src='/loops.jpg' width={300}></img></Button>
                                <p style={{textAlign:'center', fontWeight:'bold'}}>3. Loops</p>
                            </div>
                            <div>
                                <Button href='/operators'><img src='/operators.jpg' width={300}></img></Button>
                                <p style={{textAlign:'center', fontWeight:'bold'}}>4. Operators</p>
                            </div>
                        </div>
                </Paper>
            </div>
            <div>
                <Paper elevation={3} style={{ padding: 20, height: '75vh' }}>
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

const MyModal = ({open, setOpen }) => {
    const handleClose = () => { setOpen(false) }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby={"Welcome to the Website"}
                aria-describedby={"developed Abhishek Singh"}
            >
                <Box sx={style}>
                    <Typography id='MODAL' variant="h6" component="h2" style={{ color: 'white' }}>
                        Welcome ABHISHEK to the Computational Thinking Website
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

function HeroSection() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-21 sm:py-36 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => { setOpenModal(true) }}
              >
                Get started
              </a>
              
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            {openModal && <MyModal open={openModal} setOpen={setOpenModal}/>}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
