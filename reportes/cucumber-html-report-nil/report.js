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
  "name": "buscamos \"\u003cobjeto\u003e\" luego elegimos la marca \"\u003cmarca\u003e\" con el tamaño \"\u003ctamanio\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "ejecutamos los demas procesos de la prueba",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "se deberia tener como minimo \"\u003ccantidad\u003e\" registros para la pregunta siete",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "prueba-de-trabajo;examen;",
  "rows": [
    {
      "cells": [
        "objeto",
        "marca",
        "tamanio",
        "cantidad"
      ],
      "line": 13,
      "id": "prueba-de-trabajo;examen;;1"
    },
    {
      "cells": [
        "shoes",
        "PUMA",
        "10",
        "5"
      ],
      "line": 14,
      "id": "prueba-de-trabajo;examen;;2"
    },
    {
      "cells": [
        "shoes",
        "PRADA",
        "9.5",
        "5"
      ],
      "line": 15,
      "id": "prueba-de-trabajo;examen;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
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
  "name": "buscamos \"shoes\" luego elegimos la marca \"PUMA\" con el tamaño \"10\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "ejecutamos los demas procesos de la prueba",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "se deberia tener como minimo \"5\" registros para la pregunta siete",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaEnilser.abrimos_el_navegador_y_buscamos_el_sitio_de_ebay()"
});
formatter.result({
  "duration": 7688965288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 10
    },
    {
      "val": "PUMA",
      "offset": 42
    },
    {
      "val": "10",
      "offset": 63
    }
  ],
  "location": "PruebaEnilser.buscamos_luego_elegimos_la_marca_con_el_tamaño(String,String,String)"
});
formatter.result({
  "duration": 38929987121,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"PUMA\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EQUIPO\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65334}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9b2c0cdc3a8fc5b14865ee612d93e92f\n*** Element info: {Using\u003dlink text, value\u003dPUMA}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.belatrix.pages.PruebaEnilser.buscamos_luego_elegimos_la_marca_con_el_tamaño(PruebaEnilser.java:47)\r\n\tat ✽.When buscamos \"shoes\" luego elegimos la marca \"PUMA\" con el tamaño \"10\"(REQ001.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PruebaEnilser.ejecutamos_los_demas_procesos_de_la_prueba()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PruebaEnilser.se_deberia_tener_como_minimo_registros_para_la_pregunta_siete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Examen",
  "description": "",
  "id": "prueba-de-trabajo;examen;;3",
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
  "name": "buscamos \"shoes\" luego elegimos la marca \"PRADA\" con el tamaño \"9.5\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "ejecutamos los demas procesos de la prueba",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "se deberia tener como minimo \"5\" registros para la pregunta siete",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PruebaEnilser.abrimos_el_navegador_y_buscamos_el_sitio_de_ebay()"
});
formatter.result({
  "duration": 9897276190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 10
    },
    {
      "val": "PRADA",
      "offset": 42
    },
    {
      "val": "9.5",
      "offset": 64
    }
  ],
  "location": "PruebaEnilser.buscamos_luego_elegimos_la_marca_con_el_tamaño(String,String,String)"
});
formatter.result({
  "duration": 15552744064,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"PRADA\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EQUIPO\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49236}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 31b462773c28ec4c34ac650e39ed5ba6\n*** Element info: {Using\u003dlink text, value\u003dPRADA}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.belatrix.pages.PruebaEnilser.buscamos_luego_elegimos_la_marca_con_el_tamaño(PruebaEnilser.java:47)\r\n\tat ✽.When buscamos \"shoes\" luego elegimos la marca \"PRADA\" con el tamaño \"9.5\"(REQ001.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PruebaEnilser.ejecutamos_los_demas_procesos_de_la_prueba()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PruebaEnilser.se_deberia_tener_como_minimo_registros_para_la_pregunta_siete(String)"
});
formatter.result({
  "status": "skipped"
});
});