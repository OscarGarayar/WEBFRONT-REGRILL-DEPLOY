<script setup>
import {  onMounted, ref } from 'vue';
import { AdminStockApiService } from '@/managers/stocks-management/stock-list/services/admin-stock-api.service';


const stocks = ref([]);
onMounted(async ()=>{
    const AdminStock = new AdminStockApiService();
    const allStocks = await AdminStock.getAdminStock();
    stocks.value = allStocks;
    console.log(stocks.value);
})

</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Stock List</div>
        <DataTable :value="stocks" dataKey="id" tableStyle="min-width: 60rem">
            <Column field="id" header="ID"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="ingredient" header="Ingredient"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="supplier" header="Supplier"></Column>

        </DataTable>
    </div>
</template>






