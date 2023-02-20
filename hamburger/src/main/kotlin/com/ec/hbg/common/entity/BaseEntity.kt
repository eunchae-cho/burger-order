package com.ec.hbg.common.entity

import lombok.Generated
import org.springframework.data.annotation.Id

abstract class BaseEntity (
    @Id
    @Generated
    open val id: Long
)

