# FROM eclipse-temurin:17-jdk-alpine as build
# WORKDIR /home/app
# ARG MAIN_DIR=/home/app
# COPY src .
# COPY pom.xml .
# COPY mvnw .
# COPY .mvn .mvn
# RUN export PATH=${MAIN_DIR}/mvnw:${PATH}
# RUN ./mvnw install

FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /home/app
ARG MAIN_DIR=/home/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:17-alpine
VOLUME /tmp
ARG DEPENDENCY=/home/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
EXPOSE 8080
ENTRYPOINT ["java","-cp","app:app/lib/*","com.tasktracker.backend.BackendApplication"]