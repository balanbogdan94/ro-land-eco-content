import React from 'react';
import styles from './VideoPresentation.module.css';

export const VideoPresentation = () => {
	return (
		<section className={styles.videoSection}>
			<div className='container-custom py-20'>
				<div className='text-center mb-10'>
					<h2 className='heading-lg mb-4'>Procesul nostru de producție</h2>
					<p className='text-body max-w-3xl mx-auto'>
						Urmăriți cum cultivăm și procesăm cerealele și semințele ecologice,
						de la semănat până la recoltare.
					</p>
				</div>

				<div className={styles.videoContainer}>
					<video
						className={styles.video}
						controls
						autoPlay={false}
						loop
						muted
						poster='/assets/hero.JPG'>
						<source src='/assets/timelapse.MP4' type='video/mp4' />
						Browser-ul dumneavoastră nu suportă redarea video.
					</video>
				</div>
			</div>
		</section>
	);
};
