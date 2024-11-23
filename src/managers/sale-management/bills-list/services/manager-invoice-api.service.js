import axios from 'axios';
import {Invoice} from "@/managers/sale-management/bills-list/model/manager-invoice.entity";


export class ManagerInvoiceApiService {
  async  getInvoice(){
      const url = 'http://localhost:5086/api/v1/Invoices';
      const response = await axios.get(url);
      return response.data.map(invoice => {
          return new Invoice({
                id: invoice.id,
                invoiceNumber: invoice.invoiceNumber,
                date: invoice.date,
                client: invoice.client,
                total: invoice.total,
                status: invoice.status
          })
      })
  }
}
