import airbnbLogo from "./src/assets/airbnb-logo.svg"

export function Navbar(){
  return(
      <nav>
        <img src={airbnbLogo} alt="AirBnb"/>
      </nav>
  )
}