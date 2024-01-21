describe("Actividad complementaria 3", () =>{
//Nota:voy a dejar comentadas las lineas de la consigna, p/distinguir de las que yo escriba p/ este ejercicio:

    it('Actividad complementaria 3', () =>{
        cy.visit('');
       //cy.contains('Iniciá sesión').dblclick()
        cy.xpath("//p//span[text()='Iniciá sesión']").dblclick();

        //cy.get('#user').type(`pushingit`);
        cy.xpath('//div[contains(@class, "css-c1qqtu")]//label[@for ="user"]//following-sibling::input[@id="user"]')
        .type('pushingit');
        
        //cy.get('#pass').type('123456!');
        cy.xpath("//form//div//parent::label//following-sibling ::input[starts-with(@class,'chakra-input')and@id='pass']")
        .type('123456!');

        //cy.get('#submitForm').click()
        cy.xpath('//form//child:: p//preceding-sibling :: button[text()="Log in"]').click()

        //cy.get('#todolistlink').click()
        cy.xpath('//div//parent:: p[contains(@class,"chakra-text css-1hn3qj6")]//a[@id="todolistlink"]').click()

        //cy.get("[id^='sen']").type("tarea 1")
        cy.xpath("//div//child:: label//following-sibling :: div//input[starts-with(@class, 'chakra-input')]")
        .type("tarea 1")

        //cy.get('#sendTask').click()
        cy.xpath('//label//ancestor::div//descendant::button[@type="submit"]').click()

        //cy.contains('tarea 1').click()
        cy.xpath('//p[text()="tarea 1"]').click()
    });
});


//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!

//https://drive.google.com/drive/u/1/folders/1HLb8ZVjPq207-iu3HGo9ugy4c3qOgB0S