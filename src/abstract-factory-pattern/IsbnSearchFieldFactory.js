define(["TextElementValueRetriever", "IsbnValidator"],
    function (TextElementValueRetriever, IsbnValidator) {
        function IsbnSearchFieldFactory() {
            this.buildElement = function (fieldName) {
                return $("<div>" + fieldName +
                    "<input type='number'></div>");
            };

            this.buildValueRetriever = function (element) {
                return new TextElementValueRetriever(element);
            };

            this.buildValidator = function (fieldName) {
                return new IsbnValidator(fieldName);
            };
        }

        return IsbnSearchFieldFactory;
    });