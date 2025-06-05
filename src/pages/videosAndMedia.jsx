import gallery from '../components/gallery.json';

const VideosAndMediaContent=()=>{
      const newgallery = gallery.map((gallery)=>{

        return(

            // <div className="galleryImgContainer">
                    <img className='galleryImg' src={gallery.image} alt={gallery.image} />
            // </div>      
        );

    });

    return(
        <>
             <div className="galleryMainContainer">
                <h2 className='sectionsH2'>Videos & Media</h2>
                <br />
                {newgallery}
                <div className="comicContainer">
                    <img className="comicCover" src="../src/images/twofaceComic.webp" alt="twoface" />
                    <img className="comicCover" src="../src/images/bane.webp" alt="bane" />
                    <img className="comicCover" src="../src/images/mr.freezeComic.webp" alt="mr.freeze" />
                    <img className="comicCover" src="../src/images/comic6.webp" alt="bruce" />
                    <iframe src="https://www.youtube.com/embed/Tae1qJqkUUE" ></iframe>
                    <img className="comicCover" src="../src/images/comic1.webp" alt="twoface" />
                    <img className="comicCover" src="../src/images/comic8.webp" alt="bane" />
                    <img className="comicCover" src="../src/images/comic7.webp" alt="bane" />
                    <img className="comicCover" src="../src/images/comic5.webp" alt="bane" />
                    <img className="comicCover" src="../src/images/comic4.webp" alt="bane" />
                </div>
            </div>
        
        </>
    );
}
export default VideosAndMediaContent;