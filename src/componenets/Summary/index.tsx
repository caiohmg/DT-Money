import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer } from "./styles";



export function Summary() {
  return(
    <SummaryContainer>
      <div>
        <head>
          <span>Entradas</span>
          <ArrowCircleUp size={32}  color="#00b37e"/>
        </head>

        <strong>R$: 17.400,00</strong>
      </div>
      <div>
        <head>
          <span>Saidas</span>
          <ArrowCircleDown size={32}  color="#f75a68"/>
        </head>

        <strong>R$: 17.400,00</strong>
      </div>
      <div>
        <head>
          <span>Total</span>
          <CurrencyDollar size={32}  color="#fff"/>
        </head>

        <strong>R$: 17.400,00</strong>
      </div>
    </SummaryContainer>
  )
}