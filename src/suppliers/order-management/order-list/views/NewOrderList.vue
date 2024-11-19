<script setup>
import {  onMounted, ref } from 'vue';
import { SupplierOrderApiService } from '@/suppliers/order-management/order-list/services/supplier-order-api.service';

const expandedRows = ref([]);
const orders = ref([]);
onMounted(async ()=>{
    const ordersService = new SupplierOrderApiService();
    const allOrders = await ordersService.getSupplierOrder();

    orders.value = allOrders;
    console.log(orders.value);
})

// Evento para manejar la expansión de filas
const onRowExpand = (event) => {
    expandedRows.value[event.data.id] = true; // Añadir la fila expandida al objeto expandedRows
};

// Evento para manejar la colapsación de filas
const onRowCollapse = (event) => {
    delete expandedRows.value[event.data.id]; // Remover la fila colapsada del objeto expandedRows
};
</script>
<script>
export default {
    name: 'SupplierNewOrderList'
}
</script>
<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">New Orders</div>
        <DataTable v-model:expandedRows="expandedRows" :value="orders" dataKey="id"
                   @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <Column expander style="width: 5rem" />
            <Column field="id" header="ID"></Column>
            <Column field="orderDate" header="Order Date"></Column>
            <Column field="deliveryDate" header="Delivery Date"></Column>
            <Column field="accept" header="">
                <template #body="slotProps">
                    <Button label="Accept" @click="onButtonClick(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="{data}">
                <div class="p-4">
                    <h5>Products</h5>
                    <DataTable :value="data.items">
                        <Column field="id" header="Id" ></Column>
                        <Column field="name" header="Name" ></Column>
                        <Column field="quantity" header="Quantity" ></Column>
                        <Column field="price" header="Price" ></Column>
                    </DataTable>
                </div>

            </template>

        </DataTable>
    </div>
</template>

<style scoped lang="scss">
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
