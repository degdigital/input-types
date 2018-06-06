function generateRandomId(prefix = null) {
    return `${prefix ? `${prefix}-` : ''}${new Date().getTime()}`;
}

export {
	generateRandomId
};