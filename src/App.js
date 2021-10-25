import React, { useEffect, useState } from "react"
import Tmdb from "./Tmdb"
import "./App.css"
import MovieRow from "./components/MovieRow"
import FeaturedMovie from "./components/FeaturedMovie"
import Header from "./components/Header"

export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()

      setMovieList(list)

      const originals = list.filter((i) => i.slug === "originals")
      const randomNumber =  Math.round(Math.random() * (19 - 0) + 0)
      const chosen = originals[0].items.results[randomNumber]

      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv")

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        made with{" "}
        <span role="img" aria-label="heart">
          ❤
        </span>{" "}
        by Kuroshi <br />
        all rights reserved.
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img src="https://cdn.statically.io/img/techverge.io/wp-content/uploads/2018/01/Netflix_LoadTime.gif?w=2000&quality=100&f=auto" />
        </div>
      )}

    </div>
  )
}
