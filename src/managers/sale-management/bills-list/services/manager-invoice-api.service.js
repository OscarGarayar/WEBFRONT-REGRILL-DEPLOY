import { Invoice } from '@/managers/sale-management/bills-list/model/manager-invoice.entity';
import axios from 'axios';

export class InvoiceApiService {
    async getInvoices() {
        const url = 'http://localhost:3000/invoices';
        const response = await axios.get(url);
        return response.data.map(invoiceData => {
            return new Invoice(
                invoiceData.id,
                invoiceData.invoiceNumber,
                invoiceData.date,
                invoiceData.client,
                invoiceData.total,
                invoiceData.status
            );
        });
    }

    async createInvoice(invoiceData) {
        const url = 'http://localhost:3000/invoices';

        // Generar ID, número de factura y fecha automáticamente
        const id = Date.now(); // Usa timestamp como ID único
        const invoiceNumber = `F001-${String(id).slice(-6)}`; // Genera un número de factura único
        const date = new Date().toISOString().split('T')[0]; // Fecha en formato YYYY-MM-DD

        const response = await axios.post(url, {
            id: 0,
            invoiceNumber: invoiceNumber,
            date: date,
            client: invoiceData.client,
            total: invoiceData.total,
            status: invoiceData.status
        });
        return new Invoice(
            response.data.id,
            response.data.invoiceNumber,
            response.data.date,
            response.data.client,
            response.data.total,
            response.data.status
        );
    }
}
