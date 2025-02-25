import React from 'react';

const AdminPanel = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Редактирование сайта</h1>
      
      {/* Основная информация */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Основная информация</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ваше имя</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              defaultValue="Ваше Имя"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Специализация</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              defaultValue="Product Manager & Indie Hacker"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">О себе</label>
            <textarea 
              className="w-full p-2 border rounded"
              rows="4"
              defaultValue="PM в Spycat.pro – создаём виральные Telegram Mini Apps. Люблю исследовать себя через терапию, людей и письмо."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Фото профиля</label>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">
              Загрузить фото
            </button>
          </div>
        </div>
      </div>
      
      {/* Проекты */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Проекты</h2>
        
        <div className="border p-4 rounded mb-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold">Telegram Mini App</h3>
            <button className="text-red-500">Удалить</button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Название проекта</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                defaultValue="Telegram Mini App"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Описание</label>
              <textarea 
                className="w-full p-2 border rounded"
                rows="2"
                defaultValue="Виральное приложение для обмена мемами и стикерами"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Изображение</label>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm">
                Загрузить
              </button>
            </div>
          </div>
        </div>
        
        <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
          Добавить новый проект
        </button>
      </div>
      
      {/* Блог */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Блог</h2>
        
        <div className="border p-4 rounded mb-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold">Как автоматизировать рутинные задачи</h3>
            <button className="text-red-500">Удалить</button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Заголовок</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                defaultValue="Как автоматизировать рутинные задачи"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Краткое описание</label>
              <textarea 
                className="w-full p-2 border rounded"
                rows="2"
                defaultValue="Практические советы по экономии времени на повторяющихся задачах"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Содержание</label>
              <textarea 
                className="w-full p-2 border rounded"
                rows="10"
                defaultValue="В этой статье я расскажу о том, как я сэкономил время на повторяющихся задачах с помощью автоматизации..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Обложка статьи</label>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm">
                Загрузить
              </button>
            </div>
          </div>
        </div>
        
        <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
          Добавить новую статью
        </button>
      </div>
      
      {/* Контакты */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Контакты</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded"
              defaultValue="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Telegram</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              defaultValue="@username"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">GitHub</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded"
              defaultValue="github.com/username"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;