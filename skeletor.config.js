module.exports = {
	tasks: [
		{
			name: 'build',
			subTasks: [
				require('./skeletor/build/css.config.js'),
				require('./skeletor/build/js.config.js'),
				require('./skeletor/build/html.config.js'),
				require('./skeletor/build/patterns.config.js'),
				require('./skeletor/build/static.config.js')
			]
		},
		{
			name: 'watch',
			subTasks: [
				require('./skeletor/watch.config.js')
			]
		}
	]
}