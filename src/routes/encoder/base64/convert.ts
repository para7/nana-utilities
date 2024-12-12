const base64ToBytes = (base64: string) => {
	const binString = atob(base64);
	return Uint8Array.from(binString, (m) => m.codePointAt(0));
};

const bytesToBase64 = (bytes: Uint8Array) => {
	const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
	return btoa(binString);
};

const StringToBytes = (str: string) => {
	return new TextEncoder().encode(str);
};

const BytesToString = (bytes: Uint8Array) => {
	return new TextDecoder().decode(bytes);
};

export const StringToBase64 = (str: string) => {
	return bytesToBase64(StringToBytes(str));
};

export const Base64ToString = (base64: string) => {
	return BytesToString(base64ToBytes(base64));
};
