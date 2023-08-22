FROM gradle:7.4-jdk11-alpine as builder
WORKDIR /build

COPY build.gradle settings.gradle /build/
RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true

COPY . /build
RUN gradle build -x test --parallel


FROM eclipse-temurin:11-jre-jammy
WORKDIR /app
COPY --from=builder /build/build/libs/cheongchun28-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

USER nobody
CMD [ "java",  "-jar", "cheongchun28-0.0.1-SNAPSHOT.jar"]