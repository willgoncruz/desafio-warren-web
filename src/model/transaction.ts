
export interface Transaction {
    id: string,
    to: string,
    from: string,
    date: string,
    title: string,
    amount: number,
    status: string, // TODO ENUM ?
    description: string,
}