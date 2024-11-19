export class SupplierNewOrder {
    constructor({ id, supplierId, orderDate, deliveryDate, status, items }) {
        this.id = id;
        this.supplierId = supplierId;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
        this.status = status;
        this.items = items;
    }
}
