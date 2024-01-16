/* eslint-disable no-unused-vars */
import API_ENDPOINT from "../globals/api-endpoint";

class DataSource {
  static async categories() {
    const response = await fetch(API_ENDPOINT.CATEGORY);
    const responseJson = await response.json();
    return responseJson.categories;
  }

  static async foods(category) {
    const response = await fetch(API_ENDPOINT.FOOD(category));
    const responseJson = await response.json();
    console.log(responseJson.meals);
    return responseJson.meals;
  }

  static async detailFood(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.meals[0]);
    return responseJson.meals[0];
  }
}

export default DataSource;
