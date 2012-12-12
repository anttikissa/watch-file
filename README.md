# watch-file

Shell utility for watching file changes.

Intended to be used like:

	while watch-file test.c; do gcc test.c -o test && ./test; done

## Usage

	watch-file <files...>

Watches all files specified as arguments.  When one of them changes, exits.

