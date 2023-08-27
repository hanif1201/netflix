const API_KEY = "df3f95087aacb40cc2d4700b73c87f88";

const requests = {
  // movies
  //   fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35,53,27`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,

  fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
};

export default requests;
