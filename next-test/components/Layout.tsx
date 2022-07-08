import {AppBar, Button, Toolbar} from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({children}: LayoutProps) {
    return (
        <Box m={2} pt={3} sx={{flexGrow: 1}}>
            <Box sx={{paddingBottom: 5}}>
                <AppBar id="app-bar" position="fixed">
                    <Toolbar id="header-toolbar">
                        <Image id="app-logo" src={"/teemundologo.svg"} layout={'fill'}/>
                        <Link href={'/'}>
                            <Button id="home-button" color="inherit">Home</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <main>{children}</main>
            </Box>
        </Box>
    )
}