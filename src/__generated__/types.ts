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

export type Match = {
  __typename?: 'Match';
  gameCreation: Scalars['Float'];
  gameDuration: Scalars['Float'];
  gameId: Scalars['Float'];
  gameMode: Scalars['String'];
  gameType: Scalars['String'];
  gameVersion: Scalars['String'];
  mapId: Scalars['Float'];
  participantIdentities: Array<ParticipantIdentity>;
  participants: Array<Participant>;
  platformId: Scalars['String'];
  queueId: Scalars['Float'];
  seasonId: Scalars['Float'];
  teams: Array<TeamStats>;
};

export type MatchList = {
  __typename?: 'MatchList';
  endIndex: Scalars['Float'];
  matches: Array<MatchReference>;
  startIndex: Scalars['Float'];
  totalGames: Scalars['Float'];
};

export type MatchReference = {
  __typename?: 'MatchReference';
  champion: Scalars['Float'];
  gameId: Scalars['Float'];
  lane: Scalars['String'];
  platformId: Scalars['String'];
  queue: Scalars['Float'];
  role: Scalars['String'];
  season: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type Participant = {
  __typename?: 'Participant';
  championId: Scalars['Float'];
  highestAchievedSeasonTier: Scalars['String'];
  participantId: Scalars['Float'];
  spell1Id: Scalars['Float'];
  spell2Id: Scalars['Float'];
  stats: ParticipantStats;
  teamId: Scalars['Float'];
  timeline: ParticipantTimeline;
};

export type ParticipantIdentity = {
  __typename?: 'ParticipantIdentity';
  participantId: Scalars['Float'];
  player: Player;
};

export type ParticipantStats = {
  __typename?: 'ParticipantStats';
  altarsCaptured: Scalars['Float'];
  altarsNeutralized: Scalars['Float'];
  assists: Scalars['Float'];
  champLevel: Scalars['Float'];
  combatPlayerScore: Scalars['Float'];
  damageDealtToObjectives: Scalars['Float'];
  damageDealtToTurrets: Scalars['Float'];
  damageSelfMitigated: Scalars['Float'];
  deaths: Scalars['Float'];
  doubleKills: Scalars['Float'];
  firstBloodAssist: Scalars['Boolean'];
  firstBloodKill: Scalars['Boolean'];
  firstInhibitorAssist: Scalars['Boolean'];
  firstInhibitorKill: Scalars['Boolean'];
  firstTowerAssist: Scalars['Boolean'];
  firstTowerKill: Scalars['Boolean'];
  goldEarned: Scalars['Float'];
  goldSpent: Scalars['Float'];
  inhibitorKills: Scalars['Float'];
  item0: Scalars['Float'];
  item1: Scalars['Float'];
  item2: Scalars['Float'];
  item3: Scalars['Float'];
  item4: Scalars['Float'];
  item5: Scalars['Float'];
  item6: Scalars['Float'];
  killingSprees: Scalars['Float'];
  kills: Scalars['Float'];
  largestCriticalStrike: Scalars['Float'];
  largestKillingSpree: Scalars['Float'];
  largestMultiKill: Scalars['Float'];
  longestTimeSpentLiving: Scalars['Float'];
  magicalDamageTaken: Scalars['Float'];
  magicDamageDealt: Scalars['Float'];
  magicDamageDealtToChampions: Scalars['Float'];
  neutralMinionsKilled: Scalars['Float'];
  neutralMinionsKilledEnemyJungle: Scalars['Float'];
  neutralMinionsKilledTeamJungle: Scalars['Float'];
  nodeCapture: Scalars['Float'];
  nodeCaptureAssist: Scalars['Float'];
  nodeNeutralize: Scalars['Float'];
  nodeNeutralizeAssist: Scalars['Float'];
  objectivePlayerScore: Scalars['Float'];
  participantId: Scalars['Float'];
  pentaKills: Scalars['Float'];
  perk0: Scalars['Float'];
  perk1: Scalars['Float'];
  perk2: Scalars['Float'];
  perk3: Scalars['Float'];
  perk4: Scalars['Float'];
  perk5: Scalars['Float'];
  perkPrimaryStyle: Scalars['Float'];
  perkSubStyle: Scalars['Float'];
  physicalDamageDealt: Scalars['Float'];
  physicalDamageDealtToChampions: Scalars['Float'];
  physicalDamageTaken: Scalars['Float'];
  playerScore0: Scalars['Float'];
  playerScore1: Scalars['Float'];
  playerScore2: Scalars['Float'];
  playerScore3: Scalars['Float'];
  playerScore4: Scalars['Float'];
  playerScore5: Scalars['Float'];
  playerScore6: Scalars['Float'];
  playerScore7: Scalars['Float'];
  playerScore8: Scalars['Float'];
  playerScore9: Scalars['Float'];
  quadraKills: Scalars['Float'];
  sightWardsBoughtInGame: Scalars['Float'];
  teamObjective: Scalars['Float'];
  timeCCingOthers: Scalars['Float'];
  totalDamageDealt: Scalars['Float'];
  totalDamageDealtToChampions: Scalars['Float'];
  totalDamageTaken: Scalars['Float'];
  totalHeal: Scalars['Float'];
  totalMinionsKilled: Scalars['Float'];
  totalPlayerScore: Scalars['Float'];
  totalScoreRank: Scalars['Float'];
  totalTimeCrowdControlDealt: Scalars['Float'];
  totalUnitsHealed: Scalars['Float'];
  tripleKills: Scalars['Float'];
  trueDamageDealt: Scalars['Float'];
  trueDamageDealtToChampions: Scalars['Float'];
  trueDamageTaken: Scalars['Float'];
  turretKills: Scalars['Float'];
  unrealKills: Scalars['Float'];
  visionScore: Scalars['Float'];
  visionWardsBoughtInGame: Scalars['Float'];
  wardsKilled: Scalars['Float'];
  wardsPlaced: Scalars['Float'];
  win: Scalars['Boolean'];
};

export type ParticipantTimeline = {
  __typename?: 'ParticipantTimeline';
  creepsPerMin: TimelineDelta;
  csDiffPerMin: TimelineDelta;
  damageTakenDiffPerMin: TimelineDelta;
  damageTakenPerMin: TimelineDelta;
  goldPerMin: TimelineDelta;
  lane: Scalars['String'];
  participantId: Scalars['Float'];
  role: Scalars['String'];
  xpDiffPerMin: TimelineDelta;
  xpPerMin: TimelineDelta;
};

export type Player = {
  __typename?: 'Player';
  accountId: Scalars['String'];
  currentAccountId: Scalars['String'];
  currentPlatformId: Scalars['String'];
  matchHistoryUri: Scalars['String'];
  platformId: Scalars['String'];
  profileIcon: Scalars['Float'];
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  match: Match;
  matchList: MatchList;
  summoner: Summoner;
};


export type QueryMatchArgs = {
  gameId: Scalars['Float'];
  region: Scalars['String'];
};


export type QueryMatchListArgs = {
  accountId: Scalars['String'];
  region: Scalars['String'];
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

export type TeamBans = {
  __typename?: 'TeamBans';
  championId: Scalars['Float'];
};

export type TeamStats = {
  __typename?: 'TeamStats';
  bans: Array<TeamBans>;
  baronKills: Scalars['Float'];
  dragonKills: Scalars['Float'];
  firstBaron: Scalars['Boolean'];
  firstBlood: Scalars['Boolean'];
  firstDragon: Scalars['Boolean'];
  firstInhibitor: Scalars['Boolean'];
  firstRiftHerald: Scalars['Boolean'];
  firstTower: Scalars['Boolean'];
  inhibitorKills: Scalars['Float'];
  riftHeraldKills: Scalars['Float'];
  teamId: Scalars['Float'];
  towerKills: Scalars['Float'];
  win: Scalars['String'];
};

export type TimelineDelta = {
  __typename?: 'TimelineDelta';
  p0: Scalars['Float'];
  p1: Scalars['Float'];
  p2: Scalars['Float'];
  p3: Scalars['Float'];
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
  Match: ResolverTypeWrapper<Match>;
  MatchList: ResolverTypeWrapper<MatchList>;
  MatchReference: ResolverTypeWrapper<MatchReference>;
  Participant: ResolverTypeWrapper<Participant>;
  ParticipantIdentity: ResolverTypeWrapper<ParticipantIdentity>;
  ParticipantStats: ResolverTypeWrapper<ParticipantStats>;
  ParticipantTimeline: ResolverTypeWrapper<ParticipantTimeline>;
  Player: ResolverTypeWrapper<Player>;
  Query: ResolverTypeWrapper<{}>;
  Summoner: ResolverTypeWrapper<Summoner>;
  TeamBans: ResolverTypeWrapper<TeamBans>;
  TeamStats: ResolverTypeWrapper<TeamStats>;
  TimelineDelta: ResolverTypeWrapper<TimelineDelta>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  LeagueEntry: LeagueEntry;
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  Match: Match;
  MatchList: MatchList;
  MatchReference: MatchReference;
  Participant: Participant;
  ParticipantIdentity: ParticipantIdentity;
  ParticipantStats: ParticipantStats;
  ParticipantTimeline: ParticipantTimeline;
  Player: Player;
  Query: {};
  Summoner: Summoner;
  TeamBans: TeamBans;
  TeamStats: TeamStats;
  TimelineDelta: TimelineDelta;
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

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  gameCreation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mapId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  participantIdentities?: Resolver<Array<ResolversTypes['ParticipantIdentity']>, ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queueId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  seasonId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  teams?: Resolver<Array<ResolversTypes['TeamStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchList'] = ResolversParentTypes['MatchList']> = {
  endIndex?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['MatchReference']>, ParentType, ContextType>;
  startIndex?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReference'] = ResolversParentTypes['MatchReference']> = {
  champion?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  season?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  highestAchievedSeasonTier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell1Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spell2Id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stats?: Resolver<ResolversTypes['ParticipantStats'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timeline?: Resolver<ResolversTypes['ParticipantTimeline'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantIdentityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantIdentity'] = ResolversParentTypes['ParticipantIdentity']> = {
  participantId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  player?: Resolver<ResolversTypes['Player'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantStats'] = ResolversParentTypes['ParticipantStats']> = {
  altarsCaptured?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  altarsNeutralized?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  assists?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  champLevel?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  combatPlayerScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  damageDealtToObjectives?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  damageDealtToTurrets?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  damageSelfMitigated?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  doubleKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  firstBloodAssist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstBloodKill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstInhibitorAssist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstInhibitorKill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTowerAssist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTowerKill?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  goldEarned?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  goldSpent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  inhibitorKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item0?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item1?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item2?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item5?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item6?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  killingSprees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  largestCriticalStrike?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  largestKillingSpree?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  largestMultiKill?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longestTimeSpentLiving?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  magicalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  magicDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  magicDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  neutralMinionsKilled?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  neutralMinionsKilledEnemyJungle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  neutralMinionsKilledTeamJungle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeCapture?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeCaptureAssist?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeNeutralize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeNeutralizeAssist?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  objectivePlayerScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pentaKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk0?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk1?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk2?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perk5?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perkPrimaryStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  perkSubStyle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  physicalDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  physicalDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  physicalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore0?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore1?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore2?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore5?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore6?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore7?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore8?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  playerScore9?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quadraKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sightWardsBoughtInGame?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  teamObjective?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  timeCCingOthers?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalHeal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalMinionsKilled?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalPlayerScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalScoreRank?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalTimeCrowdControlDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalUnitsHealed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tripleKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trueDamageDealt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trueDamageDealtToChampions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trueDamageTaken?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  turretKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unrealKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  visionScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  visionWardsBoughtInGame?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  wardsKilled?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  wardsPlaced?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantTimelineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantTimeline'] = ResolversParentTypes['ParticipantTimeline']> = {
  creepsPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  csDiffPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  damageTakenDiffPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  damageTakenPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  goldPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participantId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  xpDiffPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  xpPerMin?: Resolver<ResolversTypes['TimelineDelta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentPlatformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchHistoryUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIcon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  summonerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  match?: Resolver<ResolversTypes['Match'], ParentType, ContextType, RequireFields<QueryMatchArgs, 'gameId' | 'region'>>;
  matchList?: Resolver<ResolversTypes['MatchList'], ParentType, ContextType, RequireFields<QueryMatchListArgs, 'accountId' | 'region'>>;
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

export type TeamBansResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamBans'] = ResolversParentTypes['TeamBans']> = {
  championId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamStats'] = ResolversParentTypes['TeamStats']> = {
  bans?: Resolver<Array<ResolversTypes['TeamBans']>, ParentType, ContextType>;
  baronKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dragonKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  firstBaron?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstBlood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstDragon?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstInhibitor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstRiftHerald?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstTower?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  inhibitorKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  riftHeraldKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerKills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimelineDeltaResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimelineDelta'] = ResolversParentTypes['TimelineDelta']> = {
  p0?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  p1?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  p2?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  p3?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  LeagueEntry?: LeagueEntryResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  MatchList?: MatchListResolvers<ContextType>;
  MatchReference?: MatchReferenceResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  ParticipantIdentity?: ParticipantIdentityResolvers<ContextType>;
  ParticipantStats?: ParticipantStatsResolvers<ContextType>;
  ParticipantTimeline?: ParticipantTimelineResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Summoner?: SummonerResolvers<ContextType>;
  TeamBans?: TeamBansResolvers<ContextType>;
  TeamStats?: TeamStatsResolvers<ContextType>;
  TimelineDelta?: TimelineDeltaResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
