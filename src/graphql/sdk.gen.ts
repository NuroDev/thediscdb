import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boxset = {
  __typename?: 'Boxset';
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  release?: Maybe<Release>;
  releaseId: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sortTitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type BoxsetFilterInput = {
  and?: InputMaybe<Array<BoxsetFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BoxsetFilterInput>>;
  release?: InputMaybe<ReleaseFilterInput>;
  releaseId?: InputMaybe<IntOperationFilterInput>;
  slug?: InputMaybe<StringOperationFilterInput>;
  sortTitle?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
};

export type BoxsetSortInput = {
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  release?: InputMaybe<ReleaseSortInput>;
  releaseId?: InputMaybe<SortEnumType>;
  slug?: InputMaybe<SortEnumType>;
  sortTitle?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type BoxsetsConnection = {
  __typename?: 'BoxsetsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<BoxsetsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Boxset>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BoxsetsEdge = {
  __typename?: 'BoxsetsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Boxset;
};

export type Chapter = {
  __typename?: 'Chapter';
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ChapterFilterInput = {
  and?: InputMaybe<Array<ChapterFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  index?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ChapterFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type ChapterSortInput = {
  id?: InputMaybe<SortEnumType>;
  index?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Disc = {
  __typename?: 'Disc';
  contentHash?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  release?: Maybe<Release>;
  slug?: Maybe<Scalars['String']['output']>;
  titles: Array<Title>;
};


export type DiscTitlesArgs = {
  order?: InputMaybe<Array<TitleSortInput>>;
  where?: InputMaybe<TitleFilterInput>;
};

export type DiscFilterInput = {
  and?: InputMaybe<Array<DiscFilterInput>>;
  contentHash?: InputMaybe<StringOperationFilterInput>;
  format?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  index?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DiscFilterInput>>;
  release?: InputMaybe<ReleaseFilterInput>;
  slug?: InputMaybe<StringOperationFilterInput>;
  titles?: InputMaybe<ListFilterInputTypeOfTitleFilterInput>;
};

export type DiscItemReference = {
  __typename?: 'DiscItemReference';
  chapters: Array<Chapter>;
  description?: Maybe<Scalars['String']['output']>;
  discItem?: Maybe<Title>;
  episode?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  season?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type DiscItemReferenceChaptersArgs = {
  order?: InputMaybe<Array<ChapterSortInput>>;
  where?: InputMaybe<ChapterFilterInput>;
};

export type DiscItemReferenceFilterInput = {
  and?: InputMaybe<Array<DiscItemReferenceFilterInput>>;
  chapters?: InputMaybe<ListFilterInputTypeOfChapterFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  discItem?: InputMaybe<TitleFilterInput>;
  episode?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<DiscItemReferenceFilterInput>>;
  season?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
};

export type DiscItemReferenceSortInput = {
  description?: InputMaybe<SortEnumType>;
  discItem?: InputMaybe<TitleSortInput>;
  episode?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  season?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type DiscSortInput = {
  contentHash?: InputMaybe<SortEnumType>;
  format?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  index?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  release?: InputMaybe<ReleaseSortInput>;
  slug?: InputMaybe<SortEnumType>;
};

export type ExternalIds = {
  __typename?: 'ExternalIds';
  id: Scalars['Int']['output'];
  imdb?: Maybe<Scalars['String']['output']>;
  mediaItem?: Maybe<MediaItem>;
  tmdb?: Maybe<Scalars['String']['output']>;
  tvdb?: Maybe<Scalars['String']['output']>;
};

export type ExternalIdsFilterInput = {
  and?: InputMaybe<Array<ExternalIdsFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  imdb?: InputMaybe<StringOperationFilterInput>;
  mediaItem?: InputMaybe<MediaItemFilterInput>;
  or?: InputMaybe<Array<ExternalIdsFilterInput>>;
  tmdb?: InputMaybe<StringOperationFilterInput>;
  tvdb?: InputMaybe<StringOperationFilterInput>;
};

export type ExternalIdsSortInput = {
  id?: InputMaybe<SortEnumType>;
  imdb?: InputMaybe<SortEnumType>;
  mediaItem?: InputMaybe<MediaItemSortInput>;
  tmdb?: InputMaybe<SortEnumType>;
  tvdb?: InputMaybe<SortEnumType>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  imdbId?: Maybe<Scalars['String']['output']>;
  mediaItemGroups: Array<MediaItemGroup>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type GroupMediaItemGroupsArgs = {
  order?: InputMaybe<Array<MediaItemGroupSortInput>>;
  where?: InputMaybe<MediaItemGroupFilterInput>;
};

export type GroupFilterInput = {
  and?: InputMaybe<Array<GroupFilterInput>>;
  id?: InputMaybe<IntOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  imdbId?: InputMaybe<StringOperationFilterInput>;
  mediaItemGroups?: InputMaybe<ListFilterInputTypeOfMediaItemGroupFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<GroupFilterInput>>;
  slug?: InputMaybe<StringOperationFilterInput>;
};

export type GroupSortInput = {
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  imdbId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  slug?: InputMaybe<SortEnumType>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListFilterInputTypeOfChapterFilterInput = {
  all?: InputMaybe<ChapterFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ChapterFilterInput>;
  some?: InputMaybe<ChapterFilterInput>;
};

export type ListFilterInputTypeOfDiscFilterInput = {
  all?: InputMaybe<DiscFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DiscFilterInput>;
  some?: InputMaybe<DiscFilterInput>;
};

export type ListFilterInputTypeOfMediaItemGroupFilterInput = {
  all?: InputMaybe<MediaItemGroupFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MediaItemGroupFilterInput>;
  some?: InputMaybe<MediaItemGroupFilterInput>;
};

export type ListFilterInputTypeOfReleaseFilterInput = {
  all?: InputMaybe<ReleaseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ReleaseFilterInput>;
  some?: InputMaybe<ReleaseFilterInput>;
};

export type ListFilterInputTypeOfTitleFilterInput = {
  all?: InputMaybe<TitleFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<TitleFilterInput>;
  some?: InputMaybe<TitleFilterInput>;
};

export type ListFilterInputTypeOfTrackFilterInput = {
  all?: InputMaybe<TrackFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<TrackFilterInput>;
  some?: InputMaybe<TrackFilterInput>;
};

export type LongOperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  neq?: InputMaybe<Scalars['Long']['input']>;
  ngt?: InputMaybe<Scalars['Long']['input']>;
  ngte?: InputMaybe<Scalars['Long']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  nlt?: InputMaybe<Scalars['Long']['input']>;
  nlte?: InputMaybe<Scalars['Long']['input']>;
};

export type MediaItem = {
  __typename?: 'MediaItem';
  contentRating?: Maybe<Scalars['String']['output']>;
  dateAdded: Scalars['DateTime']['output'];
  directors?: Maybe<Scalars['String']['output']>;
  externalIdsId: Scalars['Int']['output'];
  externalids: ExternalIds;
  fullTitle?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  latestReleaseDate: Scalars['DateTime']['output'];
  mediaItemGroups: Array<MediaItemGroup>;
  plot?: Maybe<Scalars['String']['output']>;
  releaseDate: Scalars['DateTime']['output'];
  releases: Array<Release>;
  runtime?: Maybe<Scalars['String']['output']>;
  runtimeMinutes: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sortTitle?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  writers?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};


export type MediaItemMediaItemGroupsArgs = {
  order?: InputMaybe<Array<MediaItemGroupSortInput>>;
  where?: InputMaybe<MediaItemGroupFilterInput>;
};


export type MediaItemReleasesArgs = {
  order?: InputMaybe<Array<ReleaseSortInput>>;
  where?: InputMaybe<ReleaseFilterInput>;
};

export type MediaItemFilterInput = {
  and?: InputMaybe<Array<MediaItemFilterInput>>;
  contentRating?: InputMaybe<StringOperationFilterInput>;
  dateAdded?: InputMaybe<DateTimeOperationFilterInput>;
  directors?: InputMaybe<StringOperationFilterInput>;
  externalIdsId?: InputMaybe<IntOperationFilterInput>;
  externalids?: InputMaybe<ExternalIdsFilterInput>;
  fullTitle?: InputMaybe<StringOperationFilterInput>;
  genres?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  latestReleaseDate?: InputMaybe<DateTimeOperationFilterInput>;
  mediaItemGroups?: InputMaybe<ListFilterInputTypeOfMediaItemGroupFilterInput>;
  or?: InputMaybe<Array<MediaItemFilterInput>>;
  plot?: InputMaybe<StringOperationFilterInput>;
  releaseDate?: InputMaybe<DateTimeOperationFilterInput>;
  releases?: InputMaybe<ListFilterInputTypeOfReleaseFilterInput>;
  runtime?: InputMaybe<StringOperationFilterInput>;
  runtimeMinutes?: InputMaybe<IntOperationFilterInput>;
  slug?: InputMaybe<StringOperationFilterInput>;
  sortTitle?: InputMaybe<StringOperationFilterInput>;
  stars?: InputMaybe<StringOperationFilterInput>;
  tagline?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  writers?: InputMaybe<StringOperationFilterInput>;
  year?: InputMaybe<IntOperationFilterInput>;
};

export type MediaItemGroup = {
  __typename?: 'MediaItemGroup';
  group?: Maybe<Group>;
  groupId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isFeatured: Scalars['Boolean']['output'];
  mediaItem?: Maybe<MediaItem>;
  mediaItemId: Scalars['Int']['output'];
  role?: Maybe<Scalars['String']['output']>;
};


export type MediaItemGroupGroupArgs = {
  order?: InputMaybe<Array<GroupSortInput>>;
  where?: InputMaybe<GroupFilterInput>;
};


export type MediaItemGroupMediaItemArgs = {
  order?: InputMaybe<Array<MediaItemSortInput>>;
  where?: InputMaybe<MediaItemFilterInput>;
};

export type MediaItemGroupFilterInput = {
  and?: InputMaybe<Array<MediaItemGroupFilterInput>>;
  group?: InputMaybe<GroupFilterInput>;
  groupId?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isFeatured?: InputMaybe<BooleanOperationFilterInput>;
  mediaItem?: InputMaybe<MediaItemFilterInput>;
  mediaItemId?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<MediaItemGroupFilterInput>>;
  role?: InputMaybe<StringOperationFilterInput>;
};

export type MediaItemGroupSortInput = {
  group?: InputMaybe<GroupSortInput>;
  groupId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isFeatured?: InputMaybe<SortEnumType>;
  mediaItem?: InputMaybe<MediaItemSortInput>;
  mediaItemId?: InputMaybe<SortEnumType>;
  role?: InputMaybe<SortEnumType>;
};

export type MediaItemSortInput = {
  contentRating?: InputMaybe<SortEnumType>;
  dateAdded?: InputMaybe<SortEnumType>;
  directors?: InputMaybe<SortEnumType>;
  externalIdsId?: InputMaybe<SortEnumType>;
  externalids?: InputMaybe<ExternalIdsSortInput>;
  fullTitle?: InputMaybe<SortEnumType>;
  genres?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  latestReleaseDate?: InputMaybe<SortEnumType>;
  plot?: InputMaybe<SortEnumType>;
  releaseDate?: InputMaybe<SortEnumType>;
  runtime?: InputMaybe<SortEnumType>;
  runtimeMinutes?: InputMaybe<SortEnumType>;
  slug?: InputMaybe<SortEnumType>;
  sortTitle?: InputMaybe<SortEnumType>;
  stars?: InputMaybe<SortEnumType>;
  tagline?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  writers?: InputMaybe<SortEnumType>;
  year?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type MediaItemsByGroupConnection = {
  __typename?: 'MediaItemsByGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MediaItemsByGroupEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<MediaItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MediaItemsByGroupEdge = {
  __typename?: 'MediaItemsByGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MediaItem;
};

/** A connection to a list of items. */
export type MediaItemsConnection = {
  __typename?: 'MediaItemsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MediaItemsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<MediaItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MediaItemsEdge = {
  __typename?: 'MediaItemsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MediaItem;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  boxsets?: Maybe<BoxsetsConnection>;
  mediaItems?: Maybe<MediaItemsConnection>;
  mediaItemsByGroup?: Maybe<MediaItemsByGroupConnection>;
};


export type QueryBoxsetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<BoxsetSortInput>>;
  where?: InputMaybe<BoxsetFilterInput>;
};


export type QueryMediaItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<MediaItemSortInput>>;
  where?: InputMaybe<MediaItemFilterInput>;
};


export type QueryMediaItemsByGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<MediaItemSortInput>>;
  role?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  where?: InputMaybe<MediaItemFilterInput>;
};

export type Release = {
  __typename?: 'Release';
  asin?: Maybe<Scalars['String']['output']>;
  boxset?: Maybe<Boxset>;
  dateAdded: Scalars['DateTime']['output'];
  discs: Array<Disc>;
  fullTitle: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  mediaItem?: Maybe<MediaItem>;
  regionCode?: Maybe<Scalars['String']['output']>;
  releaseDate: Scalars['DateTime']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  upc?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};


export type ReleaseDiscsArgs = {
  order?: InputMaybe<Array<DiscSortInput>>;
  where?: InputMaybe<DiscFilterInput>;
};

export type ReleaseFilterInput = {
  and?: InputMaybe<Array<ReleaseFilterInput>>;
  asin?: InputMaybe<StringOperationFilterInput>;
  boxset?: InputMaybe<BoxsetFilterInput>;
  dateAdded?: InputMaybe<DateTimeOperationFilterInput>;
  discs?: InputMaybe<ListFilterInputTypeOfDiscFilterInput>;
  fullTitle?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  isbn?: InputMaybe<StringOperationFilterInput>;
  locale?: InputMaybe<StringOperationFilterInput>;
  mediaItem?: InputMaybe<MediaItemFilterInput>;
  or?: InputMaybe<Array<ReleaseFilterInput>>;
  regionCode?: InputMaybe<StringOperationFilterInput>;
  releaseDate?: InputMaybe<DateTimeOperationFilterInput>;
  slug?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  upc?: InputMaybe<StringOperationFilterInput>;
  year?: InputMaybe<IntOperationFilterInput>;
};

export type ReleaseSortInput = {
  asin?: InputMaybe<SortEnumType>;
  boxset?: InputMaybe<BoxsetSortInput>;
  dateAdded?: InputMaybe<SortEnumType>;
  fullTitle?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  isbn?: InputMaybe<SortEnumType>;
  locale?: InputMaybe<SortEnumType>;
  mediaItem?: InputMaybe<MediaItemSortInput>;
  regionCode?: InputMaybe<SortEnumType>;
  releaseDate?: InputMaybe<SortEnumType>;
  slug?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  upc?: InputMaybe<SortEnumType>;
  year?: InputMaybe<SortEnumType>;
};

export type SortEnumType =
  | 'ASC'
  | 'DESC';

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Title = {
  __typename?: 'Title';
  comment?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  disc?: Maybe<Disc>;
  discItemReferenceId?: Maybe<Scalars['Int']['output']>;
  displaySize?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  episode: Scalars['String']['output'];
  hasItem: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  item?: Maybe<DiscItemReference>;
  itemType: Scalars['String']['output'];
  season: Scalars['String']['output'];
  segmentMap?: Maybe<Scalars['String']['output']>;
  size: Scalars['Long']['output'];
  sourceFile?: Maybe<Scalars['String']['output']>;
  tracks: Array<Track>;
};


export type TitleTracksArgs = {
  order?: InputMaybe<Array<TrackSortInput>>;
  where?: InputMaybe<TrackFilterInput>;
};

export type TitleFilterInput = {
  and?: InputMaybe<Array<TitleFilterInput>>;
  comment?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  disc?: InputMaybe<DiscFilterInput>;
  discItemReferenceId?: InputMaybe<IntOperationFilterInput>;
  displaySize?: InputMaybe<StringOperationFilterInput>;
  duration?: InputMaybe<StringOperationFilterInput>;
  episode?: InputMaybe<StringOperationFilterInput>;
  hasItem?: InputMaybe<BooleanOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  index?: InputMaybe<IntOperationFilterInput>;
  item?: InputMaybe<DiscItemReferenceFilterInput>;
  itemType?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TitleFilterInput>>;
  season?: InputMaybe<StringOperationFilterInput>;
  segmentMap?: InputMaybe<StringOperationFilterInput>;
  size?: InputMaybe<LongOperationFilterInput>;
  sourceFile?: InputMaybe<StringOperationFilterInput>;
  tracks?: InputMaybe<ListFilterInputTypeOfTrackFilterInput>;
};

export type TitleSortInput = {
  comment?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  disc?: InputMaybe<DiscSortInput>;
  discItemReferenceId?: InputMaybe<SortEnumType>;
  displaySize?: InputMaybe<SortEnumType>;
  duration?: InputMaybe<SortEnumType>;
  episode?: InputMaybe<SortEnumType>;
  hasItem?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  index?: InputMaybe<SortEnumType>;
  item?: InputMaybe<DiscItemReferenceSortInput>;
  itemType?: InputMaybe<SortEnumType>;
  season?: InputMaybe<SortEnumType>;
  segmentMap?: InputMaybe<SortEnumType>;
  size?: InputMaybe<SortEnumType>;
  sourceFile?: InputMaybe<SortEnumType>;
};

export type Track = {
  __typename?: 'Track';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  audioType?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  language?: Maybe<Scalars['String']['output']>;
  languageCode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Title>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TrackFilterInput = {
  and?: InputMaybe<Array<TrackFilterInput>>;
  aspectRatio?: InputMaybe<StringOperationFilterInput>;
  audioType?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  index?: InputMaybe<IntOperationFilterInput>;
  language?: InputMaybe<StringOperationFilterInput>;
  languageCode?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TrackFilterInput>>;
  resolution?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<TitleFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
};

export type TrackSortInput = {
  aspectRatio?: InputMaybe<SortEnumType>;
  audioType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  index?: InputMaybe<SortEnumType>;
  language?: InputMaybe<SortEnumType>;
  languageCode?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  resolution?: InputMaybe<SortEnumType>;
  title?: InputMaybe<TitleSortInput>;
  type?: InputMaybe<SortEnumType>;
};


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
  mediaItems(where: {slug: {eq: $slug}, type: {eq: "Movie"}}) {
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
  mediaItems(where: {slug: {eq: $slug}, type: {eq: "Series"}}) {
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
  boxsets(where: {slug: {eq: $slug}}) {
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
export type GetAllMoviesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MediaItemFilterInput>;
  order?: InputMaybe<Array<MediaItemSortInput> | MediaItemSortInput>;
}>;


export type GetAllMoviesQuery = { __typename?: 'Query', mediaItems?: { __typename?: 'MediaItemsConnection', edges?: Array<{ __typename?: 'MediaItemsEdge', node: { __typename?: 'MediaItem', contentRating?: string | null, dateAdded: any, directors?: string | null, genres?: string | null, id: number, imageUrl?: string | null, latestReleaseDate: any, plot?: string | null, releaseDate: any, runtimeMinutes: number, slug?: string | null, stars?: string | null, tagline?: string | null, title?: string | null, type?: string | null, year: number } }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type GetAllSeriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<MediaItemFilterInput>;
  order?: InputMaybe<Array<MediaItemSortInput> | MediaItemSortInput>;
}>;


export type GetAllSeriesQuery = { __typename?: 'Query', mediaItems?: { __typename?: 'MediaItemsConnection', edges?: Array<{ __typename?: 'MediaItemsEdge', node: { __typename?: 'MediaItem', contentRating?: string | null, dateAdded: any, directors?: string | null, genres?: string | null, id: number, imageUrl?: string | null, latestReleaseDate: any, plot?: string | null, releaseDate: any, runtimeMinutes: number, slug?: string | null, stars?: string | null, tagline?: string | null, title?: string | null, type?: string | null, year: number } }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type GetMovieBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetMovieBySlugQuery = { __typename?: 'Query', mediaItems?: { __typename?: 'MediaItemsConnection', edges?: Array<{ __typename?: 'MediaItemsEdge', node: { __typename?: 'MediaItem', contentRating?: string | null, dateAdded: any, directors?: string | null, genres?: string | null, id: number, imageUrl?: string | null, latestReleaseDate: any, plot?: string | null, releaseDate: any, runtimeMinutes: number, slug?: string | null, stars?: string | null, tagline?: string | null, title?: string | null, type?: string | null, writers?: string | null, year: number, externalids: { __typename?: 'ExternalIds', imdb?: string | null, tmdb?: string | null, tvdb?: string | null }, releases: Array<{ __typename?: 'Release', upc?: string | null, isbn?: string | null, asin?: string | null, title?: string | null, imageUrl?: string | null, regionCode?: string | null, locale?: string | null, year: number, discs: Array<{ __typename?: 'Disc', id: number, index: number, name?: string | null, format?: string | null, slug?: string | null, titles: Array<{ __typename?: 'Title', id: number, index: number, comment?: string | null, duration?: string | null, displaySize?: string | null, description: string, itemType: string, hasItem: boolean, sourceFile?: string | null, season: string, episode: string, segmentMap?: string | null, size: any, item?: { __typename?: 'DiscItemReference', title?: string | null, season?: string | null, episode?: string | null, type?: string | null } | null }> }> }> } }> | null } | null };

export type GetSeriesBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetSeriesBySlugQuery = { __typename?: 'Query', mediaItems?: { __typename?: 'MediaItemsConnection', edges?: Array<{ __typename?: 'MediaItemsEdge', node: { __typename?: 'MediaItem', contentRating?: string | null, dateAdded: any, directors?: string | null, genres?: string | null, id: number, imageUrl?: string | null, latestReleaseDate: any, plot?: string | null, releaseDate: any, runtimeMinutes: number, slug?: string | null, stars?: string | null, tagline?: string | null, title?: string | null, type?: string | null, writers?: string | null, year: number, externalids: { __typename?: 'ExternalIds', imdb?: string | null, tmdb?: string | null, tvdb?: string | null }, releases: Array<{ __typename?: 'Release', upc?: string | null, isbn?: string | null, asin?: string | null, title?: string | null, imageUrl?: string | null, regionCode?: string | null, locale?: string | null, year: number, discs: Array<{ __typename?: 'Disc', id: number, index: number, name?: string | null, format?: string | null, slug?: string | null, titles: Array<{ __typename?: 'Title', id: number, index: number, comment?: string | null, duration?: string | null, displaySize?: string | null, description: string, itemType: string, hasItem: boolean, sourceFile?: string | null, season: string, episode: string, segmentMap?: string | null, size: any, item?: { __typename?: 'DiscItemReference', title?: string | null, season?: string | null, episode?: string | null, type?: string | null } | null }> }> }> } }> | null } | null };

export type GetAllBoxSetsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<BoxsetFilterInput>;
  order?: InputMaybe<Array<BoxsetSortInput> | BoxsetSortInput>;
}>;


export type GetAllBoxSetsQuery = { __typename?: 'Query', boxsets?: { __typename?: 'BoxsetsConnection', edges?: Array<{ __typename?: 'BoxsetsEdge', node: { __typename?: 'Boxset', id: number, imageUrl?: string | null, slug?: string | null, sortTitle?: string | null, title?: string | null, type: string, release?: { __typename?: 'Release', year: number } | null } }> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type GetBoxSetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBoxSetBySlugQuery = { __typename?: 'Query', boxsets?: { __typename?: 'BoxsetsConnection', edges?: Array<{ __typename?: 'BoxsetsEdge', node: { __typename?: 'Boxset', id: number, imageUrl?: string | null, slug?: string | null, sortTitle?: string | null, title?: string | null, type: string, release?: { __typename?: 'Release', upc?: string | null, isbn?: string | null, asin?: string | null, title?: string | null, imageUrl?: string | null, regionCode?: string | null, locale?: string | null, year: number, discs: Array<{ __typename?: 'Disc', id: number, index: number, name?: string | null, format?: string | null, slug?: string | null, titles: Array<{ __typename?: 'Title', id: number, index: number, comment?: string | null, duration?: string | null, displaySize?: string | null, description: string, itemType: string, hasItem: boolean, sourceFile?: string | null, season: string, episode: string, segmentMap?: string | null, size: any, item?: { __typename?: 'DiscItemReference', title?: string | null, season?: string | null, episode?: string | null, type?: string | null } | null }> }> } | null } }> | null } | null };
