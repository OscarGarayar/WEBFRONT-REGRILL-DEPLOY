import {SupplierProfile} from '@/suppliers/user-management/profile/model/supplier-profile.entity';
import axios from 'axios';

export class SupplierProfileApiService {
    async getSupplierProfile(){
        const url = 'http://localhost:5086/api/v1/users/1'
        const response = await axios.get(url);
        return response.data.map(supplierProfileData =>{
            return new SupplierProfile({
                id: supplierProfileData.id,
                name: supplierProfileData.name,
                address: supplierProfileData.address,
                email: supplierProfileData.email,
                phoneNumber: supplierProfileData.phoneNumber,
                contactPerson: supplierProfileData.contactPerson,
                description: supplierProfileData.description,
                businessType: supplierProfileData.businessType,
                ordersFinished: supplierProfileData.ordersFinished,
                ordersPending: supplierProfileData.ordersPending,
            })
        })
    }
}
