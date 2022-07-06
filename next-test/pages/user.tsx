import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function User() {
    const router = useRouter()
    console.log(router.query);

    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}