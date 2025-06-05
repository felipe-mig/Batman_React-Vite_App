import villainsAllies from '../components/villainsAllies.json'

const VillainsAndAlliesContent=()=>{

   const newvillainAllie = villainsAllies.map((villainsAllies)=>{
        return(

                <div className='characterContainer'>
                    <img className='dataImg' src={villainsAllies.image} alt={villainsAllies.image} />
                    <div className='characterTextContainer'>
                        <h3>{villainsAllies.name}</h3>
                        <p className='dataDescriptionP'>{villainsAllies.description}</p>
                    </div>
                </div>
        );
    });

    return(
        <>   
             <div className="charactersMainContainer">
                <h2 className='sectionsH2'>Villains & Allies</h2>
                <br />
                {newvillainAllie}
            </div>
        
        </>
    );
}
export default VillainsAndAlliesContent;