description = "database"

dependencies {
    implementation(project(":common"))

    implementation("org.postgresql:postgresql")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
}