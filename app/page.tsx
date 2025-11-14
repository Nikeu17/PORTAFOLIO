'use client';

import { useState } from 'react';

export default function PortfolioComplete() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <main style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      {/* SECCIÓN 1: HERO */}
      <section style={{
        minHeight: '100vh',
        background: '#f5f5f5',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Navigation */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 50px',
          position: 'relative',
          zIndex: 10
        }} className="nav-responsive">
          <div style={{
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: '600',
            color: '#000'
          }}>
            Nicolle Pacas
          </div>
          
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: '500'
          }} className="nav-links">
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                fontSize: '16px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
            >
              Sobre mi
            </button>
            <button 
              onClick={() => scrollToSection('experiencia')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                fontSize: '16px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
            >
              Experiencia
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                fontSize: '16px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('certificados')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                fontSize: '16px',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
            >
              Certificados
            </button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '28px'
            }}
          >
            ☰
          </button>
        </nav>

        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: '#fff',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            zIndex: 50,
            padding: '20px'
          }} className="mobile-menu">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              textAlign: 'center'
            }}>
              <button onClick={() => scrollToSection('sobre-mi')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '18px', fontWeight: '500', padding: '10px'
              }}>Sobre mi</button>
              <button onClick={() => scrollToSection('experiencia')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '18px', fontWeight: '500', padding: '10px'
              }}>Experiencia</button>
              <button onClick={() => scrollToSection('proyectos')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '18px', fontWeight: '500', padding: '10px'
              }}>Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '18px', fontWeight: '500', padding: '10px'
              }}>Contacto</button>
            </div>
          </div>
        )}

        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 50px',
          width: '100%'
        }} className="hero-content">
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: 'clamp(300px, 40vw, 500px)',
              height: 'clamp(300px, 40vw, 500px)',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
              <img 
                src="/perfil.jpg" 
                alt="Nicolle Pacas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            textAlign: 'center'
          }} className="hero-text">
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: '1.2',
              color: '#000'
            }}>
              Futura Psicóloga<br />
              <span style={{ color: '#999', fontWeight: '500' }}>Organizacional</span>
            </h1>

            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/cv.pdf" 
                download
                style={{
                  padding: '14px 35px',
                  border: '2px solid #000',
                  borderRadius: '50px',
                  background: 'transparent',
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#000';
                }}
              >
                Download CV
              </a>
              <button 
                onClick={() => scrollToSection('contacto')}
                style={{
                  padding: '14px 35px',
                  border: 'none',
                  borderRadius: '50px',
                  background: '#000',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#333';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contact Info
              </button>
            </div>

            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px'
            }}>
              <a 
                href="https://linkedin.com/in/nicolle-pacas" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#000',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0077B5'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
              >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Nikeu17" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#000',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6e5494'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
              >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: SOBRE MÍ */}
      <section id="sobre-mi" style={{
        minHeight: '100vh',
        background: '#fff',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} className="sobre-mi-section">
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'center'
        }} className="sobre-mi-grid">
          
          {/* Imagen */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="sobremi.jpg" 
              alt="Ilustración sobre mí" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* Contenido */}
          <div>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontWeight: 'bold',
              marginBottom: '30px',
              color: '#000'
            }}>
              Sobre mí
            </h2>
            
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '40px',
              textAlign: 'justify'
            }}>
              Soy una persona empática, comunicativa y con una actitud positiva ante los retos. 
              Me encanta trabajar en equipo y aprender de cada experiencia, especialmente cuando 
              me permite crecer y aportar algo valioso a los demás. Actualmente curso mi último 
              año de bachillerato y formo parte de un programa de becas que ha fortalecido mis 
              conocimientos en inglés, informática y valores. Mi propósito es desarrollarme como 
              Psicóloga Organizacional para contribuir a construir ambientes laborales saludables, 
              humanos y productivos, donde las personas puedan sentirse valoradas y motivadas.
            </p>

            <h3 style={{
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 'bold',
              marginBottom: '25px',
              color: '#000'
            }}>
              Educación
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '1.6',
                color: '#333'
              }}>
                <strong>2024-2025</strong> Bachillerato General - Complejo Educativo Soldado Oscar Antonio Ortiz Reyes
              </div>
              <div style={{
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '1.6',
                color: '#333'
              }}>
                <strong>2023-2025</strong> Programa Empresarial ¡Supérate! Hilasal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: HABILIDADES */}
      <section style={{
        minHeight: '100vh',
        background: '#f5f5f5',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%'
        }}>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 'bold',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#000'
          }}>
            MIS HABILIDADES
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }} className="habilidades-grid">
            {[
              'HTML', 'Excel', 'Organización',
              'Figma', 'Adaptabilidad', 'Comunicación acertiva',
              'Python', 'Canva', 'Resolución de problemas',
              'Power BI', 'Hablar en publico', ''
            ].map((skill, i) => (
              skill && (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <img 
                    src="/concha.jpg" 
                    alt=""
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'contain',
                      flexShrink: 0
                    }}
                  />
                  <span style={{
                    fontSize: 'clamp(16px, 1.8vw, 20px)',
                    fontWeight: '500',
                    color: '#000'
                  }}>
                    {skill}
                  </span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: PROYECTOS - FOURTI */}
      <section id="proyectos" style={{
        minHeight: '100vh',
        background: '#000',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '2px solid #fff',
        borderBottom: '2px solid #fff'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="proyecto-grid">
          
          <div>
            <h2 style={{
              fontSize: 'clamp(60px, 10vw, 120px)',
              fontWeight: '900',
              color: '#fff',
              marginBottom: '20px',
              lineHeight: '1'
            }}>
              FOURTI
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontStyle: 'italic',
              color: '#999',
              marginBottom: '30px'
            }}>
              Hackaton 2023
            </p>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '1.8',
              color: '#fff'
            }}>
              Una app para emprendedores que sigan utilizando papel y lápiz para llevar el 
              registro de sus negocios. Les facilita sus cuentas y el registro de sus productos 
              en stock y los vendidos.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1',
              borderRadius: '30px',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, #E3F2FD 0%, #C8E6C9 100%)',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(255,255,255,0.1)'
            }}>
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '25%',
                width: '50%',
                height: '30%',
                background: '#fff',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '50%',
                background: 'linear-gradient(180deg, #8BC34A 0%, #689F38 100%)',
                borderRadius: '0 0 30px 30px'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CHAMBI */}
      <section style={{
        minHeight: '100vh',
        background: '#000',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #fff'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="proyecto-grid-reverse">
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1',
              borderRadius: '30px',
              overflow: 'hidden',
              background: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(255,255,255,0.1)'
            }}>
              <img 
                src="/chambi.jpg" 
                alt="CHAMBI"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: 'clamp(60px, 10vw, 120px)',
              fontWeight: '900',
              color: '#fff',
              marginBottom: '20px',
              lineHeight: '1'
            }}>
              CHAMBI
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontStyle: 'italic',
              color: '#999',
              marginBottom: '30px'
            }}>
              Expo de logros 2024
            </p>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '1.8',
              color: '#fff'
            }}>
              Plataforma que conecta a las residentes con personas calificadas para las 
              reparaciones de su hogar y ayuda a los trabajadores a ser conocidos por su 
              experiencia y la calidad de su trabajo en la comunidad que no tienen titulo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: DEXPERT */}
      <section style={{
        minHeight: '100vh',
        background: '#000',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #fff'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="proyecto-grid">
          
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <h2 style={{
                fontSize: 'clamp(60px, 10vw, 120px)',
                fontWeight: '900',
                color: '#fff',
                margin: 0,
                lineHeight: '1'
              }}>
                DEXPERT
              </h2>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span style={{
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: '#999'
                }}>
                  Ganadores
                </span>
              </div>
            </div>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontStyle: 'italic',
              color: '#999',
              marginBottom: '30px'
            }}>
              expo tech 2025
            </p>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '1.8',
              color: '#fff'
            }}>
              Plataforma que conecta a jóvenes sin experiencia con pequeñas y medianas empresas 
              para trabajar en proyectos reales, Aprendiendo, aplicando sus conocimientos y 
              obteniendo un certificado al mismo tiempo.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1',
              borderRadius: '30px',
              overflow: 'hidden',
              background: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(255,255,255,0.1)'
            }}>
              <img 
                src="/dexpert.jpg" 
                alt="DEXPERT"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: EXPERIENCIA - HOST */}
      <section id="experiencia" style={{
        minHeight: '100vh',
        background: '#000',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #fff'
      }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="proyecto-grid-reverse">
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(255,255,255,0.1)'
            }}>
              <img 
                src="/host.jpg" 
                alt="HOST"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: 'clamp(60px, 10vw, 120px)',
              fontWeight: '900',
              color: '#fff',
              marginBottom: '20px',
              lineHeight: '1'
            }}>
              HOST
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontStyle: 'italic',
              color: '#999',
              marginBottom: '30px'
            }}>
              expo de logros 2025
            </p>
            
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              lineHeight: '1.8',
              color: '#fff'
            }}>
              Host en el evento "Expo de logros" en el centro ¡Supérate! Hilasal junto a 
              Rodrigo Campos. Presentadora en el evento de equipos innovadores.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: CERTIFICADOS */}
