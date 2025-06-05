import logoImg from '../images/logo.svg'

const HomeButton = ({onClick}) => {
    return(
        <img className="logo" src={logoImg} onClick={onClick} />
    );
};
export default HomeButton;