import Category from "../views/pages/category";
import Detail from "../views/pages/detail";
import Food from "../views/pages/food";

const routes = {
  "/": Category, // default page
  "/category": Category,
  "/food/:id": Food,
  "/detail/:id": Detail,
};

export default routes;
