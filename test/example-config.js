module.exports = {
    topPages: ['home', 'anotherpage'],
    pages: {
        home: {
            url: 'home.html',
            tags: [
                'tag1',
                'tag2',
                'tag3'
            ]
        },
        anotherpage: {
            url: 'test.html',
            tags: [
                'tag2',
                'tag3',
                'tag 4'
            ]
        },
        tag3: {
            url: 'test.html',
            customField: 'foo'
        },
        tags: {
            tagLayout: 'layout1',
            tagUrl: 'something',
            sortBy: 'sorted'
        }
    }
}