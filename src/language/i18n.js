import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import about from './about.json';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: { ...about.en },
      },
    },
    ko: {
      translation: {
        about: { ...about.ko },
      },
    },
  },
  lng: 'ko',
});
export default i18n;
