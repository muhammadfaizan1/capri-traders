export const DynamicAsideMenuConfig = {
	items: [
		{
			title: 'Dashboards',
			root: true,
			show: true,
			icon: 'flaticon2-dashboard',
			svg: './assets/media/svg/icons/Design/Layers.svg',
			page: '/dashboard',
			bullet: 'dot',
		},
		{
			title: 'Layout Builder',
			root: true,
			show: true,
			icon: 'flaticon2-expand',
			page: '/builder',
			svg: './assets/media/svg/icons/Home/Library.svg',
		},
		{ section: 'Lists' },
		{
			title: 'Banners',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/banners',
			svg: './assets/media/svg/icons/Design/Line.svg',
		},
		{
			title: 'Users',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/users',
			svg: './assets/media/svg/icons/General/User.svg',
		},
		{
			title: 'Brands',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/brands',
			svg: './assets/media/svg/icons/Design/Interselect.svg',
		},
		{
			title: 'Categories',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/categories',
			svg: './assets/media/svg/icons/Files/Group-folders.svg',
		},
		{
			title: 'Products',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/products/list',
			svg: './assets/media/svg/icons/Layout/Layout-4-blocks.svg',
		},
		{ section: 'Accounts' },
		{
			title: 'Sales',
			root: true,
			show: true,
			icon: 'flaticon2-world',
			page: '/sales',
			svg: './assets/media/svg/icons/Layout/Layout-4-blocks.svg',
		},
		{
			title: 'Purchases',
			root: true,
			show: true,
			icon: 'flaticon2-world',
			page: '/purchases',
			svg: './assets/media/svg/icons/Layout/Layout-4-blocks.svg',
		},
		{
			title: 'Orders',
			root: true,
			show: false,
			icon: 'flaticon2-world',
			page: '/orders',
			svg: './assets/media/svg/icons/Shopping/Cart1.svg',
		},
	],
};
