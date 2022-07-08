import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {UserTable} from "../components/UserTable";
import {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import {ReactElement} from "react";

const Page: NextPageWithLayout = () => {
    return (<>
        <CssBaseline />
        <Container maxWidth="md">
            <UserTable />
        </Container>
    </>)
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page