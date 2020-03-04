$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("REQ001.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Enilser Muñoz Soto"
    },
    {
      "line": 2,
      "value": "#Feature: Ejercicio de Belatrix."
    },
    {
      "line": 3,
      "value": "# encoding: iso-8859-1"
    }
  ],
  "line": 4,
  "name": "Prueba de Trabajo",
  "description": "",
  "id": "prueba-de-trabajo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Examen",
  "description": "",
  "id": "prueba-de-trabajo;examen",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Abrimos el navegador y buscamos el sitio de ebay",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "buscamos \"\u003cobjeto\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "seleccionamos la marca \"\u003cmarca\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "seleccionamos el tamaño \"\u003ctamanio\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "imprimimos resultados",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "ordenamos por \"\u003copcion\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "la cantidad de resultados que tomaremos sera de \"\u003ccantidad\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "imprimimos los productos por nombre ascendentemente y por su precio descendetemente",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "deberia estar todo correcto y cerrar el navegador",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "prueba-de-trabajo;examen;",
  "rows": [
    {
      "cells": [
        "objeto",
        "marca",
        "tamanio",
        "opcion",
        "cantidad"
      ],
      "line": 18,
      "id": "prueba-de-trabajo;examen;;1"
    },
    {
      "cells": [
        "shoes",
        "PUMA",
        "10",
        "bajo primero",
        "5"
      ],
      "line": 19,
      "id": "prueba-de-trabajo;examen;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Examen",
  "description": "",
  "id": "prueba-de-trabajo;examen;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Abrimos el navegador y buscamos el sitio de ebay",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "buscamos \"shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "seleccionamos la marca \"PUMA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "seleccionamos el tamaño \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "imprimimos resultados",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "ordenamos por \"bajo primero\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "la cantidad de resultados que tomaremos sera de \"5\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "imprimimos los productos por nombre ascendentemente y por su precio descendetemente",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "deberia estar todo correcto y cerrar el navegador",
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaEnilser.abrimos_el_navegador_y_buscamos_el_sitio_de_ebay()"
});
formatter.result({
  "duration": 13298415900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 10
    }
  ],
  "location": "PruebaEnilser.buscamos(String)"
});
formatter.result({
  "duration": 5918303000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PUMA",
      "offset": 24
    }
  ],
  "location": "PruebaEnilser.seleccionamos_la_marca(String)"
});
formatter.result({
  "duration": 859656700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    }
  ],
  "location": "PruebaEnilser.seleccionamos_el_tamaño(String)"
});
formatter.result({
  "duration": 1716807600,
  "status": "passed"
});
formatter.match({
  "location": "PruebaEnilser.imprimimos_resultados()"
});
formatter.result({
  "duration": 1192609200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bajo primero",
      "offset": 15
    }
  ],
  "location": "PruebaEnilser.ordenamos_por(String)"
});
formatter.result({
  "duration": 3301732700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 49
    }
  ],
  "location": "PruebaEnilser.la_cantidad_de_resultados_que_tomaremos_sera_de(String)"
});
formatter.result({
  "duration": 1257174100,
  "status": "passed"
});
formatter.match({
  "location": "PruebaEnilser.imprimimos_los_productos_por_nombre_ascendentemente_y_por_su_precio_descendetemente()"
});
formatter.result({
  "duration": 16873463000,
  "status": "passed"
});
formatter.match({
  "location": "PruebaEnilser.deberia_estar_todo_correcto_y_cerrar_el_navegador()"
});
formatter.result({
  "duration": 290361400,
  "status": "passed"
});
});