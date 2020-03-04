package com.belatrix.tests;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.belatrix.pages.EbayDetalle;
import com.belatrix.pages.EbayPrincipal;

//import com.edu.eam.pruebasdeaceptacion.clases.Controlador;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PruebaEnilser {


	EbayPrincipal ebayPrincipal;
	EbayDetalle ebayDetalle;
	
	
	@Given("^Abrimos el navegador y buscamos el sitio de ebay$")
	public void abrimos_el_navegador_y_buscamos_el_sitio_de_ebay() throws Throwable {
		ebayPrincipal = new EbayPrincipal();
		ebayDetalle = new EbayDetalle();
		ebayPrincipal.pagina("https://www.ebay.com/");
	}

	@When("^buscamos \"([^\"]*)\"$")
	public void buscamos(String objeto) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		ebayPrincipal.ingresarProducto(objeto);
		ebayPrincipal.buscarProducto();
	}

	@When("^seleccionamos la marca \"([^\"]*)\"$")
	public void seleccionamos_la_marca(String marca) throws Throwable {
		ebayDetalle.seleccionarMarca(marca);
	}

	@When("^seleccionamos el tamaño \"([^\"]*)\"$")
	public void seleccionamos_el_tamaño(String tamanio) throws Throwable {
		ebayDetalle.seleccionarTamaño(tamanio);
	}

	@When("^imprimimos resultados$")
	public void imprimimos_resultados() throws Throwable {
		ebayDetalle.obtenernumeroResultados();
		
	}

	@When("^ordenamos por \"([^\"]*)\"$")
	public void ordenamos_por(String opcion) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		ebayDetalle.ordenarPor(opcion);
	}

	@When("^la cantidad de resultados que tomaremos sera de \"([^\"]*)\"$")
	public void la_cantidad_de_resultados_que_tomaremos_sera_de(String cantidad) throws Throwable {
		Assert.assertEquals(cantidad, ebayDetalle.tomarResultados(cantidad)); 
	}

	@When("^imprimimos los productos por nombre ascendentemente y por su precio descendetemente$")
	public void imprimimos_los_productos_por_nombre_ascendentemente_y_por_su_precio_descendetemente() throws Throwable {
		ebayDetalle.imprimirResultados("nombre", "asc");
		ebayDetalle.imprimirResultados("precio", "desc");
	}

	@Then("^deberia estar todo correcto y cerrar el navegador$")
	public void deberia_estar_todo_correcto_y_cerrar_el_navegador() throws Throwable {
		ebayDetalle.cerrarNavegador();
	}

}
