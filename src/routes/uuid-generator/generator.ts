/**
 * Generate a UUID v4 (random UUID)
 * Uses the Web Crypto API for secure random number generation
 */
export const generateUUID = (): string => {
	try {
		// Use crypto.randomUUID if available (modern browsers)
		if (typeof crypto !== 'undefined' && crypto.randomUUID) {
			return crypto.randomUUID();
		}

		// Fallback implementation for older browsers
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
			const v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	} catch {
		// Last resort fallback using Math.random (not cryptographically secure)
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = (Math.random() * 16) | 0;
			const v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}
};

/**
 * Generate multiple UUIDs at once
 */
export const generateMultipleUUIDs = (count: number): string[] => {
	const uuids: string[] = [];
	for (let i = 0; i < count; i++) {
		uuids.push(generateUUID());
	}
	return uuids;
};

/**
 * Validate if a string is a valid UUID
 */
export const isValidUUID = (uuid: string): boolean => {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return uuidRegex.test(uuid);
};
