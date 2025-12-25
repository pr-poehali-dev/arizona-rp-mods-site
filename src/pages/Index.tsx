import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mods, setMods] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === 'mods') {
      loadMods();
    }
  }, [activeTab]);

  const loadMods = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/4f0b5f4d-7372-42de-926f-e277f97e30b0');
      const data = await response.json();
      setMods(data.mods || []);
    } catch (error) {
      console.error('Failed to load mods:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncStorageToDb = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/b57a7a18-7423-49e7-83f3-aa32e0e94de7', {
        method: 'POST'
      });
      const data = await response.json();
      alert(data.message || 'Синхронизация завершена!');
      loadMods();
    } catch (error) {
      console.error('Failed to sync storage:', error);
      alert('Ошибка синхронизации');
    }
  };

  const mockForumTopics = [
    {
      id: 1,
      title: 'Как установить моды правильно?',
      author: 'Новичок123',
      category: 'Помощь',
      replies: 15,
      views: 234,
      lastReply: '5 минут назад',
      isPinned: true
    },
    {
      id: 2,
      title: 'Лучшие моды для улучшения графики',
      author: 'GraphicsPro',
      category: 'Обсуждения',
      replies: 42,
      views: 1203,
      lastReply: '1 час назад',
      isPinned: false
    },
    {
      id: 3,
      title: 'Проблема с запуском игры после установки мода',
      author: 'HelpMe',
      category: 'Технические проблемы',
      replies: 8,
      views: 156,
      lastReply: '3 часа назад',
      isPinned: false
    },
    {
      id: 4,
      title: 'Делюсь своей сборкой модов',
      author: 'ModMaster',
      category: 'Сборки',
      replies: 67,
      views: 2341,
      lastReply: '10 минут назад',
      isPinned: false
    },
    {
      id: 5,
      title: 'Идеи для новых модов',
      author: 'Creator2024',
      category: 'Идеи',
      replies: 23,
      views: 678,
      lastReply: '2 часа назад',
      isPinned: false
    },
    {
      id: 6,
      title: 'Правила форума - прочитать обязательно!',
      author: 'Администратор',
      category: 'Объявления',
      replies: 5,
      views: 3421,
      lastReply: '1 день назад',
      isPinned: true
    }
  ];

  const mockBuilds = [
    {
      id: 1,
      name: 'Сборка для RP',
      author: 'BuildMaster',
      version: '3.2',
      modsCount: 15,
      downloads: 4523,
      description: 'Полный набор модов для комфортной РП игры'
    },
    {
      id: 2,
      name: 'Графическая сборка',
      author: 'GraphicsGuru',
      version: '2.8',
      modsCount: 8,
      downloads: 3210,
      description: 'Улучшение графики и визуальных эффектов'
    },
    {
      id: 3,
      name: 'Реалистичная сборка',
      author: 'RealismPro',
      version: '1.9',
      modsCount: 12,
      downloads: 2845,
      description: 'Максимальная реалистичность игрового процесса'
    },
    {
      id: 4,
      name: 'Оптимизация',
      author: 'PerformanceKing',
      version: '2.1',
      modsCount: 6,
      downloads: 5632,
      description: 'Повышение FPS и производительности'
    }
  ];

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

  const renderBuilds = () => (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Сборки модов
        </h1>
        <p className="text-xl text-purple-200">
          Готовые наборы модов для разных стилей игры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBuilds.map((build) => (
          <div
            key={build.id}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-40 flex items-center justify-center">
              <Icon name="Layers" size={64} className="text-white/80" />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white">{build.name}</h3>
                <span className="bg-purple-500/30 text-purple-200 text-xs px-2 py-1 rounded">
                  v{build.version}
                </span>
              </div>
              
              <p className="text-purple-200 mb-4">
                {build.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={16} />
                    <span>{build.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Package" size={16} />
                    <span>{build.modsCount} модов</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Download" size={16} />
                  <span>{build.downloads}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Скачать сборку</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderSupport = () => (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Поддержка
        </h1>
        <p className="text-xl text-purple-200">
          Нужна помощь? Мы всегда на связи!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 p-4 rounded-full">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Онлайн чат
            </h3>
            <p className="text-purple-200 text-center mb-4">
              Быстрые ответы на ваши вопросы в режиме реального времени
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Открыть чат
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400 transition-all">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-600 p-4 rounded-full">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              Email поддержка
            </h3>
            <p className="text-purple-200 text-center mb-4">
              Отправьте нам письмо и получите ответ в течение 24 часов
            </p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Написать письмо
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Icon name="HelpCircle" size={28} className="text-purple-400" />
            <span>Часто задаваемые вопросы</span>
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                <Icon name="ChevronRight" size={20} className="text-purple-400" />
                <span>Как установить моды?</span>
              </h4>
              <p className="text-purple-200 text-sm pl-7">
                Скачайте мод, распакуйте архив и поместите файлы в папку с игрой согласно инструкции.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                <Icon name="ChevronRight" size={20} className="text-purple-400" />
                <span>Безопасны ли моды с сайта?</span>
              </h4>
              <p className="text-purple-200 text-sm pl-7">
                Да, все моды проходят проверку модераторами перед публикацией.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                <Icon name="ChevronRight" size={20} className="text-purple-400" />
                <span>Как загрузить свой мод?</span>
              </h4>
              <p className="text-purple-200 text-sm pl-7">
                Зарегистрируйтесь на сайте и используйте функцию "Загрузить мод" в личном кабинете.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
                <Icon name="ChevronRight" size={20} className="text-purple-400" />
                <span>Что делать если мод не работает?</span>
              </h4>
              <p className="text-purple-200 text-sm pl-7">
                Проверьте версию игры и совместимость мода. Обратитесь в поддержку с описанием проблемы.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">
              Социальные сети
            </h4>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-all">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg transition-all">
                <Icon name="Send" size={24} className="text-white" />
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all">
                <Icon name="Share2" size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderForum = () => (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Форум сообщества
        </h1>
        <p className="text-xl text-purple-200">
          Обсуждай моды, делись опытом и получай помощь
        </p>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2">
            <Icon name="Plus" size={20} />
            <span>Создать тему</span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all border border-white/20">
            Правила форума
          </button>
        </div>
        <div className="flex items-center space-x-2 text-purple-200">
          <Icon name="Users" size={20} />
          <span>Онлайн: 142</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-3 text-white font-medium transition-all">
          Все темы
        </button>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-purple-300 font-medium transition-all">
          Помощь
        </button>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-purple-300 font-medium transition-all">
          Обсуждения
        </button>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-purple-300 font-medium transition-all">
          Идеи
        </button>
      </div>

      <div className="space-y-3">
        {mockForumTopics.map((topic) => (
          <div
            key={topic.id}
            className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/10 p-6 ${
              topic.isPinned ? 'border-yellow-500/30 bg-yellow-500/5' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {topic.isPinned && (
                    <Icon name="Pin" size={18} className="text-yellow-400" />
                  )}
                  <h3 className="text-xl font-bold text-white hover:text-purple-300 cursor-pointer transition-colors">
                    {topic.title}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-purple-300 mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={16} />
                    <span>{topic.author}</span>
                  </div>
                  <span className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded text-xs">
                    {topic.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{topic.lastReply}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-purple-200 ml-6">
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageSquare" size={18} />
                    <span className="font-bold text-white">{topic.replies}</span>
                  </div>
                  <span className="text-xs text-purple-300">ответов</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={18} />
                    <span className="font-bold text-white">{topic.views}</span>
                  </div>
                  <span className="text-xs text-purple-300">просмотров</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-purple-200 text-sm">
          Показано тем: {mockForumTopics.length} из 156
        </div>
        <div className="flex space-x-2">
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-white transition-all">
            Предыдущая
          </button>
          <button className="bg-purple-600 px-4 py-2 rounded-lg text-white font-medium">
            1
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-white transition-all">
            2
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-white transition-all">
            3
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-white transition-all">
            Следующая
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
        <button 
          onClick={syncStorageToDb}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2"
        >
          <Icon name="RefreshCw" size={20} />
          <span>Синхронизация</span>
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2">
          <Icon name="Filter" size={20} />
          <span>Фильтры</span>
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-400"></div>
          <p className="text-purple-200 mt-4">Загрузка модов...</p>
        </div>
      ) : mods.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="Package" size={64} className="text-purple-400 mx-auto mb-4" />
          <p className="text-purple-200 text-lg">Моды не найдены</p>
          <p className="text-purple-300 text-sm mt-2">Нажмите "Синхронизация" чтобы загрузить файлы из хранилища</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mods.map((mod) => (
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
                <a 
                  href={mod.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-2"
                >
                  <Icon name="Download" size={16} />
                  <span>Скачать</span>
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}

      {!loading && mods.length > 0 && (
        <div className="mt-12 text-center">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all border border-white/20">
            Загрузить ещё
          </button>
        </div>
      )}
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
              
              <button
                onClick={() => setActiveTab('builds')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'builds'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Layers" size={20} />
                  <span>Сборки</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('forum')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'forum'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="MessageSquare" size={20} />
                  <span>Форум</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'support'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="HeadphonesIcon" size={20} />
                  <span>Поддержка</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'mods' && renderMods()}
        {activeTab === 'builds' && renderBuilds()}
        {activeTab === 'forum' && renderForum()}
        {activeTab === 'support' && renderSupport()}
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