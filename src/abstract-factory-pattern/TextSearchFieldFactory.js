define(["TextElementValueRetriever", "TextValidator"],
    function (TextElementValueRetriever, TextValidator) {
        function TextSearchFieldFactory() {
            this.buildElement = function (fieldName) {
                return $("<div>" + fieldName +
                    "<input type='text'></div>");
            };

            this.buildValueRetriever = function (element) {
                return new TextElementValueRetriever(element);
            };

            this.buildValidator = function (fieldName) {
                return new TextValidator(fieldName);
            };
        }

        return TextSearchFieldFactory;
    });