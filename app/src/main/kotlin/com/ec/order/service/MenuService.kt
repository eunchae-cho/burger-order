package com.ec.order.service

import com.ec.database.entity.MenuEntity
import com.ec.database.repository.MenuRepository
import org.springframework.stereotype.Service

@Service
class MenuService(
    private val menuRepository: MenuRepository
) {
    suspend fun getAll(): List<MenuEntity> = menuRepository.findAll()
}