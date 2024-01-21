/// <reference types ="cypress"/>

//importar la pagina todoListPage
import { TodoListPageOk } from "../support/pages/todoListPageOk";
//importar la pagina loginPage
import {LoginPage} from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    const todoListPageOk = new TodoListPageOk();
    //generar una instancia de la clase loginPage
    const loginPage = new LoginPage();
        
         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();

            //cy.get('#user').type('pushingit'); // utilizar la clase loginPage para ingresar el usuario
            loginPage.ingresarUsuario(Cypress.env().usuario) //corregir
           
           // cy.get('#pass').type('123456!'); // utilizar la clase loginPage para ingresar  la contraseña
           loginPage.ingresarPassword(Cypress.env().password)
           
           // cy.get('#submitForm').click(); // utilizar la clase loginPage hacer click en 'Log in'
            loginPage.clickLogin()

            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            //cy.get('#all').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoListPageOk.getAllButton().should('exist');

           // cy.get('#completed').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoListPageOk.getCompletedButton().should('exist');
           
            //cy.get('#active').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoListPageOk.getActiveButton().should('exist');

            cy.get('#removeAll').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoListPageOk.getRemoveAllButton().should('exist')
        });
     });





     


     
     //Modificar el desafio1 y aplicar pageObjecModel
     
    