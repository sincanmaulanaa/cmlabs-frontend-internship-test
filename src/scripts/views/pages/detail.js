/* eslint-disable no-tabs */
import DataSource from "../../data/data-source";
import UrlParser from "../../routes/url-parser";
import { createFoodDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
		<div id="food" class="food"></div>
	`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const food = await DataSource.detailFood(url.id);
    const foodContainer = document.querySelector("#food");

    foodContainer.innerHTML = createFoodDetailTemplate(food);
  },
};

export default Detail;
