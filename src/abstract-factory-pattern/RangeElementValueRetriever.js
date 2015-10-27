define(function () {
    function RangeElementValueRetriever(element) {
        this.getValue = function () {
            return {
                min: $(element).find("input.from").val(),
                max: $(element).find("input.to").val()
            };
        };
    }

    return RangeElementValueRetriever;
});