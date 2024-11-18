import http from '../../../shared/http-common'

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
