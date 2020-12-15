import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
//import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import PeopleCard from "../src/components/peopleCard";
import PeopleHeader from "../src/components/headerPeopleList";
import PeopleList from "../src/components/peopleList";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const peopleSample = {
    profile_path: "/lldeQ91GwIVff43JBrpdbAAeYWj.jpg",
    adult: false,
    id: 28782,
    known_for: [
      {
        poster_path: "/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
        adult: false,
        overview: "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        release_date: "2015-10-26",
        original_title: "Spectre",
        genre_ids: [
          28,
          12,
          80
        ],
        id: 206647,
        media_type: "movie",
        original_language: "en",
        title: "Spectre",
        backdrop_path: "/wVTYlkKPKrljJfugXN7UlLNjtuJ.jpg",
        popularity: 7.090211,
        vote_count: 2956,
        video: false,
        vote_average: 6.2
      },
      {
        poster_path: "/ezIurBz2fdUc68d98Fp9dRf5ihv.jpg",
        adult: false,
        overview: "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
        release_date: "2003-05-15",
        original_title: "The Matrix Reloaded",
        genre_ids: [
          12,
          28,
          53,
          878
        ],
        id: 604,
        media_type: "movie",
        original_language: "en",
        title: "The Matrix Reloaded",
        backdrop_path: "/1jgulSytTJcATkGX8syGbD2glXD.jpg",
        popularity: 3.41123,
        vote_count: 2187,
        video: false,
        vote_average: 6.57
      },
      {
        poster_path: "/sKogjhfs5q3azmpW7DFKKAeLEG8.jpg",
        adult: false,
        overview: "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.",
        release_date: "2003-11-05",
        original_title: "The Matrix Revolutions",
        genre_ids: [
          12,
          28,
          53,
          878
        ],
        id: 605,
        media_type: "movie",
        original_language: "en",
        title: "The Matrix Revolutions",
        backdrop_path: "/pdVHUsb2eEz9ALNTr6wfRJe5xVa.jpg",
        popularity: 3.043018,
        vote_count: 1971,
        video: false,
        vote_average: 6.35
      }
    ],
    name: "Jason Statham",
    popularity: 48.609344
};

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

storiesOf("People Page/PeopleCard", module)
  .add("default", () => <PeopleCard people={peopleSample} />)
  .add("exception", () => {
    const sampleNoPoster = { ...peopleSample, profile_path: undefined };
    return <PeopleCard people={sampleNoPoster} />;
  });

storiesOf("People Page/Header", module).add("default", () => (
    <PeopleHeader numPeople={20} />
  ));

storiesOf("People Page/PeopleList", module).add("default", () => {
    const peoples= [peopleSample, peopleSample, peopleSample, peopleSample, peopleSample]
    return <PeopleList peoples={peoples} />
});