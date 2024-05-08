# Criando a pagina da calculadora

### Funcionamento do Componente `CalculadoraChurrasco`:

1. **Importações**:
   - `useNavigate`: Este é um hook do React Router DOM que fornece a capacidade de navegar programaticamente para outra rota.
   - `nomesAlimentos`: É uma constante importada do arquivo `types`, que mapeia os nomes amigáveis dos alimentos.

2. **Declaração do Componente**:
   - `CalculadoraChurrasco`: É um componente funcional que renderiza um formulário para calcular os alimentos necessários para um churrasco.

3. **Inicialização do `useNavigate`**:
   - `const navigate = useNavigate();`: Este trecho inicializa o hook `useNavigate`, que será usado para navegar para a rota "/resultado" após a submissão do formulário.

4. **Formulário com Formik**:
   - O componente utiliza o `Formik`, uma biblioteca que facilita a criação de formulários em React, para gerenciar o estado do formulário e lidar com validações.
   - `onSubmit={() => navigate("/resultado")}`: Define a função a ser executada quando o formulário é submetido, que neste caso navega para a rota "/resultado".
   - `initialValues`: Define os valores iniciais do formulário, incluindo o número de pessoas (`pessoas`) e a seleção de alimentos (`selecaoAlimentos`).

5. **Renderização do Formulário**:
   - O formulário é renderizado dentro do componente `Formik`.
   - `Field` e `Form`: Esses são componentes do Formik usados para criar campos de formulário e o próprio formulário, respectivamente.

6. **Inputs do Formulário**:
   - Um campo de entrada para o número de pessoas é renderizado com um `<input>` do tipo "number", vinculado ao campo `pessoas` do estado do Formik.
   - Uma lista de checkboxes é renderizada para selecionar os alimentos do churrasco.
   - A lista é gerada mapeando as chaves do objeto `nomesAlimentos` e renderizando um checkbox para cada alimento.

7. **Botão de Submissão**:
   - Um botão "Calcular" é renderizado dentro do formulário. Quando clicado, ele submete o formulário, o que dispara a função definida em `onSubmit` para navegar para a rota "/resultado".

8. **Exportação do Componente**:
   - O componente `CalculadoraChurrasco` é exportado como o padrão deste arquivo para que possa ser importado e usado em outros componentes ou arquivos.

Em resumo, este componente `CalculadoraChurrasco` é responsável por renderizar um formulário para calcular os alimentos necessários para um churrasco. Ele utiliza o Formik para gerenciar o estado do formulário e o React Router DOM para navegar para outra rota após a submissão do formulário. Os alimentos disponíveis são renderizados dinamicamente com base nos dados definidos em `nomesAlimentos`.