describe('Actividad complementaria 5', () => {
    const timeout = 100000;


    beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user', { timeout }).type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

    it("Deberia validar la primera espera", () => {
        // Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
        cy.get('button#wait').should('have.text', 'Cargando')
        cy.get('button#wait', { timeout }).should('have.text', 'Button') //timeout esta seteado en 10 seg en la veriable alla arriba
    })

    it("Deberia validar la primera espera", () => {
        // verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
        cy.get('[data-cy="colorChangeMessage"]', { timeout: 15000 }).should('have.text', 'Wait 5 more seconds')//en realidad a partir de los 10 seg ya aparece el texto en pantalla, pero exageramos por las dudas
    })

    it.only("Deberia validar la primera espera", () => {
        // Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
        // cy.get('[id="message"]', {timeout:25000}).should('exist')
        // cy.get('[id="message"]').should('not.have.text', 'Wait 5 more seconds')

        //Había entendido mal. Había que validar que aparezca un 1er mensaje y que luego de 5 segundos aparezca otro mensaje distinto
        //esto puso el prof hzo esto así primero:
       // cy.get('[id="message"]', { timeout: 15000 }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        //cy.get('[id="message"]', { timeout: 10000 }).should('have.text', 'You are a man of patience and have waited fifteen seconds')
       
        //luego: (espera 15 seg c/vez. Lo más exacto sería poner 10 seg al 1ro y 5 seg al 2do)
        //cy.get('[id="message"]', { timeout: 15000 }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        //cy.get('[id="message"]', { timeout: 15000 }).should('not.have.text', 'You have waited for ten seconds, CONGRATULATIONS')

        //repetimos las aserciones, pero con Expect:
        /*
//En la 2da asercion no nos sirve poner Expect (ver explicac en apunte en papel. 
//El tema es que el invoke va a estar encontrando el mismo 1er texto en esa 2da asercion)
//De todas formas tampoco serviría porque Expect no lleva timeout y nosotros necesitamos ponerle la espera de 5 segundos
       // cy.get('[id="message"]', { timeout: 15000 }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        cy.get('[id="message"]', { timeout: 15000 }).invoke('text').then(texto,()=>{
            expect(texto).is.not.equal('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        })
        */

 //EN la 1er aserción no sirve porque necesitamos sí o sí poner espera de, al menos 10 seguntos 
 
 
//Lo que sí podemos hacer es combinar la 2da aserción tal como estaba, con 1 Expect que verifique que existe
//el 2do texto. (como ese 2do texto no lo había buscado antes, entonces no fallará):
cy.get('[id="message"]', { timeout: 15000 }).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
cy.get('[id="message"]', { timeout: 15000 }).should('not.have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        .invoke('text').then(text =>{
            expect(text).is.equal('You are a man of patience and have waited fifteen seconds') //
        })
 
    })


})


