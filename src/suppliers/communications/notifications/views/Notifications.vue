<script setup>
import {  onMounted, ref } from 'vue';
import {SupplierNotificationApiService} from '@/suppliers/communications/notifications/services/supplier-notifications-api.service';

const expandedRows = ref([]);
const notifications = ref([]);
onMounted(async ()=>{
    const notificationsService = new SupplierNotificationApiService();
    const allNotifications = await notificationsService.getSupplierNotifications();

    notifications.value = allNotifications;
    console.log(notifications.value);
})
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Notifications</div>
        <DataTable v-model:expandedRows="expandedRows" :value="notifications" dataKey="id" tableStyle="min-width: 60rem">
            <Column field="id" header="ID"></Column>
            <Column field="message" header="Message"></Column>
            <Column field="type" header="Type"></Column>
            <Column field="isRead" header="Status"></Column>
            <Column field="createdAt" header="Creation Date"></Column>


        </DataTable>
    </div>
</template>

<style scoped lang="scss">

</style>
