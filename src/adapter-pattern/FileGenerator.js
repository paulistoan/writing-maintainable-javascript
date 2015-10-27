define([], function () {
    function FileGenerator() {
        this.generateFile = function (filename, contents) {

            // http://stackoverflow.com/questions/17836273/export-javascript-data-to-csv-file-without-server-interaction
            var a = document.createElement('a');
            a.href = 'data:attachment/csv,' + contents;
            a.target = '_blank';
            a.download = filename;

            document.body.appendChild(a);
            a.click();
        };
    }

    return FileGenerator;
});