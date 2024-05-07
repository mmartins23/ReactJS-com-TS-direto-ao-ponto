# Generics

Generics em TypeScript permitem criar componentes que podem trabalhar com uma variedade de tipos, enquanto ainda mantêm a segurança de tipos durante a compilação. Aqui está a explicação dos exemplos fornecidos:

1. **Função genérica para retornar o array com qualquer tipo:**

   ```typescript
   function getArray<T>(items: T[]): T[] {
       return new Array<T>().concat(items);
   }

   let numberArray = getArray<number>([5, 10, 15, 20]);
   let stringArray = getArray<string>(["Hello", "World"]);

   console.log(numberArray);
   console.log(stringArray);
   ```

   Nesta função `getArray`, o tipo genérico `T` é usado para criar um array que pode conter qualquer tipo de elementos. Quando a função é chamada, o tipo desejado é especificado entre os ângulos `< >`.

2. **Utilizando restrições de tipos em genéricos:**

   ```typescript
   function merge<T extends object, U extends object>(obj1: T, obj2: U) {
       return { ...obj1, ...obj2 };
   }

   const result = merge({ name: "John" }, { age: 30 });
   console.log(result);
   ```

   Nesta função `merge`, os tipos genéricos `T` e `U` são restritos a objetos (`extends object`). Isso garante que apenas objetos possam ser passados como argumentos para a função.

3. **Utilizando utilitários de tipo:**

   ```typescript
   type Todo = {
       title: string;
       description: string;
       completed: boolean;
   };

   function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
       return { ...todo, ...fieldsToUpdate };
   }

   const todo: Readonly<Todo> = {
       title: "Aprender TypeScript",
       description: "O que são Generics?",
       completed: false,
   };

   const updatedTodo = updateTodo(todo, {
       description: "Explorando tipos avançados",
       completed: true,
   });

   console.log(updatedTodo);
   ```

   Aqui, `Partial<Todo>` é um utilitário de tipo que torna todas as propriedades de `Todo` opcionais. Isso é útil para a função `updateTodo`, que recebe um objeto `Todo` e um objeto com as propriedades que devem ser atualizadas. O utilitário `Readonly<Todo>` cria um tipo onde todas as propriedades são somente leitura. Isso garante que `todo` não possa ser modificado após a sua criação.