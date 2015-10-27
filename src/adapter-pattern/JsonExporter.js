define([], function () {
    return JsonExporter;

    function JsonExporter() {
        var dataAccumulator = [];

        this.addColumn = function (key, label) {
            // not relevant
        };

        this.addRow = function (rowData) {
            dataAccumulator.push(rowData);
        };

        this.export = function () {
            return JSON.stringify(dataAccumulator, null, 2);
        }
    }
});