export interface OrderMin {
    id: string
    stockId: string
    orderCategory: string
    name: string
    price: number
    quantity: number
    stoploss?: number
    target?: number
    key?: number
}
