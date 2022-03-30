import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: #31e636;
`;

const SubTitulo = styled.h2`
color: green;
font-size: 30px;
text-align: left;
`;

const Artigo = styled.section`
color: #9393e2;
`;

const Titulo2 = styled.h1`
color: blue;
font-size: 25px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Meu site</Titulo>
        <SubTitulo>Subtitulo</SubTitulo>
        <Artigo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae qui eligendi accusamus dolor. Et error ab maxime quaerat! Ut nemo doloremque quisquam ipsam blanditiis nam, eius delectus fugit!</Artigo>
        <Titulo2>Segunda Parte</Titulo2>
        <Artigo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus recusandae qui eligendi accusamus dolor. Et error ab maxime quaerat! Ut nemo doloremque quisquam ipsam blanditiis nam, eius delectus fugit!</Artigo>
      </header>
    </div>
  );
}

export default App;
