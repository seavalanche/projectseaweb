import { useLocalization } from '../localization/hooks/useLocalization';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLocalization();
  
  return (
    <div className="language-switcher">
      <button 
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'inact' : 'act'}
      >
        EN / JP
      </button>
      <button 
        onClick={() => setLanguage('jp')}
        className={language === 'jp' ? 'inact' : 'act'}
      >
        EN / JP
      </button>
    </div>
  );
};