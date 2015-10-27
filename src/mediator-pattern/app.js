requirejs.config({
    "paths": {
        "jquery": "lib/jquery-1.11.3.min",
    }
});

define(["jquery", "Form"], function ($, Form) {

    $(document).ready(initialize);

    function initialize() {
        var form = new Form();

        $("div.app")
            .empty()
            .append(form.render());
    }
});