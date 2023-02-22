package com.ec.hbg.service

import com.ec.hbg.model.Side
import com.ec.hbg.repository.SideRepository
import org.springframework.stereotype.Service

@Service
class SideService(
    private val sideRepository: SideRepository
) {
    fun getAll(): List<Side> {
        return sideRepository.findAll()
    }

    fun save(side: Side) {
        sideRepository.save(side)
    }
}