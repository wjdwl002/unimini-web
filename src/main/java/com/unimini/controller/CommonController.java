package com.unimini.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
public class CommonController {

    @GetMapping(value = "/signIn")
    public String signIn() {
        return "signIn";
    }

    @PostMapping(value = "/uniMap")
    public ModelAndView uniMap(Map<String, String> userInfo) {
        ModelAndView mav = new ModelAndView("uniMap");
        mav.addObject("userInfo", userInfo);

        return mav;
    }

}