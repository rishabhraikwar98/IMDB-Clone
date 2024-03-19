
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Card.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import 'react-loading-skeleton/dist/skeleton.css'

function Card({movie,type}) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [type]) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date.split("-")[0]:""}
                        <span className="card__rating">{movie?Math.floor(movie.vote_average*10)/10 :""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }

    </>
}

export default Card