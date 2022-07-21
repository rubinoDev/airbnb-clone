export function Card(props){
  let badgeImg

  if(props.openSpots === 0){
    badgeImg = "./src/assets/soldout.png"
  }else if(props.location === "Online"){
    badgeImg= "./src/assets/online.png"
  }

  return(
  <div className="card__container">
    {badgeImg && <img className="card__badge" src={badgeImg}/>}
    <img className="card__img" src={props.coverImg} />
    <img className="card__state"/>

    <p className="card__rate"> {props.stats.rating}<span> ({props.stats.reviewCount}) • {props.location}</span></p> 
    <p className="card__description">{props.title}</p>
    <strong className="card__price">From ${props.price} <span>/ person</span></strong>
  </div>

  )
}