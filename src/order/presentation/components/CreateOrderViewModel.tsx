import { useState } from "react";
import { CreateOderService } from "../../domain/use-case/create-order-service";
import { CreateOrderDto } from "../../domain/dto/create-order-dto";

export const CreateOrderViewModel = () => {
  const [order, setOrder] = useState({
    orderItems: [
      {
        productId: 1,
        quantity: 3,
      },
    ],
  } as CreateOrderDto);
  const createOrderCommandHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    await CreateOderService({
      customerName: order.customerName,
      orderItems: order.orderItems,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  return {
    createOrderCommandHandler,
    handleChange,
  };
};
