package com.chunjae.friendy.map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MapController {
    @GetMapping("")
    public String index() {
        return "user/pages/index";
    }
}
