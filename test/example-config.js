module.exports = {
    topPages: ['home', 'anotherpage'],
    pages: {
        home: {
            url: 'home.html',
            publish: true,
            tags: [
                'tag1',
                'tag2',
                'tag3'
            ]
        },
        anotherpage: {
            url: 'test.html',
            publish: true,
            tags: [
                'tag2',
                'tag3',
                'tag 4'
            ]
        },
        tag3: {
            url: 'test.html',
            publish: true,
            customField: 'foo'
        },
        tags: {
            tagLayout: 'layout1',
            tagUrl: 'something',
            sortBy: 'sorted'
        }
    }
}