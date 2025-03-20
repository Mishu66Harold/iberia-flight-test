Feature: Buscar vuelos en Iberia

  Scenario: Buscar vuelo de ida y vuelta con 2 adultos y 1 niño
    Given El usuario está en la página de inicio de Iberia
    When Selecciona un billete de ida y vuelta de Barcelona a Madrid
    And Ingresa 2 adultos y 1 niño
    And Selecciona fechas de salida y regreso
    And Hace click en "Buscar vuelos"
    Then Debe ver una lista de vuelos disponibles