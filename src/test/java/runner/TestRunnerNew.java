package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
				 name= {""},
				 glue = { "com.belatrix.tests" }, 
				 plugin = { "json:target/cucumber.json" })
				// plugin = { "html:target/cucumber-html-report-nil" })
public class TestRunnerNew {

}
