# Criando validações

Neste componente, as validações são feitas utilizando a biblioteca Yup, que é uma biblioteca de validação de esquemas. Vamos analisar em detalhes como as validações foram implementadas:

### 1. **Importações:**
```javascript
import * as Yup from 'yup';
```
- Importa a biblioteca Yup para realizar as validações de esquema.

### 2. **Esquema de Validação:**
```javascript
const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number()
    .min(1, "Deve haver pelo menos 1 pessoa")
    .required("Número de pessoas é obrigatório"),
  selecaoAlimentos: Yup.array()
    .of(Yup.string())
    .test(
      "check-selecaoAlimentos",
      "Selecione pelo menos um tipo de alimento",
      (array) => array != null && array.length > 0
    ),
});
```
- Define um esquema de validação utilizando `Yup.object().shape({})`, que permite validar objetos complexos.
- Para o campo `pessoas`, é especificado que deve ser um número (`Yup.number()`) e deve ter pelo menos 1 pessoa (`Yup.number().min(1, ...)`) e é obrigatório (`Yup.number().required(...)`).
- Para o campo `selecaoAlimentos`, é especificado que deve ser um array (`Yup.array()`) que contém strings (`Yup.array().of(Yup.string())`). Além disso, é adicionado um teste customizado para garantir que pelo menos um alimento seja selecionado.

### 3. **Uso do Formik com Yup:**
```javascript
<Formik
  initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
  validationSchema={esquemaValidacao}
  onSubmit={(values) => {
    navigate("/resultado", {
      state: {
        pessoas: values.pessoas,
        alimentosSelecionados: values.selecaoAlimentos,
      },
    });
  }}
>
```
- O componente `Formik` é utilizado para gerenciar o estado do formulário e lidar com a submissão.
- O `validationSchema` é definido como `esquemaValidacao`, que é o esquema de validação criado anteriormente com Yup.
- O `onSubmit` é uma função que será chamada quando o formulário for submetido. Dentro dessa função, é feito um redirecionamento para a rota "/resultado" com os valores das pessoas e alimentos selecionados.

### 4. **Exibição de Erros:**
```javascript
{errors.pessoas && touched.pessoas ? (
  <div>{errors.pessoas}</div>
) : null}
```
- Se houver erro no campo `pessoas` e ele foi tocado pelo usuário, exibe uma mensagem de erro.

```javascript
{errors.selecaoAlimentos ? (
  <div>{errors.selecaoAlimentos}</div>
) : null}
```
- Se houver erro no campo `selecaoAlimentos`, exibe uma mensagem de erro.

### Resumo:
Este componente utiliza a biblioteca Yup para definir um esquema de validação para os campos do formulário. As validações são aplicadas automaticamente pelo Formik durante a interação do usuário com o formulário, e os erros são exibidos dinamicamente com base nas regras de validação definidas. Isso ajuda a garantir que os dados inseridos pelos usuários sejam válidos antes de serem submetidos.