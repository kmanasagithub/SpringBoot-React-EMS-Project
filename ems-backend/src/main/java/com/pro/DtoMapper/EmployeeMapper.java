package com.pro.DtoMapper;

import com.pro.Dto.EmployeeDto;
import com.pro.entity.Employee;

public class EmployeeMapper {
	
	public static EmployeeDto mapToEmpDto(Employee emp) {
		EmployeeDto empdto = new EmployeeDto(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getEmail());
		return empdto;
	}
	
	public static Employee mapToEmp(EmployeeDto empdto) {
		Employee emp = new Employee(empdto.getId(),empdto.getFirstName(),empdto.getLastName(),empdto.getEmail());
		return emp;
	}
}
