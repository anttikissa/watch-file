# watch-file

Shell utility for watching file changes.

Intended to be used like:

	while watch-file test.c; do gcc test.c -o test && ./test; done

## Installation

Install npm.  (Comes with [Node.js](http://nodejs.org/)).

	npm install -g watch-file

## Usage

	watch-file <files...>

Wait until one of the files changes, then exit.

