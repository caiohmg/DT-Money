import { Header } from "../../componenets/Header/index";
import { Summary } from '../../componenets/Summary';
import { SearchForm } from "./components/SearchForn";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';





export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
            <PriceHighlight variant="income">
            <td>R$: 12.000,00</td>
            </PriceHighlight>
            </td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>

      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Hamburger</td>
            <td>
            <PriceHighlight variant="outcome">
            <td>- R$: 59,00</td>
            </PriceHighlight>
            </td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>

     
      </TransactionsContainer>

    
    </div>
  )
}