import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTranslations } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
	const { language, setLanguage, t } = useTranslations();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleLanguageChange = (lang: 'ro' | 'en') => {
		setLanguage(lang);
	};

	const navItems = [
		{ href: '#about', key: 'about' },
		{ href: '#products', key: 'products' },
		{ href: '#benefits', key: 'benefits' },
		{ href: '#how-it-works', key: 'howItWorks' },
		{ href: '#testimonials', key: 'testimonials' },
		{ href: '#contact', key: 'contact' },
	];

	return (
		<nav className='sticky top-0 bg-white z-50 shadow-sm'>
			<div className='container-custom flex items-center justify-between py-4'>
				<div className='flex items-center'>
					<span className='text-xl font-bold'>
						RO LAND <span className='text-rolandGreen'>ORGANIC</span>
					</span>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-end space-x-6'>
					{navItems.map((item) => (
						<a
							key={item.key}
							href={item.href}
							className=' text-gray-700 hover:text-rolandGreen transition-colors font-medium'>
							{t(item.key)}
						</a>
					))}

					{/* Language Switcher */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='ghost'
								className='flex items-center gap-2 text-gray-700 hover:text-rolandGreen transition-colors'>
								<span>{language === 'ro' ? '🇷🇴' : '🇬🇧'}</span>
								{language === 'ro' ? 'RO' : 'EN'}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem
								onClick={() => handleLanguageChange('ro')}
								className='cursor-pointer'>
								<span className='mr-2'>🇷🇴</span> Română
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => handleLanguageChange('en')}
								className='cursor-pointer'>
								<span className='mr-2'>🇬🇧</span> English
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* Mobile View Icons */}
				<div className='flex items-center space-x-4 md:hidden'>
					{/* Mobile Menu Trigger */}
					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon' className='text-gray-700'>
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-[250px] sm:w-[300px]'>
							<div className='flex flex-col space-y-4 mt-8'>
								{navItems.map((item) => (
									<a
										key={item.key}
										href={item.href}
										className=' text-gray-700 hover:text-rolandGreen transition-colors font-medium text-lg py-2'
										onClick={() => setIsMenuOpen(false)}>
										{t(item.key)}
									</a>
								))}
								<Button
									className='btn-primary mt-4'
									onClick={() => {
										setIsMenuOpen(false);
										document
											.getElementById('contact')
											?.scrollIntoView({ behavior: 'smooth' });
									}}>
									Solicită Ofertă
								</Button>

								{/* Language Switcher in Mobile Menu */}
								<div className='flex items-center justify-between mt-6 pt-4 border-t border-gray-200'>
									<span className='text-gray-700 font-medium'>
										{language === 'ro' ? 'Limbă' : 'Language'}
									</span>
									<div className='flex gap-3'>
										<Button
											variant={language === 'ro' ? 'default' : 'outline'}
											size='sm'
											className={`flex items-center gap-1 ${
												language === 'ro'
													? 'bg-rolandGreen text-white'
													: 'text-gray-700'
											}`}
											onClick={() => handleLanguageChange('ro')}>
											<span>🇷🇴</span> RO
										</Button>
										<Button
											variant={language === 'en' ? 'default' : 'outline'}
											size='sm'
											className={`flex items-center gap-1 ${
												language === 'en'
													? 'bg-rolandGreen text-white'
													: 'text-gray-700'
											}`}
											onClick={() => handleLanguageChange('en')}>
											<span>🇬🇧</span> EN
										</Button>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
