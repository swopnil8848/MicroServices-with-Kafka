export const KAFKA_BROKERS = process.env.KAFKA_BROKERS || '127.0.0.1:9093';
export const KAFKA_CLIENT_ID = 'eventflowapp';
export const KAFKA_CONSUMER_GROUP = 'eventflowapp-consumer';

// kafka Topics
export const KAFKA_TOPICS = {
    USER_REGISTERED: 'user.registered',
    USER_LOGIN: 'user.login',
    PASSWORD_RESET_REQUESTED: 'user.password-reset-requested',

    // Event events
    EVENT_CREATED: 'event.created',
    EVENT_UPDATED: 'event.updated',
    EVENT_CANCELLED: 'event.cancelled',
    EVENT_PUBLISHED: 'event.published',

    // Ticket events
    TICKET_PURCHASED: 'ticket.purchased',
    TICKET_REFUNDED: 'ticket.refunded',
    TICKET_CHECKED_IN: 'ticket.checked-in',

    // Payment events
    PAYMENT_COMPLETED: 'payment.completed',
    PAYMENT_FAILED: 'payment.failed',
    PAYMENT_REFUNDED: 'payment.refunded',

    // Notification events
    SEND_EMAIL: 'notification.send-email',
    SEND_PUSH: 'notification.send-push',
}

export type kafkaTopics = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];