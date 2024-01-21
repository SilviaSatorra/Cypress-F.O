describe('Aserciones y Esperas', () => {
    /*
    Voy a sobreescribir acá a la variable "defaultCommandTimeout" del archivo cypress.config.js p/practicar poner
    los timeout dentro del codigo de este script
     */
    const timeout = 15000;
    let data;

    before('Before', () => {

        cy.fixture("datos").then(valoresFixture => {
            cy.log(valoresFixture)
            data = valoresFixture

        })

    }),

        beforeEach('BeforeEach', () => {

            cy.visit('')
            cy.get('[data-cy="registertoggle"]').dblclick()
            cy.get('#user').type(Cypress.env().usuario)
            cy.get('#pass').type(Cypress.env().password)
            cy.get('#submitForm').click();
            cy.get('[id="todolistlink"]', { timeout: timeout }).click()
            cy.wait(5000)
            cy.get('[data-cy="removeAll"]').click()
        })

    it.skip("Agregar 1 tareas y validar su existencia + eliminar la tarea y validar su inexistencia ", () => {
        //Así hice el ejercicio para practicar yo:

        //Verifico que no existe ninguna tarea:
        cy.get('li').should('not.exist')

        //Creo la tarea y la envío:
        cy.get('#task', { timeout: 2000 }).type(data.tareas.miTarea)
        cy.get('#sendTask').click()

        //Verifico que existe una tarea:

        //con Should:
        cy.get('li').first().find('p').should('have.length', 1).and('have.text', "Ir al Gimnasio")

        //Con Expect:
        cy.get('li').first().find('p').invoke('text').then(text => {
            expect(text).is.equal("Ir al Gimnasio")
        })

        //Con Assert:
        cy.get('li').first().find('p').invoke('text').then(text => {
            assert.equal(text, "Ir al Gimnasio")
        })

        //Elimino la tarea:
        cy.contains('Ir al Gimnasio').siblings('[class="chakra-button css-1evfvqt"]', { timeout: 2000 }).click()
        //Verifico que ya no existe la tarea:
        cy.contains('Ir al Gimnasio').siblings('[class="chakra-button css-1evfvqt"]', { timeout: 2000 }).should('not.exist')

    })
    //acá abajo vuelvo a copiar el ejercicio y lo depuro para presentar la imagen en Discord

    it.only("Agregar 1 tareas y validar su existencia + eliminar la tarea y validar su inexistencia ", () => {
        //Verifico que no existe ninguna tarea:
        cy.get('li').should('not.exist')

        //Creo la tarea y la envío:
        cy.get('#task', { timeout: 2000 }).type(data.tareas.miTarea)
        cy.get('#sendTask').click()

        //Verifico que existe una tarea utilizando should:
        cy.get('li').first().find('p').should('have.length', 1).and('have.text', "Ir al Gimnasio")

        //Repito la aserción pero con Expect:
        cy.get('li').first().find('p').should('have.length', 1).invoke('text').then(text => {
            expect(text).to.be.equal('Ir al Gimnasio')
        })

        //Ahora repito la asercion pero con Assert:
        cy.get('li').first().find('p').should('have.length', 1).invoke('text').then(text => {
            assert.equal(text, 'Ir al Gimnasio')
        })

        //Elimino la tarea:
        cy.contains('Ir al Gimnasio').siblings('[class="chakra-button css-1evfvqt"]', { timeout: 2000 }).click()
        //Verifico que ya no existe la tarea:
        cy.contains('Ir al Gimnasio').siblings('[class="chakra-button css-1evfvqt"]', { timeout: 2000 }).should('not.exist')

    })

})