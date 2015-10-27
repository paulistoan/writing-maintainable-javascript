define(function () {
    function IsbnValidator(fieldName) {
        var onlyDigits = /^\d+$/;
        this.validate = function (value) {
            if (onlyDigits.test(value) && (value.length == 10 ||
                    value.length == 13)) {
                return null;
            } else {
                return fieldName +
                    " needs to contain either 10 or 13 digits.";
            }
        };
    }

    return IsbnValidator;
});