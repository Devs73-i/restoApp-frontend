const backendURL = import.meta.env.VITE_API_ELJAMUNI;

interface OrderRequest {
  tableID: number;
  foodID: number;
}

export const getAllOrders = async () => {
  try {
    const response = await fetch(`${backendURL}/orders`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/orders/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete order with ID: ${id}`);
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (newOrder: OrderRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    return response;
  } catch (error) {
    console.log(error);

    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

export const updateOrder = async (id: number | string, updatedOrder: OrderRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    });

    return response;
  } catch (error) {
    console.log(error);

    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
