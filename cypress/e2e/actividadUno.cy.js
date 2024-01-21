 /// <reference types="cypress" />
 describe("Actividad complementaria 1" , () =>{
    const numeroRandom = Math.floor(Math.random() * 1000)
    it('Actividad complementeria - Sign in', () =>{
        cy.visit('');
        //crear un test que permita registrarse en la pagina!
        cy.get('#user').type(`Silvia ${numeroRandom}`); //puedo poner cualquier string porque es indep de la prueba siguiente o de cualquier otra
        cy.get('#pass').type('123456!');
        cy.get("[value='Female']").check({force:true}); //force true para que no falle debido a que hay 1 span cubriendo el radio button
        cy.get('#day').select("17");  ///Value
        cy.get('#month').select("June"); //Texto visible
        cy.get('#year').select(10); // Posición
       cy.get('#submitForm').click();

    });
    it('Actividad adicional - login',() =>{
        cy.visit(''); 
        cy.get('#registertoggle').dblclick();  //Doble click
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
    })
});







