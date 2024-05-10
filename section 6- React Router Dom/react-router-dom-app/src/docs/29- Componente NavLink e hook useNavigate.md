# Componente NavLink

`Link` e `NavLink` são componentes fornecidos pelo React Router DOM para criar links de navegação em uma aplicação React. Ambos são utilizados para definir links entre diferentes rotas, mas possuem algumas diferenças importantes.

### Link:
- **Componente Básico**: `Link` é o componente básico para criar links de navegação.
- **Sempre Ativo**: Não oferece nenhuma informação visual sobre a rota atual. Um link criado com `Link` está sempre ativo, independentemente da rota atual.
- **Uso**: É mais adequado para casos em que você não precisa destacar visualmente o link ativo.

### NavLink:
- **Ativo com Base na Rota**: `NavLink` é uma versão estendida de `Link` que fornece uma forma de estilo condicional com base na rota atual.
- **Destaque Visual**: Ele adiciona automaticamente uma classe CSS ao link que corresponde à rota atual, permitindo destacar visualmente o link ativo.
- **Estilo Condicional**: Você pode usar a propriedade `isActive` para adicionar classes ou estilos com base na rota atual.
- **Uso**: É útil quando você deseja destacar visualmente o link ativo na barra de navegação.

### Exemplo com Estilos:
No exemplo fornecido, você tem tanto links `Link` quanto `NavLink`. O link para "Contato" é um `NavLink`, que recebe uma classe CSS específica (`active-link`) quando a rota correspondente está ativa. Essa classe adiciona um estilo visual ao link ativo.

```jsx
<nav>
  <ul>
    {/* Links Link */}
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>

    {/* NavLink com Estilo Condicional */}
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Contato
      </NavLink>
    </li>
  </ul>
</nav>
```

### Estilo `.active-link`:
O estilo `.active-link` define como o link ativo deve ser exibido. No exemplo fornecido, o link ativo (no caso, "Contato") terá um fundo de cor coral. Isso permite que os usuários identifiquem facilmente a rota atual na barra de navegação.

```css
.active-link {
  background-color: coral;
}
```

Portanto, enquanto `Link` é usado para criar links básicos entre as rotas, `NavLink` é usado quando você deseja adicionar um destaque visual ao link ativo com base na rota atual.


***

# Hook useNavigate()

No componente `Login`, o hook `useNavigate` é utilizado para fornecer a funcionalidade de navegação programaticamente dentro do componente, sem a necessidade de um evento de clique ou redirecionamento de link. Vou explicar como ele é usado:

1. **Importação e Utilização do `useNavigate`**:
   - No início do componente `Login`, o hook `useNavigate` é importado do pacote `react-router-dom`.
   - O hook é então chamado dentro do componente para obter a função `navigate`, que será usada para navegar para outra rota.

2. **Navegação Após o Login**:
   - Quando o formulário de login é submetido, a função `handleLogin` é chamada.
   - Dentro desta função, após o login ser processado (nesse caso, simulado com um `console.log`), a função `navigate` é chamada com o destino desejado. Aqui, é navegado de volta para a página inicial (`"/"`).

3. **Exemplo de Código**:
   ```jsx
   import { useState } from "react";
   import { useNavigate } from "react-router-dom";

   const Login = () => {
       const [username, setUsername] = useState();
       const navigate = useNavigate();

       const handleLogin = (e) => {
           e.preventDefault();

           console.log(`The username ${username} has been able to login.`);

           navigate("/");
       }

       return (
           <div>
               <h1>Login Page</h1>
               <form onSubmit={handleLogin}>
                   <input
                       type="text"
                       placeholder="Insert your username"
                       value={username}
                       onChange={e => setUsername(e.target.value)} />
                   <button type="submit">Send</button>
               </form>
           </div>
       )
   }

   export default Login;
   ```

Com o `useNavigate`, o componente `Login` pode realizar a navegação de forma programática, o que é útil em situações como o login bem-sucedido, onde você deseja redirecionar o usuário para outra página após a conclusão da ação.