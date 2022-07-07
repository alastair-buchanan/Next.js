import {AppBar, Button, SvgIcon, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";

type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({children}: LayoutProps) {
    return (
        <Box m={2} pt={3} sx={{flexGrow: 1}}>
            <Box sx={{paddingBottom: 5}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Image src={"/teemundologo.svg"} layout={'fill'}/>
                        <Link href={'/'}>
                            <Button color="inherit">Home</Button>
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