export const getMovie = async ({ params }) => {
  try {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&append_to_response=credits,images,videos`;

    const res = await fetch(url);

    if (!res.ok) {
      // Si la respuesta no es exitosa, lanzamos una excepción con el mensaje del error.
      throw new Error("Error al obtener la película");
    }

    const movie = await res.json();
    return movie;
  } catch (error) {
    console.error("Error al obtener la película:", error);
    return null; // O puedes retornar un objeto vacío o algún valor predeterminado, según tus necesidades.
  }
};
