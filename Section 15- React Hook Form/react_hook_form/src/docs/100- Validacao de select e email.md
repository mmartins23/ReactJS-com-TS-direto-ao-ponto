Vamos explicar detalhadamente o componente `Form`:

### Importações e Configuração Inicial

1. **Importações**:
   ```javascript
   import { FormSchema } from "../schema/formSchema";
   import { useForms } from "../hooks/UseForms";
   ```
   Aqui, estamos importando o esquema de formulário (`FormSchema`) e um hook personalizado (`useForms`). O `FormSchema` provavelmente define as regras de validação usando uma biblioteca como `Yup` (embora não seja obrigatório), enquanto `useForms` encapsula a lógica para gerenciar o estado do formulário.

2. **Hook useForms**:
   ```javascript
   const { register, handleSubmit, errors } = useForms();
   ```
   Utilizamos o hook `useForms` para obter `register`, `handleSubmit` e `errors`:
   - `register` é usado para registrar os campos do formulário para validação e coleta de dados.
   - `handleSubmit` é uma função que processa o envio do formulário.
   - `errors` contém os erros de validação para cada campo.

### Função de Submissão do Formulário

```javascript
const onSubmit = (data: FormSchema) => {
  console.log(data);
}
```
A função `onSubmit` é chamada quando o formulário é enviado com sucesso. Recebe os dados do formulário (`data`) e simplesmente os imprime no console.

### Estrutura do Formulário

```javascript
return (
  <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
```
O formulário é configurado para chamar `handleSubmit(onSubmit)` quando for enviado. O formulário também tem classes Tailwind CSS para estilização.

#### Campo Nome

```javascript
<div className="flex flex-col gap-2 mb-2">
  <label htmlFor="name">Nome:</label>
  <input className="h-10 pl-2 rounded-md border border-slate-300" type="text" id="name" placeholder="Insert your name" {...register("name")} />
  {errors.name && <small className="text-red-500 italic">{errors.name.message}</small>}
</div>
```
- Um campo de texto para o nome.
- O campo é registrado com `register("name")`.
- Se houver um erro de validação para o nome, uma mensagem de erro é exibida abaixo do campo.

#### Campo Sobrenome

```javascript
<div className="flex flex-col gap-2 mb-2">
  <label htmlFor="lastname">Sobrenome:</label>
  <input className="h-10 pl-2 rounded-md border border-slate-300" type="text" id="lastname" placeholder="Insert your last name" {...register("lastname")} />
  {errors.lastname && <small className="text-red-500 italic">{errors.lastname.message}</small>}
</div>
```
- Similar ao campo de nome, mas para o sobrenome.
- Registrado com `register("lastname")`.
- Exibe uma mensagem de erro se houver problemas de validação.

#### Campo Gênero

```javascript
<div className="flex flex-col gap-2 mb-2">
  <label htmlFor="gender">Gênero</label>
  <select id="gender" {...register("gender")} className="h-10 pl-1 rounded-md border-slate-300">
    <option value="select">Selecione</option>
    <option value="female">Feminino</option>
    <option value="male">Masculino</option>
    <option value="other">Outro</option>
  </select>
  {errors.gender && <small className="text-red-500 italic">{errors.gender.message}</small>}
</div>
```
- Um campo de seleção para o gênero.
- Registrado com `register("gender")`.
- Exibe uma mensagem de erro se houver problemas de validação.

#### Campo Email

```javascript
<div className="flex flex-col gap-2 mb-2">
  <label htmlFor="email">Email</label>
  <input type="email" id="email" placeholder="Digite seu Email" {...register("email")} className="h-10 pl-2 rounded-md border-slate-300"/>
  {errors.email && <small className="text-red-500 italic">{errors.email.message}</small>}
</div>
```
- Um campo de texto para o email, com o tipo `email` para validação básica de email pelo navegador.
- Registrado com `register("email")`.
- Exibe uma mensagem de erro se houver problemas de validação.

### Botão de Submissão

```javascript
<button className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all" type="submit">Cadastrar</button>
```
- Um botão para enviar o formulário.
- Estilizado com classes Tailwind CSS.

### Explicação da Lógica de Validação

1. **`register`**:
   - Cada campo de formulário é registrado com `register`. Este método é essencial para conectar os campos ao sistema de validação e coleta de dados do `react-hook-form`.

2. **`handleSubmit`**:
   - `handleSubmit` é uma função fornecida pelo `react-hook-form` que lida com a lógica de submissão do formulário. Ela previne o comportamento padrão de submissão e chama a função `onSubmit` apenas se os dados do formulário forem válidos.

3. **`errors`**:
   - `errors` é um objeto que contém os erros de validação para cada campo. Se um campo específico tiver um erro, `errors` fornecerá a mensagem de erro correspondente.

### Resumo

O componente `Form` utiliza `react-hook-form` para gerenciar a validação e submissão do formulário. Ele registra cada campo de formulário, define regras de validação, exibe mensagens de erro apropriadas e estiliza os campos com Tailwind CSS. A função de submissão (`onSubmit`) simplesmente imprime os dados do formulário no console, mas pode ser ajustada para realizar outras ações, como enviar os dados para um servidor.