import React, { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt, FaDownload } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

const Backup = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleBackup = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/backup', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'backup.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Erro ao fazer backup:', error);
    }
  };

  const handleRestore = async () => {
    if (!file) {
      alert('Selecione um arquivo para restaurar.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/restore', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Restaurado com sucesso!');
    } catch (error) {
      console.error('Erro ao restaurar:', error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Backup e Restauração</h1>
        <div style={styles.uploadSection}>
          <label htmlFor="fileInput" style={styles.fileLabel}>
            <FaCloudUploadAlt style={styles.icon} />
            <span>Selecionar Arquivo</span>
          </label>
          <input
            id="fileInput"
            type="file"
            style={styles.fileInput}
            onChange={handleFileChange}
          />
          {file && <p style={styles.fileName}>{file.name}</p>}
        </div>
        <div style={styles.buttonContainer}>
          <Tilt options={{ max: 25, scale: 1.1 }} style={styles.tiltContainer}>
            <button style={styles.button} onClick={handleBackup}>
              <FaDownload style={styles.icon} />
              Fazer Backup
            </button>
          </Tilt>
          <Tilt options={{ max: 25, scale: 1.1 }} style={styles.tiltContainer}>
            <button style={styles.button} onClick={handleRestore}>
              <FaCloudUploadAlt style={styles.icon} />
              Restaurar
            </button>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    height: '100vh', // Faz a página ocupar toda a altura da tela
    backgroundColor: '#eaf5ff', // Cor de fundo azul claro
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '500px',
    padding: '40px',
    backgroundColor: '#e6f7ff',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease-in-out',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#333',
    fontWeight: 'bold',
  },
  uploadSection: {
    marginBottom: '30px',
  },
  fileLabel: {
    display: 'inline-block',
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  fileInput: {
    display: 'none',
  },
  fileName: {
    marginTop: '10px',
    color: '#555',
    fontSize: '14px',
    fontStyle: 'italic',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '15px', // Adicionando um espaço entre os botões
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 25px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    margin: '10px 0',
  },
  icon: {
    marginRight: '8px',
  },
  tiltContainer: {
    display: 'inline-block',
    perspective: '1000px', // Aumenta o efeito 3D do Tilt
  },
};

export default Backup;
