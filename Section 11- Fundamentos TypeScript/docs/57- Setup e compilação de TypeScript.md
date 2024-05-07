# 57. Setup e compilação de TypeScript

O arquivo `tsconfig.json` é utilizado para configurar o compilador TypeScript (TS) e definir como o código TypeScript deve ser compilado para JavaScript (JS). Vamos analisar as principais configurações presentes neste arquivo:

1. **`compilerOptions`**: Esta seção define as opções de compilação para o TypeScript.

    - **`outDir`**: Especifica o diretório de saída para os arquivos JavaScript compilados. Neste caso, os arquivos JavaScript compilados serão armazenados no diretório `dist`.
    
    - **`noImplicitAny`**: Quando definido como `true`, o TypeScript irá gerar um erro se não puder inferir um tipo. Isso ajuda a garantir que todos os tipos sejam explicitamente declarados no código.
    
    - **`module`**: Define o sistema de módulos que o TypeScript irá gerar nos arquivos JavaScript compilados. Aqui, está configurado como `commonJS`, o que indica que o TypeScript usará o sistema de módulos CommonJS para compatibilidade com ambientes Node.js.
    
    - **`target`**: Define para qual versão do ECMAScript (ES) o código JavaScript compilado deve ser compatível. Neste caso, o código será compilado para ES6.

2. **`include`**: Esta seção especifica quais arquivos e diretórios devem ser incluídos na compilação. No exemplo fornecido, todos os arquivos TypeScript (`*.ts` e `*.tsx`) localizados dentro do diretório `src` e seus subdiretórios serão incluídos.

3. **`exclude`**: Esta seção especifica quais arquivos e diretórios devem ser excluídos da compilação. No exemplo fornecido, o diretório `node_modules` será excluído, o que é comum, pois geralmente não há necessidade de compilar os arquivos de bibliotecas de terceiros.

Em resumo, este arquivo de configuração `tsconfig.json` define as opções de compilação do TypeScript para um projeto, incluindo o diretório de saída, configurações de tipo implícito, sistema de módulos, versão do ECMAScript alvo e inclusão/exclusão de arquivos e diretórios durante a compilação.