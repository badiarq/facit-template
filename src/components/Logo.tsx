import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ILogoProps {
	width?: number;
	height?: number;
}

const Logo: FC<ILogoProps> = ({ width, height }) => {
	return (
		// <div style={{display: 'inline-flex'}}>
		// 	<img src='../logo-wippi.png' alt="logo-wippi"
		// 		width="75px"
		// 		height="75px"
		// 	></img>
		// 	<p style={{fontSize: 55, marginLeft:15}}>Wippi</p>
		// </div>

		// <svg
		// 	width={height !== 854 && !!height ? height * (2155 / 854) : width}
		// 	height={width !== 2155 && !!width ? width * (854 / 2155) : height}
		// 	viewBox='0 0 2155 854'
		// 	fill='none'
		// 	xmlns='http://www.w3.org/2000/svg'>
		// 	<path
		// 		d='M985.058 284.2C953.411 284.2 937.587 301.4 937.587 335.8V355H1025.92V415H939.991V673H864.879V415H812V355H864.879V334.6C864.879 300.2 874.894 273.2 894.924 253.6C914.953 233.6 943.195 223.6 979.65 223.6C1008.49 223.6 1031.13 229.4 1047.55 241L1026.52 297.4C1013.7 288.6 999.88 284.2 985.058 284.2Z'
		// 		fill='currentColor'
		// 	/>
		// 	<path
		// 		d='M1193.19 349C1240.46 349 1276.52 360.4 1301.35 383.2C1326.59 405.6 1339.21 439.6 1339.21 485.2V673H1268.3V634C1259.09 648 1245.87 658.8 1228.65 666.4C1211.82 673.6 1191.39 677.2 1167.35 677.2C1143.32 677.2 1122.29 673.2 1104.26 665.2C1086.23 656.8 1072.21 645.4 1062.2 631C1052.58 616.2 1047.78 599.6 1047.78 581.2C1047.78 552.4 1058.39 529.4 1079.62 512.2C1101.26 494.6 1135.11 485.8 1181.18 485.8H1264.1V481C1264.1 458.6 1257.29 441.4 1243.67 429.4C1230.45 417.4 1210.62 411.4 1184.18 411.4C1166.15 411.4 1148.33 414.2 1130.7 419.8C1113.47 425.4 1098.85 433.2 1086.83 443.2L1057.39 388.6C1074.22 375.8 1094.45 366 1118.08 359.2C1141.72 352.4 1166.75 349 1193.19 349ZM1182.98 622.6C1201.81 622.6 1218.43 618.4 1232.85 610C1247.67 601.2 1258.09 588.8 1264.1 572.8V535.6H1186.58C1143.32 535.6 1121.69 549.8 1121.69 578.2C1121.69 591.8 1127.09 602.6 1137.91 610.6C1148.73 618.6 1163.75 622.6 1182.98 622.6Z'
		// 		fill='currentColor'
		// 	/>
		// 	<path
		// 		d='M1585.76 677.2C1552.51 677.2 1522.67 670.2 1496.23 656.2C1469.79 642.2 1449.16 622.8 1434.34 598C1419.51 572.8 1412.1 544.4 1412.1 512.8C1412.1 481.2 1419.51 453 1434.34 428.2C1449.16 403.4 1469.59 384 1495.63 370C1522.07 356 1552.11 349 1585.76 349C1617.41 349 1645.05 355.4 1668.68 368.2C1692.72 381 1710.75 399.4 1722.76 423.4L1665.08 457C1655.87 442.2 1644.25 431.2 1630.23 424C1616.61 416.4 1601.58 412.6 1585.16 412.6C1557.12 412.6 1533.88 421.8 1515.46 440.2C1497.03 458.2 1487.81 482.4 1487.81 512.8C1487.81 543.2 1496.83 567.6 1514.86 586C1533.28 604 1556.72 613 1585.16 613C1601.58 613 1616.61 609.4 1630.23 602.2C1644.25 594.6 1655.87 583.4 1665.08 568.6L1722.76 602.2C1710.35 626.2 1692.12 644.8 1668.08 658C1644.45 670.8 1617.01 677.2 1585.76 677.2Z'
		// 		fill='currentColor'
		// 	/>
		// 	<path
		// 		d='M1787.69 352.6H1862.81V673H1787.69V352.6ZM1825.55 299.8C1811.93 299.8 1800.51 295.6 1791.3 287.2C1782.09 278.4 1777.48 267.6 1777.48 254.8C1777.48 242 1782.09 231.4 1791.3 223C1800.51 214.2 1811.93 209.8 1825.55 209.8C1839.17 209.8 1850.59 214 1859.8 222.4C1869.02 230.4 1873.62 240.6 1873.62 253C1873.62 266.2 1869.02 277.4 1859.8 286.6C1850.99 295.4 1839.57 299.8 1825.55 299.8Z'
		// 		fill='currentColor'
		// 	/>
		// 	<path
		// 		d='M2154.28 655.6C2145.47 662.8 2134.65 668.2 2121.83 671.8C2109.41 675.4 2096.19 677.2 2082.17 677.2C2046.92 677.2 2019.68 668 2000.45 649.6C1981.22 631.2 1971.61 604.4 1971.61 569.2V415H1918.73V355H1971.61V281.8H2046.72V355H2132.65V415H2046.72V567.4C2046.72 583 2050.52 595 2058.13 603.4C2065.75 611.4 2076.76 615.4 2091.18 615.4C2108.01 615.4 2122.03 611 2133.25 602.2L2154.28 655.6Z'
		// 		fill='currentColor'
		// 	/>
		// 	<path
		// 		d='M1824.4 200L1879.83 230.098V290.295L1824.4 320.393L1768.97 290.295V230.098L1824.4 200Z'
		// 		fill='#F35421'
		// 	/>
		// 	<rect x='300' width='256' height='256' rx='64' fill='#46BCAA' />
		// 	<circle cx='128' cy='726' r='128' fill='#4D69FA' />
		// 	<rect x='300' y='355' width='256' height='144' fill='#6C5DD3' />
		// 	<path d='M128 24L238.851 216H17.1488L128 24Z' fill='#FFCF52' />
		// 	<path
		// 		d='M128 307L238.851 367.197V487.59L128 547.787L17.1488 487.59V367.197L128 307Z'
		// 		fill='#F35421'
		// 	/>
		// </svg>


	<svg 
		version="1.0" 
		xmlns="http://www.w3.org/2000/svg"
		// width="692.000000pt" 
		// height="271.000000pt"
		width={height !== 854 && !!height ? height * (2155 / 854) : width}
		height={width !== 2155 && !!width ? width * (854 / 2155) : height}
		viewBox="0 0 692.000000 271.000000"
		preserveAspectRatio="xMidYMid meet">

	<g transform="translate(0.000000,271.000000) scale(0.100000,-0.100000)"
		fill="#374d99" 
		stroke="#ffffff"
		>
	<path d="M1210 2593 c-110 -6 -113 -12 -20 -44 270 -93 587 -292 822 -517 281
	-269 436 -558 489 -912 l13 -85 14 55 c22 90 27 339 8 452 -82 498 -444 892
	-935 1018 -71 18 -272 42 -316 38 -11 -1 -45 -3 -75 -5z"/>
	<path d="M721 2454 c-334 -179 -567 -487 -647 -854 -23 -104 -26 -391 -6 -485
	58 -267 169 -473 354 -659 54 -55 100 -97 102 -95 2 2 0 24 -5 49 -16 79 -22
	475 -10 645 13 177 38 360 52 388 8 13 155 97 172 97 2 0 -2 -33 -8 -72 -28
	-158 -38 -315 -39 -583 0 -291 4 -335 46 -469 42 -134 106 -198 199 -199 44
	-1 53 3 90 39 86 83 258 338 398 589 17 32 41 51 107 88 46 26 86 47 89 47 2
	0 17 -24 31 -52 76 -150 212 -300 323 -356 110 -55 234 -67 267 -25 29 35 72
	139 84 201 20 101 8 284 -28 422 -76 286 -203 503 -426 725 -188 188 -409 341
	-671 466 -115 55 -341 139 -375 139 -8 0 -53 -21 -99 -46z"/>
	<path d="M4545 1774 c-53 -57 -16 -144 60 -144 49 0 85 36 85 85 0 78 -93 115
	-145 59z"/>
	<path d="M6659 1787 c-44 -34 -51 -96 -14 -132 53 -54 145 -16 145 60 0 66
	-81 111 -131 72z"/>
	<path d="M2930 1785 c0 -24 406 -1115 420 -1129 7 -7 14 -6 20 0 6 6 62 154
	125 330 143 396 136 379 146 362 4 -7 64 -164 134 -348 69 -184 130 -339 136
	-345 6 -6 14 -4 23 5 7 8 84 215 169 460 86 245 174 496 196 558 l40 112 -37
	0 -37 0 -28 -83 c-38 -110 -267 -730 -271 -734 -3 -4 -191 496 -269 717 l-34
	95 -87 3 c-66 2 -86 0 -86 -10 0 -8 25 -80 56 -162 l56 -148 -95 -252 c-91
	-239 -96 -250 -107 -221 -61 160 -173 464 -225 610 l-63 180 -91 3 c-50 1 -91
	0 -91 -3z"/>
	<path d="M5225 1430 c-49 -8 -93 -30 -162 -81 l-53 -40 0 36 0 36 -67 -3 -68
	-3 -3 -547 -2 -548 70 0 70 0 0 209 0 208 48 -23 c185 -88 405 13 478 218 60
	169 22 374 -86 472 -65 59 -137 80 -225 66z m43 -106 c74 -30 126 -104 152
	-213 26 -111 -6 -280 -68 -353 -59 -69 -161 -87 -250 -42 -93 46 -92 43 -92
	305 l0 228 45 31 c85 58 148 72 213 44z"/>
	<path d="M6125 1434 c-5 -1 -27 -5 -48 -9 -21 -3 -72 -30 -117 -60 l-80 -54 0
	34 0 35 -65 0 -65 0 0 -550 0 -550 65 0 65 0 0 210 0 210 49 -24 c28 -15 76
	-28 113 -32 208 -21 378 146 395 391 12 178 -75 346 -200 384 -38 11 -98 19
	-112 15z m60 -132 c26 -20 52 -52 75 -97 31 -60 35 -76 38 -165 4 -81 0 -112
	-17 -170 -57 -185 -223 -238 -360 -115 l-41 37 0 223 0 223 33 28 c17 15 55
	38 82 51 65 31 132 26 190 -15z"/>
	<path d="M4532 1008 l3 -363 65 0 65 0 0 360 0 360 -68 3 -67 3 2 -363z"/>
	<path d="M6632 1008 l3 -363 65 0 65 0 0 360 0 360 -68 3 -67 3 2 -363z"/>
	<path d="M1432 656 c-114 -195 -253 -343 -416 -443 -72 -44 -91 -60 -80 -66 9
	-5 57 -17 107 -27 339 -68 671 -4 950 183 61 41 139 103 172 137 l60 61 -76
	-36 c-134 -63 -236 -64 -352 -3 -74 39 -192 149 -254 235 -25 35 -46 63 -48
	63 -1 0 -30 -47 -63 -104z"/>
	</g>
	</svg>
	);
};
Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};
Logo.defaultProps = {
	width: 2155,
	height: 854,
};

export default Logo;