import gadgets from '../components/gadgets.json';

const GadgetsAndTechContent=()=>{

    const newgadget = gadgets.map((gadgets)=>{
        return(

                <div className='characterContainer'>
                    <img className='dataImg' src={gadgets.image} alt={gadgets.image} />
                    <div className='characterTextContainer'>
                        <h3>{gadgets.name}</h3>
                        <p className='dataDescriptionP'>{gadgets.description}</p>
                    </div>
                </div>
        );
    });

    return(
        <>
             <div className="charactersMainContainer">
                <h2 className='sectionsH2'>Gadgets & Tech</h2>
                <br />
                {newgadget}
            </div>
        
        </>
    );
}
export default GadgetsAndTechContent;