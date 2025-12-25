import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-purple-400" />
              <span className="text-2xl font-bold text-white">Arizona RP Mods</span>
            </div>
            
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'home'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Home" size={20} />
                  <span>Главная</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Добро пожаловать на Arizona RP Mods
          </h1>
          <p className="text-xl text-purple-200">
            Лучшие моды для Arizona RP - загружай, делись и наслаждайся игрой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex justify-center mb-4">
              <Icon name="Download" size={48} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Скачивай моды
            </h3>
            <p className="text-purple-200 text-center">
              Тысячи модов для улучшения игрового опыта
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex justify-center mb-4">
              <Icon name="Users" size={48} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Сообщество
            </h3>
            <p className="text-purple-200 text-center">
              Присоединяйся к активному комьюнити игроков
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex justify-center mb-4">
              <Icon name="Star" size={48} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Рейтинги
            </h3>
            <p className="text-purple-200 text-center">
              Оценивай и выбирай лучшие моды
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 shadow-2xl shadow-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готов начать?
            </h2>
            <p className="text-purple-100 mb-6">
              Зарегистрируйся и начни загружать свои любимые моды прямо сейчас
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all hover:shadow-lg">
              Начать
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-purple-200">
            <p>© 2025 Arizona RP Mods. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
