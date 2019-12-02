export class order {
    OrderPrice :number;
    OrderId: number;
    OrderDate: string;
    UserId: string;
    Products: [
        {
            ProductId: number;
            Quantity: number;
        },
        {
            ProductId: number;
            Quantity: number;
        },
        {
            ProductId: number;
            Quantity: number;
        }
    ]
    PaymentType: string;
}
