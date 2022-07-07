import type { NextApiRequest, NextApiResponse } from 'next'
import {faker} from "@faker-js/faker";
import {userData} from "../index";

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