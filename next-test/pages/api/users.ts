import type { NextApiRequest, NextApiResponse } from 'next'
import {faker} from "@faker-js/faker";

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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({users: generateUserData(20)})
}

const generateUserData = (number: number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.number(),
            dateOfBirth: faker.date.birthdate().toDateString(),
            picture: faker.image.avatar(),
        });
        number--;
    }
    return persons;
};