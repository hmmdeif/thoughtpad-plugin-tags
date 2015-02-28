thoughtpad-plugin-tags
======================

[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

A thoughtpad plugin that adds the ability to tag post content and automatically generate the pages for those tags

## Usage

The plugin should be loaded using the [thoughtpad-plugin-manager](https://github.com/thoughtpad/thoughtpad-plugin-manager). Once this has been done then the plugin will respond to events. To use standalone:

```JavaScript
var man = require('thoughtpad-plugin-manager'),
    tags = require('thoughtpad-plugin-tags');

yield thoughtpad.notify("html-precompile-all-request");
```

## Config File Setup

The pages for the tags will be automatically setup as long as you include a `tags` object in the config `pages` object:

```JavaScript
pages: {
    tags: {
        jsbundle: 'the bundle you want your tag pages to use',
        cssbundle: 'the bundle you want your tag pages to use',
        sortBy: 'the property to sort the pages on for your tag pages',
        tagLayout: 'the layout that the tag pages should use',
        tagUrl: 'the page to compile for each tag page',
        layout: 'the layout to be used for the root tag page',
        title: 'the title to use for the root tag page'
    }
}
```

## Tests

Ensure you have globally installed mocha - `npm -g install mocha`. Then you can run:

`mocha`

Alternatively if you are in a *NIX environment `npm test` will run the tests plus coverage data.

## License

The code is available under the [MIT license](http://deif.mit-license.org/).

[travis-image]: https://img.shields.io/travis/thoughtpad/thoughtpad-plugin-tags/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/thoughtpad/thoughtpad-plugin-tags
[coveralls-image]: https://img.shields.io/coveralls/thoughtpad/thoughtpad-plugin-tags/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thoughtpad/thoughtpad-plugin-tags?branch=master