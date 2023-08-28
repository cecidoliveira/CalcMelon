import styled from "styled-components";

export const DivCalcBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55rem;
    height: 51rem;
    margin: auto;
    border-radius: 1.875rem;
    background: #2CCB7F;

    @media only screen and (min-width: 1600px) {
        width: 60rem;
        height: 61rem;
        margin: 1rem auto;
    }
`
export const CalcVisor = styled.div`
    width: 41rem;
    height: 7.5625rem;
    margin: 3.5rem auto 3rem;
    border-radius: 0.625rem;
    border: 5px solid #1B9D5F;
    background: #FEFEFE;
    p{
        padding: 0 2rem;
        text-align : right;
        font-size: 4rem;
    }
    @media only screen and (min-width: 1600px) {
        margin: 8rem auto 4rem;
    }
`
export const DivCalcBnts = styled.div`
    display: grid;
    grid-template-areas: "col1 col2";
    .col2{
        display: grid;
        input:nth-child(2){
            height: 25rem;
        }    
    }
`