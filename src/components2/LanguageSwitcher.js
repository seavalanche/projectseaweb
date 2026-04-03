import { useLocalization } from '../localization/hooks/useLocalization';

export const LanguageSwitcher = () => {
  const { language, toggleLang } = useLocalization();

  return (
    <div className="language-switcher">
      <button
        onClick={() => toggleLang('en')}
        className={language === 'en' ? 'inact' : 'act'}
      >
        EN / JP
      </button>
      <button
        onClick={() => toggleLang('jp')}
        className={language === 'jp' ? 'inact' : 'act'}
      >
        EN / JP
      </button>
    </div>
  );
};