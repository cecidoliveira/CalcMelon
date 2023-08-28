import { Titles, DivHeader } from "./HeaderStyles"
import logo from "../../assets/logo_calcmelon.png"

const Header = () => {
  return (
    <DivHeader>
      <img src={logo} alt="logo" />
      <Titles>CALC<span>MELON</span></Titles>
    </DivHeader>
  )
}

export default Header