/**
 * ダークモードだったら true
 */
export const IsDarkMode = () => {
	return document.documentElement.classList.contains('dark');
};
