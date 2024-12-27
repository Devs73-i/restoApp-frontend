const backendURL = import.meta.env.VITE_API_ELJAMUNI;

interface RecipeRequest {
  recipeID: number;
  foodID: number;
  ingredientID: number;
}

export const getAllrecipe = async () => {
  try {
    const response = await fetch(`${backendURL}/recipe`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/recipe/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecipeByID = async (id: number | string) => {
  try {
    const response = await fetch(`${backendURL}/recipe/${id}`, {
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

export const createRecipe = async (newRecipe: RecipeRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
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

export const updateRecipe = async (id: number | string, updatedRecipe: RecipeRequest): Promise<Response> => {
  try {
    const response = await fetch(`${backendURL}/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
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
