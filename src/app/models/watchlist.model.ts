import { Company } from './company.model';

export interface Watchlist{
    id: number
    name: string
    companies?: Company[]
}