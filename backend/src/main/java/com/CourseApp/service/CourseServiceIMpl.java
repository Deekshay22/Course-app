package com.CourseApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.CourseApp.Entity.Course;
import com.CourseApp.repository.CourseRepository;

public class CourseServiceIMpl implements CourseService  {
	
	@Autowired
	CourseRepository courseRepo;
	

	@Override
	public Course create(Course course) {
		
		return courseRepo.save(course);
	}

	@Override
	public Course getById(Long id) {
		// TODO Auto-generated method stub
		return courseRepo.findById(id).orElseThrow(()-> new RuntimeException("id is not present"));
	}

	@Override
	public List<Course> getAllCourses(Course course) {
		// TODO Auto-generated method stub
		List<Course> courses=courseRepo.findAll();
		courses.stream().map(t ->  )
		return 
	}

	@Override
	public void updateCourse(Long id) {
		// TODO Auto-generated method stub
		
	}

}
