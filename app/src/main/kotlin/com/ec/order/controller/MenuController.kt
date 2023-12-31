package com.ec.order.controller

import com.ec.common.response.ApiResponse
import com.ec.database.entity.MenuEntity
import com.ec.order.service.MenuService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v2/menus")
class MenuController(
    private val menuService: MenuService
) {
    @GetMapping
    suspend fun getAll(): ApiResponse<List<MenuEntity>> = ApiResponse.ok(menuService.getAll())
}