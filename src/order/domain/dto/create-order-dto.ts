export type CreateOrderDto = {
  customerName: string;
  orderItems: {
    productId: number;
    quantity: number;
  }[];
};
