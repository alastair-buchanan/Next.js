import type {NextPage} from 'next'
import Image from 'next/image'
import {dehydrate, QueryClient, useQuery } from 'react-query'
import Link from 'next/link';

type User = {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    dateOfBirth: string,
    picture: string,
}

type Data = {
    users : User[]
}

const fetchAllUsers = async () => await (await fetch("http://localhost:3000/api/users")).json();

const Home: NextPage = () => {
    const {data, error, status} = useQuery<Data>('users', fetchAllUsers);

    if (status == "loading") return <div>loading</div>

    if (!data) return <div>No Data!</div>

    return (
        <>
            {data?.users.map(user => (
                <>
                    <Link href={{ pathname: '/user', query: { user: JSON.stringify(user)}}}>
                        <h2>{user.firstName}</h2>
                    </Link>
                    <Image src={user.picture} alt="user-image" width={500} height={500}/>
                </>

            ))}

        </>
    )
}

export default Home

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery<Data>('users', fetchAllUsers)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}