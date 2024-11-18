<script>
import { RecipeApiService } from '@/administrator/recipes/services/recipe-api.service';

export default {
    name: 'recipeView',
    data() {
        return {
            recipe: null,
        };
    },
    created() {
        const recipeId = this.$route.query.id;
        this.fetchRecipe(recipeId);
    },
    methods: {
        async fetchRecipe(id) {
            const apiRecipeService = new RecipeApiService();
            try {
                const response = await apiRecipeService.getRecipeById(id);
                console.log('Recipe response:', response);
                this.recipe = response.data;
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        }
    },
    computed: {
        totalCost() {
            return this.recipe.ingredients.reduce((total, ingredient) => {
                return total + ingredient.cost;
            }, 0);
        }
    }
};
</script>

<template>
    <pv-card v-if="recipe" class="recipe">
        <template #header></template>
        <template #title></template>
        <template #content>
            <div class="recipeDetails">
                <img :src="recipe.image" :alt="recipe.name" class="recipeImage" />
                <div class="contentStyle">
                    <ul class="ingredients-list">
                        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                            <strong>{{ ingredient.name }}</strong>: {{ ingredient.quantity }} - ${{ ingredient.cost.toFixed(2) }}
                        </li>
                    </ul>
                    <h3 class="total-cost">${{ totalCost.toFixed(2) }}</h3>
                </div>
            </div>
        </template>
    </pv-card>
</template>

<style scoped>
.recipe {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    margin: auto;
}
.recipeDetails {
    display: flex;
    background-color: #d9d9d9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
}
.recipeImage {
    width: 300px;
    height: auto;
    margin-right: 20px;
}
.contentStyle {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    font-size: 10px;
}
.ingredients-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 16px;
}
.total-cost {
    font-size: 18px;
    margin-top: 10px;
}
</style>
