const DetailGrid = ({ personagem, onBack }) => {
  return (
    <div className="detail-container">
      <div className="back-button-wrapper">
        <button className="btn-back" onClick={onBack}>
          ← Voltar
        </button>
      </div>

      <div className="detail-card">
        <img src={personagem.image} alt={personagem.name} />

        <div className="detail-info">
          <h2>{personagem.name}</h2>
          <span className={`status-badge ${personagem.status.toLowerCase()}`}>
            {personagem.status}
          </span>

          <hr />
          <p>
            <strong>Espécie:</strong> {personagem.species}
          </p>
          {personagem.type && (
            <p>
              <strong>Tipo:</strong> {personagem.type}
            </p>
          )}
          <p>
            <strong>Gênero:</strong> {personagem.gender}
          </p>
          <p>
            <strong>Origem:</strong> {personagem.origin?.name}
          </p>
          <p>
            <strong>Localização:</strong> {personagem.location?.name}
          </p>
          <hr />
          <p>
            <strong>Episódios:</strong> {personagem.episode?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailGrid;
