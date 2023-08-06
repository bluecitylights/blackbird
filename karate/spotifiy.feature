Feature: Spotify Api

Background:
  * url 'https://api.spotify.com'
  * def access_token = ''

Scenario: MY preferences
    Given path '/v1/me'
    Given header Authorization = 'Bearer ' + access_token
    When method get
    Then status 200
  