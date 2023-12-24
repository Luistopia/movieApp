import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

import { getDefaultImg } from '../utils/getDefaultImg';

export function MovieCard({movie}){

  const imageUrl = getDefaultImg(movie.poster_path, 300 );

    return  <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}> <img
        width={240}
        height={375}
        className={styles.movieImage} 
        src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div></Link>
       
        </li>;
}