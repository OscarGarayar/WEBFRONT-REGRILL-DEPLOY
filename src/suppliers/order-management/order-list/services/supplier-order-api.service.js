
import {SupplierOrder} from '@/suppliers/order-management/order-list/model/supplier-order.entity';
import axios from 'axios';

export class SupplierOrderApiService{
    async getSupplierOrder(){
        const url = 'http://localhost:3000/SupplierOrder'
        const response = await axios.get(url);
        return response.data.map(supplierOrderData =>{
            return new SupplierOrder({
                id: supplierOrderData.id,
                supplierId: supplierOrderData.supplierId,
                orderDate: supplierOrderData.orderDate,
                deliveryDate: supplierOrderData.deliveryDate,
                status: supplierOrderData.status,
                items: supplierOrderData.items
            })
        })
    }
}
