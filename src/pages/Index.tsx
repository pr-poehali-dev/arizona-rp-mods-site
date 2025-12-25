import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const mockMods = [
    {
      id: 1,
      name: 'HD Текстуры',
      author: 'ModMaster',
      version: '2.1',
      category: 'Графика',
      downloads: 1523,
      description: 'Улучшенные текстуры высокого разрешения для Arizona RP'
    },
    {
      id: 2,
      name: 'Реалистичные звуки',
      author: 'SoundPro',
      version: '1.5',
      category: 'Звуки',
      downloads: 892,
      description: 'Реалистичные звуки двигателей и окружения'
    },
    {
      id: 3,
      name: 'Улучшенный HUD',
      author: 'UIDesigner',
      version: '3.0',
      category: 'Интерфейс',
      downloads: 2105,
      description: 'Современный и удобный интерфейс игры'
    },
    {
      id: 4,
      name: 'Пак машин',
      author: 'CarLover',
      version: '1.8',
      category: 'Транспорт',
      downloads: 3421,
      description: 'Дополнительные автомобили для игры'
    },
    {
      id: 5,
      name: 'Оружейный мод',
      author: 'WeaponX',
      version: '2.3',
      category: 'Оружие',
      downloads: 1876,
      description: 'Новые модели оружия с улучшенной анимацией'
    },
    {
      id: 6,
      name: 'Карта города',
      author: 'MapCreator',
      version: '1.2',
      category: 'Карты',
      downloads: 654,
      description: 'Расширенная карта с новыми локациями'
    }
  ];

  const renderHome = () => (
    <>
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
    </>
  );

  const renderMods = () => (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Каталог модов
        </h1>
        <p className="text-xl text-purple-200">
          Выбери и скачай лучшие моды для Arizona RP
        </p>
      </div>

      <div className="mb-8 flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300" />
            <input
              type="text"
              placeholder="Поиск модов..."
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
            />
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2">
          <Icon name="Filter" size={20} />
          <span>Фильтры</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMods.map((mod) => (
          <div
            key={mod.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 h-32 flex items-center justify-center">
              <Icon name="Package" size={48} className="text-white/80" />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{mod.name}</h3>
                <span className="bg-purple-500/30 text-purple-200 text-xs px-2 py-1 rounded">
                  v{mod.version}
                </span>
              </div>
              
              <p className="text-purple-200 text-sm mb-4">
                {mod.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={16} />
                  <span>{mod.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Download" size={16} />
                  <span>{mod.downloads}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded">
                  {mod.category}
                </span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2">
                  <Icon name="Download" size={16} />
                  <span>Скачать</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all border border-white/20">
          Загрузить ещё
        </button>
      </div>
    </>
  );

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
              
              <button
                onClick={() => setActiveTab('mods')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'mods'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Package" size={20} />
                  <span>Моды</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'mods' && renderMods()}
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
