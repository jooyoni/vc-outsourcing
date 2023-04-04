import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import about from './about.json';
import second from './second.json';
import third from './third.json';
import fourth from './fourth.json';
import fifth from './fifth.json';
import portfolio from './portfolio.json';
import ir from './ir.json';
import family from './family.json';
import footer from './footer.json';
import board from './board.json';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: { ...about.en },
        second: { ...second.en },
        third: { ...third.en },
        fourth: { ...fourth.en },
        fifth: { ...fifth.en },
        portfolio: { ...portfolio.en },
        ir: { ...ir.en },
        family: { ...family.en },
        footer: { ...footer.en },
        board: { ...board.en },
      },
    },
    ko: {
      translation: {
        about: { ...about.ko },
        second: { ...second.ko },
        third: { ...third.ko },
        fourth: { ...fourth.ko },
        fifth: { ...fifth.ko },
        portfolio: { ...portfolio.ko },
        ir: { ...ir.ko },
        family: { ...family.ko },
        footer: { ...footer.ko },
        board: { ...board.ko },
      },
    },
  },
  lng: 'ko',
});
export default i18n;
