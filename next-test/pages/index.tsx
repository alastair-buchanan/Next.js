import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {User, UserTable} from "../components/UserTable";
import {NextPageWithLayout} from "./_app";
import Layout from "../components/Layout";
import {ReactElement} from "react";
import {faker} from "@faker-js/faker";

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

const generateUserData = (number: number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address: faker.address.streetAddress(),
            phone: faker.phone.number(),
            dateOfBirth: faker.date.birthdate().toDateString(),
            picture: faker.image.avatar(),
        });
        number--;
    }
    return persons;
};

export const userData: User[] = generateUserData(20);