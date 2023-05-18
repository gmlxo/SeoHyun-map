package com.seohyun.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/home")
public class homeController {
	
	@RequestMapping(value = "/home.do")
	public String home(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return "home";
	}
	
//	ERROR
	@ExceptionHandler(value = Exception.class)
    public String exception(Exception e) {
    	System.err.println("===============================");
    	System.err.println("Exception : " + e.getMessage());
    	System.err.println("===============================");
		return "error";
	}
}
