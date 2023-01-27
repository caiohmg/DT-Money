import { useContext, useEffect, useState } from "react";
import { Header } from "../../componenets/Header/index";
import { Summary } from "../../componenets/Summary";
import { SearchForm } from "./components/SearchForn";
import { TransactionContext } from '../../contexts/TransactionsContexts';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";


export function Transactions() {
    const {transactions} = useContext(TransactionContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      <td>{transaction.price}</td>
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
