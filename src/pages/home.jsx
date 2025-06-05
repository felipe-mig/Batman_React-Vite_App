import BatmanImage1 from '../images/home_ImgR21_Batman1.webp';
import BatmanImage2 from '../images/home_ImgR21_Batman2.webp';
import BatmanImage3 from '../images/home_ImgR21_Batman4.webp';
import CtaFooterImg from '../images/reactIcon.svg';
import homeImages from '../components/home.json';




const HomeContent=()=>{

    /* 
    ===========================
    CTA
    ===========================
    */

    const newCtaImage = homeImages.map((ctaImage , index)=>{
        /* 
         * this variable is for giving style to className="cta"
         * backgroundImage is the JS version for the CSS property: background-image: url();
        */
        const ctaImageStyle = {
            backgroundImage: `url(${ctaImage.cta})`,
        };

        return (
            <div className="cta" style={ctaImageStyle} key={index} >
                <h1>Batman React App</h1>
                <img className="ctaReactLogoImg" src={CtaFooterImg} alt="" />
            </div>
            );
        });

    /* 
    ===========================
    EO CTA
    ===========================
    */




    /* 
    ===========================
    Batman's Origin Story
    ===========================
    */

    const batmansStory = homeImages.map((homeImages)=>{
        return(
            <div className="returnNewHomeImagesParentElement">

                <h2>Batman's Origin Story</h2>
                <br /><br />
                <p className="storyP">
                    In the heart of Gotham City, a place consumed by corruption and fear, a legend was born from tragedy. Bruce Wayne was just a child when he witnessed the murder of his parents in a cold, unforgiving alley. That moment shattered his world and planted the seed of a vow that would shape the rest of his life. He promised that no one else would suffer as he had. From that night on, Bruce dedicated himself to becoming a force that could stand against the darkness swallowing his city.
                </p>
                <img className="homeStoryImg" src={homeImages.image1} alt={homeImages.image1} />
                <p className="storyP">
                    In the heart of Gotham City, a place consumed by corruption and fear, a legend was born from tragedy. Bruce Wayne was just a child when he witnessed the murder of his parents in a cold, unforgiving alley. That moment shattered his world and planted the seed of a vow that would shape the rest of his life. He promised that no one else would suffer as he had. From that night on, Bruce dedicated himself to becoming a force that could stand against the darkness swallowing his city.
                </p>
                <img className="homeStoryImg" src={homeImages.image2} alt={homeImages.image2} />
                <p className="storyP">
                    Gotham's criminal underworld soon learned to fear the Bat. His enemies were not ordinary thugs but larger-than-life figures born from the city’s twisted soul. The Joker embodied chaos and madness, Two-Face reflected the duality of justice and corruption, and Scarecrow turned fear into a weapon. Each villain tested Batman’s limits, mentally and physically, but none could break his will. No matter the pain, he stood firm, knowing that to give in would mean losing everything he stood for.
                </p>
                <br />
                <p className="storyP">
                    Though he often worked alone, Batman was not without allies. Commissioner James Gordon fought to restore order from within the police force, while Alfred Pennyworth, Bruce’s loyal butler and father figure, provided unwavering support and wisdom. Over time, Batman found others willing to join the cause. Robin, Batgirl, and Nightwing each carried on his mission, reminding Bruce that even in a world filled with darkness, there was still light and hope worth protecting.
                </p>
                <img className="homeStoryImg" src={homeImages.image3} alt={homeImages.image3} />
                <p className="storyP">
                    To the people of Gotham, Batman became more than a man. He was a symbol of resilience, a silent protector who emerged from the shadows when hope seemed lost. Bruce Wayne wore the mask of the billionaire playboy by day, but it was Batman who was his true self. Beneath the armor and fearsome presence was a man shaped by pain but driven by love for his city. Until the day Gotham no longer needs him, he will stand watch over it, the eternal Dark Knight.
                </p>

            </div>

        );
    });

    /* 
    ===========================
    EO Batman's Origin Story
    ===========================
    */

    return(
        <>  
            {/* CTA */}
            {newCtaImage}

            {/* Batman's Origin Story */}
           <div className="storyMainContainer">
                {batmansStory}
           </div>

        </>
    );

}
export default HomeContent;