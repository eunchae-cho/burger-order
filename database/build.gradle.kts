description = "database"

dependencies {
    api(project(":common"))

    runtimeOnly("com.h2database:h2")
}