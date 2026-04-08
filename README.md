# EventFlow Microservices

NestJS monorepo for EventFlow with Kafka, Postgres, Redis, and Kafka UI.

## What Runs Here

- `api-gateway` on `3000`
- `auth-service` on `3001`
- Kafka UI on `8080`
- Kafka broker exposed on `9093`
- Postgres exposed on `5433`

## Prerequisites

- Node.js 22+
- `pnpm`
- Docker Desktop

## Install

```bash
pnpm install
```

## Run With Docker

Start the infrastructure first:

```bash
docker compose up -d zookeeper kafka kafka-ui postgres redis
```

Then start the app containers you need:

```bash
docker compose up -d --build api-gateway auth-service
```

Open these in your browser:

- Kafka UI: `http://localhost:8080`
- API Gateway: `http://localhost:3000`
- Auth Service: `http://localhost:3001`

## Run Locally

Run the apps in two terminals.

Terminal 1:

```bash
pnpm run start:dev api-gateway
```

Terminal 2:

```bash
$env:DATABASE_URL="postgresql://eventflowapp:eventflow_password@localhost:5433/eventflowapp"
pnpm run start:dev auth-service
```

## Local Kafka Settings

If Kafka is running in Docker and the apps are running on your machine, the local app should talk to:

- Kafka broker: `127.0.0.1:9093`
- Postgres: `localhost:5433`

## Notes

- The repository currently has `api-gateway` and `auth-service` implemented.
- Kafka-related logs appear only when the Kafka client actually connects and consumes/emits messages.
- If you change Docker service ports, restart the containers so the new mappings take effect.
