import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/complexSearch",

  headers: { "x-api-key": "f59077f07dcf41128cfdaf29bfa042c9" },
  responseType: "application/json",
});




export const getFoodByName = async (name) => {

  try {
    const res = await instance.get(`?query=${name}`);
  
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
