define(function () {
    function TextElementValueRetriever(element) {
        this.getValue = function () {
            return $(element).find('input').val();
        };
    }

    return TextElementValueRetriever;
});