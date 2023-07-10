export async function load() {
	const dotfiles = [
		{
			name: 'nvim',
			url: 'https://github.com/edzdez/nvim',
			image: 'nvim.png'
		},
		{
			name: 'sway (+ waybar + swaylock)',
			url: 'https://github.com/edzdez/sway',
			image: 'thoughts-on-sway-blogpost.png'
		},
		{
			name: 'bspwm (+ polybar)',
			url: 'https://github.com/edzdez/bspwm',
			image: 'bspwm.png'
		},
		{
			name: 'suckless (dmenu, dwm, tabbed, etc.)',
			url: 'https://github.com/edzdez/suckless',
			image: null
		},
		{
			name: 'XMonad',
			url: 'https://github.com/edzdez/xmonad',
			image: null
		}
	];

	return {
		dotfiles: dotfiles
	};
}
