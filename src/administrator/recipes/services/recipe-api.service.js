import http from '../../../shared/http-common';

export class RecipeApiService {
    getAll() {
        return http.get('/recipes');
    }
    create(data) {
        return http.post(`/recipes`, data);
    }

    getRecipeById(id) {
        return http.get(`/recipes/${id}`);
    }

    delete(id) {
        return http.delete(`/recipes/${id}`);
    }
}
