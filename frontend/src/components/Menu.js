import React from 'react';
import { Tilt } from 'react-tilt';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e6f7ff', // Cor de fundo clara e moderna
            fontFamily: 'Arial, sans-serif',
        },
        header: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '50px',
            textAlign: 'center',
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap', // Ajuste para telas menores
        },
        card: {
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Gradiente vibrante
            padding: '40px',
            borderRadius: '15px',
            width: '250px',
            height: '150px',
            boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease-in-out, opacity 0.3s', // Transições suaves
        },
        evaluationsCard: {
            background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', // Gradiente laranja vibrante
        },
        exitCard: {
            background: 'linear-gradient(135deg, #f44336, #f55a55)', // Gradiente de vermelho
        },
        cardHover: {
            transform: 'scale(1.05)', // Efeito de zoom no hover
            boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.2)', // Sombra mais forte no hover
            opacity: 0.9, // Efeito de opacidade para dar sensação de profundidade
        },
    };

    return (
        <div style={styles.container}>
            <div>
                <h1 style={styles.header}>Menu Principal</h1>
                <div style={styles.cardContainer}>
                    <Tilt
                        options={{
                            max: 25,
                            perspective: 1000,
                        }}
                    >
                        <div
                            style={{ ...styles.card, ...styles.cardHover }}
                            onClick={() => navigate('/students')}
                        >
                            Gerenciamento de Alunos
                        </div>
                    </Tilt>

                    <Tilt
                        options={{
                            max: 25,
                            perspective: 1000,
                        }}
                    >
                        <div
                            style={{ ...styles.card, ...styles.evaluationsCard, ...styles.cardHover }}
                            onClick={() => navigate('/backup')}
                        >
                            Backup
                        </div>
                    </Tilt>

                    <Tilt
                        options={{
                            max: 25,
                            perspective: 1000,
                        }}
                    >
                        <div
                            style={{ ...styles.card, ...styles.exitCard, ...styles.cardHover }}
                            onClick={() => navigate('/login')}
                        >
                            Sair
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Menu;
