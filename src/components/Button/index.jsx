import { Bnt } from "./ButtonStyles"

const Button = ({val, click}) => {
  
  return (
    <Bnt type="button" value={val} $cor={val == "=" ? "#FE283A" : "#FEFEFE"} onClick={click}  />
  )
}

export default Button