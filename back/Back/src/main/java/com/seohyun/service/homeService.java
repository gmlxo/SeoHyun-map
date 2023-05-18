package com.seohyun.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seohyun.dao.homeDAO;

@Service
public class homeService {
	@Autowired
	homeDAO dao = new homeDAO();
}
