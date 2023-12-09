import { Typography } from "@mui/material"
import React from 'react';

export const Header = () => {
    return (
        <div style={{ width: '100vw', height: '15vh', background: `url("/banner.jpeg")` }}>
            <div style={{ display: 'flex' }}>
            <Typography variant="h3" style={{ marginLeft: '20%', paddingTop: '2%', color: 'white', fontWeight: 'bold' }}>Computational Thinking</Typography>
                <img src="/logo.png" width={'250'} style={{ marginLeft: 200 }} alt="Logo" />
            </div>
        </div>
    );
};
