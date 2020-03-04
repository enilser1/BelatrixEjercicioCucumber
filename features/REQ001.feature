#Author: Enilser Muñoz Soto
#Feature: Ejercicio de Belatrix.
# encoding: iso-8859-1
Feature: Prueba de Trabajo

  Scenario Outline: Examen
    Given Abrimos el navegador y buscamos el sitio de ebay
    When buscamos "<objeto>" 
    And seleccionamos la marca "<marca>" 
    And seleccionamos el tamaño "<tamanio>" 
    And imprimimos resultados
    And ordenamos por "<opcion>" 
    And la cantidad de resultados que tomaremos sera de "<cantidad>" 
    And imprimimos los productos por nombre ascendentemente y por su precio descendetemente
    Then deberia estar todo correcto y cerrar el navegador

    Examples: 
      | objeto | marca | tamanio   |      opcion        | cantidad |
      | shoes  | PUMA  |      10   |    bajo primero    |        5 |
      
