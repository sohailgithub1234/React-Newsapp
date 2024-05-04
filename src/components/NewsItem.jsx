import image from '../assets/newsimage.jpg';
const NewsItem = ({title, description, imgurl, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 flex flex-col " style={{maxWidth:"345px",maxHeight:"408px"}}>
        <img src={imgurl?imgurl:image} style={{height:"200px",width:"300px"}} className="card-img-top" alt="cant load image"/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"Custom description is here...."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
    
  )
}

export default NewsItem
