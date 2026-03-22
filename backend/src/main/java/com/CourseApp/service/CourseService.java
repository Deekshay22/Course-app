package com.CourseApp.service;

import java.util.List;

import com.CourseApp.Entity.Course;

public interface CourseService {
	Course create(Course course);
	
	Course getById(Long id);
	
	List<Course> getAllCourses(Course course);
	
	void updateCourse(Long id);
}
