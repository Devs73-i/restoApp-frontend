const backendURL = import.meta.env.VITE_API_ELJAMUNI;

// data structure for an ingredient
interface IngredientRequest {
  ingredientName: string;
  quantity: number;
}

// Obatain all engredients
export const getAllIngredients = async () => {
  try {
    const response = await fetch(`${backendURL}/ingredients`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
  }
};

// obtain all ingredients by it's ID
export const getIngredientByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/ingredients/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching ingredient with ID: ${id}`, error);
  }
};

// create a new ingredient
export const createIngredient = async (newIngredient: IngredientRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/ingredients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIngredient),
    });

    return response;
  } catch (error) {
    console.error("Error creating ingredient:", error);

    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

// update an existent ingredient by ID
export const updateIngredient = async (
  id: number | string,
  updatedIngredient: IngredientRequest
): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/ingredients/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedIngredient),
    });

    return response;
  } catch (error) {
    console.error(`Error updating ingredient with ID: ${id}`, error);

    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

// Eliminate an ingredient by ID
export const deleteIngredientByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/ingredients/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete ingredient with ID: ${id}`);
    }

    return response;
  } catch (error) {
    console.error(`Error deleting ingredient with ID: ${id}`, error);
  }
};