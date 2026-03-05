import { useState, useEffect } from "react";
import "./App.css";
import { getAllCharacters, getCharacterById } from "./service/charactersService";
import CharacterGrid from "./components/CharacterGrid";
import DetailGrid from "./components/DetailGrid";

const App = () => {
  const [personagens, setPersonagens] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  
  // Estado para controlar qual personagem exibir nos detalhes
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllCharacters(paginaAtual);
        setPersonagens(data.results || []);
        setInfo(data.info || {});
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [paginaAtual]);

  // Busca o personagem específico por ID e abre a tela de detalhes
  const handleSelectCharacter = async (id) => {
    setLoading(true);
    try {
      const data = await getCharacterById(id);
      setPersonagemSelecionado(data);
    } catch (error) {
      console.error("Erro ao carregar detalhes:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1 className="loading">Carregando...</h1>;

  return (
    <div className="App">
      <h1>Rick and Morty Explorer</h1>

      {personagemSelecionado ? (
        /* TELA DE DETALHES */
        <DetailGrid 
          personagem={personagemSelecionado} 
          onBack={() => setPersonagemSelecionado(null)} 
        />
      ) : (
        /* TELA DA LISTA */
        <>
          <div className="pagination">
            <button 
              disabled={paginaAtual === 1} 
              onClick={() => setPaginaAtual(paginaAtual - 1)}
            >
              Anterior
            </button>
            
            <span>Página {paginaAtual} de {info.pages}</span>

            <button 
              disabled={paginaAtual === info.pages} 
              onClick={() => setPaginaAtual(paginaAtual + 1)}
            >
              Próxima
            </button>
          </div>

          <CharacterGrid 
            personagens={personagens} 
            onSelect={handleSelectCharacter} 
          />
        </>
      )}
    </div>
  );
};

export default App;