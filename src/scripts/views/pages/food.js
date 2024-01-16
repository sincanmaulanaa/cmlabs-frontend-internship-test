import DataSource from "../../data/data-source";
import UrlParser from "../../routes/url-parser";
import { createFoodTemplate } from "../templates/template-creator";

/* eslint-disable no-tabs */
const Food = {
  async render() {
    return `
	<div class="content">
		<h2 class="content__heading" id="content__heading"></h2>
		<div id="categories" class="categories">
		</div>
  	</div>
	`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const foods = await DataSource.foods(url.id);
    console.log("URL ID", url);

    const contentHeading = document.querySelector("#content__heading");
    contentHeading.innerHTML = url.id.toUpperCase();

    const foodsContainer = document.querySelector("#categories");
    foods.forEach((food) => {
      foodsContainer.innerHTML += createFoodTemplate(food);
    });
  },
};

export default Food;
