export class Recipe {
    constructor(id=0,name = '', category = '', description = '', ingredients = [], image = '') {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.ingredients = ingredients;
        this.image = image;
    }

    static fromApiResponse(apiData) {
        return new Recipe(
            apiData.id,
            apiData.name,
            apiData.category,
            apiData.description,
            apiData.ingredients.map(ingredient => Ingredient.fromApiResponse1(ingredient)),
            apiData.image,
        );
    }
}

export class Ingredient {
    constructor(name = '', quantity = '', cost = 0) {
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
    }

    static fromApiResponse1(apiData) {
        return new Ingredient(
            apiData.name,
            apiData.quantity,
            apiData.cost
        );
    }
}
