import {SupplierNotifications} from '@/suppliers/communications/notifications/model/supplier-notifications.entity';
import axios from 'axios';

export class SupplierNotificationApiService {
    async getSupplierNotifications(){
        const url = 'http://localhost:3000/Notifications'
        const response = await axios.get(url);
        return response.data.map(supplierNotificationData =>{
            return new SupplierNotifications({
                id: supplierNotificationData.id,
                userId: supplierNotificationData.userId,
                message: supplierNotificationData.message,
                type: supplierNotificationData.type,
                isRead: supplierNotificationData.isRead,
                createdAt: supplierNotificationData.createdAt,
            })
        })
    }
}
