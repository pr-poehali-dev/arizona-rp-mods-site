import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-purple-500/30">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">
              {isLogin ? 'Вход' : 'Регистрация'}
            </h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Имя пользователя
                </label>
                <div className="relative">
                  <Icon
                    name="User"
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                  />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Введите имя пользователя"
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Icon
                  name="Mail"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="Введите email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">
                Пароль
              </label>
              <div className="relative">
                <Icon
                  name="Lock"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="Введите пароль"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Подтвердите пароль
                </label>
                <div className="relative">
                  <Icon
                    name="Lock"
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    placeholder="Повторите пароль"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-300 hover:text-purple-200 text-sm transition-colors"
            >
              {isLogin ? (
                <>
                  Нет аккаунта?{' '}
                  <span className="font-bold">Зарегистрируйтесь</span>
                </>
              ) : (
                <>
                  Уже есть аккаунт? <span className="font-bold">Войдите</span>
                </>
              )}
            </button>
          </div>

          {isLogin && (
            <div className="mt-4 text-center">
              <button className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                Забыли пароль?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
