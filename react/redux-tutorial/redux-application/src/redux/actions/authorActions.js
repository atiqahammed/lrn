import * as authorApi from "../../api/authorApi";
import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";

export function loadAuthorsSuccess(authors) {
	return { type: LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
	return (dispatch) => {
		authorApi.getAuthors().then((authors) => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error => {
			throw error;
		});
	};
}