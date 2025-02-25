import React, { createContext, useState, useEffect, useContext } from 'react';

// Начальные данные для блога
const initialData = {
  profile: {
    name: "Ваше Имя",
    title: "Product Manager & Indie Hacker",
    bio: "PM в Spycat.pro – создаём виральные Telegram Mini Apps. Люблю исследовать себя через терапию, людей и письмо.",
    avatar: null,
  },
  projects: [
    {
      id: 1,
      title: "Telegram Mini App",
      description: "Виральное приложение для обмена мемами и стикерами",
      image: null,
    },
    {
      id: 2,
      title: "Автоматизация данных для ИИ",
      description: "Сбор и разметка данных для машинного обучения",
      image: null,
    }
  ],
  experience: [
    {
      id: 1,
      position: "Product Manager",
      company: "Spycat.pro",
      period: "2023 - настоящее время",
      description: "Создание виральных Telegram Mini Apps, управление продуктовыми процессами"
    },
    {
      id: 2,
      position: "Junior Product Manager",
      company: "Toloka.ai",
      period: "2021 - 2023",
      description: "Развитие продукта для краудсорсинга и разметки данных"
    }
  ],
  posts: [
    {
      id: 1,
      title: "Как автоматизировать рутинные задачи",
      summary: "Практические советы по экономии времени на повторяющихся задачах",
      content: "В этой статье я расскажу о том, как я сэкономил время на повторяющихся задачах с помощью автоматизации...",
      image: null,
    },
    {
      id: 2,
      title: "Почему я ушёл с работы, чтобы начать свой бизнес",
      summary: "Глубокий анализ моего решения уйти с работы и начать собственное дело",
      content: "Принять решение уйти с постоянной работы было непросто...",
      image: null,
    }
  ],
  contacts: {
    email: "your@email.com",
    telegram: "@username",
    github: "github.com/username"
  }
};

// Создаем контекст данных
const DataContext = createContext();

// Провайдер данных
export const DataProvider = ({ children }) => {
  // Пытаемся получить данные из localStorage или используем начальные данные
  const [blogData, setBlogData] = useState(() => {
    const savedData = localStorage.getItem('blogData');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  // Сохраняем изменения в localStorage при обновлении данных
  useEffect(() => {
    localStorage.setItem('blogData', JSON.stringify(blogData));
  }, [blogData]);

  // Функция для обновления профиля
  const updateProfile = (newProfile) => {
    setBlogData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...newProfile }
    }));
  };

  // Функция для обновления проектов
  const updateProject = (id, projectData) => {
    setBlogData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, ...projectData } : project
      )
    }));
  };

  // Функция для добавления нового проекта
  const addProject = (projectData) => {
    const newId = Math.max(0, ...blogData.projects.map(p => p.id)) + 1;
    setBlogData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: newId, ...projectData }]
    }));
  };

  // Функция для удаления проекта
  const deleteProject = (id) => {
    setBlogData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  // Функции для работы с опытом работы
  const updateExperience = (id, experienceData) => {
    setBlogData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, ...experienceData } : exp
      )
    }));
  };

  const addExperience = (experienceData) => {
    const newId = Math.max(0, ...blogData.experience.map(e => e.id)) + 1;
    setBlogData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: newId, ...experienceData }]
    }));
  };

  const deleteExperience = (id) => {
    setBlogData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  // Функции для работы с постами блога
  const updatePost = (id, postData) => {
    setBlogData(prev => ({
      ...prev,
      posts: prev.posts.map(post => 
        post.id === id ? { ...post, ...postData } : post
      )
    }));
  };

  const addPost = (postData) => {
    const newId = Math.max(0, ...blogData.posts.map(p => p.id)) + 1;
    setBlogData(prev => ({
      ...prev,
      posts: [...prev.posts, { id: newId, ...postData }]
    }));
  };

  const deletePost = (id) => {
    setBlogData(prev => ({
      ...prev,
      posts: prev.posts.filter(post => post.id !== id)
    }));
  };

  // Функция для обновления контактов
  const updateContacts = (contactData) => {
    setBlogData(prev => ({
      ...prev,
      contacts: { ...prev.contacts, ...contactData }
    }));
  };

  // Функция обработки загрузки изображений (упрощенная версия)
  const handleImageUpload = (section, id, file) => {
    // В реальном приложении здесь был бы код для загрузки на сервер
    // Для демонстрации используем FileReader для конвертации в base64
    const reader = new FileReader();
    reader.onloadend = () => {
      if (section === 'profile') {
        updateProfile({ avatar: reader.result });
      } else if (section === 'projects') {
        updateProject(id, { image: reader.result });
      } else if (section === 'posts') {
        updatePost(id, { image: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  // Все функции и данные, которые будут доступны через контекст
  const value = {
    data: blogData,
    updateProfile,
    updateProject,
    addProject,
    deleteProject,
    updateExperience,
    addExperience,
    deleteExperience,
    updatePost,
    addPost,
    deletePost,
    updateContacts,
    handleImageUpload
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Хук для использования контекста данных
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
