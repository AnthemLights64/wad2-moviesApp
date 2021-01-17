// export const getMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//     )
//       .then(res => res.json())
//       .then(json => json.results);
//   };

  export const getMovies = () => {
    return fetch(
      '/api/movies',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };
  
  // export const getMovie = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then(res => res.json());
  // };
  export const getMovie = id => {
    return fetch(
      `/api/movies/${id}`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };

  // export const getPeople = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };
  export const getPeople = () => {
    return fetch(
      '/api/actors',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };

  // export const getPerson = person_id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then(res => res.json());
  // };
  export const getPerson = id => {
    return fetch(
      `/api/actors/${id}`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  // export const getMovieReviews = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };
  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };

  // export const getMovieCredits = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       //console.log(json)
  //       return json
  //     });
  // };
  export const getMovieCredits = id => {
    return fetch(
      `/api/movies/${id}/credits`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };

  export const getCreditDetails = creditId => {
    return fetch(
      `https://api.themoviedb.org/3/credit/${creditId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
  };

  // export const getSimilarMovies = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };
  export const getSimilarMovies = id => {
    return fetch(
      `/api/movies/${id}/similar`,{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };
  

  // export const getUpcomingMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };
  export const getUpcomingMovies = () => {
    return fetch(
      '/api/upcomings',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };

  export const getLatestMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(latest => [latest]);
  };

  // export const getTopRatedMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };
  export const getTopRatedMovies = () => {
    return fetch(
      '/api/topRated',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json()); 
  };


  export const getNowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getNewToken = () => {
    return fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.request_token);
  };
  
  export const getNewSession = (token) => {
    return fetch(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          request_token: token
        })
      })
      .then(res => res.json())
      .then(json => json.session_id);
  };
  
  export const getAccount = (sessionId) => {
    return fetch(
      `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`
    )
      .then(res => res.json());
  };
  
  export const signIn = (username, password) => {
    return getNewToken().then(token => {
      return fetch(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username, password, request_token: token
          })
        })
    }).then(res => res.json());
  };
  
