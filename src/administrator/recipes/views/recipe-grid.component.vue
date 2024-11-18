<script>
import { RecipeApiService } from '@/administrator/recipes/services/recipe-api.service';
import { Recipe } from '@/administrator/recipes/model/recipe.entity';

export default {
    data() {
        return {
            recipes: []
        };
    },
    methods: {
        async deleteRecipe(recipeId, index) {
            const apiRecipeService = new RecipeApiService();
            try {
                const response = await apiRecipeService.delete(recipeId);
                if (response.status === 200) {
                    this.recipes.splice(index, 1);
                    alert('Recipe delete');
                } else {
                    alert('Error delete recipe');
                }
            } catch (error) {
                console.error('Error deleting recipe:', error);
                alert('Error during deletion');
            }
        }
    },

    async mounted() {
        const apiRecipeService = new RecipeApiService();
        try {
            const response = await apiRecipeService.getAll();
            this.recipes = response.data.map((recipesData) => Recipe.fromApiResponse(recipesData));
            console.log(this.recipes);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>Admi. Kitchen</h1>
        <h2>Recetas</h2>
        <button class="action-button">
            <router-link :to="{ path: '/recipe/recipeAdd' }" class="link-button"> Añadir receta </router-link>
        </button>
        <div class="recipe-grid">
            <div v-for="(recipe, index) in recipes" :key="index" class="recipe-card">
                <router-link :to="{ path: '/recipe/viewRecipe', query: { id: recipe.id } }">
                    <img :src="recipe.image" :alt="recipe.name" class="recipe-image" />
                </router-link>
                <h3>{{ recipe.name }}</h3>
                <button class="action-button" @click="deleteRecipe(recipe.id, index)">Eliminar receta</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    padding: 20px;
}

.recipe-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 20px;
}

.recipe-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
}

.recipe-image {
    max-width: 100%;
    height: 30vh;
    width: auto;
    border-radius: 8px;
    cursor: pointer;
}

.action-button {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #ff7300;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.action-button:hover {
    background-color: #ff7300;
}

.link-button {
    color: inherit;
    text-decoration: none;
}

@media (max-width: 768px) {
    .recipe-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .recipe-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .recipe-card {
        padding: 12px;
    }

    .action-button {
        padding: 6px 12px;
    }
}
</style>
