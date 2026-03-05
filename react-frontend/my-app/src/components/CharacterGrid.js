const CharacterGrid = ({ personagens, onSelect }) => {
  return (
    <div className="character-grid">
      {personagens.map((p) => (
        <div key={p.id} className="character-card" onClick={() => onSelect(p.id)}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.species} - {p.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;