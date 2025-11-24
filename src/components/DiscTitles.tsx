import type { JSX } from 'preact';
import { useState } from 'preact/hooks';

type BoxsetTitle = NonNullable<
	NonNullable<
		NonNullable<
			Awaited<
				ReturnType<typeof import('~/graphql').query.GetBoxSetBySlug>
			>['boxsets']
		>['edges']
	>[number]['node']['release']
>['discs'][number]['titles'][number];

type MediaItemTitle = NonNullable<
	NonNullable<
		NonNullable<
			Awaited<
				ReturnType<typeof import('~/graphql').query.GetMovieBySlug>
			>['mediaItems']
		>['edges']
	>[number]['node']['releases']
>[number]['discs'][number]['titles'][number];

interface DiscTitlesProps {
	titles: Array<BoxsetTitle | MediaItemTitle>;
	type: 'movie' | 'series' | 'boxset';
}

export function DiscTitles({ titles, type }: DiscTitlesProps): JSX.Element {
	const [showAllTitles, setShowAllTitles] = useState(false);
	const showSeasonEpisode = type === 'series';

	const filteredTitles = showAllTitles
		? titles
		: titles.filter((title) => title.item != null);

	return (
		<div>
			<div class='mb-4 flex items-center justify-between'>
				<h5 class='font-medium'>Titles</h5>

				<label class='inline-flex cursor-pointer items-center gap-2'>
					<span class='text-sm text-zinc-600 dark:text-zinc-400'>
						Show Hidden
					</span>
					<input
						checked={showAllTitles}
						class="relative h-5 w-10 cursor-pointer appearance-none rounded-full bg-zinc-200 transition-colors before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-transform before:content-[''] checked:bg-blue-600 checked:before:translate-x-5 dark:bg-zinc-700 dark:checked:bg-blue-500"
						onChange={(e): void =>
							setShowAllTitles((e.target as HTMLInputElement).checked)
						}
						type='checkbox'
					/>
				</label>
			</div>

			{filteredTitles.length === 0 ? (
				<p class='py-4 text-sm text-zinc-500 dark:text-zinc-400'>
					No {showAllTitles ? '' : 'relevant '}titles found
				</p>
			) : (
				<div class='overflow-x-auto'>
					<table class='w-full text-sm'>
						<thead>
							<tr class='border-zinc-200 border-b text-left dark:border-zinc-800'>
								<th class='min-w-32 pb-2'>Source File</th>
								<th class='pb-2'>Description</th>
								<th class='w-20 pb-2'>Type</th>
								{showSeasonEpisode && (
									<>
										<th class='w-16 pb-2'>Season</th>
										<th class='w-20 pb-2'>Episode</th>
									</>
								)}
								<th class='w-24 pb-2'>Segment Map</th>
								<th class='w-20 pb-2'>Length</th>
								<th class='w-20 pb-2'>Size</th>
							</tr>
						</thead>

						<tbody>
							{filteredTitles.map((title) => (
								<tr
									class='border-zinc-100 border-b dark:border-zinc-900'
									key={title.id}>
									<td
										class='max-w-xs truncate py-2 text-xs'
										title={title.sourceFile ?? undefined}>
										{title.sourceFile ?? '-'}
									</td>
									<td class='py-2'>
										{title.description}
										{title.comment && (
											<span class='ml-2 text-xs text-zinc-600 dark:text-zinc-400'>
												({title.comment})
											</span>
										)}
									</td>
									<td class='py-2'>{title.itemType}</td>
									{showSeasonEpisode && (
										<>
											<td class='py-2'>{title.season ?? '-'}</td>
											<td class='py-2'>{title.episode ?? '-'}</td>
										</>
									)}
									<td class='py-2 text-xs'>
										{title.segmentMap ?? '-'}
									</td>
									<td class='py-2'>{title.duration ?? '-'}</td>
									<td class='py-2'>{title.displaySize ?? '-'}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
