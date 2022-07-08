import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {dehydrate, QueryClient, useQuery} from "react-query";
import Container from "@mui/material/Container";
import {Toolbar, Typography} from "@mui/material";
import {useRouter} from "next/router";

export type User = {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    phone: string,
    dateOfBirth: string,
    picture: string,
}

export type Data = {
    users: User[]
}

const fetchAllUsers = async () => await (await fetch("http://localhost:3000/api/users")).json();

export const UserTable = () => {
    const {data, error, status} = useQuery<Data>('users', fetchAllUsers);
    const router = useRouter();

    function handleClick(user: User) {
        router.push(
            {
                pathname: '/profile',
                query: {
                    id: user.id
                }
            },
            '/profile',
        )
    }

    if (status == "loading") return <div>loading</div>

    if (!data) return <div>No Data!</div>

    if (error) return <div>Error returning user information</div>

    return (
        <Container id="table-container">
            <Toolbar>
                <Typography id="table-title" sx={{flex: '1 1 100%'}} variant="h6" component="div">
                    Users
                </Typography>
            </Toolbar>
            <TableContainer sx={{flexGrow: 1, maxHeight: window.innerHeight * .6}} component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="simple-table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600}}>Name</TableCell>
                            <TableCell sx={{fontWeight: 600}} align="right">Address</TableCell>
                            <TableCell sx={{fontWeight: 600}} align="right">Phone number</TableCell>
                            <TableCell sx={{fontWeight: 600}} align="right">Date of birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.users.map((user) => (
                            <TableRow key={user.id} onClick={() => handleClick(user)} sx={{
                                ":hover": {backgroundColor: "#EEE"},
                                '&:last-child td, &:last-child th': {border: 0}
                            }}>
                                <TableCell sx={{flexGrow: 1}} component="th"
                                           scope="row">{user.firstName + " " + user.lastName}</TableCell>
                                <TableCell sx={{flexGrow: 1}} align="right">{user.address}</TableCell>
                                <TableCell sx={{flexGrow: 1}} align="right">{user.phone}</TableCell>
                                <TableCell sx={{flexGrow: 1}} align="right">{user.dateOfBirth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<Data>('users', fetchAllUsers)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}