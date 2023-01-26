import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleUp, X, ArrowCircleDown } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactioTypeButton, } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type="text"  placeholder="Descrição" required/>
          <input type="number"  placeholder="Preço" required/>
          <input type="text"  placeholder="Categoria" required/>

          <TransactionType>
            <TransactioTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactioTypeButton>

            
            <TransactioTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TransactioTypeButton>

          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>

        
      </Content>
    </Dialog.Portal>
  )
}
