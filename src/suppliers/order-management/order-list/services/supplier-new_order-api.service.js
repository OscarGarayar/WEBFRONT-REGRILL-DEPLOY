
import {SupplierNewOrder} from '@/suppliers/order-management/order-list/model/supplier-new_order.entity';
import axios from 'axios';

export class SupplierNewOrderApiService{
    async getSupplierOrder(){
        const url = 'http://localhost:3000/SupplierNewOrder'
        const response = await axios.get(url);
        return response.data.map(supplierOrderData =>{
            return new SupplierNewOrder({
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
