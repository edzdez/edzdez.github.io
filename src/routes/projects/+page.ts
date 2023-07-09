export async function load() {
	const projects = [
		{
			name: 'sway-easyfocus',
			url: 'https://github.com/edzdez/sway-easyfocus',
			description:
				'A tool to help efficiently focus windows in Sway inspired by i3-easyfocus.'
		},
		{
			name: 'power-profiles-applet',
			url: 'https://github.com/edzdez/power-profiles-applet',
			description:
				'A simple, gtk/libappindicator-based systray applet written in Rust that acts as a frontend to power-profiles-daemon'
		},
		{
			name: 'simplex-cpp',
			url: 'https://github.com/edzdez/simplex-cpp',
			description:
				"A naive implementation of Dantzig's simplex method in C++ with Eigen3 and Toml++"
		},
		{
			name: 'nifty-ray-marcher',
			url: 'https://github.com/edzdez/nifty-ray-marcher',
			description: 'A simple raymarcher written in C++ with SFML'
		},
		{
			name: 'nifty-seam-carving',
			url: 'https://github.com/edzdez/nifty-seam-carving',
			description:
				'A CLI app for image-resizing that uses the content-aware seam-carving algorithm written in Rust.'
		}
	];

	return {
		projects: projects
	};
}
