import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const News = (props) => {
  const [articals, setArticals] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalResults, settotalResults] = React.useState(0);
  document.title =   props.category[0].toUpperCase() + props.category.substring(1); 


  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed47b55980e147958625637c882bec24&page=${page}&pageSize=${props.pagesize}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticals(json.articles))
      .catch((error) => console.log(error));
  }, [props.category]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed47b55980e147958625637c882bec24&page=${page}&pageSize=${props.pagesize}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => settotalResults(json.totalResults))
      .catch((error) => console.log(error));
  }, [props.category]);

  useEffect(() => {
    if (articals.length !== 0) {
      setIsLoading(false);
    }
    console.log(articals);
    console.log(totalResults);

  }, [articals]);

  function handleNext() {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed47b55980e147958625637c882bec24&page=${page + 1}&pageSize=${props.pagesize}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticals(json.articles))
      .catch((error) => console.log(error));
    setPage(
      page + 1
    )


  }

  function handlePrevious() {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ed47b55980e147958625637c882bec24&page=${page - 1}&pageSize=${props.pagesize}`;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticals(json.articles))
      .catch((error) => console.log(error));
    setPage(
      page - 1
    )


  }

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className='text-center mb-2'>Top Heading</h1>
        <hr/>

        {
          isLoading ? (
            <div className="text-center">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

          ) :
            articals.map((element) => {
              return <NewsItem
                key={element.url}
                title={element.title ? element.title : ""}
                content={element.description ? element.description.slice(0, 88) : ""}
                imgURL={element.urlToImage}
                contentTime={element.publishedAt}
                URL={element.url}
                author={element.author?element.author:"Unknown"}
                source={element.source.name}
              />
            })
        }

      </div>

      <div className="container d-flex justify-content-between">
        <br />
        <button disabled={page <= 1} type="button" onClick={handlePrevious} className="btn btn-dark">&larr; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pagesize)} type="button" onClick={handleNext} className="btn btn-dark">Next &rarr;</button>
        <br />
      </div>
    </div>
  )

}

News.prototype = {
  pagesize: PropTypes.number,
  country: PropTypes.string
}
News.defaultProps = {
  pagesize: 5,
  country: "IN"

}

export default News