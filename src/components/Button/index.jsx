import { Bnt } from "./ButtonStyles"

const Button = ({ val }) => {
  return (
    <Bnt type="button" value={val} $cor={val == "=" ? "#FE283A" : "#FEFEFE"} />
  )
}

export default Button