package com.pro.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pro.Dto.EmployeeDto;
import com.pro.entity.Employee;

@Service
public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long employeeId,EmployeeDto employeeDto);
	
	void deleteEmployee(Long employeeId);
}
