import React from 'react';
import { useApi, useApiMutation } from '@/hooks/use-api';

const ApiExample = () => {
  // Para buscar dados
  const { data, loading, error } = useApi('/portfolio');
  
  // Para enviar dados
  const { mutate, loading: sendingData } = useApiMutation();

  const handleSendData = async () => {
    try {
      await mutate('/contact', {
        method: 'POST',
        body: JSON.stringify({ name: 'João', email: 'joao@email.com' })
      });
      console.log('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h2>Dados da API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
      <button 
        onClick={handleSendData} 
        disabled={sendingData}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {sendingData ? 'Enviando...' : 'Enviar Dados'}
      </button>
    </div>
  );
};

export default ApiExample;
