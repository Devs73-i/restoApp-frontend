const backendURL = import.meta.env.VITE_API_ELJAMUNI;

interface TableRequest {
    meansOfPayment: string;
}

export const getAllTables = async () => {
  try {
    const response = await fetch(`${backendURL}/table`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTableByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/table/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTableByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/table/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete table with ID: ${id}`);
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createTable = async (newTable: TableRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/table`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTable),
    });

    return response;
  } catch (error) {
    console.log(error);

    return new Response(null, {
        status: 500,
        statusText: "Internal Server Error"
    })
  }
};

export const updateTable = async (id: number | string, updateTable: TableRequest): Promise<Response> => {
    try {
        const response = await fetch(`${backendURL}/table/${id}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateTable)
        });

        return response;
    } catch (error) {
        console.log(error);

        return new Response(null, {
            status: 500,
            statusText: "Internal Server Error"
        })
    }
}
