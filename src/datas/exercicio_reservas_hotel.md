
# Exercício: Sistema de Reservas de Hotel

1. **Crie uma classe chamada `Reserva`** com os seguintes atributos:
   - `nomeCliente`: uma string que representa o nome do cliente.
   - `dataCheckIn`: um objeto `Date` que representa a data de entrada do cliente no hotel.
   - `dataCheckOut`: um objeto `Date` que representa a data de saída do cliente do hotel.

2. **Adicione um método chamado `duracaoEstadia`** que:
   - Calcula e retorna o número de dias entre a data de check-in e a data de check-out.

3. **Adicione um método chamado `dataValida`** que:
   - Verifica se a data de check-out é posterior à data de check-in. Se for, retorne `true`. Caso contrário, retorne `false`.

4. **Adicione um método chamado `diasAteCheckIn`** que:
   - Calcula e retorna o número de dias que faltam até o check-in, com base na data atual.

5. **Crie uma outra classe chamada `Hotel`** com um array que armazenará várias reservas.

6. **Adicione um método chamado `adicionarReserva`** na classe `Hotel` que:
   - Aceita um objeto `Reserva` e verifica se a data de check-out é válida (usando o método `dataValida`). Se for válida, adicione a reserva ao array de reservas, caso contrário, retorne uma mensagem de erro.

7. **Adicione um método chamado `listarReservas`** que:
   - Retorna uma lista de todas as reservas, mostrando o nome do cliente, data de check-in, data de check-out, duração da estadia e dias restantes até o check-in.
