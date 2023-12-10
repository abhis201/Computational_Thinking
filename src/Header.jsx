import { Typography } from "@mui/material"
import React from 'react';
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div style={{ width: '100vw', height: '15vh', background: `url("/banner.png")` }}>
            <div style={{ display: 'flex'}}>
                <img src="/vite.svg" width={'150'} style={{marginLeft: '5%', }} alt="Logo" />
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ paddingTop: '2%', color: 'purple'}}>Computational Thinking</h2>
                <Social/>
            </div>
        </div>
    );
};

const Social = () => {
    return (
        <div className="flex" style={{marginLeft:'35%', marginTop:'36px'}}>
            <img src="/social-icons/facebook.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}} alt="meta"></img>
            <img src="/social-icons/instagram.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}}  alt="instagram"></img>
            <img src="/social-icons/twitter.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}} alt="twitter"></img>
            <img src="/social-icons/linkedin.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}}  alt="linkedin"></img>
            <img src="/social-icons/youtube.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}}  alt="youtube"></img>
            <img src="/social-icons/whatsapp.png" style={{width:50, height:50, marginRight:10, cursor:'pointer'}}  alt="whatsapp"></img>
        </div>
    )
}
