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
import PeopleDetails from "../src/components/peopleDetails";
import { BrowserRouter } from "react-router-dom";

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
        poster_path: "/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
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
        backdrop_path: "/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
        popularity: 7.090211,
        vote_count: 2956,
        video: false,
        vote_average: 6.2
      },
      {
        poster_path: "/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg",
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
        poster_path: "/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
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

const peopleDetailSample = {
  birthday: "1963-12-18",
  known_for_department: "Acting",
  deathday: null,
  id: 287,
  name: "Brad Pitt",
  also_known_as: [
    "برد پیت",
    "Бред Питт",
    "Бред Пітт",
    "Buratto Pitto",
    "Брэд Питт",
    "畢·彼特",
    "ブラッド・ピット",
    "브래드 피트",
    "براد بيت",
    "แบรด พิตต์"
  ],
  gender: 2,
  biography: "William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
  popularity: 10.647,
  place_of_birth: "Shawnee, Oklahoma, USA",
  profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
  adult: false,
  imdb_id: "nm0000093",
  homepage: null
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
  .add("default", () => <BrowserRouter><PeopleCard people={peopleSample} /></BrowserRouter>)
  .add("exception", () => {
    const sampleNoPoster = { ...peopleSample, profile_path: undefined };
    return <BrowserRouter><PeopleCard people={sampleNoPoster} /></BrowserRouter>;
  });

storiesOf("People Page/Header", module).add("default", () => (
    <PeopleHeader title="Popular People" numPeople={20} />
  ));

storiesOf("People Page/PeopleList", module).add("default", () => {
    const people= [peopleSample, peopleSample, peopleSample, peopleSample, peopleSample]
    return <BrowserRouter><PeopleList people={people} /></BrowserRouter>;
});

storiesOf("People Details Page/PeopleDetails", module).add("default", () => {
  return <BrowserRouter><PeopleDetails people={peopleDetailSample} ppeople={peopleSample} /></BrowserRouter>;
});