import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleUp, X, ArrowCircleDown } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactioTypeButton, } from "./styles";
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';

const newTrasactionFormShema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  /*type: z.enum(['income', 'outcome']),*/
})

type newTransactionFormInputs = z.infer<typeof newTrasactionFormShema>;

export function NewTransactionModal() {

    const {
      register,
      handleSubmit,
      formState: { isSubmitting},
    } = useForm<newTransactionFormInputs>({
      resolver: zodResolver(newTrasactionFormShema),
    })
    
   async function handleCreateNewTransaction(data: newTransactionFormInputs){
    await new Promise(resolver => setTimeout(resolver, 2000));  
    console.log(data);
    }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text"
            placeholder="Descrição" 
            required
            {...register('description')}
            />

          <input type="number"
            placeholder="Preço" 
            required
            {...register('price', {valueAsNumber: true})}
            />
          <input type="text"
            placeholder="Categoria"
            required
            {...register ('category')}
            />

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

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        
      </Content>
    </Dialog.Portal>
  )
}
