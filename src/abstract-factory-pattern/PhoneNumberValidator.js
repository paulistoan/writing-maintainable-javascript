define(function () {
    function PhoneNumberValidator(fieldName) {
        var digitRegex = /^\d{1,10}$/;
        this.validate = function (value) {
            if (digitRegex.test(value)) {
                return null;
            } else {
                return fieldName +
                    " must contain only digits and cannot exceed 10 digits.";
            }
        };

        this.rulesAsString = function () {
            return "Only digits and must not exceed 10 digits.";
        };
    }

    return PhoneNumberValidator;
});