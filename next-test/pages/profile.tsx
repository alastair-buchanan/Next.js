import {NextPageWithLayout} from "./_app";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import Layout from "../components/Layout";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {useQuery} from "react-query";
import {Data, User} from "../components/UserTable";

const Profile: NextPageWithLayout = () => {
    const router = useRouter();
    const query = router.query;
    const fetchUser = async () => await (await fetch(`http://localhost:3000/api/users/${query.id}`)).json();
    const {data, error, status} = useQuery<Data>('user', fetchUser);
    const user: User | undefined = data?.users[0];

    if (status == "loading") return <div>loading</div>

    if (error) return <div>Error returning User information</div>

    return (
        <Card id='profile-card' sx={{flexGrow: 1, maxHeight: 450, maxWidth: 700}}>
            {
                !user
                    ? <div>Error returning User information</div>
                    : <CardActionArea id='card-info'>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Image id="profile-image" layout='intrinsic' src={`${user.picture}`} width={150}
                                       height={150}/>
                            </Grid>
                            <Grid item>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Name: {user.firstName + " " + user.lastName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Address: {user.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone: {user.phone}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Date of Birth: {user.dateOfBirth}
                                    </Typography>

                                </CardContent>
                            </Grid>
                        </Grid>
                    </CardActionArea>
            }
        </Card>
    )
}

Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Profile