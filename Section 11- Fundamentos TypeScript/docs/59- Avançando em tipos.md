# Avançando em tipos

Claro! Vamos explorar funções e enums em TypeScript com exemplos de código:

### Funções:

1. **Declaração de Função:**
   
   ```typescript
   function add(a: number, b: number): number {
       return a + b;
   }
   
   const result: number = add(5, 3);
   console.log(result); // Output: 8
   ```

2. **Expressão de Função:**
   
   ```typescript
   const multiply = function(a: number, b: number): number {
       return a * b;
   };
   
   const result: number = multiply(4, 2);
   console.log(result); // Output: 8
   ```

3. **Função com Parâmetros Opcionais:**
   
   ```typescript
   function greet(name: string, greeting?: string): void {
       if (greeting) {
           console.log(`${greeting}, ${name}!`);
       } else {
           console.log(`Hello, ${name}!`);
       }
   }
   
   greet("John"); // Output: Hello, John!
   greet("Alice", "Hi"); // Output: Hi, Alice!
   ```

4. **Função com Parâmetros Padrão:**
   
   ```typescript
   function greet(name: string, greeting: string = "Hello"): void {
       console.log(`${greeting}, ${name}!`);
   }
   
   greet("John"); // Output: Hello, John!
   greet("Alice", "Hi"); // Output: Hi, Alice!
   ```

### Enum:

Enums são uma forma de definir um conjunto nomeado de constantes.

1. **Enum Simples:**
   
   ```typescript
   enum Direction {
       Up,
       Down,
       Left,
       Right
   }
   
   const playerDirection: Direction = Direction.Up;
   console.log(playerDirection); // Output: 0
   
   if (playerDirection === Direction.Up) {
       console.log("Player is moving up.");
   }
   ```

2. **Enum com Valores Personalizados:**
   
   ```typescript
   enum HttpStatus {
       OK = 200,
       NotFound = 404,
       ServerError = 500
   }
   
   const responseStatus: HttpStatus = HttpStatus.OK;
   console.log(responseStatus); // Output: 200
   
   if (responseStatus === HttpStatus.OK) {
       console.log("Request successful.");
   }
   ```

3. **Enum com String Valores:**
   
   ```typescript
   enum Color {
       Red = "RED",
       Green = "GREEN",
       Blue = "BLUE"
   }
   
   const primaryColor: Color = Color.Red;
   console.log(primaryColor); // Output: "RED"
   ```

4. **Acesso aos Membros do Enum:**
   
   ```typescript
   enum Direction {
       Up,
       Down,
       Left,
       Right
   }
   
   console.log(Direction.Up); // Output: 0
   console.log(Direction[0]); // Output: "Up"
   ```

Os enums em TypeScript são úteis para definir um conjunto fixo de valores que podem ser usados ​​em um contexto específico. Eles ajudam a tornar o código mais legível e menos propenso a erros.