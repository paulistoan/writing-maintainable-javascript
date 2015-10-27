requirejs.config({
    "paths": {
        "jquery": "lib/jquery-1.11.3.min",
        "underscore": "lib/underscore-min",
        "moment": "lib/moment.min",
        "vcards-js": "lib/vCardFormatter"
    },
    "shim": {
        "vcards-js": {
            deps: ['moment']
        }
    }
});

define(["jquery", "underscore", "data", "HtmlTableExporter",
    "JsonExporter", "VCardExporter", "FileGenerator"
], function (
    $, _, data, HtmlTableExporter, JsonExporter, VCardExporter, FileGenerator) {

    $(document).ready(initialize);

    function generateHtmlTable() {
        var htmlTableExporter = new HtmlTableExporter();
        populate(htmlTableExporter);

        $("table.patients")
            .empty()
            .append(htmlTableExporter.export());
    }

    function generateJson() {
        var jsonExporter = new JsonExporter();
        populate(jsonExporter);

        $("pre.json-patients")
            .empty()
            .append(jsonExporter.export());
    }

    function generateVCard() {
        var vCardExporter = new VCardExporter();
        populate(vCardExporter);

        generateFile('contacts.vcf', vCardExporter.export());

        // TODO: debug absence of newlines
        function generateFile(filename, contents) {
            var fileGenerator = new FileGenerator();
            fileGenerator.generateFile(filename, contents);
        };
    }

    function populate(exporter) {
        data.keyLabelMappings.forEach(function (keyLabelMapping) {
            exporter.addColumn(keyLabelMapping.key, keyLabelMapping.label);
        });
        data.patients.forEach(function (patient) {
            exporter.addRow(patient);
        });
    }

    function initialize() {
        $("button.generate-html-table").click(generateHtmlTable);
        $("button.generate-json").click(generateJson);
        $("button.generate-vcard").click(generateVCard);
    }
});