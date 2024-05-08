# Setup Inicial

### types.ts
Este arquivo `types.ts` contém a definição de tipos e constantes relacionadas a alimentos para um churrasco, por exemplo. Vamos analisar o código em detalhes:

### Definição de Tipo `Alimento`:
```typescript
export type Alimento = 'carne' | 'linguica' | 'frango' | 'paoAlho';
```
- Aqui, é definido um tipo `Alimento`, que é uma união de strings literais. Isso significa que uma variável do tipo `Alimento` só pode ter um dos valores definidos: `'carne'`, `'linguica'`, `'frango'` ou `'paoAlho'`. Esses valores representam diferentes tipos de alimentos que podem ser consumidos em um churrasco.

### Constante `quantidadePessoas`:
```typescript
export const quantidadePessoas: Record<Alimento, number> = {
    carne: 400,
    linguica: 200,
    frango: 200,
    paoAlho: 100
};
```
- Aqui, é definida uma constante `quantidadePessoas` que armazena a quantidade de cada alimento necessária por pessoa em gramas. O tipo desta constante é `Record<Alimento, number>`, onde `Alimento` é o tipo de chave e `number` é o tipo de valor. Isso significa que cada chave do objeto é um tipo `Alimento`, e cada valor é um número representando a quantidade em gramas.

### Constante `nomesAlimentos`:
```typescript
export const nomesAlimentos: Record<string, string> = {
    carne: "Carne",
    linguica: "Linguica",
    frango: "Frango",
    paoAlho: "Pao de Alho"
};
```
- Aqui, é definida uma constante `nomesAlimentos` que mapeia os nomes amigáveis de cada alimento. O tipo desta constante é `Record<string, string>`, o que significa que as chaves e os valores são ambos strings. Isso mapeia cada chave (um tipo `Alimento`) para uma string representando o nome do alimento correspondente.

Essas definições e constantes fornecem uma estrutura organizada e tipada para trabalhar com diferentes tipos de alimentos em um contexto de churrasco. Isso facilita o desenvolvimento e a manutenção do código, tornando-o mais legível e menos suscetível a erros.
