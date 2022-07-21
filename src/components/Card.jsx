import soldOutImg from "/src/assets/soldout.png"
import onlineImg from "/src/assets/online.png"

export function Card(props){
  let badgeImg

  if(props.openSpots === 0){
    badgeImg = {soldOutImg}
  }else if(props.location === "Online"){
    badgeImg= {onlineImg}
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
