import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import PublicView from './PublicView';
import { useData } from '../context/DataContext';

const PersonalBlog = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const { saveData } = useData(); // Получаем функцию сохранения данных из контекста
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  
  // Функция для обработки сохранения данных
  const handleSave = () => {
    saveData(); // Сохраняем данные через контекст
    setShowSaveNotification(true);
    
    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      setShowSaveNotification(false);
    }, 3000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Навигация для админ-панели */}
      {activeTab === 'admin' && (
        <div className="fixed top-0 left-0 right-0 bg-indigo-700 text-white p-2 flex justify-between items-center z-10">
          <div className="font-bold">Панель управления</div>
          <div className="flex space-x-4">
            <button 
              className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded"
              onClick={() => setActiveTab('preview')}
            >
              Предпросмотр
            </button>
            <button 
              className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
              onClick={handleSave}
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
      
      {/* Кнопка для открытия админ-панели */}
      {activeTab === 'preview' && (
        <button 
          className="fixed top-4 right-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md z-10"
          onClick={() => setActiveTab('admin')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4V20M20 12H4" />
          </svg>
        </button>
      )}
      
      {/* Уведомление о сохранении */}
      {showSaveNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50 animate-pulse">
          Изменения сохранены!
        </div>
      )}
      
      {/* Основное содержание */}
      <div className="pt-16 p-6 max-w-6xl mx-auto">
        {activeTab === 'admin' ? (
          <AdminPanel />
        ) : (
          <PublicView />
        )}
      </div>
    </div>
  );
};

export default PersonalBlog;