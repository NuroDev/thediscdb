import { Autocomplete } from '@base-ui/react/autocomplete';
import { Search, X } from 'lucide-react';
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '~/utils/cn';

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

interface SearchableItem extends MediaItem {
	path: string;
}

interface SearchGroup {
	items: Array<SearchableItem>;
	totalCount: number;
	value: string;
}

export function GlobalSearch(): React.JSX.Element {
	const debounceTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
	const inputRef = useRef<HTMLInputElement>(null);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const [results, setResults] = useState<Array<SearchResult>>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	const groups: Array<SearchGroup> = results
		.filter((r) => r.items.length > 0)
		.map((r) => ({
			items: r.items.map((item) => ({ ...item, path: r.path })),
			totalCount: r.totalCount,
			value: `${r.type}s (${r.totalCount})`,
		}));

	const totalResults = results.reduce((sum, r) => sum + r.totalCount, 0);
	const hasResults = groups.length > 0;

	const performSearch = useCallback(async (query: string): Promise<void> => {
		if (!query.trim()) {
			setResults([]);
			setOpen(false);
			return;
		}

		setIsLoading(true);
		setOpen(true);

		try {
			const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
			const data = (await response.json()) as {
				results: Array<SearchResult>;
			};
			setResults(data.results || []);
		} catch (error) {
			console.error('Search failed:', error);
			setResults([]);
		} finally {
			setIsLoading(false);
		}
	}, []);

	// Debounced search
	useEffect(() => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current);
		}

		debounceTimer.current = setTimeout(() => {
			performSearch(searchValue);
		}, 300);

		return () => {
			if (debounceTimer.current) {
				clearTimeout(debounceTimer.current);
			}
		};
	}, [searchValue, performSearch]);

	// Global `/` shortcut to focus search
	useEffect(() => {
		const handleGlobalKeyDown = (event: globalThis.KeyboardEvent): void => {
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

	const handleValueChange = useCallback((value: string | null): void => {
		setSearchValue(value ?? '');
	}, []);

	const handleOpenChange = useCallback((isOpen: boolean): void => {
		if (!isOpen) {
			setOpen(false);
		}
	}, []);

	const handleItemClick = useCallback((item: SearchableItem): void => {
		window.location.href = `${item.path}/${item.slug}`;
	}, []);

	const handleInputKeyDown = useCallback(
		(e: KeyboardEvent<HTMLInputElement>): void => {
			if (e.key === 'Enter' && searchValue.trim()) {
				const highlighted = document.querySelector(
					'[role="option"][data-highlighted]',
				);

				if (!highlighted) {
					e.preventDefault();
					window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
				}
			}
		},
		[searchValue],
	);

	const handleClear = useCallback((): void => {
		setSearchValue('');
		setResults([]);
		setOpen(false);
		inputRef.current?.focus();
	}, []);

	const shouldShowPopup = open && searchValue.trim().length > 0;

	return (
		<Autocomplete.Root
			filteredItems={groups}
			items={groups}
			itemToStringValue={() => ''}
			mode='list'
			onOpenChange={handleOpenChange}
			onValueChange={handleValueChange}
			open={shouldShowPopup}
			value={searchValue}>
			<div className='relative w-full sm:max-w-md sm:flex-1'>
				{/* Input */}
				<div className='relative'>
					<div className='pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400 dark:text-zinc-600'>
						<Search className='h-5 w-5' />
					</div>

					<Autocomplete.Input
						className='default-focus default-transition w-full rounded-md border border-zinc-300 bg-white py-2 pr-10 pl-10 text-base text-zinc-900 placeholder-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-600'
						onKeyDown={handleInputKeyDown}
						placeholder='Search'
						ref={inputRef}
					/>

					{!searchValue && (
						<div className='pointer-events-none absolute top-1/2 right-3 hidden -translate-y-1/2 sm:flex sm:items-center'>
							<kbd className='flex items-center justify-center rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'>
								/
							</kbd>
						</div>
					)}

					{searchValue && (
						<button
							aria-label='Clear search'
							className='default-transition default-focus absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-1 text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400'
							onClick={handleClear}
							tabIndex={-1}
							type='button'>
							<X className='h-5 w-5' />
						</button>
					)}
				</div>

				{/* Dropdown */}
				<Autocomplete.Portal>
					<Autocomplete.Positioner
						align='start'
						className='z-100'
						side='bottom'
						sideOffset={8}>
						<Autocomplete.Popup className='w-(--anchor-width) overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950'>
							{isLoading ? (
								<div className='p-4 text-center text-sm text-zinc-500 dark:text-zinc-400'>
									Searching...
								</div>
							) : hasResults ? (
								<>
									<Autocomplete.List className='max-h-96 overflow-y-auto'>
										{groups.map((group, index) => (
											<Autocomplete.Group
												items={group.items}
												key={group.value}>
												<Autocomplete.GroupLabel
													className={cn(
														'sticky top-0 z-10 bg-zinc-100 px-4 py-2 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:bg-zinc-900 dark:text-zinc-400',
														index === 0 && 'rounded-t-lg',
													)}>
													{group.value}
												</Autocomplete.GroupLabel>

												<Autocomplete.Collection>
													{(item: SearchableItem) => (
														<Autocomplete.Item
															className='default-transition default-focus flex cursor-pointer items-center gap-3 border-b border-zinc-100 px-4 py-2 data-highlighted:bg-blue-50 data-highlighted:ring-3 data-highlighted:ring-blue-500 data-highlighted:ring-inset dark:border-zinc-900 dark:data-highlighted:bg-blue-950/20 dark:data-highlighted:ring-blue-600'
															key={item.id}
															onClick={() =>
																handleItemClick(item)
															}
															value={item}>
															{item.imageUrl && (
																<img
																	alt={item.title}
																	className='h-12 w-8 rounded object-cover'
																	src={item.imageUrl}
																/>
															)}
															<div className='min-w-0 flex-1'>
																<div className='truncate text-sm font-medium text-zinc-900 dark:text-zinc-100'>
																	{item.title}
																</div>
																{item.year && (
																	<div className='text-xs text-zinc-500 dark:text-zinc-400'>
																		{item.year}
																	</div>
																)}
															</div>
														</Autocomplete.Item>
													)}
												</Autocomplete.Collection>
											</Autocomplete.Group>
										))}
									</Autocomplete.List>

									<div className='border-t border-zinc-200 dark:border-zinc-800'>
										<a
											className='default-transition block rounded-b-lg px-4 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-50 focus:bg-blue-50 focus:ring-3 focus:ring-blue-500 focus:outline-hidden focus:ring-inset dark:text-blue-400 dark:hover:bg-blue-950/20 dark:focus:bg-blue-950/20 dark:focus:ring-blue-600'
											href={`/search?q=${encodeURIComponent(searchValue)}`}>
											View all {totalResults} results &rarr;
										</a>
									</div>
								</>
							) : (
								<div className='p-4 text-center text-sm text-zinc-500 dark:text-zinc-400'>
									No results found for &ldquo;{searchValue}
									&rdquo;
								</div>
							)}
						</Autocomplete.Popup>
					</Autocomplete.Positioner>
				</Autocomplete.Portal>
			</div>
		</Autocomplete.Root>
	);
}
