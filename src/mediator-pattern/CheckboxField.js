define(["jquery", "InputField"], function ($, InputField) {
    function CheckboxField(name) {
        var inputField = new InputField(name, 'checkbox');
        $.extend(this, inputField);

        this.val = function () {
            var input = this.getInput();
            if (arguments.length) {
                input.prop('checked', arguments[0]);
            } else {
                return input.prop('checked');
            }
        };
    }

    return CheckboxField;
});