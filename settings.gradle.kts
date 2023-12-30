pluginManagement {
	repositories {
		maven { url = uri("https://repo.spring.io/milestone") }
		maven { url = uri("https://repo.spring.io/snapshot") }
		gradlePluginPortal()
	}
}

rootProject.name = "hamburger-order"

include("common")
include("database")
include("ui")
include(":apis:order-api")
