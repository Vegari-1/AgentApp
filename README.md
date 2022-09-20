# AgentApp

### Table of Contents

-	[Deployment] (#deployment)
-   [Description](#description)
-   [Technologies](#technologies)
-   [How To Use](#how-to-use)


## Deployment

### Test Enviroment

[Frontend] (https://agent-app-frontend-test.herokuapp.com)
[Beckend](https://agent-app-backend-test.herokuapp.com)

### Production Enviroment

[Frontend] (https://agent-app-frontend-prod.herokuapp.com)
[Beckend](https://agent-app-backend-prod.herokuapp.com)

## Description

AgentApp is a web application for leaving reviews and comments on various companies. It uses Dislinkt Backend to promote currently active job offers.<br />
Registered user can create a request for registering his company to AgentApp. The submitted request is sent to application admins and they can choose to either accept it or decline it. Once the company request is accepted user can add currently open job offers in his company. 
Reqistered user who is not an owner of the company can leave comments, salary and interview experiences.

## Technologies

-   Spring Boot
-   React
-   TypeScript
-   Java

## How To Use

### Installation

For this application you need to have:
[Java](https://jdk.java.net/15/) v11 +
[NodeJS](https://nodejs.org/download/release/v18.9.0/) v18.9.0

#### Backend

For installation of application backend position yourself in AgentApp/agent-app
with command:

```
cd .\AgentApp\agent-app
```

To install dependencies run:

```
mvn clean install
```

And finally to start server run:

```
mvn spring-boot:run
```

#### Frontend

For installation of application frontend position yourself in AgentApp/agent-app-fe
folder with command:

```
cd .\AgentApp\agent-app-fe
```

To install dependencies run:

```
npm install
```

To run frontend application run:

```
npm start
