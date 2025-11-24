/**
 * Get a fixed image URL from a given relative or absolute image URL.
 *
 * @param imageUrl - The relative or absolute image URL.
 *
 * @returns The fixed absolute image URL or null if the input is null or undefined.
 */
export function getImageUrl(imageUrl: string | null | undefined): string | null {
	if (!imageUrl) return null;

	if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://'))
		return imageUrl;

	return new URL(`/images/${imageUrl}`, 'https://thediscdb.com').href;
}
