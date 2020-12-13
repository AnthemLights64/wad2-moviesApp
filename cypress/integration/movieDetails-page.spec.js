let movieId = 662546;
let movie;
let reviews;

let movies;


describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then(() => {
        return movieId;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
    cy.request(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          movies = response.results;
        });
  });
  // beforeEach(() => {
  //   cy.visit(`/movies/${movie.id}`);
  // });
  beforeEach(() => {
    cy.visit(`/`);
    //cy.get(".card").eq(2).find("img").click();
    cy.get("input").clear().type("Godmothered") ;
    cy.get(".card").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h2").contains(movie.title);
  });
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
      });
    cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("Genres");
        cy.get("li").eq(1).contains(movie.genres[0].name);
        cy.get("li").eq(2).contains(movie.genres[1].name);
        cy.get("li").eq(3).contains(movie.genres[2].name);
      });
    cy.get("ul")
      .eq(3)
      .within(() => {
        cy.get("li").eq(0).contains("Spoken Languages");
        cy.get("li").eq(1).contains(movie.spoken_languages[0].name);
        cy.get("li").eq(2).contains(movie.spoken_languages[1].name);
      });
    cy.get("ul")
      .eq(4)
      .within(() => {
        cy.get("li").eq(0).contains("Production Companies");
        cy.get("li").eq(1).contains(movie.production_companies[0].name);
        cy.get("li").eq(2).contains(movie.production_companies[1].name);
        cy.get("li").eq(3).contains(movie.production_companies[2].name);
      });
    cy.get("ul")
      .eq(5)
      .within(() => {
        cy.get("li").eq(0).contains("Produnction Countries");
        cy.get("li").eq(1).contains(movie.production_countries[0].name);
      });
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  it("should display an image tag with the appropriate src attribute", () => {
    cy.get(".movie")
        .should("have.attr", "src")
        .should("include", movie.poster_path);;
  });

  describe("Similar Movies", () => {
    beforeEach(() => {
      cy.get(".similarMoviesBtn").click();
    });
    it("should display movie title in the page header with the title of the curresponding movie", () => {
      cy.get("h2").contains("Similar Movies of");
      cy.get("h2").contains(movie.title);
      cy.get(".badge").contains(20);
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
  });

});