<section id="certificados" style={{
  minHeight: '100vh',
  background: '#fff',
  padding: '60px 20px'
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '60px'
    }}>
      <div style={{
        background: '#000',
        color: '#fff',
        borderRadius: '50px',
        padding: '5px 50px',
        display: 'inline-block'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 3vw, 42px)',
          fontWeight: 'bold',
          margin: '0',
          whiteSpace: 'nowrap'
        }}>
          Certificados
        </h2>
      </div>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px'
    }} className="grid-3-cols">
      {/* Certificado 1 */}
      <div style={{
        background: '#000',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <img 
          src="/cert1.jpg" 
          alt="Microsoft Office Specialist" 
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '25px' }}>
          <p style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontStyle: 'italic',
            color: '#fff'
          }}>
            Microsoft Excel (Microsoft 365 Apps)
          </p>
        </div>
      </div>

      {/* Certificado 2 */}
      <div style={{
        background: 'black',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <img 
          src="/cert2.jpg" 
          alt="IT Specialist Python" 
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '25px' }}>
          <p style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontStyle: 'italic',
            color: '#fff'
          }}>
            Information Techonology Specialist in Python
          </p>
        </div>
      </div>

      {/* Certificado 3 */}
      <div style={{
        background: 'black',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <img 
          src="/cert3.jpg" 
          alt="TELUS Digital" 
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '25px' }}>
          <p style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 'clamp(14px, 2vw, 18px)',
            fontStyle: 'italic',
            color: '#fff'
          }}>
            TELUS Digital English Conversation Club
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECCIÓN 8: CONTACTO */}
      <section id="contacto" style={{
        minHeight: '100vh',
        background: '#f5f5f5',
        padding: '80px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(50px, 8vw, 100px)',
            fontWeight: 'bold',
            color: '#ccc',
            marginBottom: '60px',
            letterSpacing: '2px'
          }}>
            Contactame
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'center'
          }}>
            {/* Teléfono */}
            <a 
              href="tel:76268817"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="#000">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 'bold',
                color: '#000'
              }}>
                7626-8817
              </span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Nikeu17"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="#000">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 'bold',
                color: '#000'
              }}>
                Nikeu17
              </span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/nicolle-eunice-pacas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="#000">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 'bold',
                color: '#000'
              }}>
                Nicolle Eunice Pacas
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-responsive {
            padding: 20px 25px !important;
          }

          .nav-links {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 20px 25px !important;
          }

          .hero-text {
            order: 2;
          }

          .hero-content > div:first-child {
            order: 1;
          }

          .sobre-mi-section {
            padding: 60px 25px !important;
          }

          .sobre-mi-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .habilidades-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }

          .proyecto-grid,
          .proyecto-grid-reverse {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 !important;
          }

          .proyecto-grid > div:first-child {
            order: 2;
          }

          .proyecto-grid > div:last-child {
            order: 1;
          }

          .proyecto-grid-reverse > div:first-child {
            order: 1;
          }

          .proyecto-grid-reverse > div:last-child {
            order: 2;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .habilidades-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}