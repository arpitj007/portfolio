export const URL_CONSTANTS = {
	BIO: 'bio',
	WORK: {
		TRUSTCLOUD: 'trustcloud',
		QULOI: 'quloi',
		INDIANIC: 'indianic',
		FREELANCE: 'freelance',
	},
	EDUCATION: 'education',
	RANDOM: {
		PLAYLIST: 'playlist',
		MOVIES: 'movies',
		CHESS: 'chess',
		PS5: 'ps5',
	},
};

export const ROUTE_CONSTANTS = {
	HOME: '/portfolio/_hello',
	ABOUT: '/portfolio/_about-me',
	PROJECTS: '/portfolio/_projects',
	CONTACT: '/portfolio/_contact',
};

export const MOVE_TO_NEXT_PAGE = {
	bio: {
		text: 'Like my profile? check out 👇🏼',
		buttonText: 'My Bio 📓',
		url: `${ROUTE_CONSTANTS.ABOUT}?tab=${URL_CONSTANTS.BIO}`,
	},
};
