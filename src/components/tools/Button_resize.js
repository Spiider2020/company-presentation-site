export const btnResize = (default_size) => {
	if (window.innerWidth < 768) {
		return 'btn--mobile';
	} else if (window.innerWidth < 1025 && default_size !== 'btn--wide') {
		return 'btn--small';
	} else {
		return default_size;
	}
};
