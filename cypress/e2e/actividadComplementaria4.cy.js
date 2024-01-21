//crea un fixture con las siguientes keys 
//username (el username debe ser inexistente)
//pasword (la password debe ser valida) //123456!
//mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found
//usa before para acceder al fixture y obtener los datos //beforeEach para visitar la pagina y dirigirse al login

describe('Actividad complementaria 4: login con error_validar mensaje', () => {
    //inicializa el fixture
    let data;
    before("before: para asignar los valores del objeto 'login' a la variable 'data' ", () => {
        cy.fixture("datosActivComplem4").then(datosFixture => {
            cy.log(datosFixture)
            data = datosFixture

        })
    })

    beforeEach('', () => {
        cy.visit('')
        cy.get('[data-cy="registertoggle"]').dblclick()

    })

    it('Validar el mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(data.login.usuario); //el usuario debe ser inválido
        cy.get('#pass').type(data.login.clave); //la contraseña debe ser válida 
        cy.get('#submitForm').click();
        //cy.get('#errorMessage').should('have.text', /*agrega el mensaje que esta en el fixture */)
        cy.get('#messageError').should('have.text', 'Credentials were not found')
    });
});
