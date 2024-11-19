export class Invoice {
    constructor( id, invoiceNumber, date, client, total, status ) {
        this.id = id;
        this.invoiceNumber = invoiceNumber;
        this.date = date;
        this.client = client;
        this.total = total;
        this.status = status;
    }
}
