define([], function () {
    function HtmlTableExporter() {
        var tableColumns = [];
        var tableData = [];

        this.addColumn = function (key, label) {
            var columnIndex = findColumnIndex(key);
            if (columnIndex === -1) {
                tableColumns.push({
                    key: key,
                    label: label
                });
            }
        };

        this.addRow = function (rowData) {
            var values = [];
            _.each(rowData, function (value, key) {
                var columnIndex = findColumnIndex(key);
                if (columnIndex !== -1) {
                    values[columnIndex] = value;
                }
            });
            tableData.push(values);
        };

        this.export = function () {
            var tableEl = $("<table><thead></thead><tbody></tbody></table>");

            var tableHeaderRowEl = generateTableHeaderRow();
            tableEl.find("thead").append(tableHeaderRowEl);

            var tableDataRowEls = generateTableDataRows();
            tableEl.find("tbody").append(tableDataRowEls);

            return tableEl;

            function generateTableHeaderRow() {
                var headerCellEls = tableColumns.map(function (column) {
                    return $("<th>" + column.label + "</th>");
                });
                var trEl = $("<tr></tr>");
                trEl.append(headerCellEls);
                return trEl;
            }

            function generateTableDataRows() {
                return tableData.map(function (rowData) {
                    var trEl = $("<tr></tr>");
                    var tdEls = rowData.map(function (rowValue) {
                        return $("<td>" + rowValue + "</td>");
                    });
                    trEl.append(tdEls);
                    return trEl;
                });
            }
        }

        function findColumnIndex(key) {
            return tableColumns.findIndex(function (column) {
                return column.key === key;
            })
        }
    }

    return HtmlTableExporter;
});