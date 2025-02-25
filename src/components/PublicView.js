import React from 'react';

const PublicView = () => {
  return (
    <div>
      <header className="py-12 text-center">
        <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-6">
          {/* Фото профиля */}
          <div className="w-full h-full flex items-center justify-center text-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Ваше Имя</h1>
        <h2 className="text-xl text-gray-600 mb-4">Product Manager & Indie Hacker</h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          PM в Spycat.pro – создаём виральные Telegram Mini Apps. Люблю исследовать себя через терапию, 
          людей и письмо. Делюсь знаниями в своём Telegram-канале.
        </p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Избранные проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Изображение проекта */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Telegram Mini App</h3>
              <p className="text-gray-600">Виральное приложение для обмена мемами и стикерами</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Изображение проекта */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Автоматизация данных для ИИ</h3>
              <p className="text-gray-600">Сбор и разметка данных для машинного обучения</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Опыт работы</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-lg">Product Manager</h3>
              <span className="text-gray-600">2023 - настоящее время</span>
            </div>
            <div className="text-gray-600 mb-2">Spycat.pro</div>
            <p className="text-gray-600">Создание виральных Telegram Mini Apps, управление продуктовыми процессами</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-lg">Junior Product Manager</h3>
              <span className="text-gray-600">2021 - 2023</span>
            </div>
            <div className="text-gray-600 mb-2">Toloka.ai</div>
            <p className="text-gray-600">Развитие продукта для краудсорсинга и разметки данных</p>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Блог</h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-200 md:h-auto h-48 flex items-center justify-center">
                {/* Изображение блога */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-bold text-xl mb-2">Как автоматизировать рутинные задачи</h3>
                <p className="text-gray-600 mb-4">Практические советы по экономии времени на повторяющихся задачах</p>
                <a href="#" className="text-indigo-600 font-medium">Читать статью →</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-200 md:h-auto h-48 flex items-center justify-center">
                {/* Изображение блога */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="font-bold text-xl mb-2">Почему я ушёл с работы, чтобы начать свой бизнес</h3>
                <p className="text-gray-600 mb-4">Глубокий анализ моего решения уйти с работы и начать собственное дело</p>
                <a href="#" className="text-indigo-600 font-medium">Читать статью →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicView;