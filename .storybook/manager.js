// .storybook/manager.js

import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import customTheme from './customTheme';

addons.setConfig({
	theme: customTheme,
	sidebar: {
		showRoots: true,
	},
});
