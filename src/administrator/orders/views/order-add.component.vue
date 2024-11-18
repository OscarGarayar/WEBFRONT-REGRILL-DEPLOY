<script>
import { OrdersApiService } from '@/administrator/orders/services/orders-api.service';
import { Order } from '@/administrator/orders/model/order.entity';

export default {
    data() {
        return {
            cash: 0,
            name: '',
            table: 0,
            time: '',
            status: '',
            quantity: 0
        };
    },
    methods: {
        async submitOrder() {
            if (this.cash && this.name && this.table && this.isValidTime(this.time) && this.status && this.quantity) {
                var newOrder = new Order(0, this.cash, this.name, this.table, this.time, this.status, this.quantity);
                console.log(newOrder);
                const orderApiService = new OrdersApiService();
                try {
                    const response = await orderApiService.create(newOrder.toApiRequest());
                    if (response.status === 201) {
                        alert('New order add');
                        this.$router.push('/orders');
                    } else {
                        alert('Failed to add order');
                    }
                } catch (error) {
                    console.error(error);
                    alert('Error adding order');
                }
            } else {
                alert('Complete all fields correctly');
            }
        },
        isValidTime(time) {
            const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
            return timePattern.test(time);
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="form-container">
            <div class="form-header">
                <h1>Add new order</h1>
            </div>
            <div class="form-field">
                <label for="cash">Cash:</label>
                <input class="textbox" type="number" v-model="cash" placeholder="Cash number">
            </div>
            <div class="form-field">
                <label for="name">Order product name:</label>
                <input class="textbox" type="text" v-model="name" placeholder="Name of the product">
            </div>
            <div class="form-field">
                <label for="table">Table number:</label>
                <input class="textbox" type="number" v-model="table" placeholder="Table number">
            </div>
            <div class="form-field">
                <label for="time">Time of the order:</label>
                <input class="textbox" type="time" v-model="time" placeholder="Hour of the order">
            </div>
            <div class="form-field">
                <label for="status">Status of the order:</label>
                <input class="textbox" type="text" v-model="status" placeholder="Status of the order">
            </div>
            <div class="form-field">
                <label for="quantity">Quantity:</label>
                <input class="textbox" type="number" v-model="quantity" placeholder="Quantity of the order">
            </div>
            <button class="buttonSubmit" @click="submitOrder">Add</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 78px;
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
    color: #FF7300;
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
