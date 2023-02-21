package com.ec.hbg

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories(basePackages = ["com.ec.hbg.repository"])
class HamburgerApplication

fun main(args: Array<String>) {
	runApplication<HamburgerApplication>(*args)
}


