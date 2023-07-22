export const getMovies = async () => {
  try {
    const key = import.meta.env.VITE_API_KEY;
    // Popular
    const url1 = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
    // Upcoming
    const url2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;

    // Haciendo las dos peticiones en paralelo
    const [popularMoviesRes, upcomingMoviesRes] = await Promise.all([
      fetch(url1),
      fetch(url2),
    ]);

    // Obteniendo los datos de las respuestas
    const popularMovies = await popularMoviesRes.json();
    const upcomingMovies = await upcomingMoviesRes.json();

    // Retornando un objeto con ambas respuestas
    return {
      popularMovies,
      upcomingMovies,
    };
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    return null;
  }
};
