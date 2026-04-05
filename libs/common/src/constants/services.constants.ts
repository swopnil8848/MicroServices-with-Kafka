export const SERVICES = {
    API_GATEWAY: 'api-gateway',
    AUTH_SERVICE: 'auth-service',
    USER_SERVICE: 'user-service',
    EVENTS_SERVICE: 'events-service',
    TICKETS_SERVICE: 'tickets-service',
    PAYMENTS_SERVICE: 'payments-service',
    NOTIFICATIONS_SERVICE: 'notifications_service',
} as const;

export const SERVICE_PORTS = {
    [SERVICES.API_GATEWAY]: 3000,
    [SERVICES.AUTH_SERVICE]: 3001,
    [SERVICES.USER_SERVICE]: 3002,
    [SERVICES.EVENTS_SERVICE]: 3003,
    [SERVICES.TICKETS_SERVICE]: 3004,
    [SERVICES.PAYMENTS_SERVICE]: 3005,
    [SERVICES.NOTIFICATIONS_SERVICE]: 3006,
}