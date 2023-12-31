package com.ec.common.exception

import com.ec.common.enums.ErrorCode
import com.ec.common.response.ApiResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.servlet.NoHandlerFoundException

@RestControllerAdvice
class ErrorControllerAdvice {

    @ExceptionHandler(value = [Exception::class])
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    protected fun handleException(ex: Exception): ResponseEntity<ApiResponse<Any>> {
        return ResponseEntity(
            ApiResponse.of(ErrorCode.BAD_REQUEST.getKey(), ex.message ?: ErrorCode.BAD_REQUEST.getValue()),
            HttpStatus.BAD_REQUEST
        )
    }

    @ExceptionHandler(value = [NoSuchElementException::class, NoHandlerFoundException::class])
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    protected fun handleNoSuchElementException(ex: Exception): ResponseEntity<ApiResponse<Any>> {
        return ResponseEntity(
            ApiResponse.of(ErrorCode.RESOURCE_NOT_FOUND.getKey(), ex.message ?: ErrorCode.RESOURCE_NOT_FOUND.getValue()),
            HttpStatus.NOT_FOUND
        )
    }

    @ExceptionHandler(value = [CustomException::class])
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    protected fun handleCustomException(ex: CustomException): ResponseEntity<ApiResponse<Any>> {
        return ResponseEntity(
            ApiResponse.of(ErrorCode.BAD_REQUEST.getKey(), ex.message),
            HttpStatus.BAD_REQUEST
        )
    }
}