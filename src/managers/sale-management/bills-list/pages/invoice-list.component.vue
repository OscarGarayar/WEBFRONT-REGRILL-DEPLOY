<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { InvoiceApiService } from '@/managers/sale-management/bills-list/services/manager-invoice-api.service';


const expandedRows = ref([]);
const invoices = ref([]);
const invoiceService = new InvoiceApiService();
const visible = ref(false);
const item = ref({ client: '', total: null, status: '' });
const submitted = ref(false);
const { proxy } = getCurrentInstance();
const statuses = ref([
    { label: 'Pending', value: 'pending' },
    { label: 'Paid', value: 'paid' },
    { label: 'Canceled', value: 'canceled' }
]);

function notifySuccessfulAction(message) {
    proxy.$toast.add({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
}

onMounted(async () => {
    await loadInvoices();
});

async function loadInvoices() {
    const allInvoices = await invoiceService.getInvoices();
    invoices.value = allInvoices;
}

async function onSave() {
    submitted.value = true;

    if (item.value.client && item.value.total && item.value.status) {
        await invoiceService.createInvoice(item.value);
        await loadInvoices(); // Recarga las facturas después de agregar una nueva
        resetForm();
        visible.value = false;
        notifySuccessfulAction('Invoice Created');
    }
}

function resetForm() {
    item.value = { client: '', total: null, status: '' };
    submitted.value = false;
}

const showDialog = () => {
    visible.value = true;
};

// Evento para manejar la expansión de filas
const onRowExpand = (event) => {
    expandedRows.value[event.data.id] = true;
};

// Evento para manejar la colapsación de filas
const onRowCollapse = (event) => {
    delete expandedRows.value[event.data.id];

};
</script>

<template>
    <div class="card">
        <div class="flex justify-content-between align-items-center mb-4">
            <div class="font-semibold text-xl mb-4">Invoice List</div>
        </div>

        <div class="flex justify-end">
            <pv-button label="New" icon="pi pi-plus" @click="showDialog" />
        </div>

        <DataTable v-model:expandedRows="expandedRows" :value="invoices" paginator :rows="5"
                   :rows-per-page-options="[5, 10, 20, 50]" dataKey="id"
                   @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <Column field="id" header="ID"></Column>
            <Column field="invoiceNumber" header="Invoice Number"></Column>
            <Column field="date" header="Date"></Column>
            <Column field="client" header="Client"></Column>
            <Column field="total" header="Total"></Column>
            <Column field="status" header="Status"></Column>
        </DataTable>
        <pv-dialog v-model:visible="visible" modal class="p-fluid"
                   header="Add New Invoice">
            <template #header>
                <div class="flex justify-content-start">
                    <div>Add New Invoice</div>
                </div>
            </template>

            <div class="p-fluid">
                <div class="field mt-5">
                    <pv-float-label>
                        <label for="client">Client</label>
                        <pv-input-text id="client" v-model="item.client"
                                       :class="{'p-invalid': submitted && !item.client}" />
                        <small v-if="submitted && !item.client" class="p-invalid">Client is required.</small>
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="total">Total</label>
                        <pv-input-number id="total" v-model="item.total" mode="currency" currency="USD"
                                         :class="{'p-invalid': submitted && !item.total}" />
                        <small v-if="submitted && !item.total" class="p-invalid">Total is required.</small>
                    </pv-float-label>
                </div>
                <div class="p-field mt-5">
                    <pv-float-label>
                        <label for="status">Status</label>
                        <pv-dropdown id="status" v-model="item.status" :options="statuses" optionLabel="label"
                                     optionValue="value"
                                     placeholder="Select a Status">
                            <template #value="slotProps">
                                <div v-if="slotProps.value && slotProps.value.value">
                                    <pv-tag :value="slotProps.value.value" />
                                </div>
                                <div v-else-if="slotProps.value && !slotProps.value.value">
                                    <pv-tag :value="slotProps.value" />
                                </div>
                                <span v-else>{{ slotProps.placeholder }}</span>
                            </template>
                        </pv-dropdown>
                        <small v-if="submitted && !item.status" class="p-invalid">Status is required.</small>
                    </pv-float-label>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-content-end">
                    <pv-button type="button" label="Save" class="p-button-text" icon="pi pi-check" @click="onSave" />
                    <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text"
                               icon="pi pi-times" @click="visible = false" />
                </div>
            </template>
        </pv-dialog>
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
