export class Order {
    constructor(id = 0, cash = 0, name = '', table = 0, time = '',
                status = '', quantity = 0) {
        this.id = id;
        this.cash = cash;
        this.name = name;
        this.table = table;
        this.time = time;
        this.status = status;
        this.quantity = quantity;
    }

    static fromApiResponse(apiData) {
        return new Order(
            apiData.id,
            apiData.name,
            apiData.cash,
            apiData.name,
            apiData.table,
            apiData.time,
            apiData.status,
            apiData.quantity,
        )
    }


    toApiRequest() {
        return {
            id: 0,
            cash: this.cash,
            name: this.name,
            table: this.table,
            time: this.time,
            status: this.status,
            quantity: this.quantity
        };
    }
}
