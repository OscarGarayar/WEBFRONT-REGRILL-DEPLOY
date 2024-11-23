<script setup>
import { onMounted, ref } from 'vue';
import { ManagerInvoiceApiService } from '@/managers/sale-management/bills-list/services/manager-invoice-api.service';

const invoices = ref([]);

onMounted(async () => {
    const Invoice = new ManagerInvoiceApiService();
        const allInvoices = await Invoice.getInvoice();
        invoices.value = allInvoices;
        console.log(invoices.value);

});
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Invoice List</div>
      ¡
        <DataTable :value="invoices" dataKey="id" tableStyle="min-width: 60rem">
            <Column field="id" header="ID"></Column>
            <Column field="invoiceNumber" header="InvoiceNumber"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="client" header="Client"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="status" header="Status"></Column>
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

.error {
    color: red;
    margin-bottom: 1rem;
}
</style>
