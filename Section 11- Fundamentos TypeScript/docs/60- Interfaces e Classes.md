# Interfaces e Classes em TS

**Interfaces:**

As interfaces em TypeScript são contratos que definem a estrutura de um objeto. Elas podem conter propriedades e métodos que um objeto deve implementar para atender ao contrato. Aqui estão os exemplos fornecidos:

1. **Definindo uma interface para um usuário:**
   
   ```typescript
   interface User {
       id: number;
       name: string;
       isActive: boolean;
   }
   ```

   Esta interface `User` define a estrutura de um objeto de usuário, que deve ter propriedades `id`, `name`, e `isActive`.

2. **Utilizando a interface:**
   
   ```typescript
   const myUser: User = {
       id: 1,
       name: "Alice",
       isActive: true,
   };
   
   console.log(myUser);
   ```

   Aqui, um objeto `myUser` é criado seguindo a estrutura definida pela interface `User`.

3. **Extensão de interfaces:**
   
   ```typescript
   interface Employee extends User {
       department: string;
   }
   
   const employee: Employee = {
       id: 2,
       name: "Bob",
       isActive: true,
       department: "Development",
   };
   
   console.log(employee);
   ```

   A interface `Employee` estende a interface `User`, adicionando uma nova propriedade `department`. Isso significa que um objeto `Employee` deve ter todas as propriedades de `User` e também a propriedade `department`.

**Classes:**

As classes em TypeScript permitem criar objetos com métodos e propriedades associadas. Elas podem implementar interfaces para garantir que atendam a certos contratos. Aqui está o exemplo fornecido:

1. **Definindo uma classe que implementa uma interface:**
   
   ```typescript
   class Person implements User {
       id: number;
       name: string;
       isActive: boolean;
   
       constructor(id: number, name: string, isActive: boolean) {
           this.id = id;
           this.name = name;
           this.isActive = isActive;
       }
   
       greet() {
           console.log(`Olá, meu nome é ${this.name}`);
       }
   }
   
   const personData = new Person(3, "Charlie", true);
   personData.greet();
   ```

   Aqui, a classe `Person` implementa a interface `User`, o que significa que ela deve ter as mesmas propriedades que `User`. Além disso, `Person` possui um método `greet()` que imprime uma saudação personalizada. Quando um objeto `Person` é instanciado, ele pode acessar o método `greet()` juntamente com suas propriedades.