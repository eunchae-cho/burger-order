package com.ec.order.config

import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@Configuration
@EntityScan(basePackages = ["com.ec.database"])
@EnableJpaRepositories(basePackages = ["com.ec.database"])
class JpaConfig {
}