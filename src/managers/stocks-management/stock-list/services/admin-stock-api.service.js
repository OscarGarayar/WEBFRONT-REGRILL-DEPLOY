
import axios from 'axios';
import { AdminStock } from '@/managers/stocks-management/stock-list/model/admin-stock.entity';

export class AdminStockApiService{
    async getAdminStock(){
        const url = 'http://localhost:3000/AdminStock'
        const response = await axios.get(url);
        return response.data.map(adminStockData =>{
            return new AdminStock({
                id: adminStockData.id,
                date: adminStockData.date,
                ingredient: adminStockData.ingredient,
                quantity: adminStockData.quantity,
                supplier: adminStockData.supplier,
                items: adminStockData.items
            })
        })
    }
}
