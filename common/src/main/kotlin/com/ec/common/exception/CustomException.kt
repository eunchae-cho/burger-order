package com.ec.common.exception

import com.ec.common.enums.ErrorCode

class CustomException(
    val code: ErrorCode,
    override val message: String
): RuntimeException()