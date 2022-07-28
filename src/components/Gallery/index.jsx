import React from 'react';
import {Container, GallertContent} from './style'

function Gallery (){
    const imgSrc = 'https://picsum.photos/250/250'
    return <Container>
        
        <GallertContent>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a>
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a> 
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>
            <div>
                <a href='/'><img src={imgSrc} alt="cortes"/></a> 
                <p>Lorem ipsum dolor sit amet.</p>  
            </div>

        </GallertContent>
    </Container>
}

export default Gallery;