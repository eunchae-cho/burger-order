import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "3.2.1"
	id("io.spring.dependency-management") version "1.1.4"
	kotlin("jvm") version "1.7.21"
	kotlin("plugin.spring") version "1.7.21"
	kotlin("plugin.jpa") version "1.7.21"
}

group = "com.ec"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

allprojects {
	repositories {
		mavenCentral()
	}

	tasks.withType<KotlinCompile> {
		kotlinOptions {
			freeCompilerArgs += "-Xjsr305=strict"
			jvmTarget = "17"
		}
	}
}

subprojects {

	apply {
		plugin("java")
		plugin("org.springframework.boot")
		plugin("io.spring.dependency-management")
	}

	dependencies {
		developmentOnly("org.springframework.boot:spring-boot-devtools")
		implementation("org.springframework.boot:spring-boot-starter-data-jpa")
		implementation("org.springframework.boot:spring-boot-starter-webflux")
		implementation("org.jetbrains.kotlin:kotlin-reflect")
//		implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
//		implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
//		implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
//		implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
//		testImplementation("org.springframework.boot:spring-boot-starter-test")
//		testImplementation("io.projectreactor:reactor-test")
	}

	tasks.withType<Test> {
		useJUnitPlatform()
	}
}