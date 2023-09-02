import Button from "../Button"
import { DivCalcBody, CalcVisor, DivCalcBnts } from "./CalcStyles"
import { useCalcStore } from '../../Store/Calc';
import { formatNumber } from "./formatNumber";

const Calc = () => {
    
    const {visor, setVisor, firstNumber, setFirstNumber, zeraVisor, limpaVisor, zeraFirstNumber, setOpcao, opcao, zeraOpcao } = useCalcStore(state => state)

    function handleValue(val) {
        var num = visor + val
        setVisor(num)
    }

    function handleAddNumbers(sinal){
        setOpcao("+")

        if(firstNumber != ""){
            var sum = Number(firstNumber) + Number(visor)
            sum = formatNumber(sum)
            setFirstNumber(String(sum))

            if(sinal === "="){
                setVisor(String(sum))
                zeraFirstNumber()
            }else{
                limpaVisor()
            }
        }
        else{
            setFirstNumber(visor)
            limpaVisor()
        }
    }
    
    function handleSubNumbers(sinal){
        setOpcao("-")

        if(firstNumber != ""){
            var sub = Number(firstNumber) - Number(visor)
            sub = formatNumber(sub)
            setFirstNumber(String(sub))

            if(sinal === "="){
                setVisor(String(sub))
                zeraFirstNumber()
            }else{
                limpaVisor()
            }
        }
        else{
            setFirstNumber(visor)
            limpaVisor()
        }
    }

    function handleMultiNumbers(sinal){
        setOpcao("*")

        if(firstNumber != ""){
            var multi = Number(firstNumber) * Number(visor)
            multi = formatNumber(multi)
            setFirstNumber(String(multi))


            if(sinal === "="){
                setVisor(String(multi))
                zeraFirstNumber()
            }else{
                limpaVisor()
            }
        }
        else{
            setFirstNumber(visor)
            limpaVisor()
        }
    }

    function handleDivNumbers(sinal) {
        setOpcao("/")

        if(firstNumber != ""){
           if(visor != "0"){
                var div = Number(firstNumber) / Number(visor)
                div = formatNumber(div)
                setFirstNumber(String(div))


                if(sinal === "="){
                    setVisor(String(div))
                    zeraFirstNumber()
                }else{
                    limpaVisor()
            }
            }else{
                //informação para o usuario (a fazer)
                console.log("nao é possivel dividir um numero por 0")
                zeraVisor()
           }
        }
        else{
            setFirstNumber(visor)
            limpaVisor()
        }
    }

    function handleRaiz() {
        if(Number(visor) < 0 ){
            //informação para o usuario a fazer
            console.log("nao existe raiz de numero negativo")
            zeraVisor()
        }else{
            var raiz = Math.sqrt(Number(visor))
            raiz = formatNumber(raiz)
            setVisor(String(raiz))
        }
    }

    function handleResultVisor() {
        switch (opcao) {
            case "+":
                handleAddNumbers("=")
                break;
            case "-":
                handleSubNumbers("=")
                break;
            case "*":
                handleMultiNumbers("=")
                break;
            case "/":
                handleDivNumbers("=")
            break;
            default:
                break;
        }

        zeraOpcao()
    }

    return (
        <DivCalcBody>
            <CalcVisor>
                <p>{visor}</p>
            </CalcVisor>
            <DivCalcBnts>
                <div className="col1">
                    <div>
                        <Button val="1" click={()=> handleValue("1")}/>
                        <Button val="2" click={()=> handleValue("2")}/>
                        <Button val="3" click={()=> handleValue("3")}/>
                        <Button val="-" click={()=> handleSubNumbers("-")}/>
                    </div>
                    <div>
                        <Button val="4" click={()=> handleValue("4")}/>
                        <Button val="5" click={()=> handleValue("5")}/>
                        <Button val="6" click={()=> handleValue("6")}/>
                        <Button val="+" click={()=> handleAddNumbers("+")}/>
                    </div>
                    <div>
                        <Button val="7" click={()=> handleValue("7")}/>
                        <Button val="8" click={()=> handleValue("8")}/>
                        <Button val="9" click={()=> handleValue("9")}/>
                        <Button val="x" click={()=> handleMultiNumbers("*")}/>
                    </div>
                    <div>
                        <Button val="√" click={()=> handleRaiz()}/>
                        <Button val="0" click={()=> handleValue("0")}/>
                        <Button val="." click={()=> handleValue(".")}/>
                        <Button val="/" click={()=> handleDivNumbers("/")}/>
                    </div>
                </div>
                <div className="col2">
                    <Button val="C" click={()=> zeraVisor()}/>
                    <Button val="=" click={()=> handleResultVisor()}/>
                </div>
            </DivCalcBnts>

        </DivCalcBody>
    )
}

export default Calc