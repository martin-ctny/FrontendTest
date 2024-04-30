import { useEffect, useState } from "react";
import { GetOrderService } from "../../domain/use-case/get-order-service";

export const GetOrdersViewModel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetOrders();
  }, []);

  const GetOrders = async () => {
    const response = await GetOrderService();
    setOrders(response);
    console.log(response);

    return orders;
  };

  return {
    GetOrders,
    orders,
  };
};
