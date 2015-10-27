define(["jquery", "TextField", "CheckboxField"],
      function ($, TextField, CheckboxField) {
    function Form() {
        var firstName = new TextField("First name"),
            lastName = new TextField("Last name"),
            username = new TextField("username"),
            homeStreetAddress = new TextField("Street address"),
            homeCity = new TextField("City"),
            homePostalCode = new TextField("Postal code"),
            homeAddressSameAsMailingAddress = new CheckboxField("Mailing address same as home address"),
            mailingStreetAddress = new TextField("Mailing address"),
            mailingCity = new TextField("City"),
            mailingPostalCode = new TextField("Postal code");

        this.render = function () {
            var el = $("<div></div>")
                .append(firstName.render())
                .append(lastName.render())
                .append(username.render())
                .append("<br/>")
                .append(homeStreetAddress.render())
                .append(homeCity.render())
                .append(homePostalCode.render())
                .append("<br/>")
                .append(homeAddressSameAsMailingAddress.render())
                .append(mailingStreetAddress.render())
                .append(mailingCity.render())
                .append(mailingPostalCode.render());

            setupUserNameGeneration();
            setupHomeMailingAddressSync();

            return el;
        };

        function setupUserNameGeneration() {
            var userHasSpecifiedUsername = false;

            $(username).on('change', function() {
              userHasSpecifiedUsername = true;
            });

            $(firstName).on('change', function () {
                generateUserNameIfUserHasNotSpecifiedIt();
            });

            $(lastName).on('change', function () {
                generateUserNameIfUserHasNotSpecifiedIt();
            });

            function generateUserNameIfUserHasNotSpecifiedIt() {
                if (!userHasSpecifiedUsername) {
                    username.val(generateUsername(firstName.val(), lastName.val()));
                }
            }

            function generateUsername(firstName, lastName) {
              return unCapitalize(firstName) + capitalize(lastName);
            }

            function capitalize(s) {
              return s.charAt(0).toUpperCase() + s.slice(1);
            }

            function unCapitalize(s) {
              return s.charAt(0).toLowerCase() + s.slice(1);
            }

        }

        function setupHomeMailingAddressSync() {
          $(homeStreetAddress).on('change', processHomeMailingAddressChangeEvent);
          $(homeCity).on('change', processHomeMailingAddressChangeEvent);
          $(homePostalCode).on('change', processHomeMailingAddressChangeEvent);
          $(homeAddressSameAsMailingAddress).on('change', processHomeMailingAddressChangeEvent);

          function processHomeMailingAddressChangeEvent() {
            if (homeAddressSameAsMailingAddress.val()) {
              copyHomeAddressToMailingAddress();
              toggleMailingAddress(false);
            } else {
              toggleMailingAddress(true);
            }
          }

          function copyHomeAddressToMailingAddress() {
              mailingStreetAddress.val(homeStreetAddress.val());
              mailingCity.val(homeCity.val());
              mailingPostalCode.val(homePostalCode.val());
          }

          function toggleMailingAddress(enabled) {
            var action = enabled ? 'enable' : 'disable';

            mailingStreetAddress[action]();
            mailingCity[action]();
            mailingPostalCode[action]();
          }
        }
    }

    return Form;
});
