import { CREATE_COURSE, LOAD_COURSES_SUCCESS, LOAD_COURSE_BY_SLUG_SUCCESS } from "../actions/actionTypes";

export default function courseReduces(state = [], action) {
	switch (action.type) {
		case CREATE_COURSE:
			return [ ...state, {...action.course}];
		case LOAD_COURSES_SUCCESS:
			return action.courses;
		case LOAD_COURSE_BY_SLUG_SUCCESS:
			return action.course;
		default:
			return state;
	}
}