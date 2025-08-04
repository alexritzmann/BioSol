

import './AboutSection.css';
import React, { useState, useRef, useEffect, useMemo} from 'react';


const AboutSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [contentHeights, setContentHeights] = useState({});
  const contentRefs = useRef([]);const carouselRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);

  // Dados das avaliações
  const reviews = useMemo(() => [
    {
      name: "Simone Silva",
      date: "20/01/2025",
      text: "A experiência de fazer terapia com Tayse foi maravilhosa, ela tratou afundo uma questão minha pessoal, que me trouxe leveza, paz, segurança, confiança me sinto segura de mim..<br>Super indico o trabalho dela..",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjWa7otZFCegWNCvu9f8yqHJbjEGMegGpCCF2tKDT5opXNepzfu4=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Edina Luz",
      date: "14/01/2025",
      text: "Tayse, uma ótima profissional, me ajudou a curar dos traumas de um relacionamento narcisista, agora vivendo uma fase maravilhosa.",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjVbdg4wsLwNLYTM3rKNMMktnqjwJYtnXVM6JNSL6XbV0hze9VS-WQ=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Mayara Sorlege Dias",
      date: "10/12/2024",
      text: "Maravilhosa, uma excelente profissional, e a sensação de liberdade após a sessão é inexplicável.<br>Todas que estiverem passando por situações desafiadoras deveriam ter esse suporte. Muito obrigado",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjV9s9PdieoKxvxxzfifMfyPz4mxBdgrjVjoASFqlVka_vbG7oNH=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Claudio Grigoletto",
      date: "05/12/2024",
      text: "“Conheci a Tayse por indicação de uma amiga, é uma profissional incrível! Sua sensibilidade, dedicação e habilidade em conduzir a hipnoterapia transformou minha vida de maneira única. Quando a conheci eu estava deprimido, angustiado, muita ansiedade sem motivação, em uma única sessão me destravou meus tarumas meus medos me dando mais clareza e entendimento que devemos sim pedir ajudar a profissionais competentes.<br>Obrigado Tayse",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjXUDZ3ZtrvsY7xlZ-8QzyZPdity51y5msXVqdUsLzgpzR3lVZ96=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Marcelo Silva",
      date: "17/12/2022",
      text: "Experiências incríveis! Me tornei uma nova pessoa. Mudei da água pro vinho, eu era preso e agora sou livre!",
      photo: "https://lh3.googleusercontent.com/a/ACg8ocIynyPuwk8oBBOFdHRliET6_q4oux-huH5G4qAFI0j_oNAVwQ=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Márcia Martins",
      date: "11/10/2022",
      text: "Minha mudança aconteceu a partir do momento que decidi acreditar na ajuda de uma profissional maravilhosa Tayse Alves, Hipnoterapeuta que fez ver que quando se acessa nosso subconsciente trazendo a tona situações nas quais ficamos presos em algum momento de nossas vidas nos causando traumas,medos,tristeza,problemas de saúde,relacionamentos e a partir dessa experiência da Hipnoterapia tomamos consciência da realidade e temos a oportunidade de curar essas feridas oportunizando e fazendo a escolha de mudar de padrão de comportamento e seguirmos felizes contagiando tudo e todos ao nosso redor ou podermos optar em continuar vivendo no mesmo padrão que nos prendia de alguma maneira. Então bora ser muito feliz! Gratidão Tayse por tudo!",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjXUDZ3ZtrvsY7xlZ-8QzyZPdity51y5msXVqdUsLzgpzR3lVZ96=w64-h64-c-rp-mo-br100"
    },
    {
      name: "Arlene Aparecida Luiz da Silva",
      date: "30/09/2022",
      text: "Cheguei no consultório da Tayse desesperada, pedindo socorro. Estava com uma depressão sem fim e já estava tomando 3 tipos de remédio. Perdi meus pais, e não via mais alegria na vida, eu vestia uma capa todos os dias me fazendo de forte, ninguém imaginava o que eu estava passando. Eu tenho 3 filhos e eles precisam de mim bem, pra poder ajudar eles. Foi onde eu fui com fé que iria melhorar. E melhorei 🙏🏼🥰❣️<br>É inexplicável a minha transformação, ela me ajudou MUITO, hoje eu vivo uma vida mais leve, antes eu só chorava, não via saída, não tinha paciência pra NADA e queria ser a salvadora de tudo. E isso não é falta de Deus! Precisamos de ajuda e eu SUPER recomendo a Tayse, quem quer mudar a vida. Eu te agradeço MUITO Tayse por me ajudar a saída do poço. Que Deus continue te abençoando e você ajude muitas vidas como ajudo a minha 🙏🏼🙌🏼 Gratidão ❣️",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjUKseMivGVHL_lEc2oFN61tV8M-iJbSi46lEavbLk6EOeidzs8Rog=w64-h64-c-rp-mo-br100"
    },
    { 
      name: "Leo Vicente",
      date: "21/09/2022",
      text: "Minha experiência foi simplesmente incrível, antes de fazer o procedimento eu fiquei com um pouco de medo achando que seria hipnotizado. Mas foi algo muito mais leve e transformador do que eu pensava.<br>Me libertei de alguns traumas, e hoje eu consigo entender o pq de tudo, hoje estou livre para ser feliz e conquistar o mundo.<br>Se vale a pena? Vale! Mil vezes.<br>Eu me libertei até de remédios antidepressivos, sem sentir sintomas algum.<br>Que o mundo possa conhecer esse tratamento, que o mundo possa sentir essa liberdade. Gratidão Tayse por me ajudar a me libertar.",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjWzT65tcjIWwC-JFmBlp6LP3wfOfufbwfdWP54TI5UTPeuygAR9hw=w64-h64-c-rp-mo-ba2-br100"
    },
    {
      name: "Gigliola Viêira",
      date: "16/09/2022",
      text: "Quando cheguei na Tayse, eu estava completamente perdida, como se estivesse saído de uma bolha e não soubesse direito o que fazer, que caminho seguir. A Tayse é uma profissional acolhedora e muito competente. Com as sessões pude entender um pouco mais sobre meu passado e o que ele reflete no que sou hoje. Quando a Tayse diz que está com você até o final, ela está, ela te pega pelas mãos e te ajuda a encontrar o seu caminho. Gratidão Tayse.",
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjVCueK5Njbt6F-IBt2BY3Jda2EyFNb7U7VXEFSqWg659xoQvfgk5g=w64-h64-c-rp-mo-br100"
    }
  ], []);

  useEffect(() => {
    const newHeights = {};
    reviews.forEach((_, index) => {
      if (contentRefs.current[index]) {
        const element = contentRefs.current[index];
        newHeights[index] = {
          initial: 95,
          expanded: element.scrollHeight
        };
      }
    });
    setContentHeights(newHeights);
  }, [reviews]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const newIndex = prev + 1;
      const maxIndex = Math.ceil(reviews.length / visibleCards) - 1;
      return newIndex > maxIndex ? maxIndex : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0));
  };

  // Calcula o total de slides
  const totalSlides = Math.ceil(reviews.length / visibleCards);
  
  // Cria grupos de reviews para cada slide
  const reviewGroups = useMemo(() => {
    const groups = [];
    for (let i = 0; i < reviews.length; i += visibleCards) {
      groups.push(reviews.slice(i, i + visibleCards));
    }
    return groups;
  }, [reviews, visibleCards]);

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <img src="/img/Logo_Completa-removebg-preview.png" alt="Logo" className="about-logo" />
          <p className="about-description">
            <strong>É possível libertar-se dos velhos hábitos, das crenças limitantes, transtornos e fobias que 
            fazem tanto mal e atrapalham sua vida! Um mundo novo de possibilidades está à sua espera.</strong>
          </p>
        </div>
        
        <div className="elementor-widget-container">
          <div className="ti-widget ti-goog" data-trustindex-widget="true">
            <div className="ti-widget-container">
              <div className="ti-reviews-container" ref={carouselRef}>
                <div className="ti-controls">
                  <button 
                    className={`ti-prev ${currentSlide === 0 ? 'hidden' : ''}`} 
                    onClick={prevSlide}
                    aria-label="Avaliação anterior"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>
                  <button 
                    className={`ti-next ${currentSlide >= totalSlides - 1 ? 'hidden' : ''}`} 
                    onClick={nextSlide}
                    aria-label="Próxima avaliação"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                </div>
                
                <div className="ti-reviews-container-wrapper">
                  <div 
                    className="ti-reviews-slider"
                    style={{ 
                      transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                      width: `${totalSlides * 100}%`
                    }}
                  >
                    {reviewGroups.map((group, groupIndex) => (
                      <div 
                        key={groupIndex}
                        className="ti-review-group"
                        style={{ width: `${100 / totalSlides}%` }}
                      >
                        {group.map((review, indexInGroup) => {
                          const originalIndex = groupIndex * visibleCards + indexInGroup;
                          const heightInfo = contentHeights[originalIndex] || { initial: 100, expanded: 0 };
                          
                          return (
                            <div 
                              key={originalIndex}
                              className="ti-review-item"
                            >
                              <div className="ti-inner">
                                <div className="ti-review-header">
                                  <img 
                                    className="ti-platform-icon" 
                                    src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" 
                                    alt="Google" 
                                    width="20" 
                                    height="20"
                                  />
                                  <div className="ti-profile-img">
                                    <img 
                                      src={review.photo} 
                                      alt={review.name}
                                      srcSet={`${review.photo.replace('w64', 'w128')} 2x`}
                                    />
                                  </div>
                                  <div className="ti-profile-details">
                                    <div className="ti-name">{review.name}</div>
                                    <div className="ti-date">{review.date}</div>
                                  </div>
                                </div>
                                
                                <div className="ti-stars">
                                  {[...Array(5)].map((_, i) => (
                                    <img 
                                      key={i}
                                      className="ti-star" 
                                      src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" 
                                      alt="Star" 
                                      width="17" 
                                      height="17"
                                    />
                                  ))}
                                </div>
                                
                                <div 
                                  ref={el => contentRefs.current[originalIndex] = el}
                                  className="ti-review-content"
                                  style={{
                                    height: expandedReviews[originalIndex] 
                                      ? `${heightInfo.expanded}px`
                                      : `${heightInfo.initial}px`,
                                    overflow: 'hidden',
                                    transition: 'height 0.3s ease'
                                  }}
                                  dangerouslySetInnerHTML={{ __html: review.text }}
                                />
                                
                                {heightInfo.expanded > heightInfo.initial && (
                                  <button 
                                    className="ti-read-more"
                                    onClick={() => toggleExpand(originalIndex)}
                                    aria-label={expandedReviews[originalIndex] ? "Esconder" : "Consulte Mais informação"}
                                  >
                                    {expandedReviews[originalIndex] ? "Esconder" : "Consulte Mais informação"}
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landscape-image-container">
        <img src="/img/Foto Paisagem.jpg" alt="Paisagem" className="landscape-image"/>
      </div>
    </section>
  );
};

export default AboutSection;