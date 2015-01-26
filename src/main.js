var init = function (thoughtpad) {
    thoughtpad.subscribe("html-precompile-all-request", addTags);
},

addTags = function *(obj) {
    var config = obj.thoughtpad.config,
        i,
        len,
        tagName;

    // Only add tags if the tag page is in the config
    if (config.pages.tags) {
        if (config.topPages && config.topPages.indexOf('tags') === -1) {
            config.topPages.push('tags');
        }

        if (!config.pages.tags.pages) {
            config.pages.tags.pages = [];
        }

        // Loop through the pages and add the tag pages
        for (page in config.pages) {
            if (config.pages[page].tags) {
                i = 0;
                len = config.pages[page].tags.length;

                for (i; i < len; i++) {
                    tagName = config.pages[page].tags[i].replace(' ', '-');

                    // Make the page unique if a tag is named the same as a user page (simple)
                    if (config.pages[tagName] && !config.pages[tagName].tagPage) {
                        tagName = 'tag-' + config.pages[page].tags[i];
                    }

                    if (config.pages.tags.pages.indexOf(tagName) === -1) {
                        config.pages.tags.pages.push(tagName);

                        config.pages[tagName] = {
                            layout: config.pages.tags.tagLayout,
                            title: tagName,
                            sortBy: config.pages.tags.sortBy,
                            jsbundle: config.pages.tags.jsbundle,
                            cssbundle: config.pages.tags.cssbundle,
                            url: config.pages.tags.tagUrl,
                            pages: [page],
                            tagPage: true
                        };
                    } else if (config.pages[tagName].pages.indexOf(page) === -1) {
                        config.pages[tagName].pages.push(page);
                    }
                }
            }
        }
    }

};

module.exports = {
    init: init
};
