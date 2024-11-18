export class SupplierNotifications {
    constructor({ id, userId, message, type, isRead, createdAt }) {
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.type = type;
        this.isRead = isRead;
        this.createdAt = createdAt;
    }
}
