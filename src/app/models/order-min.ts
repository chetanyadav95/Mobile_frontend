export interface OrderMin {
    id: string
    stockId: string
    orderCategory: string
    name: string
    price: number
    quantity: number
    ltp?: number
    status?: string
    stoploss?: number
    target?: number
    key?: number
}
