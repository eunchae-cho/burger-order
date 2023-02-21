package com.ec.hbg.common.response

import com.shoplive.task.common.enums.ErrorCode

class ApiResponse<T>(
    code: String,
    data: Any,
    message: String
) {
    var code: String = code
    var data: Any = data
    var message: String = message

    companion object {
        fun <T> ok(): ApiResponse<T> {
            return ApiResponse(ErrorCode.OK.getKey(), "", ErrorCode.OK.getValue())
        }

        fun <T> ok(data: Any): ApiResponse<T> {
            return ApiResponse(ErrorCode.OK.getKey(), data, ErrorCode.OK.getValue())
        }

        fun <T> of(code: String, message: String): ApiResponse<T> {
            return ApiResponse(code, "", message)
        }
    }
}