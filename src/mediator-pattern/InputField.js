define(["jquery"], function ($) {
    function InputField(name, inputType) {
        var value,
            el;

        this.render = function () {
            deregisterChangeHandler();
            el = buildInputEl.call(this);
            registerChangeHandler.call(this);
            return el;
        };

        this.enable = function () {
            this.getInput().removeAttr('disabled');
        }

        this.disable = function () {
            this.getInput().attr('disabled', true);
        }

        this.getInput = function () {
            return el.find('input');
        }

        function deregisterChangeHandler() {
            if (el) {
                el.off('change');
            }
        }

        function registerChangeHandler() {
            var that = this;
            el.on('change', function () {
                $(that).trigger('change');
            });
        }

        function buildInputEl() {
            return $("<div><span class='name'>" + name +
                ": </span>" +
                "<input type='" + inputType + "'>" +
                "</div>");
        }
    };

    return InputField;
});