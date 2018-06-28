function generateRandomId(prefix = null) {
    return `${prefix ? `${prefix}-` : ''}${new Date().getTime()}`;
}

function getUrlSegment(index = 1) {
	const segments = window.location.pathname.split('/');
	return segments[index] ? segments[index] : null;
}

export {
	generateRandomId,
	getUrlSegment
};