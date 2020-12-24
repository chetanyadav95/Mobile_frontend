import { Stock } from './stock.model';

export interface Watchlist{
    _id: string
    userId: string
    name: string
    stockIds: Stock[]
}