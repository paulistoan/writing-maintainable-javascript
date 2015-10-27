define(["underscore", "vcards-js"], function (_, vCardFormatter) {

    function VCardExporter() {
        var vCardAccumulator = "";

        this.addColumn = function (key, label) {
            // not relevant
        };

        this.addRow = function (rowData) {
            var vCard = {
                version: 3,
                getMajorVersion: _.constant(3),
                logo: {},
                photo: {},
                firstName: rowData.firstName,
                lastName: rowData.lastName,
                homePhone: rowData.phone,
                homeAddress: {},
                workAddress: {}
            };

            vCardAccumulator += vCardFormatter.getFormattedString(
                vCard);
        };

        this.export = function () {
            return vCardAccumulator;
        }
    }

    return VCardExporter;
});