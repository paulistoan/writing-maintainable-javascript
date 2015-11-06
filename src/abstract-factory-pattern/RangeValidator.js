define(function () {
    function RangeValidator(fieldName) {
        this.validate = function (value) {
            var valid = $.isNumeric(value.min) &&
                $.isNumeric(value.max) &&
                value.min <= value.max;

            if (!valid) {
                return fieldName +
                    " needs have valid numbers for min and max, and min must be less than or equal to max.";
            } else {
                return null;
            }
        };

        this.rulesAsString = function () {
            return "min > max";
        };
    }

    return RangeValidator;
});