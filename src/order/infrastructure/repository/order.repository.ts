import { CreateOrderDto } from "../../domain/dto/create-order-dto";

export const OrderRepository = () => {
  const fetchCreateOrder = async (createOrderDto: CreateOrderDto) => {
    await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createOrderDto),
    });
  };

  return {
    fetchCreateOrder,
  };
};
