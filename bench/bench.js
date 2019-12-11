/* globals bench suite set */
'use strict';
const camelcaseKeysNpm = require('camelcase-keys');
const fixture = require('./fixture');
const fixtureCamelCase = require('./fixture_camelCase');
const camelcaseKeys = require('..');

suite('camelcaseKeys', () => {
	set('mintime', 1000);

	bench('npm', () => {
		camelcaseKeysNpm(fixture, {deep: true});
	});

	bench('master', () => {
		const teste = camelcaseKeys(fixture, {deep: true});
	});

	bench('camelCase_snakeCase', () => {
		camelcaseKeys(fixtureCamelCase, {deep: true, kindCase: 'snakeCase'});
	});
});
