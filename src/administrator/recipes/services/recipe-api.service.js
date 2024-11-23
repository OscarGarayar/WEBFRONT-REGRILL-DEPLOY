import http from '/src/shared/http-common';

export class RecipeApiService {
    getAll() {
        return http.get('/recipe');
    }
    create(data) {
        return http.post(`/recipe`, data);
    }

    getRecipeById(id) {
        return http.get(`/recipe/${id}`);
    }

    delete(id) {
        return http.delete(`/recipe/${id}`);
    }
}
