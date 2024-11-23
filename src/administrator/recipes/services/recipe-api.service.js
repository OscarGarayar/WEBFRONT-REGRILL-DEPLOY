import http from '../../../../../Cambios para manager-stock, orders, http-common/WEBFRONT-REGRILL-DEPLOY/src/shared/http-common';

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
