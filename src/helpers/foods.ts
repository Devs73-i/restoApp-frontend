const backendURL = import.meta.env.VITE_API_ELJAMUNI

interface foodRequest {
    food_name: string
    food_category: string
    price: number
    image: string
    available: boolean
}


export const getAllFoods = async () => {
    try{
        const response = await fetch(`${backendURL}/food`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}


export const getFoodByID = async (id: number | string) => {
    try{
        const response =await fetch(`${backendURL}/food/${id}`);
        const data = await response.json();

        return data;
    } catch (error){
        console.log(error)
    }
}


export const deleteFoodByID = async (id: number | string) => {
    try {
      const response = await fetch(`${backendURL}/food/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete food with ID: ${id}`);
      }
  
      return response;
    } catch (error) {
      console.log(error);
    }
}


export const createFood = async (newFood: foodRequest): Promise<Response> => {
    try {
      const response = await fetch(`${backendURL}/food`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
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


export const updateFood = async (id: number | string, updateFood: string): Promise<Response> => {
    try {
        const response = await fetch(`${backendURL}/food/${id}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateFood)
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