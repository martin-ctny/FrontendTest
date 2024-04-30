export type GetOrderDto = {
  id: number;
  customerName: string;
  createdAt: string;
  status: string;
  orderItems: {
    productId: number;
    quantity: number;
  }[];
};
