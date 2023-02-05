import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Custom hook
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //Hook useEffect que llama la función getImages()
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
