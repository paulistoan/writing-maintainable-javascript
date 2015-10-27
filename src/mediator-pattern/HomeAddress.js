define(["jquery"], function ($) {
    function City() {
        var val,
            el;
        return {
            this.render = function () {
                el = $("<div><input type='text'></div>");
                return el;
            };

            this.val: function () {
                if (arguments.length) {
                    el.val(arguments[0]);
                } else {
                    return el.val();
                }
            }
        };
    };

    return City;
});