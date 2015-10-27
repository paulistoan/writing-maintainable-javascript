define(function () {
    return {
        searchFields: [{
            type: 'range',
            name: 'Price'
        }, {
            type: 'isbn',
            name: 'ISBN'
        }, {
            type: 'text',
            name: 'Title'
        }, {
            type: 'text',
            name: 'Author'
        }]
    };
});