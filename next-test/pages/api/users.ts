import type { NextApiRequest, NextApiResponse } from 'next'
import {userData} from "../../utils/userData";


type User = {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    phone: string,
    dateOfBirth: string,
    picture: string,
}

type Data = {
    users : User[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({users: userData})
}