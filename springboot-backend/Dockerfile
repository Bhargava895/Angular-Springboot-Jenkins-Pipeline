	#stage1
        FROM  maven:3.6-alpine as builder

        COPY springboot-backend /springboot-backend

        WORKDIR /springboot-backend

        RUN mvn clean install -DskipTests=true -X
     #stage2
        FROM openjdk:8-alpine

        COPY --from=builder /springboot-backend/target/app.war /app.war

        EXPOSE 8080

        ENTRYPOINT ["java","-jar","app.war"] 
