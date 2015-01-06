var init = function (thoughtpad) {
    thoughtpad.subscribe("html-precompile-all-request", addTags);
},

addTags = function *(obj) {
    var config = obj.thoughtpad.config,
        i,
        len;

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
                    if (config.pages.tags.pages.indexOf(config.pages[page].tags[i]) === -1) {
                        config.pages.tags.pages.push(config.pages[page].tags[i]);

                        config.pages[config.pages[page].tags[i]] = {
                            layout: config.pages.tags.tagLayout,
                            title: config.pages[page].tags[i],
                            sortBy: config.pages.tags.sortBy,
                            jsbundle: config.pages.tags.jsbundle,
                            cssbundle: config.pages.tags.cssbundle,
                            url: config.pages.tags.tagUrl,
                            pages: [page]
                        };
                    } else if (config.pages[config.pages[page].tags[i]].pages.indexOf(page) === -1) {
                        config.pages[config.pages[page].tags[i]].pages.push(page);
                    }
                }
            }
        }
    }

};

module.exports = {
    init: init
};