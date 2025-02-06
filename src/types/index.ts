

export interface IProduct {
    id: number,
    title: string,
    stock: number,
    images: string[],
}
export interface IProductQuery {
    filter?: string,
    order?: "asc" | "desc",
    page?: number,
    limit?: number
}
