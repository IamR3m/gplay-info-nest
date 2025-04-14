# GPlay Info (Nest.js implementation)

## Description

This project allows users to retrieve application information by appId from Google Play Store.

## Project Setup

```bash
$ npm install
```

## Prerequisites

### Environment Variables
Define `APP_KEY`, `DATABASE_URL` and `PORT` (optional) environment variables (e.g. in a `.env` file).

### SSL Certificates
Define or provide your certificate files (`key.pem` and `cert.pem`) in the `ssl` folder in the project root folder.

### Apply database migration
Development:
```bash
$ npm run prisma:migrate-dev
```
Production:
```bash
$ npm run prisma:migrate
```

## Compile and Run the Project
Development:
```bash
$ npm run start
```
Watch mode:
```bash
$ npm run start:dev
```
Production mode:
```bash
$ npm run start:prod
```

## Usage

### Sign Up
```http request
### Expect { access_token: "1234567890abcdef" }
POST https://localhost:3000/auth/sign-up
Content-Type: application/json

{
  username: "John Doe",
  password: "changeme",
  email: "john.doe@example.com"
}
```
Get `access_token` from sign-up response or retrieve new one using sign-in request.

### Sign In
```http request
### Expect { access_token: "1234567890abcdef" }
POST https://localhost:3000/auth/sign-in
Content-Type: application/json

{
  username: "John Doe",
  password: "changeme"
}
```

### Get application info
```http request
### Expect json with info about Instagram application
GET https://localhost:3000/info/com.instagram.android
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## License

The project is [MIT licensed](LICENSE).

## Credits
This project utilizes the following libraries:

- [Nest.js](https://nestjs.com/): A progressive Node.js framework for building efficient, scalable, and enterprise-grade applications.
- [google-play-scraper](https://www.npmjs.com/package/google-play-scraper): A Node.js module for scraping application data from the Google Play Store.
- [Prisma](https://www.prisma.io/): A next-generation ORM for efficient and secure database management, ensuring strong type safety and developer productivity.
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library for secure password hashing and salting in JavaScript, widely used for enhancing application security.
