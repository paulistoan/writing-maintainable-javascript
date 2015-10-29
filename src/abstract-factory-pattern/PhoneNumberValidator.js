define(function () {
    function PhoneNumberValidator(fieldName) {
        var phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        this.validate = function (value) {
            if (phoneNumberRegex.test(value)) {
                return null;
            } else {
                return fieldName +
                    " needs to be in the format (###) ###-####.";
            }
        };
    }

    return PhoneNumberValidator;
});
