# Setup do React Router DOM

O setup do React Router DOM envolve alguns passos essenciais para configurar e utilizar a navegação em uma aplicação React. Vou explicar cada passo com mais detalhes:

1. **Instalar o pacote react-router-dom**:
   - O primeiro passo é instalar o pacote `react-router-dom` via npm ou yarn. Este pacote fornece os componentes necessários para a criação de rotas em uma aplicação React.
   - Exemplo: `npm install react-router-dom`

2. **Envolver o componente `<App>` dentro do `<BrowserRouter>`**:
   - Em seguida, você precisa envolver o componente principal `<App>` dentro do componente `<BrowserRouter>`. Isso é necessário para que o React Router DOM possa gerenciar as rotas da aplicação.
   - Exemplo:
     ```jsx
     import { BrowserRouter as Router } from 'react-router-dom';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(
       <Router>
         <App />
       </Router>,
       document.getElementById('root')
     );
     ```

3. **Definir as rotas usando `<Routes>` e `<Route>`**:
   - Dentro do componente `<App>`, você define as rotas utilizando os componentes `<Routes>` e `<Route>`. Cada `<Route>` define uma rota específica, especificando o caminho (`path`) e o componente a ser renderizado (`element`).
   - Exemplo:
     ```jsx
     import { Routes, Route } from 'react-router-dom';
     import Home from './components/Home';
     import About from './components/About';
     import Contact from './components/Contact';

     function App() {
       return (
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
         </Routes>
       );
     }

     export default App;
     ```

4. **Usar `<Link>` na navegação**:
   - Para criar links de navegação entre as diferentes rotas, você pode usar o componente `<Link>` fornecido pelo React Router DOM. Isso permite que os usuários naveguem entre as páginas sem recarregar a página inteira.
   - Exemplo:
     ```jsx
     import { Link } from 'react-router-dom';

     function App() {
       return (
         <>
           <nav>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
           </nav>
           <Routes>...</Routes>
         </>
       );
     }

     export default App;
     ```

Este é o processo básico para configurar e usar o React Router DOM em uma aplicação React. Com esses passos, você pode criar um sistema de navegação funcional que permite aos usuários navegar entre diferentes páginas da sua aplicação sem recarregar a página inteira.