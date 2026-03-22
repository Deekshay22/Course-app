package com.CourseApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CourseApp.Entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
