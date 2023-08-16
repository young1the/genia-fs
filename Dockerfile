FROM eclipse-temurin:11-jre-jammy
COPY ./cheongchun28/build/libs/cheongchun28-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]