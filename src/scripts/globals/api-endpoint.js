const API_ENDPOINT = {
  CATEGORY: `https://www.themealdb.com/api/json/v1/1/categories.php`,
  FOOD: (id) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`,
  DETAIL: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
};

export default API_ENDPOINT;
