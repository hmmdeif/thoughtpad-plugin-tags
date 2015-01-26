var should = require('should'),
    app = require('./../src/main'),
    co = require('co'),
    man = require('thoughtpad-plugin-manager'),
    config = require('./example-config'),
    anotherconfig = require('./example-config2'),
    incorrectconfig = require('./incorrect-config'),
    thoughtpad;

describe("tags plugin", function () {
    it("should not do anything if the tags page doesn't exist", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = incorrectconfig;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.topPages.should.have.length(2);
        })();
    });


    it("should add tags to top pages so it compiles", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.topPages.should.have.length(3);
        })();
    });

    it("should not add duplicate top pages if it already exists in the config", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = anotherconfig;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.topPages.should.have.length(3);
        })();
    });

    it("should create alternative name if the tag page name already exists", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.pages['tag-tag3'];
            thoughtpad.config.pages.tag3.customField.should.eql('foo');
        })();
    });

    it("should create the tag pages with correct config", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.pages.tag1.should.have.property('layout', 'layout1');
            thoughtpad.config.pages.tag2.should.have.property('url', 'something');
            thoughtpad.config.pages['tag-tag3'].should.have.property('sortBy', 'sorted');
        })();
    });

    it("should correctly categorise the pages in each tag", function () {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;

        co(function *() {
            yield thoughtpad.notify("html-precompile-all-request");
            thoughtpad.config.pages.tag2.pages.should.eql(['home', 'anotherpage']);
            thoughtpad.config.pages['tag-4'].pages.should.eql(['anotherpage']);
        })();
    });
});