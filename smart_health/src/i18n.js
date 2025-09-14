import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          // Navbar
          home: 'Home',
          dashboard: 'Dashboard',
          cases: 'Cases',
          predictions: 'Predictions',
          awareness: 'Awareness',
          login: 'Login',
          report_case: 'Report Case',
          // Home Page
          hero_title: 'Smart Health Surveillance and Early Warning System',
          hero_subtitle: 'Leveraging technology to detect, monitor, and mitigate waterborne diseases in vulnerable communities. The system combines real-time data collection, predictive analytics, and structured reporting to strengthen public health responses.',
          submit_report: 'Submit a Report',
        }
      },
      hi: {
        translation: {
          // Navbar
          home: 'होम',
          dashboard: 'डैशबोर्ड',
          cases: 'मामले',
          predictions: 'भविष्यवाणियां',
          awareness: 'जागरूकता',
          login: 'लॉग इन करें',
          report_case: 'मामले की रिपोर्ट करें',
          // Home Page
          hero_title: 'स्मार्ट स्वास्थ्य निगरानी और प्रारंभिक चेतावनी प्रणाली',
          hero_subtitle: 'कमजोर समुदायों में जलजनित रोगों का पता लगाने, निगरानी करने और उन्हें कम करने के लिए प्रौद्योगिकी का लाभ उठाना। यह प्रणाली सार्वजनिक स्वास्थ्य प्रतिक्रियाओं को मजबूत करने के लिए वास्तविक समय डेटा संग्रह, भविष्य कहनेवाला विश्लेषण और संरचित रिपोर्टिंग को जोड़ती है।',
          submit_report: 'एक रिपोर्ट सबमिट करें',
        }
      }
    }
  });

export default i18n;