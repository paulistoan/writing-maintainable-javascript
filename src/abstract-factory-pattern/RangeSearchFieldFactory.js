define(["RangeElementValueRetriever", "RangeValidator"],
    function (RangeElementValueRetriever, RangeValidator) {
        function RangeSearchFieldFactory() {
            this.buildElement = function (fieldName) {
                return $("<div>" + fieldName +
                    "<input class='from'> to <input class='to'>");
            };

            this.buildValueRetriever = function (element) {
                return new RangeElementValueRetriever(element);
            };

            this.buildValidator = function (fieldName) {
                return new RangeValidator(fieldName);
            };
        }

        return RangeSearchFieldFactory;
    });