import { CreateOrderViewModel } from "./CreateOrderViewModel";

const CreateOrder = () => {
  const { createOrderCommandHandler, handleChange } = CreateOrderViewModel();

  return (
    <main>
      <h1> Create order</h1>
      <form onSubmit={(e) => createOrderCommandHandler(e)}>
        <input
          type="text"
          id="customerName"
          name="customerName"
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Create Order" />
      </form>
    </main>
  );
};

export default CreateOrder;
