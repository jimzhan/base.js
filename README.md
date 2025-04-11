# Base.js

An opinionated Web application startup kit with a set of best practices.

## Prerequisites

- [Podman](https://podman.io/) for local development

## Foundations

- **Configuration** [Confidence](https://www.npmjs.com/package/@hapipal/confidence)
- **Local Infrastruture** [Kafka](https://kafka.apache.org/) + [PostgreSQL@16](https://www.postgresql.org/) + [Redis](https://redis.io/) with [Podman](https://podman.io/)
- **SCA** [ESLint](https://eslint.org/) + [StandardJS](https://standardjs.com/)
- **Test Runner** [Vitest](https://vitest.dev/)
- **Web Server** [hapi](https://hapi.dev/)
- **i18n** [i18next](https://www.i18next.com/)
- **Monorepo** [Yarn Workspaces](https://yarnpkg.com/features/workspaces)

## TODOs

- [x] Configuration
- [x] i18n Support (`querystring` > `cookie` > `session` > `header`, i18n key: `lang`).
- [x] Swagger Integration (available on `/docs`, SEE `src/server/plugins/swagger.js`).
- [ ] Authentication (with local PG user pool)
- [ ] Standard Log (refer to [AWS Logging](https://docs.aws.amazon.com/prescriptive-guidance/latest/logging-monitoring-for-application-owners/event-attributes.html))

## Configuration Profiles

1. `process.env.NODE_ENV=development` - for local development ONLY, relevant services will be running with containers.
2. `process.env.NODE_ENV=production` - for production deployment, relevant services will be running with actual production services.
3. `process.env.NODE_ENV=test` - for test environment ONLY, relevant services will be running with mock services.


## Global Scripts

- `yarn start` - for production environment, run with API services ONLY.
- `yarn watch` - for development environment, run with development services for both API and UI services.

