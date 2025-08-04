

const TreatmentCard = ({ icon, title, description }) => {
  return (
    <div className="treatment-card">
      <div className="treatment-icon">
        <img src={icon} alt="Ícone" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TreatmentCard;
