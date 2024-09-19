type Images = 'image/png' | 'image/jpeg' | 'image/webp';

export const ImageConvert = (image: HTMLImageElement, imageType: Images, quality: number = 1.0) => {
	const canvas = ImageToCanvas(image);

	const dataURL = canvas.toDataURL(imageType, quality);

	// console.log(dataURL);

	return dataURL;
};

export const ImageToCanvas = (imageSource: HTMLImageElement) => {
	const canvas: HTMLCanvasElement = document.createElement('canvas');

	canvas.width = imageSource.naturalWidth;
	canvas.height = imageSource.naturalHeight;
	const ctx = canvas.getContext('2d');
	ctx?.drawImage(imageSource, 0, 0);
	return canvas;
};
