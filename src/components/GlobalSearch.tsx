import { Search, X } from 'lucide-preact';
import type { JSX } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

interface MediaItem {
	id: string;
	imageUrl: string | null;
	slug: string;
	title: string;
	type: string;
	year?: number | null;
}

interface SearchResult {
	items: Array<MediaItem>;
	path: string;
	totalCount: number;
	type: 'Movie' | 'Series' | 'BoxSet';
}

export function GlobalSearch(): JSX.Element {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [results, setResults] = useState<Array<SearchResult>>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	const debounceTimer = useRef<number>();
	const inputRef = useRef<HTMLInputElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);

	const performSearch = async (query: string): Promise<void> => {
		if (!query.trim()) {
			setResults([]);
			setIsOpen(false);
			return;
		}

		setIsLoading(true);
		setIsOpen(true);

		try {
			const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
			const data = await response.json<{ results: Array<SearchResult> }>();
			setResults(data.results || []);
		} catch (error) {
			console.error('Search failed:', error);
			setResults([]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current);
		}

		debounceTimer.current = window.setTimeout(() => {
			performSearch(searchValue);
		}, 300);

		return () => {
			if (debounceTimer.current) {
				clearTimeout(debounceTimer.current);
			}
		};
	}, [searchValue]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		const handleGlobalKeyDown = (event: KeyboardEvent): void => {
			if (
				event.key === '/' &&
				!['INPUT', 'TEXTAREA'].includes((event.target as HTMLElement)?.tagName)
			) {
				event.preventDefault();
				inputRef.current?.focus();
			}
		};

		document.addEventListener('keydown', handleGlobalKeyDown);
		return () => document.removeEventListener('keydown', handleGlobalKeyDown);
	}, []);

	const handleKeyDown = (e: KeyboardEvent): void => {
		if (e.key === 'Escape') {
			setIsOpen(false);
			inputRef.current?.blur();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (searchValue.trim()) {
				window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
			}
		}
	};

	const handleClear = (): void => {
		setSearchValue('');
		setResults([]);
		setIsOpen(false);
		inputRef.current?.focus();
	};

	const totalResults = results.reduce((sum, r) => sum + r.totalCount, 0);
	const hasResults = results.some((r) => r.items.length > 0);

	return (
		<div
			class='relative w-full sm:max-w-md sm:flex-1'
			ref={searchRef}>
			{/* Input */}
			<div class='relative'>
				<div class='-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 text-zinc-400 dark:text-zinc-600'>
					<Search class='h-5 w-5' />
				</div>

				<input
					class='default-focus default-transition w-full rounded-md border border-zinc-300 bg-white py-2 pr-10 pl-10 text-base text-zinc-900 placeholder-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-600'
					onInput={(e): void =>
						setSearchValue((e.target as HTMLInputElement).value)
					}
					onKeyDown={handleKeyDown}
					placeholder='Search'
					ref={inputRef}
					type='text'
					value={searchValue}
				/>

				{!searchValue && (
					<div class='-translate-y-1/2 pointer-events-none absolute top-1/2 right-3 hidden sm:flex sm:items-center'>
						<kbd class='flex items-center justify-center rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'>
							/
						</kbd>
					</div>
				)}

				{searchValue && (
					<button
						aria-label='Clear search'
						class='-translate-y-1/2 default-transition default-focus absolute top-1/2 right-2 cursor-pointer rounded p-1 text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'
						onClick={handleClear}
						type='button'>
						<X class='h-5 w-5' />
					</button>
				)}
			</div>

			{/* Dropdown */}
			{isOpen && searchValue && (
				<div class='absolute right-0 left-0 z-50 mt-2 w-full overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg sm:right-auto sm:left-auto dark:border-zinc-800 dark:bg-zinc-950'>
					{isLoading ? (
						<div class='p-4 text-center text-sm text-zinc-500 dark:text-zinc-400'>
							Searching...
						</div>
					) : hasResults ? (
						<>
							<div class='max-h-96 overflow-y-auto'>
								{results.map((section, index) =>
									section.items.length > 0 ? (
										<div key={section.type}>
											<div
												class={`sticky top-0 z-10 bg-zinc-100 px-4 py-2 font-semibold text-xs text-zinc-600 uppercase tracking-wider dark:bg-zinc-900 dark:text-zinc-400 ${index === 0 ? 'rounded-t-lg' : ''}`}>
												{section.type}s ({section.totalCount})
											</div>
											<div>
												{section.items.map((item) => (
													<a
														class='default-transition default-focus flex items-center gap-3 border-zinc-100 border-b px-4 py-2 hover:bg-zinc-50 dark:border-zinc-900 dark:hover:bg-zinc-900/50'
														href={`${section.path}/${item.slug}`}
														key={item.id}
														onClick={() => setIsOpen(false)}>
														{item.imageUrl && (
															<img
																alt={item.title}
																class='h-12 w-8 rounded object-cover'
																src={item.imageUrl}
															/>
														)}
														<div class='min-w-0 flex-1'>
															<div class='truncate font-medium text-sm text-zinc-900 dark:text-zinc-100'>
																{item.title}
															</div>
															{item.year && (
																<div class='text-xs text-zinc-500 dark:text-zinc-400'>
																	{item.year}
																</div>
															)}
														</div>
													</a>
												))}
											</div>
										</div>
									) : null,
								)}
							</div>

							<div class='border-zinc-200 border-t dark:border-zinc-800'>
								<a
									class='default-transition default-focus block rounded-b-lg px-4 py-3 text-center font-medium text-blue-600 text-sm hover:bg-zinc-50 dark:text-blue-400 dark:hover:bg-zinc-900/50'
									href={`/search?q=${encodeURIComponent(searchValue)}`}
									onClick={() => setIsOpen(false)}>
									View all {totalResults} results →
								</a>
							</div>
						</>
					) : (
						<div class='p-4 text-center text-sm text-zinc-500 dark:text-zinc-400'>
							No results found for "{searchValue}"
						</div>
					)}
				</div>
			)}
		</div>
	);
}
