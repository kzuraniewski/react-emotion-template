// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
export default {
	singleQuote: true,
	semi: true,

	plugins: ['@ianvs/prettier-plugin-sort-imports'],

	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@/tests/(.*)$',
		'^@/lib/(.*)$',
		'^@/api/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/(.*)$',
		'',
		'^[../]',
		'^[./]',
		'',
		'^@/types',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
};
