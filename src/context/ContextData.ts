
import {createContext} from 'react';

interface User {
    name: string;
    country: string;
    city: string;
}

export const UserContext = createContext<User[]>([]);

export const users = [
    {
        name: "Bikash Shrestha",
        country: "Nepal",
        city: "Kathmandu"
    },
    {
        name: "Bikash Stha",
        country: "Nepal",
        city: "Chitwan"
    }
]