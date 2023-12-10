import { Typography } from "@mui/material"
import React from 'react';
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div style={{ width: '100vw', height: '15vh', background: `url("/banner.png")` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="flex items-center" style={{ width: '50%' }}>
                    <img src="/vite.svg" width={'150'} style={{ marginLeft: '10%' }} alt="Logo" />
                    <h2 className="text-5xl font-bold tracking-tight sm:text-5xl" style={{ color: 'purple' }}>Computational Thinking</h2>
                </div>
                <Social />
            </div>
        </div>
    );
};

const Social = () => {
    return (
        <div className="flex py-auto" style={{ marginRight: '5%' }}>
            <img src="/social-icons/facebook.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} onClick={() => {
                window.open("https://www.facebook.com/Abhi.s201", "_blank");
            }} alt="meta"></img>
            <img onClick={()=>{window.open("https://www.instagram.com/universecodecesare/","_blank")}} src="/social-icons/instagram.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} alt="instagram"></img>
            <img onClick={()=>{window.open("https://twitter.com/frontenddaily?lang=en","_blank")}} src="/social-icons/twitter.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} alt="twitter"></img>
            <img onClick={()=>{window.open("https://www.linkedin.com/in/abhishek-singh-7462215a/","_blank")}} src="/social-icons/linkedin.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} alt="linkedin"></img>
            <img onClick={()=>{window.open("https://www.youtube.com/@javascriptmastery","_blank")}} src="/social-icons/youtube.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} alt="youtube"></img>
            <img onClick={()=>{window.open("https://web.whatsapp.com/","_blank")}} src="/social-icons/whatsapp.png" style={{ width: 50, height: 50, marginRight: 10, cursor: 'pointer' }} alt="whatsapp"></img>
        </div>
    )
}
