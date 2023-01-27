import { ThemeProvider } from "styled-components";
import { TransactionProvider } from "./contexts/TransactionsContexts";
import { Transactions } from "./pages/Transsactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
      <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}
