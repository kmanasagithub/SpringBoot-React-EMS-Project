package com.pro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pro.entity.Employee;

public interface EmpRepository extends JpaRepository<Employee, Long>{

}
