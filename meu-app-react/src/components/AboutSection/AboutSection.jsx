import "./AboutSection.css";

import ServiceCard from "./ServiceCard";

const AboutSection = () => {
  const services = [
    {
      title: "01.",
      subtitle: "Consulta",
      description:
        "A consulta servirá de guia para o seu tratamento. É nessa etapa que vamos decidir juntos se o seu problema se adequa para tratamento através da hipnose.",
    },
    {
      title: "02.",
      subtitle: "Terapia",
      description:
        "Com base nas informações levantadas na consulta, o tratamento se inicia. Duração em torno de 60min até 2 horas",
    },
    {
      title: "03.",
      subtitle: "Retorno",
      description: "Duração em torno de 50min até 1h e 30mins",
    },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <img
            src="/img/Logo_Completa-removebg-preview.png"
            alt="Logo"
            className="about-logo"
          />
          <p className="about-description">
            <strong>
              É possível libertar-se dos velhos hábitos, das crenças limitantes,
              transtornos e fobias que fazem tanto mal e atrapalham sua vida! Um
              mundo novo de possibilidades está à sua espera.
            </strong>
          </p>
        </div>

        <div className="services-section">
          <h3 className="services-title">Nossa Metodologia de Trabalho</h3>
          <p className="services-subtitle">
            É feito em média de três sessões que são divididas da seguinte
            maneira:
          </p>
          <div className="highlighted-line"></div>
          <br />
          <div className="services-cards">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="landscape-image-container">
        <img
          src="/img/Foto Paisagem.jpg"
          alt="Paisagem"
          className="landscape-image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
