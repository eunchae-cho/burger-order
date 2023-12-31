package com.ec.database.repository

import com.ec.database.entity.MenuEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface MenuRepository: JpaRepository<MenuEntity, Long> {
}