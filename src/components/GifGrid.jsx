import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isloading} = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     console.log(newImages);
    //     setImages(newImages);
    // };

    // useEffect( () => {
    //     // getGifs(category).then( newImages => {
    //     //     setImages(newImages);
    //     // });
    //     getImages();
    // }, [])

  return (
    <>
        <h3>{category}</h3>
        {
            isloading && <h2>Cargando...</h2>
        }
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                        key={image.id} 
                        {...image}
                    />
                ))
            }
        </div>
    </>
  )
}
