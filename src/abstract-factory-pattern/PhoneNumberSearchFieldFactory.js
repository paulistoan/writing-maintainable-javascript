define(["TextElementValueRetriever", "PhoneNumberValidator"],
    function (TextElementValueRetriever, PhoneNumberValidator) {
        function PhoneNumberSearchFieldFactory() {
            this.buildElement = function (fieldName) {
                return $("<span> " + fieldName +
                    "<input type='text'></span>");
            };

            this.buildValueRetriever = function (element) {
                return new TextElementValueRetriever(element);
            };

            this.buildValidator = function (fieldName) {
                return new PhoneNumberValidator(fieldName);
            };
        }

        return PhoneNumberSearchFieldFactory;
    });