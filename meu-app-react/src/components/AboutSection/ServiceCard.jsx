



const ServiceCard = ({ title, subtitle, description }) => {
  return (
    <div className="service-card">
      <h1 className='service-title'>{title}</h1>
      <p className="service-subtitle">{subtitle}</p>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;

