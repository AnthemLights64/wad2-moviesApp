# Assignment 1 - ReactJS app.

Name: Wenlong Lu

## Features.
 
 + Top Rated Movie - provide a quick glance at the top 20 movies for user
 + Watch List - user can add movies from upcoming movies page to watch list, movies can be removed from watch list to upcoming moveis.
 + Sign In - user has to sign in before checking the favorites movies and watch list
 + Similar Movies - user can get a list of similar movies when "Similar Movies" button clicked in the movie details page, similar movies can be found in every movie details page
 + Credits - user can find the credits list in the corresponding movie details page
 + Cast Details - user can check the details of casts when "details' clicked in the credits list page
 + Popular People - provide a quick glace at the top 20 actors for user
 + Popular Person Details - user can check the details of one specific popular person, the known for movie posters can navigate to the movie details page of that one
 + Poster Magnifier - user can check bigger poster of the known for movies in cast details page when clicked on the poster

## Setup requirements (If required).

+ npm install - dependencies should be included in the .json file
+ npm start

## API Data Model.

+ https://api.themoviedb.org/3/person/popular - get a list of popular people
+ https://api.themoviedb.org/3/person/${person_id} - get detailed information on a specific person
+ https://api.themoviedb.org/3/movie/${id}/credits - get a list of credits of a specific movie
+ https://api.themoviedb.org/3/credit/${creditId} - get detailed information on a specific credit
+ https://api.themoviedb.org/3/movie/${id}/similar - get a list of similar movies of a specific movie
+ https://api.themoviedb.org/3/movie/top_rated - get a list of top rated movies
+ https://api.themoviedb.org/3/authentication/token/new - get a new authentication token
+ https://api.themoviedb.org/3/authentication/session/new - get a new authentication session
+ https://api.themoviedb.org/3/account...&session_id=${sessionId} - get the account of a specific session id
+ https://api.themoviedb.org/3/authentication/token/validate_with_login - get a token and validate the login

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews. Clicking the "Show Credits" button will link to the credits list of this movie. Clicking the "Similar Movies" button will link to a list of simiar movies of this movie.

![][review]
>Shows the full text for a movie review. 

![][similarMovies]
>Shows the similar movies of a specific movie(in this case, similar movies of "The Craft: Legacy").

![][upcomingMovies]
>Shows a list of upcoming movies.

![][topRatedMovies]
>Shows a list of top rated movies.

![][movieCredits]
>Shows a list of credits of a specific movie(in this case, credits of "The Craft: Legacy").

![][castDetails]
>Shows details of a cast of a movie(in this case, details of Cailee Spaeny in the movie "The Craft: Legacy").

![][bigPictureOfKnownForMoviePoster]
>Shows bigger picture of a cast's known for movies(in this case, bigger poster of Cailee Spaeny's known for movies).

![][popularPeople]
>Shows a list of popular people.

![][personDetails]
>Shows details of one of the popular people.

![][signInForm]
>Shows the sign in form.

## Routing.

+ /movies/:id - displays the details of a specific movie.
+ /movies/favorites (private) - displays the user's favorite movies selection(need to sign in).
+ /movies/watchList(private) - displays the user's watch list selection(need to sign in).
+ /reviews/:id (public) - displays the full text of a movie review.
+ /reviews/form - provide a form for user to add review of a specific movie.
+ /movies/upcoming - displays a list of upcoming movies.
+ /movies/top_rated - displays a list of top rated movies.
+ /:id/similar - displays a list of similar moives on a specific movie
+ /movies/:id/movieCredits - displays a list of credits on a specific movie
+ /credit/:id - displays details of a specific credit
+ /signIn - displays the sign in page as the entrance for favourites and watchList
+ /person/popular - displays a list of popular people
+ /person/:id - displays details of a specific person

### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][creditLink]
>Clicking the "Show Credits" will display the credits of that movie.

![][creditDetailsLink]
>Clicking the "details" will display the details of that credit.

![][similarMoviesLink]
>Clicking the "Similar Movies" will display a list of similar movies of that movie.

![][signInLink]
>Clicking the "SignIn" after the first click on the Favorites or Watch List in the navigation bar will display a form for user to sign in.

![][peopleCardLink]
>Clicking a person card after clicking the "People" on navigation bar causes the display of that person's details.

![][knownForMovieLink]
>Clicking a picture of the "known for movies" will display details of that movie.

## Independent learning (If relevant).

+ Material UI + antd - The UI of signIn uses the Material UI, code is altered and some antd stuff to make it work. Reference: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in 
+ Styled Components(react-photo-view) - it is used to enlarge the poster in the cast details. Reference: https://github.com/MinJieLiu/react-photo-view
+ CSS layout - manually ajust the page with css knowledges explored

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Wenlong Lu

## App Features.
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie. The "Show Credits" button links to the page of a list of credits and shows the cast name and character name. The "Similar Movies" button links to the page of a list of similar movies of that movie. The "details" in movie credits page links to a new page which shows the details of that cast. (Notes: similarMovies, movieCredits and castDetails are pages of one specfic movie, thus put in the test of movie details)

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]
![][similarMovies]
![][movieCredits]
![][castDetails]

+ Popular People page: Displays the top 20 popular people.

Tests: cypress/integration/people-page.spec.js

![][popularPeople]

+ Top Rated Movies page: Displays the top 20 movies. This page is similar to home page, thus the movie details's test are all included in the test of movie details.

Tests: cypress/integration/topRated-page.spec.js

![][topRatedMovies]

+ People Details page: Displays the details of one of the popular people.

Tests: cypress/integration/peopleDetails-page.spec.js

![][personDetails]

+ Navigation: Tests the navigation bar. The back button of each page should go back to the last page. Sign in required when first click on the favourites or watchList. The movie card everywhere links to the movie details. The "Remove from Watch List" button removes the movie in watch list and reload it in upcoming movies.

Tests: cypress/integration/navigation.spec.js

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/e8zun6/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/home-page.spec.js - test when no results matched in the filtering part
+ cypress/integration/topRated.spec.js - test when no results matched in the filtering part

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[similarMovies]: ./public/similarMovies.png
[upcomingMovies]: ./public/upcomingMovies.png
[topRatedMovies]: ./public/topRatedMovies.png
[movieCredits]: ./public/movieCredits.png
[castDetails]: ./public/castDetails.png
[bigPictureOfKnownForMoviePoster]: ./public/bigPictureOfKnownForMoviePoster.png
[popularPeople]: ./public/popularPeople.png
[personDetails]: ./public/personDetails.png
[signInForm]: ./public/signInForm.png
[cardLink]: ./public/cardLink.png
[reviewLink]: ./public/reviewLink.png
[creditLink]: ./public/creditLink.png
[creditDetailsLink]: ./public/creditDetailsLink.png
[similarMoviesLink]: ./public/similarMoviesLink.png
[signInLink]: ./public/signInLink.png
[peopleCardLink]: ./public/peopleCardLink.png
[knownForMovieLink]: ./public/knownForMovieLink.png
[stories]: ./public/storybook.png