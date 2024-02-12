export const getMovie = async ({ params }) => {
  try {
    const key = import.meta.env.VITE_API_KEY;

    // Descripcion
    const url1 = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
    // Videos
    const url2 = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${key}`;
    // Imagenes
    const url3 = `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${key}`;
    // Creditos
    const url4 = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${key}`;
    // Peliculas Recomendadas
    const url5 = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${key}`;

    // Haciendo las peticiones en paralelo
    const [
      descriptionRes,
      videosRes,
      imagesRes,
      creditsRes,
      recommendationsRes,
    ] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
      fetch(url5),
    ]);

    // Obteniendo los datos de las respuestas
    const description = await descriptionRes.json();
    const videos = await videosRes.json();
    const images = await imagesRes.json();
    const credits = await creditsRes.json();
    const recommendations = await recommendationsRes.json();

    // Retornando un objeto con las respuestas
    return {
      description,
      videos,
      images,
      credits,
      recommendations,
    };
  } catch (error) {
    console.error("Error al obtener la película:", error);
    return null;
  }
};
