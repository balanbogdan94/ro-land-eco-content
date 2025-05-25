import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect,
} from 'react';
import i18n from '../i18n';

type Language = 'ro' | 'en';

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>('ro');

	const changeLanguage = (lang: Language) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
	};

	useEffect(() => {
		// Initialize with default language
		i18n.changeLanguage(language);
	}, [language]);

	// Translation function
	const t = (key: string): string => {
		return i18n.t(key);
	};

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage: changeLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};
