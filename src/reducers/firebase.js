const initialState = null;

export function firebaseURL(state = initialState, action) {
	switch (action.type) {
	case 'FIREBASE_URL_SET':
		return action.url
	default:
		return state
	}
}