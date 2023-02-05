export const getGifs = async (category) => {
  //Almacenamos en una constante la url con limite de 20 imágenes
  const url = `https://api.giphy.com/v1/gifs/search?api_key=d5uD3OiDbGqyOTCk46JJgTkoZ06gkr0g&q=${category}&limit=10`;

  //Realizamos petición http
  const resp = await fetch(url);

  //Respuesta desestructurando la data
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
