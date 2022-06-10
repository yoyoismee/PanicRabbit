import OptionsSync from 'webext-options-sync';

export default new OptionsSync({
	defaults: {
		Keyword: 'nope',
		Scam: 'nope',
		Reported: 'nope',
		KindaLookAlike: 'nope',
	},
	migrations: [
		OptionsSync.migrations.removeUnused,
	],
	logging: true,
});
