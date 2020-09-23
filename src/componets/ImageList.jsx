import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const imgs = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    }); 
   
    return (        
        <>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {imgs}
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}

export default ImageList;
