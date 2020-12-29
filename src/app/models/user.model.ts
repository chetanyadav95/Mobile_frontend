import { Balance } from './balance.model';

export interface User {
    username: string
    imgUrl?: string
    email: string
    balance: Balance
}
