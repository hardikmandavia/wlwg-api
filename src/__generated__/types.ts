import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LeagueEntry = {
  __typename?: 'LeagueEntry';
  freshBlood: Scalars['Boolean'];
  hotStreak: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
  leagueId: Scalars['String'];
  leaguePoints: Scalars['Float'];
  losses: Scalars['Float'];
  queueType: Scalars['String'];
  rank: Scalars['String'];
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  tier: Scalars['String'];
  veteran: Scalars['Boolean'];
  wins: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  summoner: Summoner;
};


export type QuerySummonerArgs = {
  name: Scalars['String'];
  region: Scalars['String'];
};

export type Summoner = {
  __typename?: 'Summoner';
  accountId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profileIconId: Scalars['Float'];
  puuid: Scalars['String'];
  ranked: Array<LeagueEntry>;
  region: Scalars['String'];
  revisionDate: Scalars['Float'];
  summonerLevel: Scalars['Float'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  LeagueEntry: ResolverTypeWrapper<LeagueEntry>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Query: ResolverTypeWrapper<{}>;
  Summoner: ResolverTypeWrapper<Summoner>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  LeagueEntry: LeagueEntry;
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  Query: {};
  Summoner: Summoner;
};

export type LeagueEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueEntry'] = ResolversParentTypes['LeagueEntry']> = {
  freshBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hotStreak?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  leagueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaguePoints?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  losses?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  queueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  veteran?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  wins?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  summoner?: Resolver<ResolversTypes['Summoner'], ParentType, ContextType, RequireFields<QuerySummonerArgs, 'name' | 'region'>>;
};

export type SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Summoner'] = ResolversParentTypes['Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  puuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ranked?: Resolver<Array<ResolversTypes['LeagueEntry']>, ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revisionDate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  LeagueEntry?: LeagueEntryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Summoner?: SummonerResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
