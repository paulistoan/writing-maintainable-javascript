requirejs.config({
    "paths": {
        "jquery": "lib/jquery-1.11.3.min"
    }
});

define(["jquery", "config",
        "RangeSearchFieldFactory", "PhoneNumberSearchFieldFactory",
        "TextSearchFieldFactory"
    ],
    function ($, config,
        RangeSearchFieldFactory, PhoneNumberSearchFieldFactory,
        TextSearchFieldFactory) {
        $(document).ready(initialize);

        function initialize() {
            var searchFields = initializeSearchFields();

            createSearchFieldElements();
            appendSearchFieldElementsToDom();
            initializeValueRetrieversOnSearchFields();
            initializeValidatorsOnSearchFields();
            appendValidatorRulesToSearchFields();
            setupValidateEventHandler();
            setupJsonExporter();

            function initializeSearchFields() {
                return config.searchFields.map(function (searchFieldConfig) {
                    var factory;
                    if (searchFieldConfig.type === 'range') {
                        factory = new RangeSearchFieldFactory();
                    } else if (searchFieldConfig.type ===
                        'phoneNumber') {
                        factory = new PhoneNumberSearchFieldFactory();
                    } else {
                        factory = new TextSearchFieldFactory();
                    }

                    return {
                        config: searchFieldConfig,
                        factory: factory
                    };
                });
            }

            function createSearchFieldElements() {
                searchFields.forEach(function (searchField) {
                    searchField.element = searchField.factory.buildElement(
                        searchField.config.name);
                });
            }

            function appendSearchFieldElementsToDom() {
                var elements = searchFields.map(function (searchField) {
                    return $("<div class='search-field'></div>")
                        .append(searchField.element);
                });

                $(".search-container .fields").append(elements);
            }

            function initializeValueRetrieversOnSearchFields() {
                searchFields.forEach(function (searchField) {
                    searchField.valueRetriever = searchField.factory
                        .buildValueRetriever(searchField.element);
                });
            }

            function initializeValidatorsOnSearchFields() {
                searchFields.map(function (searchField) {
                    searchField.validator = searchField.factory.buildValidator(
                        searchField.config.name);
                });
            }

            function appendValidatorRulesToSearchFields() {
                searchFields.map(function (searchField) {
                    var rules = searchField.validator.rulesAsString();
                    if (rules) {
                        $(searchField.element).after("<span>" +
                            rules + "</span>");
                    }
                });
            }

            function setupValidateEventHandler() {
                $(".search-container button.validate").click(function () {
                    setErrorClassOnInvalidFields();
                    addErrorMessageElements();

                    function setErrorClassOnInvalidFields() {
                        searchFields.forEach(function (searchField) {
                            var hasError = searchField.validator
                                .validate(
                                    searchField.valueRetriever
                                    .getValue()
                                );
                            searchField.element.toggleClass(
                                'error', !!hasError);
                        });
                    }

                    function addErrorMessageElements() {
                        var errorMessageElements = searchFields
                            .map(function (searchField) {
                                return searchField.validator.validate(
                                    searchField.valueRetriever
                                    .getValue()
                                );
                            })
                            .filter(function (errorMessage) {
                                return !!errorMessage;
                            })
                            .map(function (errorMessage) {
                                return $("<div>" + errorMessage +
                                    "</div>");
                            });

                        $(".search-container .validation-errors")
                            .empty()
                            .append(errorMessageElements);
                    }
                });
            }

            function setupJsonExporter() {
                $(".search-container button.to-json").click(function () {
                    var values = buildValuesObject();

                    $(".search-container .json-output")
                        .empty()
                        .append(JSON.stringify(values, null, 2));
                });

                function buildValuesObject() {
                    return searchFields.reduce(function (memo, searchField) {
                        memo[searchField.config.name] = searchField
                            .valueRetriever.getValue();
                        return memo;
                    }, {});
                }
            }
        }
    });