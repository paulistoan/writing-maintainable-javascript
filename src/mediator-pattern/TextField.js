define(["jquery", "InputField"], function ($, InputField) {
    function TextField(name) {
      var inputField = new InputField(name, 'text');
      $.extend(this, inputField);

      this.val = function() {
        var input = this.getInput();
        if (arguments.length) {
          input.val(arguments[0]);
        } else {
          return input.val();
        }
      };

    }

    return TextField;
});
