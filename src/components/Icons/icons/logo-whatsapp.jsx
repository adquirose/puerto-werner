import React from 'react';

function LogoWhatsapp(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M0.10739,48l3.37542-12.32542c-2.08204-3.60688-3.17763-7.69894-3.17592-11.89098 C0.31215,10.66928,10.98554,0,24.09976,0c6.36475,0.00253,12.33865,2.47971,16.83067,6.97547 c4.49214,4.49575,6.96465,10.47174,6.96218,16.82712c-0.00531,13.11432-10.67966,23.785-23.79253,23.785h-0.00006h-0.00974 c-3.98213-0.00164-7.89481-1.00024-11.36995-2.89505L0.10739,48z M13.30466,40.38635l0.72215,0.42849 c3.03621,1.80129,6.51666,2.7542,10.06511,2.75559h0.0081c10.89973,0,19.77101-8.8685,19.77545-19.76937 c0.00202-5.28238-2.053-10.2494-5.78667-13.98611c-3.73368-3.73672-8.69893-5.79578-13.98092-5.79781 c-10.90811,0-19.77946,8.86787-19.78382,19.76797c-0.00152,3.73532,1.04402,7.37333,3.02355,10.52097l0.47026,0.7479 l-1.99782,7.29512L13.30466,40.38635z" fill={fill}/>
		<path d="M18.15336,13.84087 c-0.48253-1.1589-0.97266-1.0021-1.33759-1.02027c-0.34636-0.01724-0.74309-0.02088-1.13941-0.02088 s-1.04036,0.14873-1.5853,0.74366c-0.54492,0.59496-2.08067,2.03281-2.08067,4.958c0,2.92519,2.13022,5.7512,2.42748,6.14787 c0.29723,0.39667,4.19204,6.39961,10.15569,8.97392c1.41836,0.6123,2.52578,0.9779,3.38909,1.25194 c1.42423,0.45222,2.72022,0.38844,3.74456,0.23544c1.14216-0.17059,3.51729-1.43777,4.01272-2.82601 c0.49537-1.38824,0.49537-2.57817,0.34674-2.82608c-0.14856-0.24784-0.54491-0.3966-1.13937-0.69412 c-0.59452-0.29745-3.51734-1.73529-4.06233-1.93359c-0.54491-0.19831-0.9412-0.29746-1.33755,0.29751 c-0.39628,0.59491-1.5356,1.9336-1.88241,2.3302c-0.34674,0.39667-0.69355,0.44627-1.28801,0.14876 c-0.59453-0.29745-2.51008-0.92506-4.7808-2.94978c-1.76725-1.57578-2.96047-3.52215-3.30725-4.11712 c-0.34677-0.59496-0.03689-0.91665,0.26073-1.2129c0.26739-0.26626,0.59446-0.69412,0.89172-1.04118 c0.29723-0.34706,0.39632-0.59497,0.59446-0.99157c0.19818-0.39667,0.09909-0.74372-0.04955-1.04121 C19.83772,17.956,18.64879,15.03077,18.15336,13.84087z" fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default LogoWhatsapp;