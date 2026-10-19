import { LevelConfig } from '../types';

interface LevelSelectProps {
  levels: LevelConfig[];
  onSelectLevel: (levelId: string) => void;
  onBack: () => void;
}

export function LevelSelect({ levels, onSelectLevel, onBack }: LevelSelectProps) {
  const levelColors: Record<string, string> = {
    forest: 'from-green-600 to-green-700',
    desert: 'from-yellow-600 to-orange-700',
    snow: 'from-blue-400 to-blue-600',
  };
  
  const levelIcons: Record<string, string> = {
    forest: '🌲',
    desert: '🏜️',
    snow: '❄️',
  };
  
  const levelDescriptions: Record<string, string> = {
    forest: '郁郁葱葱的森林球场，注意避开树木和沙坑',
    desert: '炎热的沙漠球场，沙丘会增加滚动阻力',
    snow: '冰天雪地的冰雪球场，冰面滑行更远',
  };

  return (
    <div id="levelSelect" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8">选择关卡</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {levels.map(level => (
          <button
            key={level.id}
            data-testid={`level-${level.id}`}
            onClick={() => onSelectLevel(level.id)}
            className={`bg-gradient-to-br ${levelColors[level.id] || 'from-gray-600 to-gray-700'} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-left`}
          >
            <div className="text-5xl mb-4">{levelIcons[level.id] || '⛳'}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{level.name}</h2>
            <p className="text-sm text-gray-200 mb-4">{levelDescriptions[level.id] || ''}</p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>标准杆: {level.par}</span>
              <span>难度: {level.par > 3 ? '⭐⭐' : '⭐'}</span>
            </div>
          </button>
        ))}
      </div>
      
      <button
        onClick={onBack}
        className="mt-8 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
      >
        ← 返回主菜单
      </button>
    </div>
  );
}