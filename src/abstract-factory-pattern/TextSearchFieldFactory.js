define(["TextElementValueRetriever", "TextValidator"],
    function (TextElementValueRetriever, TextValidator) {
        function TextSearchFieldFactory() {
            this.buildElement = function (fieldName) {
                return $("<span> " + fieldName +
                    "<input type='text'></span>");
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