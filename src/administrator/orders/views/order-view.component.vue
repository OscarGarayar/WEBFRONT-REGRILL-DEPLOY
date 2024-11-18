<script>
import { OrdersApiService } from '@/administrator/orders/services/orders-api.service';
import { Order } from '@/administrator/orders/model/order.entity';

export default {
    data() {
        return {
            orders: []
        };
    },
    created() {
        this.fetchOrders();
    },
    methods: {
        async fetchOrders() {
            const ordersApiService = new OrdersApiService();
            try {
                const response = await ordersApiService.getAll();
                this.orders = response.data.map(order => Order.fromApiResponse(order));
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        },
        async deleteOrder(orderId) {
            const ordersApiService = new OrdersApiService();
            try {
                await ordersApiService.delete(orderId);
                this.orders = this.orders.filter(order => order.id !== orderId);
            } catch (error) {
                console.error("Error deleting order:", error);
            }
        }
    }
};
</script>

<template>
    <div class="button-add">
        <button class="button">
            <router-link :to="{ name: 'OrderAdd' }">Add Order</router-link>
        </button>
    </div>
    <div class="orders-list">
        <div v-for="order in orders" :key="order.id" class="order-item">
            <p>{{ order.name }} - {{ order.table }} - {{ order.status }}</p>
            <router-link :to="{ name: 'UpdateOrder', query: { id: order.id } }">
                <button class="button">Modify</button>
            </router-link>
            <button @click="deleteOrder(order.id)" class="button">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.button-add {
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-end;
}

.order-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    width: 10vw;
    height: 8vh;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    justify-content: center;
    color: white;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}
</style>
