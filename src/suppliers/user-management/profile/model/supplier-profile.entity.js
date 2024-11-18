export class SupplierProfile{
    constructor({id, name, address, email, phoneNumber, contactPerson, description, businessType,ordersFinished,ordersPending}) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.contactPerson = contactPerson;
        this.description = description;
        this.businessType = businessType;
        this.ordersFinished = ordersFinished;
        this.ordersPending = ordersPending;

    }
}
