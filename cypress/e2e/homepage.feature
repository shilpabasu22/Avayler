Feature: Home page
  As a user I want to visit Avayler homepage

  Scenario Outline: verify Avayler home page '<menu>'
    Given I navigate to Home page
    When I search for '<menu>' item
    Then I am displayed the '<url>'
    Examples:
      | menu            | url                                     |
      | ABOUT US        | https://www.avayler.com/about-us        |
      | PRODUCTS        | https://www.avayler.com/products        |
      | INDUSTRIES      | https://www.avayler.com/industries      |
      | RESOURCE CENTER | https://www.avayler.com/resource-center |
      | CONTACT US      | https://www.avayler.com/contact-us      |

