export function Hero(){
  return(
      <>
      <img className="hero__img" src={require ("/src/assets/illustration.png")}/>
        <h1 className="hero__h1">Online Experiences</h1>
      <div className="hero__p-container">
        <p className="hero__p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

      </div>

      </>

  )
}