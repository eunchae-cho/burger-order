import org.springframework.boot.gradle.tasks.bundling.BootJar

description = "common"

tasks.getByName<BootJar>("bootJar") {
    enabled = false
}

tasks.getByName<Jar>("jar") {
    enabled = true
}

dependencies {
}