# Tipos basicos em TypeScript

Em TypeScript (TS), assim como em JavaScript (JS), os tipos básicos são os tipos fundamentais que representam os valores primitivos. No entanto, o TypeScript adiciona a capacidade de declarar explicitamente esses tipos, fornecendo mais segurança e previsibilidade ao código. Vamos explorar alguns dos tipos básicos em TypeScript juntamente com exemplos de código:

1. **`number`**: Representa números, tanto inteiros quanto de ponto flutuante.

```typescript
let age: number = 30;
let price: number = 9.99;
```

2. **`string`**: Representa cadeias de caracteres.

```typescript
let name: string = "John Doe";
let greeting: string = `Hello, ${name}!`;
```

3. **`boolean`**: Representa valores booleanos `true` ou `false`.

```typescript
let isLogged: boolean = true;
let hasError: boolean = false;
```

4. **`null` e `undefined`**: São usados para representar a ausência de valor.

```typescript
let emptyValue: null = null;
let notDefined: undefined = undefined;
```

5. **`object`**: Representa qualquer objeto não primitivo.

```typescript
let person: object = { name: "Alice", age: 25 };
let car: object = { brand: "Toyota", model: "Corolla" };
```

6. **`array`**: Representa uma lista de elementos do mesmo tipo.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
```

7. **`tuple`**: Representa um array com um número fixo de elementos, onde cada elemento pode ter um tipo diferente.

```typescript
let employee: [string, number] = ["John", 30]; // tuple [string, number]
```

8. **`enum`**: Define um conjunto de constantes nomeadas.

```typescript
enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Red;
```

9. **`any`**: Permite que uma variável seja de qualquer tipo.

```typescript
let dynamicValue: any = 10;
dynamicValue = "hello";
dynamicValue = true;
```

10. **`void`**: Representa a ausência de tipo, comumente usado para funções que não retornam valor.

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

Esses são alguns dos tipos básicos disponíveis no TypeScript. Ao utilizar esses tipos, você pode fornecer informações adicionais ao compilador sobre os tipos de dados esperados e reduzir a ocorrência de erros durante a execução do código.