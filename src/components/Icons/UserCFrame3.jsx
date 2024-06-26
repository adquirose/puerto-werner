/* eslint-disable react/prop-types */
const UserCFrame3 = ({fill = 'currentColor', secondaryfill=fill, width='100%', height='100%'}) => {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill={secondaryfill}>
                <path d="M24,1C11.317,1,1,11.318,1,24s10.317,23,23,23s23-10.318,23-23S36.683,1,24,1z M38,39.608v-0.126 c0-2.153-1.154-4.141-3.023-5.209l-4.162-2.388C28.901,33.851,26.383,35,24,35s-4.901-1.148-6.815-3.115l-4.162,2.387 C11.154,35.341,10,37.329,10,39.482v0.126C5.715,35.761,3,30.198,3,24C3,12.42,12.421,3,24,3s21,9.42,21,21 C45,30.198,42.285,35.761,38,39.608z" fill={fill}/>
                <path d="M24,12c-4.418,0-8,3.582-8,8v4c0,4.418,3.582,9,8,9s8-4.582,8-9v-4C32,15.582,28.418,12,24,12 z"/>
            </g>
        </svg>
    );
};

export default UserCFrame3;