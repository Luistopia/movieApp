import placeholder from '../defaultImg.jpg';

export function getDefaultImg(path, width) {
    return  path 
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder;
}
