package com.seohyun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/home")
public class WebController {
	
	@RequestMapping(value = "/home.do")
	public String home() {
		return "home";
	}
}
