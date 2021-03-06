let movies;
const movieId = 577922; // Enola Holmes movie id
let reviews;
const reviewsId = "5f4469f7fdc4fa0035b1a753";

let upcoming;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        reviews = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        upcoming = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("All Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("include", `/upcoming`);
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", `/top_rated`);
      cy.get("h2").contains("Top Rated Movies");

      cy.get("nav").find("li").eq(3).find("a").click();
      cy.url().should("include", `/favorites`);
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.url().should("include", `/watchList`);

      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("All Movies");
    });
  });
  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/`);
      cy.get("input").clear().type("Tenet") ;//577922
      cy.get(".card").click();
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Full Review").click();
      cy.url().should("include", `/reviews/${reviewsId}`);
    });
    it("should navigate to the credits page when 'Show Credits' is clicked", () => {
      cy.contains("Show Credits").click();
      cy.url().should("include", `/movies/${movieId}/movieCredits`);
    });

  });

  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get(".signIn").click();
      cy.get(".username").type("AnthemLights");
      cy.get(".password").type("LWLlwl0604");
      cy.get("form").find("button").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });

  describe("From the Watch List page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(4).find("a").click();
      cy.get(".signIn").click();
      cy.get(".username").type("AnthemLights");
      cy.get(".password").type("LWLlwl0604");
      cy.get("form").find("button").click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("h2").contains(upcoming[0].title);
    });
    it("should remove the movie from watch list and restore it in upcoming page when clicked the 'remove from movieList' button", () => {
      cy.contains("Remove from Watch List").click();
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${upcoming[0].id}`);
      cy.get("h2").contains(upcoming[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("All Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
      cy.get("nav").find("li").eq(0).find("a").click();
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.get(".signIn").click();
      cy.get(".username").type("AnthemLights");
      cy.get(".password").type("LWLlwl0604");
      cy.get("form").find("button").click();
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `/movies/favorites`);
      cy.get("h2").contains("Favorite Movies");
    });
  });
});