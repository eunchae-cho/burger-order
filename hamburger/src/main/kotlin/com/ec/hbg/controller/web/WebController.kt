package com.ec.hbg.controller.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
@Controller
class WebController {

    @GetMapping("/")
    fun home(): String {
        return "TEST!"
    }
}