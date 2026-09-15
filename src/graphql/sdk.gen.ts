/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { type GraphQLClient, type RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type BooleanOperationFilterInput = {
  eq?: boolean | null | undefined;
  neq?: boolean | null | undefined;
};

export type BoxsetFilterInput = {
  and?: Array<BoxsetFilterInput> | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  imageUrl?: StringOperationFilterInput | null | undefined;
  or?: Array<BoxsetFilterInput> | null | undefined;
  release?: ReleaseFilterInput | null | undefined;
  releaseId?: IntOperationFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
  sortTitle?: StringOperationFilterInput | null | undefined;
  title?: StringOperationFilterInput | null | undefined;
  type?: StringOperationFilterInput | null | undefined;
};

export type BoxsetSortInput = {
  id?: SortEnumType | null | undefined;
  imageUrl?: SortEnumType | null | undefined;
  release?: ReleaseSortInput | null | undefined;
  releaseId?: SortEnumType | null | undefined;
  slug?: SortEnumType | null | undefined;
  sortTitle?: SortEnumType | null | undefined;
  title?: SortEnumType | null | undefined;
  type?: SortEnumType | null | undefined;
};

export type ChapterFilterInput = {
  and?: Array<ChapterFilterInput> | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  index?: IntOperationFilterInput | null | undefined;
  or?: Array<ChapterFilterInput> | null | undefined;
  title?: StringOperationFilterInput | null | undefined;
};

export type ContributorFilterInput = {
  and?: Array<ContributorFilterInput> | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  name?: StringOperationFilterInput | null | undefined;
  or?: Array<ContributorFilterInput> | null | undefined;
  releases?: ListFilterInputTypeOfReleaseFilterInput | null | undefined;
  source?: StringOperationFilterInput | null | undefined;
  userId?: StringOperationFilterInput | null | undefined;
};

export type DateTimeOperationFilterInput = {
  eq?: unknown;
  gt?: unknown;
  gte?: unknown;
  in?: Array<unknown> | null | undefined;
  lt?: unknown;
  lte?: unknown;
  neq?: unknown;
  ngt?: unknown;
  ngte?: unknown;
  nin?: Array<unknown> | null | undefined;
  nlt?: unknown;
  nlte?: unknown;
};

export type DiscFilterInput = {
  and?: Array<DiscFilterInput> | null | undefined;
  contentHash?: StringOperationFilterInput | null | undefined;
  format?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  index?: IntOperationFilterInput | null | undefined;
  name?: StringOperationFilterInput | null | undefined;
  or?: Array<DiscFilterInput> | null | undefined;
  release?: ReleaseFilterInput | null | undefined;
  releaseDiscs?: ListReleaseDiscFilterTypeFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
  titles?: ListFilterInputTypeOfTitleFilterInput | null | undefined;
};

export type DiscItemReferenceFilterInput = {
  and?: Array<DiscItemReferenceFilterInput> | null | undefined;
  chapters?: ListFilterInputTypeOfChapterFilterInput | null | undefined;
  description?: StringOperationFilterInput | null | undefined;
  discItem?: TitleFilterInput | null | undefined;
  episode?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  or?: Array<DiscItemReferenceFilterInput> | null | undefined;
  season?: StringOperationFilterInput | null | undefined;
  title?: StringOperationFilterInput | null | undefined;
  type?: StringOperationFilterInput | null | undefined;
};

export type ExternalIdsFilterInput = {
  and?: Array<ExternalIdsFilterInput> | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  imdb?: StringOperationFilterInput | null | undefined;
  mediaItem?: MediaItemFilterInput | null | undefined;
  or?: Array<ExternalIdsFilterInput> | null | undefined;
  tmdb?: StringOperationFilterInput | null | undefined;
  tvdb?: StringOperationFilterInput | null | undefined;
};

export type ExternalIdsSortInput = {
  id?: SortEnumType | null | undefined;
  imdb?: SortEnumType | null | undefined;
  mediaItem?: MediaItemSortInput | null | undefined;
  tmdb?: SortEnumType | null | undefined;
  tvdb?: SortEnumType | null | undefined;
};

export type GroupFilterInput = {
  and?: Array<GroupFilterInput> | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  imageUrl?: StringOperationFilterInput | null | undefined;
  imdbId?: StringOperationFilterInput | null | undefined;
  mediaItemGroups?: ListFilterInputTypeOfMediaItemGroupFilterInput | null | undefined;
  name?: StringOperationFilterInput | null | undefined;
  or?: Array<GroupFilterInput> | null | undefined;
  releaseGroups?: ListFilterInputTypeOfReleaseGroupFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
};

export type IntOperationFilterInput = {
  eq?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number | null | undefined> | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  neq?: number | null | undefined;
  ngt?: number | null | undefined;
  ngte?: number | null | undefined;
  nin?: Array<number | null | undefined> | null | undefined;
  nlt?: number | null | undefined;
  nlte?: number | null | undefined;
};

export type ListFilterInputTypeOfChapterFilterInput = {
  all?: ChapterFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: ChapterFilterInput | null | undefined;
  some?: ChapterFilterInput | null | undefined;
};

export type ListFilterInputTypeOfContributorFilterInput = {
  all?: ContributorFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: ContributorFilterInput | null | undefined;
  some?: ContributorFilterInput | null | undefined;
};

export type ListFilterInputTypeOfMediaItemGroupFilterInput = {
  all?: MediaItemGroupFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: MediaItemGroupFilterInput | null | undefined;
  some?: MediaItemGroupFilterInput | null | undefined;
};

export type ListFilterInputTypeOfReleaseFilterInput = {
  all?: ReleaseFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: ReleaseFilterInput | null | undefined;
  some?: ReleaseFilterInput | null | undefined;
};

export type ListFilterInputTypeOfReleaseGroupFilterInput = {
  all?: ReleaseGroupFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: ReleaseGroupFilterInput | null | undefined;
  some?: ReleaseGroupFilterInput | null | undefined;
};

export type ListFilterInputTypeOfTitleFilterInput = {
  all?: TitleFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: TitleFilterInput | null | undefined;
  some?: TitleFilterInput | null | undefined;
};

export type ListFilterInputTypeOfTrackFilterInput = {
  all?: TrackFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: TrackFilterInput | null | undefined;
  some?: TrackFilterInput | null | undefined;
};

export type ListReleaseDiscFilterTypeFilterInput = {
  all?: ReleaseDiscFilterInput | null | undefined;
  any?: boolean | null | undefined;
  none?: ReleaseDiscFilterInput | null | undefined;
  some?: ReleaseDiscFilterInput | null | undefined;
};

export type LongOperationFilterInput = {
  eq?: unknown;
  gt?: unknown;
  gte?: unknown;
  in?: Array<unknown> | null | undefined;
  lt?: unknown;
  lte?: unknown;
  neq?: unknown;
  ngt?: unknown;
  ngte?: unknown;
  nin?: Array<unknown> | null | undefined;
  nlt?: unknown;
  nlte?: unknown;
};

export type MediaItemFilterInput = {
  and?: Array<MediaItemFilterInput> | null | undefined;
  contentRating?: StringOperationFilterInput | null | undefined;
  dateAdded?: DateTimeOperationFilterInput | null | undefined;
  directors?: StringOperationFilterInput | null | undefined;
  externalIdsId?: IntOperationFilterInput | null | undefined;
  externalids?: ExternalIdsFilterInput | null | undefined;
  fullTitle?: StringOperationFilterInput | null | undefined;
  genres?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  imageUrl?: StringOperationFilterInput | null | undefined;
  latestReleaseDate?: DateTimeOperationFilterInput | null | undefined;
  mediaItemGroups?: ListFilterInputTypeOfMediaItemGroupFilterInput | null | undefined;
  or?: Array<MediaItemFilterInput> | null | undefined;
  plot?: StringOperationFilterInput | null | undefined;
  releaseDate?: DateTimeOperationFilterInput | null | undefined;
  releases?: ListFilterInputTypeOfReleaseFilterInput | null | undefined;
  runtime?: StringOperationFilterInput | null | undefined;
  runtimeMinutes?: IntOperationFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
  sortTitle?: StringOperationFilterInput | null | undefined;
  stars?: StringOperationFilterInput | null | undefined;
  tagline?: StringOperationFilterInput | null | undefined;
  title?: StringOperationFilterInput | null | undefined;
  type?: StringOperationFilterInput | null | undefined;
  writers?: StringOperationFilterInput | null | undefined;
  year?: IntOperationFilterInput | null | undefined;
};

export type MediaItemGroupFilterInput = {
  and?: Array<MediaItemGroupFilterInput> | null | undefined;
  group?: GroupFilterInput | null | undefined;
  groupId?: IntOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  isFeatured?: BooleanOperationFilterInput | null | undefined;
  mediaItem?: MediaItemFilterInput | null | undefined;
  mediaItemId?: IntOperationFilterInput | null | undefined;
  or?: Array<MediaItemGroupFilterInput> | null | undefined;
  role?: StringOperationFilterInput | null | undefined;
};

export type MediaItemSortInput = {
  contentRating?: SortEnumType | null | undefined;
  dateAdded?: SortEnumType | null | undefined;
  directors?: SortEnumType | null | undefined;
  externalIdsId?: SortEnumType | null | undefined;
  externalids?: ExternalIdsSortInput | null | undefined;
  fullTitle?: SortEnumType | null | undefined;
  genres?: SortEnumType | null | undefined;
  id?: SortEnumType | null | undefined;
  imageUrl?: SortEnumType | null | undefined;
  latestReleaseDate?: SortEnumType | null | undefined;
  plot?: SortEnumType | null | undefined;
  releaseDate?: SortEnumType | null | undefined;
  runtime?: SortEnumType | null | undefined;
  runtimeMinutes?: SortEnumType | null | undefined;
  slug?: SortEnumType | null | undefined;
  sortTitle?: SortEnumType | null | undefined;
  stars?: SortEnumType | null | undefined;
  tagline?: SortEnumType | null | undefined;
  title?: SortEnumType | null | undefined;
  type?: SortEnumType | null | undefined;
  writers?: SortEnumType | null | undefined;
  year?: SortEnumType | null | undefined;
};

export type ReleaseDiscFilterInput = {
  and?: Array<ReleaseDiscFilterInput> | null | undefined;
  contentHash?: StringOperationFilterInput | null | undefined;
  disc?: DiscFilterInput | null | undefined;
  discId?: IntOperationFilterInput | null | undefined;
  fingerprint?: StringOperationFilterInput | null | undefined;
  format?: StringOperationFilterInput | null | undefined;
  globalDiscId?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  index?: IntOperationFilterInput | null | undefined;
  name?: StringOperationFilterInput | null | undefined;
  or?: Array<ReleaseDiscFilterInput> | null | undefined;
  release?: ReleaseFilterInput | null | undefined;
  releaseId?: IntOperationFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
  titles?: ListFilterInputTypeOfTitleFilterInput | null | undefined;
};

export type ReleaseFilterInput = {
  and?: Array<ReleaseFilterInput> | null | undefined;
  asin?: StringOperationFilterInput | null | undefined;
  backImageUrl?: StringOperationFilterInput | null | undefined;
  boxset?: BoxsetFilterInput | null | undefined;
  contributors?: ListFilterInputTypeOfContributorFilterInput | null | undefined;
  dateAdded?: DateTimeOperationFilterInput | null | undefined;
  discs?: ListReleaseDiscFilterTypeFilterInput | null | undefined;
  fullTitle?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  imageUrl?: StringOperationFilterInput | null | undefined;
  isbn?: StringOperationFilterInput | null | undefined;
  locale?: StringOperationFilterInput | null | undefined;
  mediaItem?: MediaItemFilterInput | null | undefined;
  or?: Array<ReleaseFilterInput> | null | undefined;
  regionCode?: StringOperationFilterInput | null | undefined;
  releaseDate?: DateTimeOperationFilterInput | null | undefined;
  releaseGroups?: ListFilterInputTypeOfReleaseGroupFilterInput | null | undefined;
  slug?: StringOperationFilterInput | null | undefined;
  title?: StringOperationFilterInput | null | undefined;
  type?: StringOperationFilterInput | null | undefined;
  upc?: StringOperationFilterInput | null | undefined;
  year?: IntOperationFilterInput | null | undefined;
};

export type ReleaseGroupFilterInput = {
  and?: Array<ReleaseGroupFilterInput> | null | undefined;
  group?: GroupFilterInput | null | undefined;
  groupId?: IntOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  or?: Array<ReleaseGroupFilterInput> | null | undefined;
  release?: ReleaseFilterInput | null | undefined;
  releaseId?: IntOperationFilterInput | null | undefined;
};

export type ReleaseSortInput = {
  asin?: SortEnumType | null | undefined;
  backImageUrl?: SortEnumType | null | undefined;
  boxset?: BoxsetSortInput | null | undefined;
  dateAdded?: SortEnumType | null | undefined;
  fullTitle?: SortEnumType | null | undefined;
  id?: SortEnumType | null | undefined;
  imageUrl?: SortEnumType | null | undefined;
  isbn?: SortEnumType | null | undefined;
  locale?: SortEnumType | null | undefined;
  mediaItem?: MediaItemSortInput | null | undefined;
  regionCode?: SortEnumType | null | undefined;
  releaseDate?: SortEnumType | null | undefined;
  slug?: SortEnumType | null | undefined;
  title?: SortEnumType | null | undefined;
  type?: SortEnumType | null | undefined;
  upc?: SortEnumType | null | undefined;
  year?: SortEnumType | null | undefined;
};

export type SortEnumType =
  | 'ASC'
  | 'DESC';

export type StringOperationFilterInput = {
  and?: Array<StringOperationFilterInput> | null | undefined;
  contains?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  ncontains?: string | null | undefined;
  nendsWith?: string | null | undefined;
  neq?: string | null | undefined;
  nin?: Array<string | null | undefined> | null | undefined;
  nstartsWith?: string | null | undefined;
  or?: Array<StringOperationFilterInput> | null | undefined;
  startsWith?: string | null | undefined;
};

export type TitleFilterInput = {
  and?: Array<TitleFilterInput> | null | undefined;
  comment?: StringOperationFilterInput | null | undefined;
  description?: StringOperationFilterInput | null | undefined;
  disc?: DiscFilterInput | null | undefined;
  discItemReferenceId?: IntOperationFilterInput | null | undefined;
  displaySize?: StringOperationFilterInput | null | undefined;
  duration?: StringOperationFilterInput | null | undefined;
  episode?: StringOperationFilterInput | null | undefined;
  hasItem?: BooleanOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  index?: IntOperationFilterInput | null | undefined;
  item?: DiscItemReferenceFilterInput | null | undefined;
  itemType?: StringOperationFilterInput | null | undefined;
  or?: Array<TitleFilterInput> | null | undefined;
  season?: StringOperationFilterInput | null | undefined;
  segmentMap?: StringOperationFilterInput | null | undefined;
  size?: LongOperationFilterInput | null | undefined;
  sourceFile?: StringOperationFilterInput | null | undefined;
  tracks?: ListFilterInputTypeOfTrackFilterInput | null | undefined;
};

export type TrackFilterInput = {
  and?: Array<TrackFilterInput> | null | undefined;
  aspectRatio?: StringOperationFilterInput | null | undefined;
  audioType?: StringOperationFilterInput | null | undefined;
  description?: StringOperationFilterInput | null | undefined;
  id?: IntOperationFilterInput | null | undefined;
  index?: IntOperationFilterInput | null | undefined;
  language?: StringOperationFilterInput | null | undefined;
  languageCode?: StringOperationFilterInput | null | undefined;
  name?: StringOperationFilterInput | null | undefined;
  or?: Array<TrackFilterInput> | null | undefined;
  resolution?: StringOperationFilterInput | null | undefined;
  title?: TitleFilterInput | null | undefined;
  type?: StringOperationFilterInput | null | undefined;
};

export type GetAllMoviesQueryVariables = Exact<{
  first?: number | null | undefined;
  after?: string | null | undefined;
  last?: number | null | undefined;
  before?: string | null | undefined;
  where?: MediaItemFilterInput | null | undefined;
  order?: Array<MediaItemSortInput> | MediaItemSortInput | null | undefined;
}>;


export type GetAllMoviesQuery = { mediaItems: { edges: Array<{ node: { contentRating: string | null, dateAdded: unknown, directors: string | null, genres: string | null, id: number, imageUrl: string | null, latestReleaseDate: unknown, plot: string | null, releaseDate: unknown, runtimeMinutes: number, slug: string | null, stars: string | null, tagline: string | null, title: string | null, type: string | null, year: number } }> | null, pageInfo: { endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null } } | null };

export type GetAllSeriesQueryVariables = Exact<{
  first?: number | null | undefined;
  after?: string | null | undefined;
  last?: number | null | undefined;
  before?: string | null | undefined;
  where?: MediaItemFilterInput | null | undefined;
  order?: Array<MediaItemSortInput> | MediaItemSortInput | null | undefined;
}>;


export type GetAllSeriesQuery = { mediaItems: { edges: Array<{ node: { contentRating: string | null, dateAdded: unknown, directors: string | null, genres: string | null, id: number, imageUrl: string | null, latestReleaseDate: unknown, plot: string | null, releaseDate: unknown, runtimeMinutes: number, slug: string | null, stars: string | null, tagline: string | null, title: string | null, type: string | null, year: number } }> | null, pageInfo: { endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null } } | null };

export type GetMovieBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetMovieBySlugQuery = { mediaItems: { edges: Array<{ node: { contentRating: string | null, dateAdded: unknown, directors: string | null, genres: string | null, id: number, imageUrl: string | null, latestReleaseDate: unknown, plot: string | null, releaseDate: unknown, runtimeMinutes: number, slug: string | null, stars: string | null, tagline: string | null, title: string | null, type: string | null, writers: string | null, year: number, externalids: { imdb: string | null, tmdb: string | null, tvdb: string | null }, releases: Array<{ upc: string | null, isbn: string | null, asin: string | null, title: string | null, imageUrl: string | null, regionCode: string | null, locale: string | null, year: number, discs: Array<{ id: number, index: number, name: string | null, format: string | null, slug: string | null, titles: Array<{ id: number, index: number, comment: string | null, duration: string | null, displaySize: string | null, description: string, itemType: string, hasItem: boolean, sourceFile: string | null, season: string, episode: string, segmentMap: string | null, size: unknown, item: { title: string | null, season: string | null, episode: string | null, type: string | null } | null }> }> }> } }> | null } | null };

export type GetSeriesBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetSeriesBySlugQuery = { mediaItems: { edges: Array<{ node: { contentRating: string | null, dateAdded: unknown, directors: string | null, genres: string | null, id: number, imageUrl: string | null, latestReleaseDate: unknown, plot: string | null, releaseDate: unknown, runtimeMinutes: number, slug: string | null, stars: string | null, tagline: string | null, title: string | null, type: string | null, writers: string | null, year: number, externalids: { imdb: string | null, tmdb: string | null, tvdb: string | null }, releases: Array<{ upc: string | null, isbn: string | null, asin: string | null, title: string | null, imageUrl: string | null, regionCode: string | null, locale: string | null, year: number, discs: Array<{ id: number, index: number, name: string | null, format: string | null, slug: string | null, titles: Array<{ id: number, index: number, comment: string | null, duration: string | null, displaySize: string | null, description: string, itemType: string, hasItem: boolean, sourceFile: string | null, season: string, episode: string, segmentMap: string | null, size: unknown, item: { title: string | null, season: string | null, episode: string | null, type: string | null } | null }> }> }> } }> | null } | null };

export type GetAllBoxSetsQueryVariables = Exact<{
  first?: number | null | undefined;
  after?: string | null | undefined;
  last?: number | null | undefined;
  before?: string | null | undefined;
  where?: BoxsetFilterInput | null | undefined;
  order?: Array<BoxsetSortInput> | BoxsetSortInput | null | undefined;
}>;


export type GetAllBoxSetsQuery = { boxsets: { edges: Array<{ node: { id: number, imageUrl: string | null, slug: string | null, sortTitle: string | null, title: string | null, type: string, release: { year: number } | null } }> | null, pageInfo: { endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null } } | null };

export type GetBoxSetBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetBoxSetBySlugQuery = { boxsets: { edges: Array<{ node: { id: number, imageUrl: string | null, slug: string | null, sortTitle: string | null, title: string | null, type: string, release: { upc: string | null, isbn: string | null, asin: string | null, title: string | null, imageUrl: string | null, regionCode: string | null, locale: string | null, year: number, discs: Array<{ id: number, index: number, name: string | null, format: string | null, slug: string | null, titles: Array<{ id: number, index: number, comment: string | null, duration: string | null, displaySize: string | null, description: string, itemType: string, hasItem: boolean, sourceFile: string | null, season: string, episode: string, segmentMap: string | null, size: unknown, item: { title: string | null, season: string | null, episode: string | null, type: string | null } | null }> }> } | null } }> | null } | null };


export const GetAllMoviesDocument = gql`
    query GetAllMovies($first: Int, $after: String, $last: Int, $before: String, $where: MediaItemFilterInput, $order: [MediaItemSortInput!]) {
  mediaItems(
    first: $first
    after: $after
    last: $last
    before: $before
    where: $where
    order: $order
  ) {
    edges {
      node {
        contentRating
        dateAdded
        directors
        genres
        id
        imageUrl
        latestReleaseDate
        plot
        releaseDate
        runtimeMinutes
        slug
        stars
        tagline
        title
        type
        year
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const GetAllSeriesDocument = gql`
    query GetAllSeries($first: Int, $after: String, $last: Int, $before: String, $where: MediaItemFilterInput, $order: [MediaItemSortInput!]) {
  mediaItems(
    first: $first
    after: $after
    last: $last
    before: $before
    where: $where
    order: $order
  ) {
    edges {
      node {
        contentRating
        dateAdded
        directors
        genres
        id
        imageUrl
        latestReleaseDate
        plot
        releaseDate
        runtimeMinutes
        slug
        stars
        tagline
        title
        type
        year
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const GetMovieBySlugDocument = gql`
    query GetMovieBySlug($slug: String!) {
  mediaItems(where: { slug: { eq: $slug }, type: { eq: "Movie" } }) {
    edges {
      node {
        contentRating
        dateAdded
        directors
        externalids {
          imdb
          tmdb
          tvdb
        }
        genres
        id
        imageUrl
        latestReleaseDate
        plot
        releaseDate
        releases {
          upc
          isbn
          asin
          title
          imageUrl
          regionCode
          locale
          year
          discs {
            id
            index
            name
            format
            slug
            titles {
              id
              index
              comment
              duration
              displaySize
              description
              itemType
              hasItem
              item {
                title
                season
                episode
                type
              }
              sourceFile
              season
              episode
              segmentMap
              size
            }
          }
        }
        runtimeMinutes
        slug
        stars
        tagline
        title
        type
        writers
        year
      }
    }
  }
}
    `;
export const GetSeriesBySlugDocument = gql`
    query GetSeriesBySlug($slug: String!) {
  mediaItems(where: { slug: { eq: $slug }, type: { eq: "Series" } }) {
    edges {
      node {
        contentRating
        dateAdded
        directors
        externalids {
          imdb
          tmdb
          tvdb
        }
        genres
        id
        imageUrl
        latestReleaseDate
        plot
        releaseDate
        releases {
          upc
          isbn
          asin
          title
          imageUrl
          regionCode
          locale
          year
          discs {
            id
            index
            name
            format
            slug
            titles {
              id
              index
              comment
              duration
              displaySize
              description
              itemType
              hasItem
              item {
                title
                season
                episode
                type
              }
              sourceFile
              season
              episode
              segmentMap
              size
            }
          }
        }
        runtimeMinutes
        slug
        stars
        tagline
        title
        type
        writers
        year
      }
    }
  }
}
    `;
export const GetAllBoxSetsDocument = gql`
    query GetAllBoxSets($first: Int, $after: String, $last: Int, $before: String, $where: BoxsetFilterInput, $order: [BoxsetSortInput!]) {
  boxsets(
    first: $first
    after: $after
    last: $last
    before: $before
    where: $where
    order: $order
  ) {
    edges {
      node {
        id
        imageUrl
        slug
        sortTitle
        title
        type
        release {
          year
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const GetBoxSetBySlugDocument = gql`
    query GetBoxSetBySlug($slug: String!) {
  boxsets(where: { slug: { eq: $slug } }) {
    edges {
      node {
        id
        imageUrl
        slug
        sortTitle
        title
        type
        release {
          upc
          isbn
          asin
          title
          imageUrl
          regionCode
          locale
          year
          discs {
            id
            index
            name
            format
            slug
            titles {
              id
              index
              comment
              duration
              displaySize
              description
              itemType
              hasItem
              item {
                title
                season
                episode
                type
              }
              sourceFile
              season
              episode
              segmentMap
              size
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllMovies(variables?: GetAllMoviesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllMoviesQuery>({ document: GetAllMoviesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllMovies', 'query', variables);
    },
    GetAllSeries(variables?: GetAllSeriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllSeriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSeriesQuery>({ document: GetAllSeriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllSeries', 'query', variables);
    },
    GetMovieBySlug(variables: GetMovieBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetMovieBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMovieBySlugQuery>({ document: GetMovieBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetMovieBySlug', 'query', variables);
    },
    GetSeriesBySlug(variables: GetSeriesBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetSeriesBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeriesBySlugQuery>({ document: GetSeriesBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetSeriesBySlug', 'query', variables);
    },
    GetAllBoxSets(variables?: GetAllBoxSetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllBoxSetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBoxSetsQuery>({ document: GetAllBoxSetsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllBoxSets', 'query', variables);
    },
    GetBoxSetBySlug(variables: GetBoxSetBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetBoxSetBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBoxSetBySlugQuery>({ document: GetBoxSetBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetBoxSetBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;