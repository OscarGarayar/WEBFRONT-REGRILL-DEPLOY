import http from '../../../../../Cambios para manager-stock, orders, http-common/WEBFRONT-REGRILL-DEPLOY/src/shared/http-common'

export class OrdersApiService {
    getAll() {
        return http.get(`/orders`);
    }
    getById(id) {
        return http.get(`/orders/${id}`);
    }
    create(data) {
        return http.post(`/orders`, data);
    }
    update(id, data) {
        return http.put(`/orders/${id}`, JSON.stringify(data));
    }
    delete(id) {
        return http.delete(`/orders/${id}`);
    }
}
