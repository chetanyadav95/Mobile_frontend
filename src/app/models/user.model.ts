import { Balance } from './balance.model';

export interface User {
    id: string
    username: string
    imgUrl?: string
    email: string
    balance: Balance
}
