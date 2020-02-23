import { address } from './address';

export class User {
    id: number;
    name: string;
    email: string;
    address: address;
    constructor()
    {
        this.address = new address;
    }
}