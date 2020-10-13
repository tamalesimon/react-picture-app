import React from 'react';
//import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {    

    const imgs = images.map((image) => {        
        return <ImageCard key={image.id} image={image} />;
    }); 
   
    return (        
        <>
            {/* <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry> */}
                   <div className="masonry"> {imgs} </div>
                {/* </Masonry>
            </ResponsiveMasonry> */}
        </>
    )
}

export default ImageList;
