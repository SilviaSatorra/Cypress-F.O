
describe('Actividad complementaria 2', () => {
    //Modificar t/ los eleme web p/ que el test haga lo mismo pero encontrando los elementos web de 1 manera diferente
    //Nota: voy a dejar comentadas las lineas de la consigna, para distinguir de las que yo escriba
    // para este ejercicio:
    
        it('Registrarse en pushing it', () => {
            const numeroRandom = Math.floor(Math.random() * 1000)
            cy.visit('');

            //cy.get('#user').type(`pushingiT${numeroRandom}`);
            cy.get('input[cy-get="user"]').type(`pushingiT${numeroRandom}`); //ok

            //cy.get('#pass').type('123456!')
            cy.get('[class="chakra-form__label css-dcfi0p"]').siblings('input[name="pass"]').type('123456!'); //ok

           // cy.get('[value="Male"]').check({ force: true })
            cy.get('fieldset').find('[value="Male"]').check({ force: true }); //ok

           // cy.get('#day').select('4') //value 4
            cy.get('[id="day"]').select(3);//cambio # x atributo=valor
                                         // y en el select cambio texto visible x posición  //ok
           
            //cy.get('#month').select('October') //texto visible October
            cy.get('#month').select(9)// busco por la posición // ok

            //cy.get('#year').select(10) //posicion del array numero 10 es el año 1931
            cy.get('#year').select('1931'); //busco por el texto visible//  ok

            //cy.get('#submitForm').click();
            cy.contains('button','Register').click  //ok
        });
    });