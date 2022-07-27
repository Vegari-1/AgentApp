FROM maven:3.8.5-jdk-11-slim AS appServerBuild
WORKDIR /usr/src/server
COPY . .
RUN mvn package -DskipTests

FROM eclipse-temurin:11-jre-focal AS appServerRuntime
WORKDIR /app
COPY --from=appServerBuild /usr/src/server/target/agent-app-0.1.jar ./
EXPOSE 8080
CMD java -jar agent-app-0.1.jar
