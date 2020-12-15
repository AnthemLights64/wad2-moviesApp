let personId = 976;
let known_for_movie_id = 82992;
let person;

describe("People Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then(() => {
        return personId;
      })
      .then((arbitraryMovieIdignored) => {
        personId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((peopleDetails) => {
        person = peopleDetails;
        return peopleDetails.id;
      })
  });

  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(5).find("a").click();
    cy.get(".card").eq(2).click();
  });
  
  it("should display a profile image of the actor with the appropriate src attribute", () => {
    cy.get(".profile_image")
        .should("have.attr", "src")
        .should("include", person.profile_path);
  });
  it("should display the name of the person", () => {
    cy.get("h3").contains(person.name);
  });
  it("should display the person's details", () => {
    cy.get("h4").contains("Biography:");
    cy.get("p").contains("Jason Statham (born 26 July 1967) is an English actor");
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Birthday:");
        cy.get("li").eq(1).contains(person.birthday);
        cy.get("li").eq(2).contains("Known for department:");
        cy.get("li").eq(3).contains(person.known_for_department);
        cy.get("li").eq(4).contains("Place of birth:");
        cy.get("li").eq(5).contains(person.place_of_birth);
      });
    cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("Also known as:");
        cy.get("li").eq(1).contains(person.also_known_as[0]);
        cy.get("li").eq(2).contains(person.also_known_as[1]);
        cy.get("li").eq(3).contains(person.also_known_as[2]);
        cy.get("li").eq(4).contains(person.also_known_as[3]);
        cy.get("li").eq(5).contains(person.also_known_as[4]);
        cy.get("li").eq(6).contains(person.also_known_as[5]);
        cy.get("li").eq(7).contains(person.also_known_as[6]);
        cy.get("li").eq(8).contains(person.also_known_as[7]);
        cy.get("li").eq(9).contains(person.also_known_as[8]);
        cy.get("li").eq(10).contains(person.also_known_as[9]);
        cy.get("li").eq(11).contains(person.also_known_as[10]);
      });
  });
  it("should display known for movie posters", () => {
    cy.get(".known_for_posters").find("img").eq(0).should("have.attr", "src");
    cy.get(".known_for_posters").find("img").eq(1).should("have.attr", "src");
    cy.get(".known_for_posters").find("img").eq(2).should("have.attr", "src");
  });
  it("should navigate to movie details of the known for posters", () => {
    cy.get(".known_for_posters").find("img").eq(0).click();
    cy.url().should("include", `/movies/${known_for_movie_id}`);
  });
});