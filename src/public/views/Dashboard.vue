<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ProductService } from '@/service/ProductService';
import { onMounted, ref, watch } from 'vue';

import { SupplierProfileApiService } from '@/suppliers/user-management/profile/services/supplier-profile-api.service';
import { SupplierOrderApiService } from '@/suppliers/order-management/order-list/services/supplier-order-api.service';

const profiles = ref([]);
const expandedRows = ref([]);
const orders = ref([]);
onMounted(async () => {
    //Profile
    const profileService = new SupplierProfileApiService();
    const allProfiles = await profileService.getSupplierProfile();

    profiles.value = allProfiles;
    console.log(profiles.value);
    //Orders
    const ordersService = new SupplierOrderApiService();
    const allOrders = await ordersService.getSupplierOrder();

    orders.value = allOrders;
    console.log(orders.value);


    ProductService.getProductsSmall().then((data) => (products.value = data));
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
// Evento para manejar la expansión de filas
const onRowExpand = (event) => {
    expandedRows.value[event.data.id] = true; // Añadir la fila expandida al objeto expandedRows
};

// Evento para manejar la colapsación de filas
const onRowCollapse = (event) => {
    delete expandedRows.value[event.data.id]; // Remover la fila colapsada del objeto expandedRows
};


const { getPrimary, getSurface, isDarkTheme } = useLayout();

const products = ref(null);
const chartData = ref(null);
const chartOptions = ref(null);





function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Supplies',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                data: [4000, 10000],
                barThickness: 32
            },
            {
                type: 'bar',
                label: 'Delivery',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                data: [2100, 8400],
                barThickness: 32
            },

        ]
    };
}

function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: 'transparent',
                    borderColor: 'transparent'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: borderColor,
                    borderColor: 'transparent',
                    drawTicks: false
                }
            }
        }
    };
}



watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Revenue</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">%52+ </span>
                <span class="text-muted-color">since last week</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Customers</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">520 </span>
                <span class="text-muted-color">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">85 </span>
                <span class="text-muted-color">responded</span>
            </div>
        </div>

        <div class="col-span-12 xl:col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Recent Sales</div>
                <DataTable v-model:expandedRows="expandedRows" :value="orders" dataKey="id"
                           @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" >
                    <Column expander style="width: 5rem" />
                    <Column field="id" header="ID"></Column>
                    <Column field="deliveryDate" header="Delivery Date"></Column>
                    <Column field="status" header="Status"></Column>
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
            <div class="card">
                <div class="flex justify-between items-center mb-6">
                    <div class="font-semibold text-xl">Best Selling Products</div>

                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Tomato</span>
                            <div class="mt-1 text-muted-color">Fruits</div>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                            <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                                <div class="bg-red-500 h-full" style="width: 67%"></div>
                            </div>
                            <span class="text-red-500 ml-4 font-medium">%67</span>
                        </div>
                    </li>

                    <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Wheat Flour</span>
                            <div class="mt-1 text-muted-color">Flour</div>
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                            <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                                <div class="bg-pink-500 h-full" style="width: 78%"></div>
                            </div>
                            <span class="text-pink-500 ml-4 font-medium">%78</span>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-6">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Revenue Stream</div>
                <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
            </div>

        </div>
    </div>
</template>
