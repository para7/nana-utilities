/* eslint-disable no-control-regex */
type options = {
	includeBreakLine: boolean;
};

const segmenterJa = new Intl.Segmenter('ja-JP', { granularity: 'grapheme' });

export const TextCount = (text: string, options: options) => {
	const filteredText = (() => {
		if (options.includeBreakLine) {
			return text;
		}
		// text から改行コードを取り除く
		return text.replace(/(\r\n|\n|\r)/g, '');
	})();

	const segmented = Array.from(segmenterJa.segment(filteredText)).map((x) => x.segment);
	console.table(Array.from(segmented));

	const charCount = segmented.length;
	const fullWidthCount = segmented.filter((x) => {
		return /[^\x00-\x7F]/g.test(x);
	}).length;
	// const fullWidthCount = (filteredText.match(/[^\x00-\x7F]/g) || []).length;
	const halfWidthCount = charCount - fullWidthCount;
	const byteCount = new TextEncoder().encode(text).length;

	return {
		charCount,
		fullWidthCount,
		halfWidthCount,
		byteCount
	};
};
