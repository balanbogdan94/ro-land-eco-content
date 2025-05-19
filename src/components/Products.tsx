import React from 'react';
import styles from './Products.module.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

const products = [
	{
		name: 'Grâu',
		description: 'Grâu ecologic pentru mori și fabrici de panificație.',
		image: 'https://cdn.agdaily.com/wp-content/uploads/2016/09/wheat.jpg',
	},
	{
		name: 'Porumb',
		description: 'Porumb ecologic pentru procesare și furajare.',
		image:
			'https://media1.popsugar-assets.com/files/thumbor/ly5iprR0vwx-WcV53law8TI5wgs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/12/20/209/n/1922195/864bb4ce955f516f_shutterstock_162613691/i/Corn.jpg',
	},
	{
		name: 'Secară',
		description:
			'Secară ecologică pentru pâine și alte produse de panificație.',
		image:
			'https://th.bing.com/th/id/OIP.7Ue1c5UsvU7kjJRNL3UgmAHaFj?rs=1&pid=ImgDetMain',
	},
	{
		name: 'Mazăre',
		description: 'Mazăre ecologică pentru piața alimentară și furaje.',
		image:
			'https://th.bing.com/th/id/R.8715fddae1613ad2a2ae21c3335fb2a8?rik=GVyU4dIflQI30g&riu=http%3a%2f%2fvestea.net%2fwp-content%2fuploads%2f2017%2f08%2f10-mazare-1200x803.jpg&ehk=zxA3BrenODTSsec8xoOgXOgQ6rf%2fKnVOfUSfssWvmKQ%3d&risl=&pid=ImgRaw&r=0',
	},
	{
		name: 'Floarea Soarelui',
		description: 'Semințe de floarea-soarelui decorticată ecologică.',
		image:
			'https://th.bing.com/th/id/R.bc683d178f439a71ad5b86429e535b33?rik=bpoSHQ08SF59UQ&pid=ImgRaw&r=0&sres=1&sresct=1',
	},
	{
		name: 'Rapiță',
		description: 'Rapiță ecologică pentru ulei și alte produse derivate.',
		image:
			'https://www.plantmaster.ro/blog/wp-content/uploads/2020/06/field-of-rapeseeds-474558_640.jpg',
	},
];

const Products: React.FC = () => {
	return (
		<section id='products' className={styles.products}>
			<div className='container-custom py-20'>
				<div className='text-center mb-16'>
					<h2 className='heading-lg mb-4'>
						Produse pentru procesare și distribuție
					</h2>
					<p className='text-body max-w-3xl mx-auto'>
						Oferim o gamă largă de cereale și semințe ecologice, cultivate cu
						grijă și pasiune, pentru a satisface cele mai înalte standarde de
						calitate.
					</p>
				</div>
				<div className='text-center mt-2 mb-16'>
					<p className='text-body mb-6'>
						Pe lângă aceste produse, cultivăm și distribuim și{' '}
						<strong>orz, soia, in și muștar</strong>, toate cultivate conform
						standardelor ecologice europene.
					</p>
					<a href='#contact' className='btn-primary inline-block'>
						Solicită oferta completă
					</a>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product, index) => (
						<Card
							key={index}
							className={`${styles.productCard} cursor-pointer`}
							onClick={() => {
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' });
							}}>
							<div className={styles.productImage}>
								<img src={product.image} alt={product.name} />
							</div>
							<CardContent className='p-6'>
								<h3 className='heading-md mb-2'>{product.name}</h3>
								<p className='text-body text-gray-600'>{product.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
