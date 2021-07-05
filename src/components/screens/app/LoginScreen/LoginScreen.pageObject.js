export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/login');
  }

  fillLoginForm({ username, password }) {
    this.cy.get('#LoginForm input[name="username"]').type(username);
    this.cy.get('#LoginForm input[name="password"]').type(password);

    return this;
  }

  submitLoginForm() {
    this.cy.get('#LoginForm button[type="submit"]').click();

    return this;
  }
}
