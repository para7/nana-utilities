const Base64ToBytes = (base64: string) => {
	const binString = atob(base64);
	return Uint8Array.from(binString, (m) => m.codePointAt(0));
};

const BytesToBase64 = (bytes: Uint8Array) => {
	const binString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');
	return btoa(binString);
};

const StringToBytes = (str: string) => {
	return new TextEncoder().encode(str);
};

const BytesToString = (bytes: Uint8Array) => {
	return new TextDecoder().decode(bytes);
};

export const StringToBase64 = (str: string): string => {
	try {
		return BytesToBase64(StringToBytes(str));
	} catch {
		return "can't convert !";
	}
};

type ConvertResult = {
	text: string;
	hasError: boolean;
};

export const Base64ToString = (base64: string): ConvertResult => {
	try {
		return { text: BytesToString(Base64ToBytes(base64)), hasError: false };
	} catch {
		return { text: "can't convert !", hasError: true };
	}
};
