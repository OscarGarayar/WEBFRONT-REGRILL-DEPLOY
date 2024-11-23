import {SupplierProfile} from '@/suppliers/user-management/profile/model/supplier-profile.entity';
import axios from 'axios';

export class SupplierProfileApiService {
    async getSupplierProfile(){
        const url = 'http://localhost:5086/api/v1/users/1'
        const response = await axios.get(url);
        return response.data.map(supplierProfileData =>{
            return new SupplierProfile({
                id: supplierProfileData.id,
                dni: supplierProfileData.dni,
                firstname: supplierProfileData.firstname,
                lastName: supplierProfileData.lastName,
                email: supplierProfileData.email,
            })
        })
    }
}
