package com.CourseApp.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CourseApp.Entity.Course;
import com.CourseApp.service.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@PostMapping
	public Course create(@RequestBody Course course) {
		return courseService.create(course);
	}
	
	//get single courses 	
	@GetMapping("/{id}")
	public Course getById(@PathVariable Long id) {
		return courseService.getById(id);
	}
	
	// get all the courses	
	@GetMapping("/courses")
	public List<Course> getAllCourses() {
		return courseService.getAllCourses();	
	}
	
	// update course using id 	
	@PutMapping("/{id}")
	public Course updateCourse(@PathVariable Long id, @RequestBody Course course) {
		return courseService.updateCourse(id, course);
		
	}
	
	
	@DeleteMapping("/{id}")
	public void deleteCourse(@PathVariable Long id) {
		courseService.deleteCourse(id);
	}
	
	
}
