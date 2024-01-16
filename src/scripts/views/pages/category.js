import DataSource from "../../data/data-source";
import { createCategoryTemplate } from "../templates/template-creator";

/* eslint-disable no-tabs */
const Category = {
  async render() {
    return `
	<div class="content">
		<h2 class="content__heading">See All The Delicious Foods</h2>
		<div id="categories" class="categories">
		</div>
  	</div>
	`;
  },

  async afterRender() {
    const categories = await DataSource.categories();
    const categoriesContainer = document.querySelector("#categories");
    categories.forEach((category) => {
      categoriesContainer.innerHTML += createCategoryTemplate(category);
    });
  },
};

export default Category;
