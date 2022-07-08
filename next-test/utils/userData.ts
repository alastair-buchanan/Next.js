import {faker} from "@faker-js/faker";
import {User} from "../components/UserTable";

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