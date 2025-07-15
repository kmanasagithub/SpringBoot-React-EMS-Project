package com.pro.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pro.Dto.EmployeeDto;
import com.pro.DtoMapper.EmployeeMapper;
import com.pro.entity.Employee;
import com.pro.exception.ResourceNotFoundException;
import com.pro.repository.EmpRepository;
import com.pro.service.EmployeeService;

@Service
public class EmpImpl implements EmployeeService
{
	@Autowired
	private EmpRepository empRepo;
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee = EmployeeMapper.mapToEmp(employeeDto);
		Employee savedEmployee = empRepo.save(employee);
		return EmployeeMapper.mapToEmpDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = empRepo.findById(employeeId)
			.orElseThrow( () -> new ResourceNotFoundException("Employee is not exists with the given ID: "+employeeId));
		
		return EmployeeMapper.mapToEmpDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = empRepo.findAll();
		return employees.stream().map(
				(employee) -> EmployeeMapper.mapToEmpDto(employee)
				).collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
		Employee employee = empRepo.findById(employeeId)
			.orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with the given ID: "+ employeeId));
		
		employee.setFirstName(updateEmployee.getFirstName());
		employee.setLastName(updateEmployee.getLastName());
		employee.setEmail(updateEmployee.getEmail());
		
		Employee updatedEmployeeOj = empRepo.save(employee);
		
		return EmployeeMapper.mapToEmpDto(updatedEmployeeOj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee = empRepo.findById(employeeId)
			.orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with the given ID: "+employeeId));
		empRepo.deleteById(employeeId);
	}

}
