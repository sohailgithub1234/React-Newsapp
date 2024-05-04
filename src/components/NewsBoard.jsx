import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";
const NewsBoard = () => {
    
    const [category, setCategory] = useState("general");
    let [articles, setArticles] = useState([]);

    useEffect(()=>{
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}$apiKey=${import.meta.env.VITE_API_KEY}`;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=544e207b56cd4bffae209f864e5da2b0`
        fetch(url)
        .then((response) => response.json())
        .then((data)=> setArticles(data.articles))
        .catch((error)=>console.error(err));
    },[category]);
  return (
    <div>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    <Navbar setCategory={setCategory}/>
    {articles && articles.length > 0 ? (
      articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} imgurl={news.urlToImage} url={news.url} />
      ))
    ) : (
      <p>No news articles available.</p>
    )}
  </div>
  )
}

export default NewsBoard
