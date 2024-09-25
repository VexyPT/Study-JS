
# Exercício: Sistema de Biblioteca

1. **Crie uma classe chamada `Livro`** com os seguintes atributos:
   - `titulo`: uma string que representa o título do livro.
   - `autor`: uma string que representa o autor do livro.
   - `ano`: um número que representa o ano de publicação.
   - `disponivel`: um booleano que indica se o livro está disponível para empréstimo (true) ou não (false).

2. **Adicione um método chamado `emprestar`** que:
   - Verifica se o livro está disponível. Se estiver, mude o atributo `disponivel` para false e retorne uma mensagem dizendo que o livro foi emprestado.
   - Se não estiver disponível, retorne uma mensagem dizendo que o livro não está disponível para empréstimo.

3. **Adicione um método chamado `devolver`** que:
   - Mude o atributo `disponivel` para true e retorne uma mensagem dizendo que o livro foi devolvido.

4. **Crie outra classe chamada `Biblioteca`** que terá um atributo:
   - `livros`: um array que armazenará objetos da classe `Livro`.

5. **Adicione um método chamado `adicionarLivro`** na classe `Biblioteca` que aceita um objeto da classe `Livro` como argumento e o adiciona ao array `livros`.

6. **Adicione um método chamado `listarLivros`** na classe `Biblioteca` que retorna uma lista de todos os livros, mostrando título, autor, ano e disponibilidade.
