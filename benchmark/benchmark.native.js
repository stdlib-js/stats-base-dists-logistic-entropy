/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var tryRequire = require( '@stdlib/utils-try-require' );
var uniform = require( '@stdlib/random-base-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var entropy = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( entropy instanceof Error )
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var len;
	var mu;
	var s;
	var y;
	var i;

	len = 100;
	mu = new Float64Array( len );
	s = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		mu[ i ] = uniform( -50.0, 50.0 );
		s[ i ] = uniform( EPS, 20.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = entropy( mu[ i % len ], s[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
