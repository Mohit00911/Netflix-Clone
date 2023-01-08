import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Row from '../Row'
import Nav from '../Nav'
import requests from '../Request'
const HomeScreen = () => {
  return (
    <div>
        <Nav />
        <Banner/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Trending Now' fetchUrl={requests.fetchTopRated}/>
        <Row title='Acttion Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen