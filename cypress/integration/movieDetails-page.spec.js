let movieId = 662546;
let movie;
let reviews;

let movies; //similarMovies

let credits;
let creditId = "5e17c34e1d01910015f2c989";
let creditDetails;


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
    cy.request(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            credits = response.cast;
          });
    cy.request(
          `https://api.themoviedb.org/3/credit/${creditId}?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            creditDetails = response;
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
        .should("include", movie.poster_path);
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

  describe("Credits", () => {
    beforeEach(() => {
      cy.contains("Show Credits").click();
    });
    it("should display the table head of the credits table", () => {
      cy.get("thead").find("th").eq(0).contains("Cast name");
      cy.get("thead").find("th").eq(1).contains("Character");
      cy.get("thead").find("th").eq(2).contains("Operation");
    });
    it("should have the corresponding cast name and character name", () => {
      cy.get("tbody").find("td").eq(0).contains(`${credits[0].name}`);
      cy.get("tbody").find("td").eq(1).contains(`${credits[0].character}`);
    });
    describe("Credit details", () => {
      beforeEach(() => {
        cy.get("tbody").find("td").eq(2).contains("Details").click();
      });
      it("should navigate to the credit details and change broser URL", () => {
        cy.url().should("include", `/credit/${credits[0].credit_id}`);
      })
      it("should display the poster of the cast", () => {
        cy.get("tbody").find("img").should("have.attr", "src").should("include", creditDetails.person.profile_path);
      })
      it("should display the table head and the contents", () => {
        cy.get("thead").find("th").contains("CastDetails");
        cy.get("tbody").find("td").eq(1).contains("Name:");
        cy.get("tbody").find("td").eq(2).contains(`${creditDetails.person.name}`);
        cy.get("tbody").find("td").eq(3).contains("Character:");
        cy.get("tbody").find("td").eq(4).contains(`${creditDetails.media.character}`);
        cy.get("tbody").find("td").eq(5).contains("Popularity:");
        cy.get("tbody").find("td").eq(6).contains(`${creditDetails.person.popularity}`);
      });
      it("should display known for movie posters", () => {
        cy.get("tbody").get("td").eq(12).find("img").eq(0).should("have.attr", "src").should("include", creditDetails.person.known_for[0].poster_path);
        cy.get("tbody").get("td").eq(12).find("img").eq(1).should("have.attr", "src").should("include", creditDetails.person.known_for[1].poster_path);
        cy.get("tbody").get("td").eq(12).find("img").eq(2).should("have.attr", "src").should("include", creditDetails.person.known_for[2].poster_path);
      });
    });
  });

});