import { CREATE_COURSE, LOAD_COURSES_SUCCESS, LOAD_COURSE_BY_SLUG_SUCCESS } from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
	return { type: CREATE_COURSE, course };
}

export function loadCoursesSucccess(courses) {
	return { type: LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
	return (dispatch) => {
		courseApi.getCourses().then((courses) => {
			dispatch(loadCoursesSucccess(courses));
		}).catch(error => {
			throw error;
		});
	}
}

export function loadCourseBySlugSuccess(course) {
	return { type: LOAD_COURSE_BY_SLUG_SUCCESS, course };
}

export function loadCourseBySlug(slug) {
	debugger
	return (dispatch) => {
		courseApi.getCourseBySlug(slug).then((course) => {
			dispatch(loadCourseBySlugSuccess(course));
		}).catch(error => {
			console.log(error);
			throw error;
		})
	};
}