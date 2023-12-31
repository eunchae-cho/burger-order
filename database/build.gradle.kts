description = "database"

dependencies {
    api(project(":common"))

    implementation("org.postgresql:postgresql")
}