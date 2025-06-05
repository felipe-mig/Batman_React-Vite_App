import characters from '../components/characters.json';

const CharactersContent=()=>{
    const newcharacter = characters.map((characters)=>{
        return(

                <div className='characterContainer'>
                    <img className='dataImg' src={characters.image} alt={characters.image} />
                    <div className='characterTextContainer'>
                        <h3>{characters.name}</h3>
                        <p className='dataDescriptionP'>{characters.description}</p>
                    </div>
                </div>
        );
    });

    return(
        <>
             <div className="charactersMainContainer">
                <h2 className='sectionsH2'>Characters</h2>
                <br />
                {newcharacter}
            </div>
        
        </>
    );

    

}
export default CharactersContent;