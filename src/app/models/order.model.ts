export interface Order {
    _id: string
    userId: string
    stockId: string
    companyName: string
    created_date: string
    orderCategory: string
    type: string
    price: number
    volume: number
    status: string
    stoploss: number
    target: number
    ltp?: string
    isStopLoss?: boolean
    transactionOne: {
        price: number
        status: string
    }
    transactionTwo: {
        price: number
        status: string
        stoplossStatus: string
        targetStatus: string
    }
}
