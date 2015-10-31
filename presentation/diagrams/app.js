requirejs.config({
    "paths": {
        "jquery": "lib/jquery.min",
        "lodash": "lib/lodash.min",
        "backbone": "lib/backbone-min",
        "joint": "lib/joint.min",
        "underscore": "lib/underscore.min"
    }
});

define(["jquery", "lodash", "backbone", "joint", "AdapterPattern"],
    function($, _, Backbone, joint, AdapterPattern) {

    $(document).ready(initialize);

    function initialize() {
        var adapterPattern = new AdapterPattern($(".adapter-pattern"));
        adapterPattern.render();
    }
});
