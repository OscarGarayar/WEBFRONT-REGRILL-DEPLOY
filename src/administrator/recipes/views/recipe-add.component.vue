<script>
import { RecipeApiService } from '@/administrator/recipes/services/recipe-api.service';

export default {
    name: "submitRecipe",
    data() {
        return {
            name: "",
            category: "",
            description: "",
            ingredients: [],
            image: ""
        };
    },
    methods: {
        addIngredient() {
            this.ingredients.push({ name: "", quantity: "", cost: 0 });
        },
        async submitRecipe() {
            if (this.name && this.category && this.description && this.ingredients.length > 0 && this.image) {
                const newRecipe = {
                    id: 0,
                    name: this.name,
                    category: this.category,
                    description: this.description,
                    ingredients: this.ingredients,
                    image: this.image,
                };
                console.log("Datos de nueva receta:", newRecipe);
                const apiRecipeService = new RecipeApiService();
                try {
                    const response = await apiRecipeService.create(newRecipe);
                    if (response.status === 201) {
                        alert("Receta añadida exitosamente");
                    } else {
                        alert("Fallo al añadir la receta");
                    }
                } catch (error) {
                    console.error("Error añadiendo la receta:", error);
                    alert("Error añadiendo la receta");
                }
            } else {
                alert("Por favor, complete todos los campos");
            }
        }
    }
};
</script>
<template>
    <div class="background-container">
        <div class="form-container">
            <div class="form-header">
                <h1>Añadir la Receta</h1>
            </div>
            <div class="form-field">
                <input class="textbox" type="text" v-model="name" placeholder="Nombre de la receta" />
            </div>
            <div class="form-field">
                <input class="textbox" type="text" v-model="category" placeholder="Categoría" />
            </div>
            <div class="form-field">
                <textarea class="textbox" v-model="description" placeholder="Descripción del plato"></textarea>
            </div>
            <div class="form-field" v-for="(ingredient, index) in ingredients" :key="index">
                <input class="textbox" type="text" v-model="ingredient.name" placeholder="Nombre del ingrediente" />
                <input class="textbox" type="text" v-model="ingredient.quantity" placeholder="Cantidad" />
                <input class="textbox" type="number" v-model="ingredient.cost" placeholder="Costo" />
            </div>
            <button @click="addIngredient">Añadir ingrediente</button>
            <div class="form-field">
                <input class="textbox" type="text" v-model="image" placeholder="Insertar imagen de referencia" />
            </div>
            <button class="buttonSubmit" @click="submitRecipe">Aceptar</button>
        </div>
    </div>
</template>



<style scoped>
.background-container {
    background-image: url('https://www.vivood.com/imagenes/elaboracion-cocina-gourmet.jpg');
    background-size: cover;
    height: 100vh;
    width: 71vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

.form-container {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 15px;
    box-shadow:4px 30px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.form-header {
    text-align: left;
    font-size: 24px;
    color: #004080;
    margin-bottom: 20px;
}

.form-field {
    margin-bottom: 20px;
}

.textbox {
    width: 92%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.buttonSubmit {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.buttonSubmit:hover {
    background-color: #0056b3;
}
</style>
