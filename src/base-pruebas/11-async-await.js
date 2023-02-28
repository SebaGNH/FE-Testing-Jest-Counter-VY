
export const getImagen = async() => {

    try {

        const apiKey = 'XRmcT97OVX9UbyHxOB9EanYjj8aYsFCJ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

//getImagen();



