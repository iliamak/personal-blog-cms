import React from 'react';
import { useData } from '../context/DataContext';

const PublicView = () => {
  const { data } = useData();
  const { profile, projects, experience, posts, contacts } = data;

  return (
    <div>
      <header className="py-12 text-center">
        <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-6 overflow-hidden">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{profile.title}</h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          {profile.bio}
        </p>
      </header>
      
      {projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Избранные проекты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {experience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Опыт работы</h2>
          
          <div className="space-y-6">
            {experience.map(exp => (
              <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <div className="text-gray-600 mb-2">{exp.company}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {posts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Блог</h2>
          
          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-200 md:h-auto h-48 flex items-center justify-center">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    )}
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <a href="#" className="text-indigo-600 font-medium">Читать статью →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Контакты</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-3">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 mr-3">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{contacts.email}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 mr-3">
                <path d="M22.09 7.87c-.52-1.58-2.09-3.15-3.66-3.66-1.57-.52-3.14-.52-4.71 0L9.17 5.29c-1.57.52-3.14 2.09-3.66 3.66-.52 1.57-.52 3.14 0 4.71l1.08 4.55c.52 1.57 2.09 3.14 3.66 3.66 1.57.52 3.14.52 4.71 0l4.55-1.08c1.57-.52 3.14-2.09 3.66-3.66.52-1.57.52-3.14 0-4.71L22.09 7.87zM12 9h.01"></path>
              </svg>
              <span>{contacts.telegram}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 mr-3">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>{contacts.github}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicView;