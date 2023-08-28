import Button from "../Button"
import { DivCalcBody, CalcVisor, DivCalcBnts } from "./CalcStyles"

const Calc = () => {
    var calcs = 0;
    return (
        <DivCalcBody>
            <CalcVisor>
                <p>{calcs}</p>
            </CalcVisor>
            <DivCalcBnts>
                <div className="col1">
                    <div>
                        <Button val="1" />
                        <Button val="2" />
                        <Button val="3" />
                        <Button val="-" />
                    </div>
                    <div>
                        <Button val="4" />
                        <Button val="5" />
                        <Button val="6" />
                        <Button val="+" />
                    </div>
                    <div>
                        <Button val="7" />
                        <Button val="8" />
                        <Button val="9" />
                        <Button val="x" />
                    </div>
                    <div>
                        <Button val="√" />
                        <Button val="0" />
                        <Button val="." />
                        <Button val="/" />
                    </div>
                </div>
                <div className="col2">
                    <Button val="C" />
                    <Button val="=" />
                </div>
            </DivCalcBnts>

        </DivCalcBody>
    )
}

export default Calc