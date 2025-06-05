import BatmanFavicon from '../images/batman-icon.svg';

const Head =() => {
    return (
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" sizes="32x32" href={BatmanFavicon} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Batman React</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        </head>
    );

}
export default Head;