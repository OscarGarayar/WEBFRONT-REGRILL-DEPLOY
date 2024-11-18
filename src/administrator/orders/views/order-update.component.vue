<script>
import { Order } from '@/administrator/orders/model/order.entity';
import { OrdersApiService } from '@/administrator/orders/services/orders-api.service';

export default {
    data() {
        return {
            order: null,
        };
    },
    created() {
        const orderId = this.$route.query.id;
        this.fetchOrderDetails(orderId);
    },
    methods: {
        async fetchOrderDetails(id) {
            const orderApiService = new OrdersApiService();
            try {
                const response = await orderApiService.getById(id);
                this.order = response.data;
                console.log(this.order);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        },
        async updateOrder() {
            const orderApiService = new OrdersApiService();
            try {
                await orderApiService.update(this.order.id, this.order);
                this.$router.push('/orders');
            } catch (error) {
                console.error('Error updating order:', error);
            };
        }
    }
};
</script>

<template>
    <div class="order-update-container" v-if="order">
        <h2>Update Order</h2>
        <form @submit.prevent="updateOrder" class="order-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input v-model="order.name" type="text" class="form-control" />
            </div>
            <div class="form-group">
                <label for="table">Table:</label>
                <input v-model="order.table" type="number" class="form-control" />
            </div>
            <div class="form-group">
                <label for="status">Status:</label>
                <select v-model="order.status" class="form-control">
                    <option value="In preparation">In preparation</option>
                    <option value="Finish">Finish</option>
                </select>
            </div>
            <div class="form-buttons">
                <button type="submit" class="btn btn-update">Update Order</button>
                <button @click.prevent="$router.push('/orders')" class="btn btn-cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.order-update-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: auto;
}

h2 {
    color: #f77d0a;
    margin-bottom: 20px;
}

.order-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

.form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}

.form-control:focus {
    border-color: #f77d0a;
    outline: none;
}

.form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.btn-update {
    background-color: #6fba1c;
    color: white;
}

.btn-update:hover {
    background-color: #5aa016;
}

.btn-cancel {
    background-color: #d9534f;
    color: white;
}

.btn-cancel:hover {
    background-color: #c9302c;
}
</style>
