let people;    // List of people from TMDB


describe("People Page ", () => {
  before(() => {
    // Get people from TMDB and store in people variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        people = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
    cy.get("nav").find("li").eq(5).find("a").click();
  });

  describe("Base tests", () => {
    it("displays page header and change the browser URL", () => {
      cy.get("h2").contains("Popular People");
      cy.get(".badge").contains(20);
      cy.url().should("include", `/person/popular`);
      }); 
  });
    
});