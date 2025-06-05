import Button from "./Button";
import HomeButton from "./HomeButton";

const Nav =({showHome, showCharacters, showGadgetsAndTech, showVillainsAndAllies, showVideosAndMedia}) => {
    return (
        <nav>
            <HomeButton onClick={showHome}></HomeButton>
            <Button onClick={showHome} text={"Home"}></Button>
            <Button onClick={showCharacters} text={"Characters"}></Button>
            <Button onClick={showGadgetsAndTech} text={"Gadgets & Tech"}></Button>
            <Button onClick={showVillainsAndAllies} text={"Villains & Allies"}></Button>
            <Button onClick={showVideosAndMedia} text={"Videos & Media"}></Button>
        </nav>
    );

}
export default Nav;