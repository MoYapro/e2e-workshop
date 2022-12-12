Feature: Demo 

  Scenario: Select date
    Given I am on page "/resources/demos/datepicker/default.html"
    When I open datepicker
    When I select day "1"
    Then I see date "11111111"
    Then I pause


