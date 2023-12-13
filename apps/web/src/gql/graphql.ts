/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  allTeam: Maybe<AllTeamAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  file: Maybe<FileAccess>;
  homeVideo: Maybe<HomeVideoAccess>;
  media: Maybe<MediaAccess>;
  members: Maybe<MembersAccess>;
  news: Maybe<NewsAccess>;
  payload_preferences: Maybe<Payload_PreferencesAccess>;
  texture: Maybe<TextureAccess>;
  users: Maybe<UsersAccess>;
};

export type AllTeam = {
  __typename?: 'AllTeam';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Maybe<Scalars['String']['output']>;
  photo: Media;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type AllTeamPhotoArgs = {
  where: InputMaybe<AllTeam_Photo_Where>;
};

export type AllTeamCreateAccess = {
  __typename?: 'AllTeamCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamCreateDocAccess = {
  __typename?: 'AllTeamCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamDeleteAccess = {
  __typename?: 'AllTeamDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamDeleteDocAccess = {
  __typename?: 'AllTeamDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamDocAccessFields = {
  __typename?: 'AllTeamDocAccessFields';
  createdAt: Maybe<AllTeamDocAccessFields_CreatedAt>;
  description: Maybe<AllTeamDocAccessFields_Description>;
  photo: Maybe<AllTeamDocAccessFields_Photo>;
  updatedAt: Maybe<AllTeamDocAccessFields_UpdatedAt>;
};

export type AllTeamDocAccessFields_CreatedAt = {
  __typename?: 'AllTeamDocAccessFields_createdAt';
  create: Maybe<AllTeamDocAccessFields_CreatedAt_Create>;
  delete: Maybe<AllTeamDocAccessFields_CreatedAt_Delete>;
  read: Maybe<AllTeamDocAccessFields_CreatedAt_Read>;
  update: Maybe<AllTeamDocAccessFields_CreatedAt_Update>;
};

export type AllTeamDocAccessFields_CreatedAt_Create = {
  __typename?: 'AllTeamDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AllTeamDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_CreatedAt_Read = {
  __typename?: 'AllTeamDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_CreatedAt_Update = {
  __typename?: 'AllTeamDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Description = {
  __typename?: 'AllTeamDocAccessFields_description';
  create: Maybe<AllTeamDocAccessFields_Description_Create>;
  delete: Maybe<AllTeamDocAccessFields_Description_Delete>;
  read: Maybe<AllTeamDocAccessFields_Description_Read>;
  update: Maybe<AllTeamDocAccessFields_Description_Update>;
};

export type AllTeamDocAccessFields_Description_Create = {
  __typename?: 'AllTeamDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Description_Delete = {
  __typename?: 'AllTeamDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Description_Read = {
  __typename?: 'AllTeamDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Description_Update = {
  __typename?: 'AllTeamDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Photo = {
  __typename?: 'AllTeamDocAccessFields_photo';
  create: Maybe<AllTeamDocAccessFields_Photo_Create>;
  delete: Maybe<AllTeamDocAccessFields_Photo_Delete>;
  read: Maybe<AllTeamDocAccessFields_Photo_Read>;
  update: Maybe<AllTeamDocAccessFields_Photo_Update>;
};

export type AllTeamDocAccessFields_Photo_Create = {
  __typename?: 'AllTeamDocAccessFields_photo_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Photo_Delete = {
  __typename?: 'AllTeamDocAccessFields_photo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Photo_Read = {
  __typename?: 'AllTeamDocAccessFields_photo_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_Photo_Update = {
  __typename?: 'AllTeamDocAccessFields_photo_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_UpdatedAt = {
  __typename?: 'AllTeamDocAccessFields_updatedAt';
  create: Maybe<AllTeamDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<AllTeamDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<AllTeamDocAccessFields_UpdatedAt_Read>;
  update: Maybe<AllTeamDocAccessFields_UpdatedAt_Update>;
};

export type AllTeamDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AllTeamDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AllTeamDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AllTeamDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AllTeamDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields = {
  __typename?: 'AllTeamFields';
  createdAt: Maybe<AllTeamFields_CreatedAt>;
  description: Maybe<AllTeamFields_Description>;
  photo: Maybe<AllTeamFields_Photo>;
  updatedAt: Maybe<AllTeamFields_UpdatedAt>;
};

export type AllTeamFields_CreatedAt = {
  __typename?: 'AllTeamFields_createdAt';
  create: Maybe<AllTeamFields_CreatedAt_Create>;
  delete: Maybe<AllTeamFields_CreatedAt_Delete>;
  read: Maybe<AllTeamFields_CreatedAt_Read>;
  update: Maybe<AllTeamFields_CreatedAt_Update>;
};

export type AllTeamFields_CreatedAt_Create = {
  __typename?: 'AllTeamFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_CreatedAt_Delete = {
  __typename?: 'AllTeamFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_CreatedAt_Read = {
  __typename?: 'AllTeamFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_CreatedAt_Update = {
  __typename?: 'AllTeamFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Description = {
  __typename?: 'AllTeamFields_description';
  create: Maybe<AllTeamFields_Description_Create>;
  delete: Maybe<AllTeamFields_Description_Delete>;
  read: Maybe<AllTeamFields_Description_Read>;
  update: Maybe<AllTeamFields_Description_Update>;
};

export type AllTeamFields_Description_Create = {
  __typename?: 'AllTeamFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Description_Delete = {
  __typename?: 'AllTeamFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Description_Read = {
  __typename?: 'AllTeamFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Description_Update = {
  __typename?: 'AllTeamFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Photo = {
  __typename?: 'AllTeamFields_photo';
  create: Maybe<AllTeamFields_Photo_Create>;
  delete: Maybe<AllTeamFields_Photo_Delete>;
  read: Maybe<AllTeamFields_Photo_Read>;
  update: Maybe<AllTeamFields_Photo_Update>;
};

export type AllTeamFields_Photo_Create = {
  __typename?: 'AllTeamFields_photo_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Photo_Delete = {
  __typename?: 'AllTeamFields_photo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Photo_Read = {
  __typename?: 'AllTeamFields_photo_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_Photo_Update = {
  __typename?: 'AllTeamFields_photo_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_UpdatedAt = {
  __typename?: 'AllTeamFields_updatedAt';
  create: Maybe<AllTeamFields_UpdatedAt_Create>;
  delete: Maybe<AllTeamFields_UpdatedAt_Delete>;
  read: Maybe<AllTeamFields_UpdatedAt_Read>;
  update: Maybe<AllTeamFields_UpdatedAt_Update>;
};

export type AllTeamFields_UpdatedAt_Create = {
  __typename?: 'AllTeamFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_UpdatedAt_Delete = {
  __typename?: 'AllTeamFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_UpdatedAt_Read = {
  __typename?: 'AllTeamFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamFields_UpdatedAt_Update = {
  __typename?: 'AllTeamFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AllTeamReadAccess = {
  __typename?: 'AllTeamReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamReadDocAccess = {
  __typename?: 'AllTeamReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamUpdateAccess = {
  __typename?: 'AllTeamUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeamUpdateDocAccess = {
  __typename?: 'AllTeamUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllTeam_Photo_Alt_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllTeam_Photo_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_Photo_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_Photo_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Sizes__Thumbnail__Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Sizes__Thumbnail__Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_Photo_Sizes__Thumbnail__Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_Photo_Sizes__Thumbnail__MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Sizes__Thumbnail__Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Sizes__Thumbnail__Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_Photo_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllTeam_Photo_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Where = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_Or>>>;
  alt: InputMaybe<AllTeam_Photo_Alt_Operator>;
  createdAt: InputMaybe<AllTeam_Photo_CreatedAt_Operator>;
  filename: InputMaybe<AllTeam_Photo_Filename_Operator>;
  filesize: InputMaybe<AllTeam_Photo_Filesize_Operator>;
  height: InputMaybe<AllTeam_Photo_Height_Operator>;
  id: InputMaybe<AllTeam_Photo_Id_Operator>;
  mimeType: InputMaybe<AllTeam_Photo_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<AllTeam_Photo_UpdatedAt_Operator>;
  url: InputMaybe<AllTeam_Photo_Url_Operator>;
  width: InputMaybe<AllTeam_Photo_Width_Operator>;
};

export type AllTeam_Photo_Where_And = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_Or>>>;
  alt: InputMaybe<AllTeam_Photo_Alt_Operator>;
  createdAt: InputMaybe<AllTeam_Photo_CreatedAt_Operator>;
  filename: InputMaybe<AllTeam_Photo_Filename_Operator>;
  filesize: InputMaybe<AllTeam_Photo_Filesize_Operator>;
  height: InputMaybe<AllTeam_Photo_Height_Operator>;
  id: InputMaybe<AllTeam_Photo_Id_Operator>;
  mimeType: InputMaybe<AllTeam_Photo_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<AllTeam_Photo_UpdatedAt_Operator>;
  url: InputMaybe<AllTeam_Photo_Url_Operator>;
  width: InputMaybe<AllTeam_Photo_Width_Operator>;
};

export type AllTeam_Photo_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Photo_Where_Or>>>;
  alt: InputMaybe<AllTeam_Photo_Alt_Operator>;
  createdAt: InputMaybe<AllTeam_Photo_CreatedAt_Operator>;
  filename: InputMaybe<AllTeam_Photo_Filename_Operator>;
  filesize: InputMaybe<AllTeam_Photo_Filesize_Operator>;
  height: InputMaybe<AllTeam_Photo_Height_Operator>;
  id: InputMaybe<AllTeam_Photo_Id_Operator>;
  mimeType: InputMaybe<AllTeam_Photo_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<AllTeam_Photo_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<AllTeam_Photo_UpdatedAt_Operator>;
  url: InputMaybe<AllTeam_Photo_Url_Operator>;
  width: InputMaybe<AllTeam_Photo_Width_Operator>;
};

export type AllTeam_Photo_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type AllTeam_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllTeam_Description_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AllTeam_Photo_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type AllTeam_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type AllTeam_Where = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Where_Or>>>;
  createdAt: InputMaybe<AllTeam_CreatedAt_Operator>;
  description: InputMaybe<AllTeam_Description_Operator>;
  id: InputMaybe<AllTeam_Id_Operator>;
  photo: InputMaybe<AllTeam_Photo_Operator>;
  updatedAt: InputMaybe<AllTeam_UpdatedAt_Operator>;
};

export type AllTeam_Where_And = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Where_Or>>>;
  createdAt: InputMaybe<AllTeam_CreatedAt_Operator>;
  description: InputMaybe<AllTeam_Description_Operator>;
  id: InputMaybe<AllTeam_Id_Operator>;
  photo: InputMaybe<AllTeam_Photo_Operator>;
  updatedAt: InputMaybe<AllTeam_UpdatedAt_Operator>;
};

export type AllTeam_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<AllTeam_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<AllTeam_Where_Or>>>;
  createdAt: InputMaybe<AllTeam_CreatedAt_Operator>;
  description: InputMaybe<AllTeam_Description_Operator>;
  id: InputMaybe<AllTeam_Id_Operator>;
  photo: InputMaybe<AllTeam_Photo_Operator>;
  updatedAt: InputMaybe<AllTeam_UpdatedAt_Operator>;
};

export type AllTeams = {
  __typename?: 'AllTeams';
  docs: Maybe<Array<Maybe<AllTeam>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type File = {
  __typename?: 'File';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  filesize: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type FileCreateAccess = {
  __typename?: 'FileCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileCreateDocAccess = {
  __typename?: 'FileCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileDeleteAccess = {
  __typename?: 'FileDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileDeleteDocAccess = {
  __typename?: 'FileDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileDocAccessFields = {
  __typename?: 'FileDocAccessFields';
  createdAt: Maybe<FileDocAccessFields_CreatedAt>;
  filename: Maybe<FileDocAccessFields_Filename>;
  filesize: Maybe<FileDocAccessFields_Filesize>;
  height: Maybe<FileDocAccessFields_Height>;
  mimeType: Maybe<FileDocAccessFields_MimeType>;
  updatedAt: Maybe<FileDocAccessFields_UpdatedAt>;
  url: Maybe<FileDocAccessFields_Url>;
  width: Maybe<FileDocAccessFields_Width>;
};

export type FileDocAccessFields_CreatedAt = {
  __typename?: 'FileDocAccessFields_createdAt';
  create: Maybe<FileDocAccessFields_CreatedAt_Create>;
  delete: Maybe<FileDocAccessFields_CreatedAt_Delete>;
  read: Maybe<FileDocAccessFields_CreatedAt_Read>;
  update: Maybe<FileDocAccessFields_CreatedAt_Update>;
};

export type FileDocAccessFields_CreatedAt_Create = {
  __typename?: 'FileDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FileDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_CreatedAt_Read = {
  __typename?: 'FileDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_CreatedAt_Update = {
  __typename?: 'FileDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filename = {
  __typename?: 'FileDocAccessFields_filename';
  create: Maybe<FileDocAccessFields_Filename_Create>;
  delete: Maybe<FileDocAccessFields_Filename_Delete>;
  read: Maybe<FileDocAccessFields_Filename_Read>;
  update: Maybe<FileDocAccessFields_Filename_Update>;
};

export type FileDocAccessFields_Filename_Create = {
  __typename?: 'FileDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filename_Delete = {
  __typename?: 'FileDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filename_Read = {
  __typename?: 'FileDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filename_Update = {
  __typename?: 'FileDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filesize = {
  __typename?: 'FileDocAccessFields_filesize';
  create: Maybe<FileDocAccessFields_Filesize_Create>;
  delete: Maybe<FileDocAccessFields_Filesize_Delete>;
  read: Maybe<FileDocAccessFields_Filesize_Read>;
  update: Maybe<FileDocAccessFields_Filesize_Update>;
};

export type FileDocAccessFields_Filesize_Create = {
  __typename?: 'FileDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filesize_Delete = {
  __typename?: 'FileDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filesize_Read = {
  __typename?: 'FileDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Filesize_Update = {
  __typename?: 'FileDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Height = {
  __typename?: 'FileDocAccessFields_height';
  create: Maybe<FileDocAccessFields_Height_Create>;
  delete: Maybe<FileDocAccessFields_Height_Delete>;
  read: Maybe<FileDocAccessFields_Height_Read>;
  update: Maybe<FileDocAccessFields_Height_Update>;
};

export type FileDocAccessFields_Height_Create = {
  __typename?: 'FileDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Height_Delete = {
  __typename?: 'FileDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Height_Read = {
  __typename?: 'FileDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Height_Update = {
  __typename?: 'FileDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_MimeType = {
  __typename?: 'FileDocAccessFields_mimeType';
  create: Maybe<FileDocAccessFields_MimeType_Create>;
  delete: Maybe<FileDocAccessFields_MimeType_Delete>;
  read: Maybe<FileDocAccessFields_MimeType_Read>;
  update: Maybe<FileDocAccessFields_MimeType_Update>;
};

export type FileDocAccessFields_MimeType_Create = {
  __typename?: 'FileDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_MimeType_Delete = {
  __typename?: 'FileDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_MimeType_Read = {
  __typename?: 'FileDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_MimeType_Update = {
  __typename?: 'FileDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_UpdatedAt = {
  __typename?: 'FileDocAccessFields_updatedAt';
  create: Maybe<FileDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<FileDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<FileDocAccessFields_UpdatedAt_Read>;
  update: Maybe<FileDocAccessFields_UpdatedAt_Update>;
};

export type FileDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FileDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FileDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FileDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FileDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Url = {
  __typename?: 'FileDocAccessFields_url';
  create: Maybe<FileDocAccessFields_Url_Create>;
  delete: Maybe<FileDocAccessFields_Url_Delete>;
  read: Maybe<FileDocAccessFields_Url_Read>;
  update: Maybe<FileDocAccessFields_Url_Update>;
};

export type FileDocAccessFields_Url_Create = {
  __typename?: 'FileDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Url_Delete = {
  __typename?: 'FileDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Url_Read = {
  __typename?: 'FileDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Url_Update = {
  __typename?: 'FileDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Width = {
  __typename?: 'FileDocAccessFields_width';
  create: Maybe<FileDocAccessFields_Width_Create>;
  delete: Maybe<FileDocAccessFields_Width_Delete>;
  read: Maybe<FileDocAccessFields_Width_Read>;
  update: Maybe<FileDocAccessFields_Width_Update>;
};

export type FileDocAccessFields_Width_Create = {
  __typename?: 'FileDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Width_Delete = {
  __typename?: 'FileDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Width_Read = {
  __typename?: 'FileDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileDocAccessFields_Width_Update = {
  __typename?: 'FileDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields = {
  __typename?: 'FileFields';
  createdAt: Maybe<FileFields_CreatedAt>;
  filename: Maybe<FileFields_Filename>;
  filesize: Maybe<FileFields_Filesize>;
  height: Maybe<FileFields_Height>;
  mimeType: Maybe<FileFields_MimeType>;
  updatedAt: Maybe<FileFields_UpdatedAt>;
  url: Maybe<FileFields_Url>;
  width: Maybe<FileFields_Width>;
};

export type FileFields_CreatedAt = {
  __typename?: 'FileFields_createdAt';
  create: Maybe<FileFields_CreatedAt_Create>;
  delete: Maybe<FileFields_CreatedAt_Delete>;
  read: Maybe<FileFields_CreatedAt_Read>;
  update: Maybe<FileFields_CreatedAt_Update>;
};

export type FileFields_CreatedAt_Create = {
  __typename?: 'FileFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_CreatedAt_Delete = {
  __typename?: 'FileFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_CreatedAt_Read = {
  __typename?: 'FileFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_CreatedAt_Update = {
  __typename?: 'FileFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filename = {
  __typename?: 'FileFields_filename';
  create: Maybe<FileFields_Filename_Create>;
  delete: Maybe<FileFields_Filename_Delete>;
  read: Maybe<FileFields_Filename_Read>;
  update: Maybe<FileFields_Filename_Update>;
};

export type FileFields_Filename_Create = {
  __typename?: 'FileFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filename_Delete = {
  __typename?: 'FileFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filename_Read = {
  __typename?: 'FileFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filename_Update = {
  __typename?: 'FileFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filesize = {
  __typename?: 'FileFields_filesize';
  create: Maybe<FileFields_Filesize_Create>;
  delete: Maybe<FileFields_Filesize_Delete>;
  read: Maybe<FileFields_Filesize_Read>;
  update: Maybe<FileFields_Filesize_Update>;
};

export type FileFields_Filesize_Create = {
  __typename?: 'FileFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filesize_Delete = {
  __typename?: 'FileFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filesize_Read = {
  __typename?: 'FileFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Filesize_Update = {
  __typename?: 'FileFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Height = {
  __typename?: 'FileFields_height';
  create: Maybe<FileFields_Height_Create>;
  delete: Maybe<FileFields_Height_Delete>;
  read: Maybe<FileFields_Height_Read>;
  update: Maybe<FileFields_Height_Update>;
};

export type FileFields_Height_Create = {
  __typename?: 'FileFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Height_Delete = {
  __typename?: 'FileFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Height_Read = {
  __typename?: 'FileFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Height_Update = {
  __typename?: 'FileFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_MimeType = {
  __typename?: 'FileFields_mimeType';
  create: Maybe<FileFields_MimeType_Create>;
  delete: Maybe<FileFields_MimeType_Delete>;
  read: Maybe<FileFields_MimeType_Read>;
  update: Maybe<FileFields_MimeType_Update>;
};

export type FileFields_MimeType_Create = {
  __typename?: 'FileFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_MimeType_Delete = {
  __typename?: 'FileFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_MimeType_Read = {
  __typename?: 'FileFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_MimeType_Update = {
  __typename?: 'FileFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_UpdatedAt = {
  __typename?: 'FileFields_updatedAt';
  create: Maybe<FileFields_UpdatedAt_Create>;
  delete: Maybe<FileFields_UpdatedAt_Delete>;
  read: Maybe<FileFields_UpdatedAt_Read>;
  update: Maybe<FileFields_UpdatedAt_Update>;
};

export type FileFields_UpdatedAt_Create = {
  __typename?: 'FileFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_UpdatedAt_Delete = {
  __typename?: 'FileFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_UpdatedAt_Read = {
  __typename?: 'FileFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_UpdatedAt_Update = {
  __typename?: 'FileFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Url = {
  __typename?: 'FileFields_url';
  create: Maybe<FileFields_Url_Create>;
  delete: Maybe<FileFields_Url_Delete>;
  read: Maybe<FileFields_Url_Read>;
  update: Maybe<FileFields_Url_Update>;
};

export type FileFields_Url_Create = {
  __typename?: 'FileFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Url_Delete = {
  __typename?: 'FileFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Url_Read = {
  __typename?: 'FileFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Url_Update = {
  __typename?: 'FileFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Width = {
  __typename?: 'FileFields_width';
  create: Maybe<FileFields_Width_Create>;
  delete: Maybe<FileFields_Width_Delete>;
  read: Maybe<FileFields_Width_Read>;
  update: Maybe<FileFields_Width_Update>;
};

export type FileFields_Width_Create = {
  __typename?: 'FileFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Width_Delete = {
  __typename?: 'FileFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Width_Read = {
  __typename?: 'FileFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type FileFields_Width_Update = {
  __typename?: 'FileFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type FileReadAccess = {
  __typename?: 'FileReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileReadDocAccess = {
  __typename?: 'FileReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileUpdateAccess = {
  __typename?: 'FileUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type FileUpdateDocAccess = {
  __typename?: 'FileUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type File_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type File_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type File_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type File_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type File_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type File_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type File_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type File_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type File_Where = {
  AND: InputMaybe<Array<InputMaybe<File_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<File_Where_Or>>>;
  createdAt: InputMaybe<File_CreatedAt_Operator>;
  filename: InputMaybe<File_Filename_Operator>;
  filesize: InputMaybe<File_Filesize_Operator>;
  height: InputMaybe<File_Height_Operator>;
  id: InputMaybe<File_Id_Operator>;
  mimeType: InputMaybe<File_MimeType_Operator>;
  updatedAt: InputMaybe<File_UpdatedAt_Operator>;
  url: InputMaybe<File_Url_Operator>;
  width: InputMaybe<File_Width_Operator>;
};

export type File_Where_And = {
  AND: InputMaybe<Array<InputMaybe<File_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<File_Where_Or>>>;
  createdAt: InputMaybe<File_CreatedAt_Operator>;
  filename: InputMaybe<File_Filename_Operator>;
  filesize: InputMaybe<File_Filesize_Operator>;
  height: InputMaybe<File_Height_Operator>;
  id: InputMaybe<File_Id_Operator>;
  mimeType: InputMaybe<File_MimeType_Operator>;
  updatedAt: InputMaybe<File_UpdatedAt_Operator>;
  url: InputMaybe<File_Url_Operator>;
  width: InputMaybe<File_Width_Operator>;
};

export type File_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<File_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<File_Where_Or>>>;
  createdAt: InputMaybe<File_CreatedAt_Operator>;
  filename: InputMaybe<File_Filename_Operator>;
  filesize: InputMaybe<File_Filesize_Operator>;
  height: InputMaybe<File_Height_Operator>;
  id: InputMaybe<File_Id_Operator>;
  mimeType: InputMaybe<File_MimeType_Operator>;
  updatedAt: InputMaybe<File_UpdatedAt_Operator>;
  url: InputMaybe<File_Url_Operator>;
  width: InputMaybe<File_Width_Operator>;
};

export type File_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Files = {
  __typename?: 'Files';
  docs: Maybe<Array<Maybe<File>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type HomeVideo = {
  __typename?: 'HomeVideo';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  video: File;
};


export type HomeVideoVideoArgs = {
  where: InputMaybe<HomeVideo_Video_Where>;
};

export type HomeVideoCreateAccess = {
  __typename?: 'HomeVideoCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoCreateDocAccess = {
  __typename?: 'HomeVideoCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoDeleteAccess = {
  __typename?: 'HomeVideoDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoDeleteDocAccess = {
  __typename?: 'HomeVideoDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoDocAccessFields = {
  __typename?: 'HomeVideoDocAccessFields';
  createdAt: Maybe<HomeVideoDocAccessFields_CreatedAt>;
  updatedAt: Maybe<HomeVideoDocAccessFields_UpdatedAt>;
  video: Maybe<HomeVideoDocAccessFields_Video>;
};

export type HomeVideoDocAccessFields_CreatedAt = {
  __typename?: 'HomeVideoDocAccessFields_createdAt';
  create: Maybe<HomeVideoDocAccessFields_CreatedAt_Create>;
  delete: Maybe<HomeVideoDocAccessFields_CreatedAt_Delete>;
  read: Maybe<HomeVideoDocAccessFields_CreatedAt_Read>;
  update: Maybe<HomeVideoDocAccessFields_CreatedAt_Update>;
};

export type HomeVideoDocAccessFields_CreatedAt_Create = {
  __typename?: 'HomeVideoDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HomeVideoDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_CreatedAt_Read = {
  __typename?: 'HomeVideoDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_CreatedAt_Update = {
  __typename?: 'HomeVideoDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_UpdatedAt = {
  __typename?: 'HomeVideoDocAccessFields_updatedAt';
  create: Maybe<HomeVideoDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<HomeVideoDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<HomeVideoDocAccessFields_UpdatedAt_Read>;
  update: Maybe<HomeVideoDocAccessFields_UpdatedAt_Update>;
};

export type HomeVideoDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HomeVideoDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HomeVideoDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HomeVideoDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HomeVideoDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_Video = {
  __typename?: 'HomeVideoDocAccessFields_video';
  create: Maybe<HomeVideoDocAccessFields_Video_Create>;
  delete: Maybe<HomeVideoDocAccessFields_Video_Delete>;
  read: Maybe<HomeVideoDocAccessFields_Video_Read>;
  update: Maybe<HomeVideoDocAccessFields_Video_Update>;
};

export type HomeVideoDocAccessFields_Video_Create = {
  __typename?: 'HomeVideoDocAccessFields_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_Video_Delete = {
  __typename?: 'HomeVideoDocAccessFields_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_Video_Read = {
  __typename?: 'HomeVideoDocAccessFields_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoDocAccessFields_Video_Update = {
  __typename?: 'HomeVideoDocAccessFields_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields = {
  __typename?: 'HomeVideoFields';
  createdAt: Maybe<HomeVideoFields_CreatedAt>;
  updatedAt: Maybe<HomeVideoFields_UpdatedAt>;
  video: Maybe<HomeVideoFields_Video>;
};

export type HomeVideoFields_CreatedAt = {
  __typename?: 'HomeVideoFields_createdAt';
  create: Maybe<HomeVideoFields_CreatedAt_Create>;
  delete: Maybe<HomeVideoFields_CreatedAt_Delete>;
  read: Maybe<HomeVideoFields_CreatedAt_Read>;
  update: Maybe<HomeVideoFields_CreatedAt_Update>;
};

export type HomeVideoFields_CreatedAt_Create = {
  __typename?: 'HomeVideoFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_CreatedAt_Delete = {
  __typename?: 'HomeVideoFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_CreatedAt_Read = {
  __typename?: 'HomeVideoFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_CreatedAt_Update = {
  __typename?: 'HomeVideoFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_UpdatedAt = {
  __typename?: 'HomeVideoFields_updatedAt';
  create: Maybe<HomeVideoFields_UpdatedAt_Create>;
  delete: Maybe<HomeVideoFields_UpdatedAt_Delete>;
  read: Maybe<HomeVideoFields_UpdatedAt_Read>;
  update: Maybe<HomeVideoFields_UpdatedAt_Update>;
};

export type HomeVideoFields_UpdatedAt_Create = {
  __typename?: 'HomeVideoFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_UpdatedAt_Delete = {
  __typename?: 'HomeVideoFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_UpdatedAt_Read = {
  __typename?: 'HomeVideoFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_UpdatedAt_Update = {
  __typename?: 'HomeVideoFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_Video = {
  __typename?: 'HomeVideoFields_video';
  create: Maybe<HomeVideoFields_Video_Create>;
  delete: Maybe<HomeVideoFields_Video_Delete>;
  read: Maybe<HomeVideoFields_Video_Read>;
  update: Maybe<HomeVideoFields_Video_Update>;
};

export type HomeVideoFields_Video_Create = {
  __typename?: 'HomeVideoFields_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_Video_Delete = {
  __typename?: 'HomeVideoFields_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_Video_Read = {
  __typename?: 'HomeVideoFields_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoFields_Video_Update = {
  __typename?: 'HomeVideoFields_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeVideoReadAccess = {
  __typename?: 'HomeVideoReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoReadDocAccess = {
  __typename?: 'HomeVideoReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoUpdateAccess = {
  __typename?: 'HomeVideoUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideoUpdateDocAccess = {
  __typename?: 'HomeVideoUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeVideo_Video_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeVideo_Video_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeVideo_Video_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type HomeVideo_Video_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type HomeVideo_Video_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeVideo_Video_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeVideo_Video_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeVideo_Video_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeVideo_Video_Where = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_Video_CreatedAt_Operator>;
  filename: InputMaybe<HomeVideo_Video_Filename_Operator>;
  filesize: InputMaybe<HomeVideo_Video_Filesize_Operator>;
  height: InputMaybe<HomeVideo_Video_Height_Operator>;
  id: InputMaybe<HomeVideo_Video_Id_Operator>;
  mimeType: InputMaybe<HomeVideo_Video_MimeType_Operator>;
  updatedAt: InputMaybe<HomeVideo_Video_UpdatedAt_Operator>;
  url: InputMaybe<HomeVideo_Video_Url_Operator>;
  width: InputMaybe<HomeVideo_Video_Width_Operator>;
};

export type HomeVideo_Video_Where_And = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_Video_CreatedAt_Operator>;
  filename: InputMaybe<HomeVideo_Video_Filename_Operator>;
  filesize: InputMaybe<HomeVideo_Video_Filesize_Operator>;
  height: InputMaybe<HomeVideo_Video_Height_Operator>;
  id: InputMaybe<HomeVideo_Video_Id_Operator>;
  mimeType: InputMaybe<HomeVideo_Video_MimeType_Operator>;
  updatedAt: InputMaybe<HomeVideo_Video_UpdatedAt_Operator>;
  url: InputMaybe<HomeVideo_Video_Url_Operator>;
  width: InputMaybe<HomeVideo_Video_Width_Operator>;
};

export type HomeVideo_Video_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Video_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_Video_CreatedAt_Operator>;
  filename: InputMaybe<HomeVideo_Video_Filename_Operator>;
  filesize: InputMaybe<HomeVideo_Video_Filesize_Operator>;
  height: InputMaybe<HomeVideo_Video_Height_Operator>;
  id: InputMaybe<HomeVideo_Video_Id_Operator>;
  mimeType: InputMaybe<HomeVideo_Video_MimeType_Operator>;
  updatedAt: InputMaybe<HomeVideo_Video_UpdatedAt_Operator>;
  url: InputMaybe<HomeVideo_Video_Url_Operator>;
  width: InputMaybe<HomeVideo_Video_Width_Operator>;
};

export type HomeVideo_Video_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type HomeVideo_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeVideo_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeVideo_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeVideo_Video_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type HomeVideo_Where = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_CreatedAt_Operator>;
  id: InputMaybe<HomeVideo_Id_Operator>;
  updatedAt: InputMaybe<HomeVideo_UpdatedAt_Operator>;
  video: InputMaybe<HomeVideo_Video_Operator>;
};

export type HomeVideo_Where_And = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_CreatedAt_Operator>;
  id: InputMaybe<HomeVideo_Id_Operator>;
  updatedAt: InputMaybe<HomeVideo_UpdatedAt_Operator>;
  video: InputMaybe<HomeVideo_Video_Operator>;
};

export type HomeVideo_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<HomeVideo_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<HomeVideo_Where_Or>>>;
  createdAt: InputMaybe<HomeVideo_CreatedAt_Operator>;
  id: InputMaybe<HomeVideo_Id_Operator>;
  updatedAt: InputMaybe<HomeVideo_UpdatedAt_Operator>;
  video: InputMaybe<HomeVideo_Video_Operator>;
};

export type HomeVideos = {
  __typename?: 'HomeVideos';
  docs: Maybe<Array<Maybe<HomeVideo>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  filesize: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  sizes: Maybe<Media_Sizes>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt: Maybe<MediaDocAccessFields_Alt>;
  createdAt: Maybe<MediaDocAccessFields_CreatedAt>;
  filename: Maybe<MediaDocAccessFields_Filename>;
  filesize: Maybe<MediaDocAccessFields_Filesize>;
  height: Maybe<MediaDocAccessFields_Height>;
  mimeType: Maybe<MediaDocAccessFields_MimeType>;
  sizes: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt: Maybe<MediaDocAccessFields_UpdatedAt>;
  url: Maybe<MediaDocAccessFields_Url>;
  width: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create: Maybe<MediaDocAccessFields_Alt_Create>;
  delete: Maybe<MediaDocAccessFields_Alt_Delete>;
  read: Maybe<MediaDocAccessFields_Alt_Read>;
  update: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create: Maybe<MediaDocAccessFields_Filename_Create>;
  delete: Maybe<MediaDocAccessFields_Filename_Delete>;
  read: Maybe<MediaDocAccessFields_Filename_Read>;
  update: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read: Maybe<MediaDocAccessFields_Filesize_Read>;
  update: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create: Maybe<MediaDocAccessFields_Height_Create>;
  delete: Maybe<MediaDocAccessFields_Height_Delete>;
  read: Maybe<MediaDocAccessFields_Height_Read>;
  update: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read: Maybe<MediaDocAccessFields_MimeType_Read>;
  update: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read: Maybe<MediaDocAccessFields_Sizes_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  thumbnail: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create: Maybe<MediaDocAccessFields_Url_Create>;
  delete: Maybe<MediaDocAccessFields_Url_Delete>;
  read: Maybe<MediaDocAccessFields_Url_Read>;
  update: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create: Maybe<MediaDocAccessFields_Width_Create>;
  delete: Maybe<MediaDocAccessFields_Width_Delete>;
  read: Maybe<MediaDocAccessFields_Width_Read>;
  update: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt: Maybe<MediaFields_Alt>;
  createdAt: Maybe<MediaFields_CreatedAt>;
  filename: Maybe<MediaFields_Filename>;
  filesize: Maybe<MediaFields_Filesize>;
  height: Maybe<MediaFields_Height>;
  mimeType: Maybe<MediaFields_MimeType>;
  sizes: Maybe<MediaFields_Sizes>;
  updatedAt: Maybe<MediaFields_UpdatedAt>;
  url: Maybe<MediaFields_Url>;
  width: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create: Maybe<MediaFields_Alt_Create>;
  delete: Maybe<MediaFields_Alt_Delete>;
  read: Maybe<MediaFields_Alt_Read>;
  update: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create: Maybe<MediaFields_CreatedAt_Create>;
  delete: Maybe<MediaFields_CreatedAt_Delete>;
  read: Maybe<MediaFields_CreatedAt_Read>;
  update: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create: Maybe<MediaFields_Filename_Create>;
  delete: Maybe<MediaFields_Filename_Delete>;
  read: Maybe<MediaFields_Filename_Read>;
  update: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create: Maybe<MediaFields_Filesize_Create>;
  delete: Maybe<MediaFields_Filesize_Delete>;
  read: Maybe<MediaFields_Filesize_Read>;
  update: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create: Maybe<MediaFields_Height_Create>;
  delete: Maybe<MediaFields_Height_Delete>;
  read: Maybe<MediaFields_Height_Read>;
  update: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create: Maybe<MediaFields_MimeType_Create>;
  delete: Maybe<MediaFields_MimeType_Delete>;
  read: Maybe<MediaFields_MimeType_Read>;
  update: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create: Maybe<MediaFields_Sizes_Create>;
  delete: Maybe<MediaFields_Sizes_Delete>;
  fields: Maybe<MediaFields_Sizes_Fields>;
  read: Maybe<MediaFields_Sizes_Read>;
  update: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  thumbnail: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create: Maybe<MediaFields_UpdatedAt_Create>;
  delete: Maybe<MediaFields_UpdatedAt_Delete>;
  read: Maybe<MediaFields_UpdatedAt_Read>;
  update: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create: Maybe<MediaFields_Url_Create>;
  delete: Maybe<MediaFields_Url_Delete>;
  read: Maybe<MediaFields_Url_Read>;
  update: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create: Maybe<MediaFields_Width_Create>;
  delete: Maybe<MediaFields_Width_Delete>;
  read: Maybe<MediaFields_Width_Read>;
  update: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  thumbnail: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename: Maybe<Scalars['String']['output']>;
  filesize: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Media_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt: InputMaybe<Media_Alt_Operator>;
  createdAt: InputMaybe<Media_CreatedAt_Operator>;
  filename: InputMaybe<Media_Filename_Operator>;
  filesize: InputMaybe<Media_Filesize_Operator>;
  height: InputMaybe<Media_Height_Operator>;
  id: InputMaybe<Media_Id_Operator>;
  mimeType: InputMaybe<Media_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Media_UpdatedAt_Operator>;
  url: InputMaybe<Media_Url_Operator>;
  width: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member = {
  __typename?: 'Member';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Maybe<Scalars['String']['output']>;
  image: Media;
  mat: File;
  name: Scalars['String']['output'];
  obj: File;
  socials: Array<Member_Socials>;
  textures: Maybe<Array<Member_Textures>>;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type MemberImageArgs = {
  where: InputMaybe<Member_Image_Where>;
};


export type MemberMatArgs = {
  where: InputMaybe<Member_Mat_Where>;
};


export type MemberObjArgs = {
  where: InputMaybe<Member_Obj_Where>;
};

export type Member_Image_Alt_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Image_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Image_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Image_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Sizes__Thumbnail__Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Image_Sizes__Thumbnail__Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Image_Sizes__Thumbnail__MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Sizes__Thumbnail__Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Sizes__Thumbnail__Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Image_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Image_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Image_Where_Or>>>;
  alt: InputMaybe<Member_Image_Alt_Operator>;
  createdAt: InputMaybe<Member_Image_CreatedAt_Operator>;
  filename: InputMaybe<Member_Image_Filename_Operator>;
  filesize: InputMaybe<Member_Image_Filesize_Operator>;
  height: InputMaybe<Member_Image_Height_Operator>;
  id: InputMaybe<Member_Image_Id_Operator>;
  mimeType: InputMaybe<Member_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Member_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Member_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Member_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Member_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Member_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Member_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Member_Image_UpdatedAt_Operator>;
  url: InputMaybe<Member_Image_Url_Operator>;
  width: InputMaybe<Member_Image_Width_Operator>;
};

export type Member_Image_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Image_Where_Or>>>;
  alt: InputMaybe<Member_Image_Alt_Operator>;
  createdAt: InputMaybe<Member_Image_CreatedAt_Operator>;
  filename: InputMaybe<Member_Image_Filename_Operator>;
  filesize: InputMaybe<Member_Image_Filesize_Operator>;
  height: InputMaybe<Member_Image_Height_Operator>;
  id: InputMaybe<Member_Image_Id_Operator>;
  mimeType: InputMaybe<Member_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Member_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Member_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Member_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Member_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Member_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Member_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Member_Image_UpdatedAt_Operator>;
  url: InputMaybe<Member_Image_Url_Operator>;
  width: InputMaybe<Member_Image_Width_Operator>;
};

export type Member_Image_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Image_Where_Or>>>;
  alt: InputMaybe<Member_Image_Alt_Operator>;
  createdAt: InputMaybe<Member_Image_CreatedAt_Operator>;
  filename: InputMaybe<Member_Image_Filename_Operator>;
  filesize: InputMaybe<Member_Image_Filesize_Operator>;
  height: InputMaybe<Member_Image_Height_Operator>;
  id: InputMaybe<Member_Image_Id_Operator>;
  mimeType: InputMaybe<Member_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<Member_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<Member_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<Member_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<Member_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<Member_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<Member_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<Member_Image_UpdatedAt_Operator>;
  url: InputMaybe<Member_Image_Url_Operator>;
  width: InputMaybe<Member_Image_Width_Operator>;
};

export type Member_Image_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Mat_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Mat_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Mat_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Mat_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Mat_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Mat_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Mat_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Mat_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Mat_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Mat_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Mat_Where_Or>>>;
  createdAt: InputMaybe<Member_Mat_CreatedAt_Operator>;
  filename: InputMaybe<Member_Mat_Filename_Operator>;
  filesize: InputMaybe<Member_Mat_Filesize_Operator>;
  height: InputMaybe<Member_Mat_Height_Operator>;
  id: InputMaybe<Member_Mat_Id_Operator>;
  mimeType: InputMaybe<Member_Mat_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Mat_UpdatedAt_Operator>;
  url: InputMaybe<Member_Mat_Url_Operator>;
  width: InputMaybe<Member_Mat_Width_Operator>;
};

export type Member_Mat_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Mat_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Mat_Where_Or>>>;
  createdAt: InputMaybe<Member_Mat_CreatedAt_Operator>;
  filename: InputMaybe<Member_Mat_Filename_Operator>;
  filesize: InputMaybe<Member_Mat_Filesize_Operator>;
  height: InputMaybe<Member_Mat_Height_Operator>;
  id: InputMaybe<Member_Mat_Id_Operator>;
  mimeType: InputMaybe<Member_Mat_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Mat_UpdatedAt_Operator>;
  url: InputMaybe<Member_Mat_Url_Operator>;
  width: InputMaybe<Member_Mat_Width_Operator>;
};

export type Member_Mat_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Mat_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Mat_Where_Or>>>;
  createdAt: InputMaybe<Member_Mat_CreatedAt_Operator>;
  filename: InputMaybe<Member_Mat_Filename_Operator>;
  filesize: InputMaybe<Member_Mat_Filesize_Operator>;
  height: InputMaybe<Member_Mat_Height_Operator>;
  id: InputMaybe<Member_Mat_Id_Operator>;
  mimeType: InputMaybe<Member_Mat_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Mat_UpdatedAt_Operator>;
  url: InputMaybe<Member_Mat_Url_Operator>;
  width: InputMaybe<Member_Mat_Width_Operator>;
};

export type Member_Mat_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Obj_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Obj_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Obj_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Obj_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Obj_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Obj_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Obj_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Obj_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Obj_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Obj_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Obj_Where_Or>>>;
  createdAt: InputMaybe<Member_Obj_CreatedAt_Operator>;
  filename: InputMaybe<Member_Obj_Filename_Operator>;
  filesize: InputMaybe<Member_Obj_Filesize_Operator>;
  height: InputMaybe<Member_Obj_Height_Operator>;
  id: InputMaybe<Member_Obj_Id_Operator>;
  mimeType: InputMaybe<Member_Obj_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Obj_UpdatedAt_Operator>;
  url: InputMaybe<Member_Obj_Url_Operator>;
  width: InputMaybe<Member_Obj_Width_Operator>;
};

export type Member_Obj_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Obj_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Obj_Where_Or>>>;
  createdAt: InputMaybe<Member_Obj_CreatedAt_Operator>;
  filename: InputMaybe<Member_Obj_Filename_Operator>;
  filesize: InputMaybe<Member_Obj_Filesize_Operator>;
  height: InputMaybe<Member_Obj_Height_Operator>;
  id: InputMaybe<Member_Obj_Id_Operator>;
  mimeType: InputMaybe<Member_Obj_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Obj_UpdatedAt_Operator>;
  url: InputMaybe<Member_Obj_Url_Operator>;
  width: InputMaybe<Member_Obj_Width_Operator>;
};

export type Member_Obj_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Obj_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Obj_Where_Or>>>;
  createdAt: InputMaybe<Member_Obj_CreatedAt_Operator>;
  filename: InputMaybe<Member_Obj_Filename_Operator>;
  filesize: InputMaybe<Member_Obj_Filesize_Operator>;
  height: InputMaybe<Member_Obj_Height_Operator>;
  id: InputMaybe<Member_Obj_Id_Operator>;
  mimeType: InputMaybe<Member_Obj_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Obj_UpdatedAt_Operator>;
  url: InputMaybe<Member_Obj_Url_Operator>;
  width: InputMaybe<Member_Obj_Width_Operator>;
};

export type Member_Obj_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Socials = {
  __typename?: 'Member_Socials';
  email: Maybe<Scalars['EmailAddress']['output']>;
  facebook: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  instagram: Maybe<Scalars['String']['output']>;
  linkedin: Maybe<Scalars['String']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
};

export type Member_Textures = {
  __typename?: 'Member_Textures';
  id: Maybe<Scalars['String']['output']>;
  tex1: Maybe<Texture>;
  tex2: Maybe<Texture>;
  tex3: Maybe<Texture>;
  tex4: Maybe<Texture>;
};


export type Member_TexturesTex1Args = {
  where: InputMaybe<Member_Textures_Tex1_Where>;
};


export type Member_TexturesTex2Args = {
  where: InputMaybe<Member_Textures_Tex2_Where>;
};


export type Member_TexturesTex3Args = {
  where: InputMaybe<Member_Textures_Tex3_Where>;
};


export type Member_TexturesTex4Args = {
  where: InputMaybe<Member_Textures_Tex4_Where>;
};

export type Member_Textures_Tex1_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex1_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex1_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex1_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex1_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex1_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex1_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex1_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex1_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex1_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex1_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex1_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex1_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex1_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex1_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex1_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex1_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex1_Width_Operator>;
};

export type Member_Textures_Tex1_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex1_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex1_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex1_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex1_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex1_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex1_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex1_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex1_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex1_Width_Operator>;
};

export type Member_Textures_Tex1_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex1_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex1_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex1_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex1_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex1_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex1_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex1_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex1_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex1_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex1_Width_Operator>;
};

export type Member_Textures_Tex1_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex2_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex2_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex2_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex2_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex2_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex2_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex2_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex2_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex2_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex2_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex2_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex2_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex2_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex2_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex2_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex2_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex2_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex2_Width_Operator>;
};

export type Member_Textures_Tex2_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex2_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex2_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex2_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex2_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex2_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex2_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex2_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex2_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex2_Width_Operator>;
};

export type Member_Textures_Tex2_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex2_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex2_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex2_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex2_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex2_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex2_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex2_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex2_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex2_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex2_Width_Operator>;
};

export type Member_Textures_Tex2_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex3_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex3_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex3_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex3_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex3_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex3_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex3_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex3_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex3_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex3_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex3_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex3_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex3_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex3_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex3_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex3_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex3_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex3_Width_Operator>;
};

export type Member_Textures_Tex3_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex3_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex3_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex3_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex3_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex3_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex3_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex3_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex3_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex3_Width_Operator>;
};

export type Member_Textures_Tex3_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex3_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex3_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex3_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex3_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex3_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex3_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex3_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex3_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex3_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex3_Width_Operator>;
};

export type Member_Textures_Tex3_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex4_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex4_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex4_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex4_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_Textures_Tex4_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex4_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex4_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Textures_Tex4_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures_Tex4_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex4_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex4_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex4_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex4_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex4_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex4_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex4_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex4_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex4_Width_Operator>;
};

export type Member_Textures_Tex4_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex4_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex4_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex4_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex4_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex4_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex4_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex4_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex4_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex4_Width_Operator>;
};

export type Member_Textures_Tex4_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Textures_Tex4_Where_Or>>>;
  createdAt: InputMaybe<Member_Textures_Tex4_CreatedAt_Operator>;
  filename: InputMaybe<Member_Textures_Tex4_Filename_Operator>;
  filesize: InputMaybe<Member_Textures_Tex4_Filesize_Operator>;
  height: InputMaybe<Member_Textures_Tex4_Height_Operator>;
  id: InputMaybe<Member_Textures_Tex4_Id_Operator>;
  mimeType: InputMaybe<Member_Textures_Tex4_MimeType_Operator>;
  updatedAt: InputMaybe<Member_Textures_Tex4_UpdatedAt_Operator>;
  url: InputMaybe<Member_Textures_Tex4_Url_Operator>;
  width: InputMaybe<Member_Textures_Tex4_Width_Operator>;
};

export type Member_Textures_Tex4_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Member_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Description_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Image_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Mat_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Name_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Obj_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Socials__Email_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains: InputMaybe<Scalars['EmailAddress']['input']>;
  equals: InputMaybe<Scalars['EmailAddress']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Member_Socials__Facebook_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Socials__Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Socials__Instagram_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Socials__Linkedin_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Socials__Twitter_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures__Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_Textures__Tex1_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Textures__Tex2_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Textures__Tex3_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Textures__Tex4_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type Member_Title_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Member_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Member_Where = {
  AND: InputMaybe<Array<InputMaybe<Member_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Where_Or>>>;
  createdAt: InputMaybe<Member_CreatedAt_Operator>;
  description: InputMaybe<Member_Description_Operator>;
  id: InputMaybe<Member_Id_Operator>;
  image: InputMaybe<Member_Image_Operator>;
  mat: InputMaybe<Member_Mat_Operator>;
  name: InputMaybe<Member_Name_Operator>;
  obj: InputMaybe<Member_Obj_Operator>;
  socials__email: InputMaybe<Member_Socials__Email_Operator>;
  socials__facebook: InputMaybe<Member_Socials__Facebook_Operator>;
  socials__id: InputMaybe<Member_Socials__Id_Operator>;
  socials__instagram: InputMaybe<Member_Socials__Instagram_Operator>;
  socials__linkedin: InputMaybe<Member_Socials__Linkedin_Operator>;
  socials__twitter: InputMaybe<Member_Socials__Twitter_Operator>;
  textures__id: InputMaybe<Member_Textures__Id_Operator>;
  textures__tex1: InputMaybe<Member_Textures__Tex1_Operator>;
  textures__tex2: InputMaybe<Member_Textures__Tex2_Operator>;
  textures__tex3: InputMaybe<Member_Textures__Tex3_Operator>;
  textures__tex4: InputMaybe<Member_Textures__Tex4_Operator>;
  title: InputMaybe<Member_Title_Operator>;
  updatedAt: InputMaybe<Member_UpdatedAt_Operator>;
};

export type Member_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Member_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Where_Or>>>;
  createdAt: InputMaybe<Member_CreatedAt_Operator>;
  description: InputMaybe<Member_Description_Operator>;
  id: InputMaybe<Member_Id_Operator>;
  image: InputMaybe<Member_Image_Operator>;
  mat: InputMaybe<Member_Mat_Operator>;
  name: InputMaybe<Member_Name_Operator>;
  obj: InputMaybe<Member_Obj_Operator>;
  socials__email: InputMaybe<Member_Socials__Email_Operator>;
  socials__facebook: InputMaybe<Member_Socials__Facebook_Operator>;
  socials__id: InputMaybe<Member_Socials__Id_Operator>;
  socials__instagram: InputMaybe<Member_Socials__Instagram_Operator>;
  socials__linkedin: InputMaybe<Member_Socials__Linkedin_Operator>;
  socials__twitter: InputMaybe<Member_Socials__Twitter_Operator>;
  textures__id: InputMaybe<Member_Textures__Id_Operator>;
  textures__tex1: InputMaybe<Member_Textures__Tex1_Operator>;
  textures__tex2: InputMaybe<Member_Textures__Tex2_Operator>;
  textures__tex3: InputMaybe<Member_Textures__Tex3_Operator>;
  textures__tex4: InputMaybe<Member_Textures__Tex4_Operator>;
  title: InputMaybe<Member_Title_Operator>;
  updatedAt: InputMaybe<Member_UpdatedAt_Operator>;
};

export type Member_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Member_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Member_Where_Or>>>;
  createdAt: InputMaybe<Member_CreatedAt_Operator>;
  description: InputMaybe<Member_Description_Operator>;
  id: InputMaybe<Member_Id_Operator>;
  image: InputMaybe<Member_Image_Operator>;
  mat: InputMaybe<Member_Mat_Operator>;
  name: InputMaybe<Member_Name_Operator>;
  obj: InputMaybe<Member_Obj_Operator>;
  socials__email: InputMaybe<Member_Socials__Email_Operator>;
  socials__facebook: InputMaybe<Member_Socials__Facebook_Operator>;
  socials__id: InputMaybe<Member_Socials__Id_Operator>;
  socials__instagram: InputMaybe<Member_Socials__Instagram_Operator>;
  socials__linkedin: InputMaybe<Member_Socials__Linkedin_Operator>;
  socials__twitter: InputMaybe<Member_Socials__Twitter_Operator>;
  textures__id: InputMaybe<Member_Textures__Id_Operator>;
  textures__tex1: InputMaybe<Member_Textures__Tex1_Operator>;
  textures__tex2: InputMaybe<Member_Textures__Tex2_Operator>;
  textures__tex3: InputMaybe<Member_Textures__Tex3_Operator>;
  textures__tex4: InputMaybe<Member_Textures__Tex4_Operator>;
  title: InputMaybe<Member_Title_Operator>;
  updatedAt: InputMaybe<Member_UpdatedAt_Operator>;
};

export type Members = {
  __typename?: 'Members';
  docs: Maybe<Array<Maybe<Member>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type MembersCreateAccess = {
  __typename?: 'MembersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersCreateDocAccess = {
  __typename?: 'MembersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersDeleteAccess = {
  __typename?: 'MembersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersDeleteDocAccess = {
  __typename?: 'MembersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersDocAccessFields = {
  __typename?: 'MembersDocAccessFields';
  createdAt: Maybe<MembersDocAccessFields_CreatedAt>;
  description: Maybe<MembersDocAccessFields_Description>;
  image: Maybe<MembersDocAccessFields_Image>;
  mat: Maybe<MembersDocAccessFields_Mat>;
  name: Maybe<MembersDocAccessFields_Name>;
  obj: Maybe<MembersDocAccessFields_Obj>;
  socials: Maybe<MembersDocAccessFields_Socials>;
  textures: Maybe<MembersDocAccessFields_Textures>;
  title: Maybe<MembersDocAccessFields_Title>;
  updatedAt: Maybe<MembersDocAccessFields_UpdatedAt>;
};

export type MembersDocAccessFields_CreatedAt = {
  __typename?: 'MembersDocAccessFields_createdAt';
  create: Maybe<MembersDocAccessFields_CreatedAt_Create>;
  delete: Maybe<MembersDocAccessFields_CreatedAt_Delete>;
  read: Maybe<MembersDocAccessFields_CreatedAt_Read>;
  update: Maybe<MembersDocAccessFields_CreatedAt_Update>;
};

export type MembersDocAccessFields_CreatedAt_Create = {
  __typename?: 'MembersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MembersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_CreatedAt_Read = {
  __typename?: 'MembersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_CreatedAt_Update = {
  __typename?: 'MembersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Description = {
  __typename?: 'MembersDocAccessFields_description';
  create: Maybe<MembersDocAccessFields_Description_Create>;
  delete: Maybe<MembersDocAccessFields_Description_Delete>;
  read: Maybe<MembersDocAccessFields_Description_Read>;
  update: Maybe<MembersDocAccessFields_Description_Update>;
};

export type MembersDocAccessFields_Description_Create = {
  __typename?: 'MembersDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Description_Delete = {
  __typename?: 'MembersDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Description_Read = {
  __typename?: 'MembersDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Description_Update = {
  __typename?: 'MembersDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Image = {
  __typename?: 'MembersDocAccessFields_image';
  create: Maybe<MembersDocAccessFields_Image_Create>;
  delete: Maybe<MembersDocAccessFields_Image_Delete>;
  read: Maybe<MembersDocAccessFields_Image_Read>;
  update: Maybe<MembersDocAccessFields_Image_Update>;
};

export type MembersDocAccessFields_Image_Create = {
  __typename?: 'MembersDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Image_Delete = {
  __typename?: 'MembersDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Image_Read = {
  __typename?: 'MembersDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Image_Update = {
  __typename?: 'MembersDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Mat = {
  __typename?: 'MembersDocAccessFields_mat';
  create: Maybe<MembersDocAccessFields_Mat_Create>;
  delete: Maybe<MembersDocAccessFields_Mat_Delete>;
  read: Maybe<MembersDocAccessFields_Mat_Read>;
  update: Maybe<MembersDocAccessFields_Mat_Update>;
};

export type MembersDocAccessFields_Mat_Create = {
  __typename?: 'MembersDocAccessFields_mat_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Mat_Delete = {
  __typename?: 'MembersDocAccessFields_mat_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Mat_Read = {
  __typename?: 'MembersDocAccessFields_mat_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Mat_Update = {
  __typename?: 'MembersDocAccessFields_mat_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Name = {
  __typename?: 'MembersDocAccessFields_name';
  create: Maybe<MembersDocAccessFields_Name_Create>;
  delete: Maybe<MembersDocAccessFields_Name_Delete>;
  read: Maybe<MembersDocAccessFields_Name_Read>;
  update: Maybe<MembersDocAccessFields_Name_Update>;
};

export type MembersDocAccessFields_Name_Create = {
  __typename?: 'MembersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Name_Delete = {
  __typename?: 'MembersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Name_Read = {
  __typename?: 'MembersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Name_Update = {
  __typename?: 'MembersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Obj = {
  __typename?: 'MembersDocAccessFields_obj';
  create: Maybe<MembersDocAccessFields_Obj_Create>;
  delete: Maybe<MembersDocAccessFields_Obj_Delete>;
  read: Maybe<MembersDocAccessFields_Obj_Read>;
  update: Maybe<MembersDocAccessFields_Obj_Update>;
};

export type MembersDocAccessFields_Obj_Create = {
  __typename?: 'MembersDocAccessFields_obj_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Obj_Delete = {
  __typename?: 'MembersDocAccessFields_obj_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Obj_Read = {
  __typename?: 'MembersDocAccessFields_obj_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Obj_Update = {
  __typename?: 'MembersDocAccessFields_obj_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials = {
  __typename?: 'MembersDocAccessFields_socials';
  create: Maybe<MembersDocAccessFields_Socials_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Delete>;
  fields: Maybe<MembersDocAccessFields_Socials_Fields>;
  read: Maybe<MembersDocAccessFields_Socials_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Update>;
};

export type MembersDocAccessFields_Socials_Create = {
  __typename?: 'MembersDocAccessFields_socials_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Delete = {
  __typename?: 'MembersDocAccessFields_socials_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Fields = {
  __typename?: 'MembersDocAccessFields_socials_Fields';
  email: Maybe<MembersDocAccessFields_Socials_Email>;
  facebook: Maybe<MembersDocAccessFields_Socials_Facebook>;
  id: Maybe<MembersDocAccessFields_Socials_Id>;
  instagram: Maybe<MembersDocAccessFields_Socials_Instagram>;
  linkedin: Maybe<MembersDocAccessFields_Socials_Linkedin>;
  twitter: Maybe<MembersDocAccessFields_Socials_Twitter>;
};

export type MembersDocAccessFields_Socials_Read = {
  __typename?: 'MembersDocAccessFields_socials_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Update = {
  __typename?: 'MembersDocAccessFields_socials_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Email = {
  __typename?: 'MembersDocAccessFields_socials_email';
  create: Maybe<MembersDocAccessFields_Socials_Email_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Email_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Email_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Email_Update>;
};

export type MembersDocAccessFields_Socials_Email_Create = {
  __typename?: 'MembersDocAccessFields_socials_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Email_Delete = {
  __typename?: 'MembersDocAccessFields_socials_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Email_Read = {
  __typename?: 'MembersDocAccessFields_socials_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Email_Update = {
  __typename?: 'MembersDocAccessFields_socials_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Facebook = {
  __typename?: 'MembersDocAccessFields_socials_facebook';
  create: Maybe<MembersDocAccessFields_Socials_Facebook_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Facebook_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Facebook_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Facebook_Update>;
};

export type MembersDocAccessFields_Socials_Facebook_Create = {
  __typename?: 'MembersDocAccessFields_socials_facebook_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Facebook_Delete = {
  __typename?: 'MembersDocAccessFields_socials_facebook_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Facebook_Read = {
  __typename?: 'MembersDocAccessFields_socials_facebook_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Facebook_Update = {
  __typename?: 'MembersDocAccessFields_socials_facebook_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Id = {
  __typename?: 'MembersDocAccessFields_socials_id';
  create: Maybe<MembersDocAccessFields_Socials_Id_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Id_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Id_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Id_Update>;
};

export type MembersDocAccessFields_Socials_Id_Create = {
  __typename?: 'MembersDocAccessFields_socials_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Id_Delete = {
  __typename?: 'MembersDocAccessFields_socials_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Id_Read = {
  __typename?: 'MembersDocAccessFields_socials_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Id_Update = {
  __typename?: 'MembersDocAccessFields_socials_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Instagram = {
  __typename?: 'MembersDocAccessFields_socials_instagram';
  create: Maybe<MembersDocAccessFields_Socials_Instagram_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Instagram_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Instagram_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Instagram_Update>;
};

export type MembersDocAccessFields_Socials_Instagram_Create = {
  __typename?: 'MembersDocAccessFields_socials_instagram_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Instagram_Delete = {
  __typename?: 'MembersDocAccessFields_socials_instagram_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Instagram_Read = {
  __typename?: 'MembersDocAccessFields_socials_instagram_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Instagram_Update = {
  __typename?: 'MembersDocAccessFields_socials_instagram_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Linkedin = {
  __typename?: 'MembersDocAccessFields_socials_linkedin';
  create: Maybe<MembersDocAccessFields_Socials_Linkedin_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Linkedin_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Linkedin_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Linkedin_Update>;
};

export type MembersDocAccessFields_Socials_Linkedin_Create = {
  __typename?: 'MembersDocAccessFields_socials_linkedin_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Linkedin_Delete = {
  __typename?: 'MembersDocAccessFields_socials_linkedin_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Linkedin_Read = {
  __typename?: 'MembersDocAccessFields_socials_linkedin_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Linkedin_Update = {
  __typename?: 'MembersDocAccessFields_socials_linkedin_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Twitter = {
  __typename?: 'MembersDocAccessFields_socials_twitter';
  create: Maybe<MembersDocAccessFields_Socials_Twitter_Create>;
  delete: Maybe<MembersDocAccessFields_Socials_Twitter_Delete>;
  read: Maybe<MembersDocAccessFields_Socials_Twitter_Read>;
  update: Maybe<MembersDocAccessFields_Socials_Twitter_Update>;
};

export type MembersDocAccessFields_Socials_Twitter_Create = {
  __typename?: 'MembersDocAccessFields_socials_twitter_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Twitter_Delete = {
  __typename?: 'MembersDocAccessFields_socials_twitter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Twitter_Read = {
  __typename?: 'MembersDocAccessFields_socials_twitter_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Socials_Twitter_Update = {
  __typename?: 'MembersDocAccessFields_socials_twitter_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures = {
  __typename?: 'MembersDocAccessFields_textures';
  create: Maybe<MembersDocAccessFields_Textures_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Delete>;
  fields: Maybe<MembersDocAccessFields_Textures_Fields>;
  read: Maybe<MembersDocAccessFields_Textures_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Update>;
};

export type MembersDocAccessFields_Textures_Create = {
  __typename?: 'MembersDocAccessFields_textures_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Delete = {
  __typename?: 'MembersDocAccessFields_textures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Fields = {
  __typename?: 'MembersDocAccessFields_textures_Fields';
  id: Maybe<MembersDocAccessFields_Textures_Id>;
  tex1: Maybe<MembersDocAccessFields_Textures_Tex1>;
  tex2: Maybe<MembersDocAccessFields_Textures_Tex2>;
  tex3: Maybe<MembersDocAccessFields_Textures_Tex3>;
  tex4: Maybe<MembersDocAccessFields_Textures_Tex4>;
};

export type MembersDocAccessFields_Textures_Read = {
  __typename?: 'MembersDocAccessFields_textures_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Update = {
  __typename?: 'MembersDocAccessFields_textures_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Id = {
  __typename?: 'MembersDocAccessFields_textures_id';
  create: Maybe<MembersDocAccessFields_Textures_Id_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Id_Delete>;
  read: Maybe<MembersDocAccessFields_Textures_Id_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Id_Update>;
};

export type MembersDocAccessFields_Textures_Id_Create = {
  __typename?: 'MembersDocAccessFields_textures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Id_Delete = {
  __typename?: 'MembersDocAccessFields_textures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Id_Read = {
  __typename?: 'MembersDocAccessFields_textures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Id_Update = {
  __typename?: 'MembersDocAccessFields_textures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex1 = {
  __typename?: 'MembersDocAccessFields_textures_tex1';
  create: Maybe<MembersDocAccessFields_Textures_Tex1_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Tex1_Delete>;
  read: Maybe<MembersDocAccessFields_Textures_Tex1_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Tex1_Update>;
};

export type MembersDocAccessFields_Textures_Tex1_Create = {
  __typename?: 'MembersDocAccessFields_textures_tex1_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex1_Delete = {
  __typename?: 'MembersDocAccessFields_textures_tex1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex1_Read = {
  __typename?: 'MembersDocAccessFields_textures_tex1_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex1_Update = {
  __typename?: 'MembersDocAccessFields_textures_tex1_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex2 = {
  __typename?: 'MembersDocAccessFields_textures_tex2';
  create: Maybe<MembersDocAccessFields_Textures_Tex2_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Tex2_Delete>;
  read: Maybe<MembersDocAccessFields_Textures_Tex2_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Tex2_Update>;
};

export type MembersDocAccessFields_Textures_Tex2_Create = {
  __typename?: 'MembersDocAccessFields_textures_tex2_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex2_Delete = {
  __typename?: 'MembersDocAccessFields_textures_tex2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex2_Read = {
  __typename?: 'MembersDocAccessFields_textures_tex2_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex2_Update = {
  __typename?: 'MembersDocAccessFields_textures_tex2_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex3 = {
  __typename?: 'MembersDocAccessFields_textures_tex3';
  create: Maybe<MembersDocAccessFields_Textures_Tex3_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Tex3_Delete>;
  read: Maybe<MembersDocAccessFields_Textures_Tex3_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Tex3_Update>;
};

export type MembersDocAccessFields_Textures_Tex3_Create = {
  __typename?: 'MembersDocAccessFields_textures_tex3_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex3_Delete = {
  __typename?: 'MembersDocAccessFields_textures_tex3_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex3_Read = {
  __typename?: 'MembersDocAccessFields_textures_tex3_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex3_Update = {
  __typename?: 'MembersDocAccessFields_textures_tex3_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex4 = {
  __typename?: 'MembersDocAccessFields_textures_tex4';
  create: Maybe<MembersDocAccessFields_Textures_Tex4_Create>;
  delete: Maybe<MembersDocAccessFields_Textures_Tex4_Delete>;
  read: Maybe<MembersDocAccessFields_Textures_Tex4_Read>;
  update: Maybe<MembersDocAccessFields_Textures_Tex4_Update>;
};

export type MembersDocAccessFields_Textures_Tex4_Create = {
  __typename?: 'MembersDocAccessFields_textures_tex4_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex4_Delete = {
  __typename?: 'MembersDocAccessFields_textures_tex4_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex4_Read = {
  __typename?: 'MembersDocAccessFields_textures_tex4_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Textures_Tex4_Update = {
  __typename?: 'MembersDocAccessFields_textures_tex4_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Title = {
  __typename?: 'MembersDocAccessFields_title';
  create: Maybe<MembersDocAccessFields_Title_Create>;
  delete: Maybe<MembersDocAccessFields_Title_Delete>;
  read: Maybe<MembersDocAccessFields_Title_Read>;
  update: Maybe<MembersDocAccessFields_Title_Update>;
};

export type MembersDocAccessFields_Title_Create = {
  __typename?: 'MembersDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Title_Delete = {
  __typename?: 'MembersDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Title_Read = {
  __typename?: 'MembersDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_Title_Update = {
  __typename?: 'MembersDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_UpdatedAt = {
  __typename?: 'MembersDocAccessFields_updatedAt';
  create: Maybe<MembersDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<MembersDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<MembersDocAccessFields_UpdatedAt_Read>;
  update: Maybe<MembersDocAccessFields_UpdatedAt_Update>;
};

export type MembersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MembersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MembersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MembersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MembersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields = {
  __typename?: 'MembersFields';
  createdAt: Maybe<MembersFields_CreatedAt>;
  description: Maybe<MembersFields_Description>;
  image: Maybe<MembersFields_Image>;
  mat: Maybe<MembersFields_Mat>;
  name: Maybe<MembersFields_Name>;
  obj: Maybe<MembersFields_Obj>;
  socials: Maybe<MembersFields_Socials>;
  textures: Maybe<MembersFields_Textures>;
  title: Maybe<MembersFields_Title>;
  updatedAt: Maybe<MembersFields_UpdatedAt>;
};

export type MembersFields_CreatedAt = {
  __typename?: 'MembersFields_createdAt';
  create: Maybe<MembersFields_CreatedAt_Create>;
  delete: Maybe<MembersFields_CreatedAt_Delete>;
  read: Maybe<MembersFields_CreatedAt_Read>;
  update: Maybe<MembersFields_CreatedAt_Update>;
};

export type MembersFields_CreatedAt_Create = {
  __typename?: 'MembersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_CreatedAt_Delete = {
  __typename?: 'MembersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_CreatedAt_Read = {
  __typename?: 'MembersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_CreatedAt_Update = {
  __typename?: 'MembersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Description = {
  __typename?: 'MembersFields_description';
  create: Maybe<MembersFields_Description_Create>;
  delete: Maybe<MembersFields_Description_Delete>;
  read: Maybe<MembersFields_Description_Read>;
  update: Maybe<MembersFields_Description_Update>;
};

export type MembersFields_Description_Create = {
  __typename?: 'MembersFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Description_Delete = {
  __typename?: 'MembersFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Description_Read = {
  __typename?: 'MembersFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Description_Update = {
  __typename?: 'MembersFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Image = {
  __typename?: 'MembersFields_image';
  create: Maybe<MembersFields_Image_Create>;
  delete: Maybe<MembersFields_Image_Delete>;
  read: Maybe<MembersFields_Image_Read>;
  update: Maybe<MembersFields_Image_Update>;
};

export type MembersFields_Image_Create = {
  __typename?: 'MembersFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Image_Delete = {
  __typename?: 'MembersFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Image_Read = {
  __typename?: 'MembersFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Image_Update = {
  __typename?: 'MembersFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Mat = {
  __typename?: 'MembersFields_mat';
  create: Maybe<MembersFields_Mat_Create>;
  delete: Maybe<MembersFields_Mat_Delete>;
  read: Maybe<MembersFields_Mat_Read>;
  update: Maybe<MembersFields_Mat_Update>;
};

export type MembersFields_Mat_Create = {
  __typename?: 'MembersFields_mat_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Mat_Delete = {
  __typename?: 'MembersFields_mat_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Mat_Read = {
  __typename?: 'MembersFields_mat_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Mat_Update = {
  __typename?: 'MembersFields_mat_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Name = {
  __typename?: 'MembersFields_name';
  create: Maybe<MembersFields_Name_Create>;
  delete: Maybe<MembersFields_Name_Delete>;
  read: Maybe<MembersFields_Name_Read>;
  update: Maybe<MembersFields_Name_Update>;
};

export type MembersFields_Name_Create = {
  __typename?: 'MembersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Name_Delete = {
  __typename?: 'MembersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Name_Read = {
  __typename?: 'MembersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Name_Update = {
  __typename?: 'MembersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Obj = {
  __typename?: 'MembersFields_obj';
  create: Maybe<MembersFields_Obj_Create>;
  delete: Maybe<MembersFields_Obj_Delete>;
  read: Maybe<MembersFields_Obj_Read>;
  update: Maybe<MembersFields_Obj_Update>;
};

export type MembersFields_Obj_Create = {
  __typename?: 'MembersFields_obj_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Obj_Delete = {
  __typename?: 'MembersFields_obj_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Obj_Read = {
  __typename?: 'MembersFields_obj_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Obj_Update = {
  __typename?: 'MembersFields_obj_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials = {
  __typename?: 'MembersFields_socials';
  create: Maybe<MembersFields_Socials_Create>;
  delete: Maybe<MembersFields_Socials_Delete>;
  fields: Maybe<MembersFields_Socials_Fields>;
  read: Maybe<MembersFields_Socials_Read>;
  update: Maybe<MembersFields_Socials_Update>;
};

export type MembersFields_Socials_Create = {
  __typename?: 'MembersFields_socials_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Delete = {
  __typename?: 'MembersFields_socials_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Fields = {
  __typename?: 'MembersFields_socials_Fields';
  email: Maybe<MembersFields_Socials_Email>;
  facebook: Maybe<MembersFields_Socials_Facebook>;
  id: Maybe<MembersFields_Socials_Id>;
  instagram: Maybe<MembersFields_Socials_Instagram>;
  linkedin: Maybe<MembersFields_Socials_Linkedin>;
  twitter: Maybe<MembersFields_Socials_Twitter>;
};

export type MembersFields_Socials_Read = {
  __typename?: 'MembersFields_socials_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Update = {
  __typename?: 'MembersFields_socials_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Email = {
  __typename?: 'MembersFields_socials_email';
  create: Maybe<MembersFields_Socials_Email_Create>;
  delete: Maybe<MembersFields_Socials_Email_Delete>;
  read: Maybe<MembersFields_Socials_Email_Read>;
  update: Maybe<MembersFields_Socials_Email_Update>;
};

export type MembersFields_Socials_Email_Create = {
  __typename?: 'MembersFields_socials_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Email_Delete = {
  __typename?: 'MembersFields_socials_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Email_Read = {
  __typename?: 'MembersFields_socials_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Email_Update = {
  __typename?: 'MembersFields_socials_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Facebook = {
  __typename?: 'MembersFields_socials_facebook';
  create: Maybe<MembersFields_Socials_Facebook_Create>;
  delete: Maybe<MembersFields_Socials_Facebook_Delete>;
  read: Maybe<MembersFields_Socials_Facebook_Read>;
  update: Maybe<MembersFields_Socials_Facebook_Update>;
};

export type MembersFields_Socials_Facebook_Create = {
  __typename?: 'MembersFields_socials_facebook_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Facebook_Delete = {
  __typename?: 'MembersFields_socials_facebook_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Facebook_Read = {
  __typename?: 'MembersFields_socials_facebook_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Facebook_Update = {
  __typename?: 'MembersFields_socials_facebook_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Id = {
  __typename?: 'MembersFields_socials_id';
  create: Maybe<MembersFields_Socials_Id_Create>;
  delete: Maybe<MembersFields_Socials_Id_Delete>;
  read: Maybe<MembersFields_Socials_Id_Read>;
  update: Maybe<MembersFields_Socials_Id_Update>;
};

export type MembersFields_Socials_Id_Create = {
  __typename?: 'MembersFields_socials_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Id_Delete = {
  __typename?: 'MembersFields_socials_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Id_Read = {
  __typename?: 'MembersFields_socials_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Id_Update = {
  __typename?: 'MembersFields_socials_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Instagram = {
  __typename?: 'MembersFields_socials_instagram';
  create: Maybe<MembersFields_Socials_Instagram_Create>;
  delete: Maybe<MembersFields_Socials_Instagram_Delete>;
  read: Maybe<MembersFields_Socials_Instagram_Read>;
  update: Maybe<MembersFields_Socials_Instagram_Update>;
};

export type MembersFields_Socials_Instagram_Create = {
  __typename?: 'MembersFields_socials_instagram_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Instagram_Delete = {
  __typename?: 'MembersFields_socials_instagram_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Instagram_Read = {
  __typename?: 'MembersFields_socials_instagram_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Instagram_Update = {
  __typename?: 'MembersFields_socials_instagram_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Linkedin = {
  __typename?: 'MembersFields_socials_linkedin';
  create: Maybe<MembersFields_Socials_Linkedin_Create>;
  delete: Maybe<MembersFields_Socials_Linkedin_Delete>;
  read: Maybe<MembersFields_Socials_Linkedin_Read>;
  update: Maybe<MembersFields_Socials_Linkedin_Update>;
};

export type MembersFields_Socials_Linkedin_Create = {
  __typename?: 'MembersFields_socials_linkedin_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Linkedin_Delete = {
  __typename?: 'MembersFields_socials_linkedin_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Linkedin_Read = {
  __typename?: 'MembersFields_socials_linkedin_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Linkedin_Update = {
  __typename?: 'MembersFields_socials_linkedin_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Twitter = {
  __typename?: 'MembersFields_socials_twitter';
  create: Maybe<MembersFields_Socials_Twitter_Create>;
  delete: Maybe<MembersFields_Socials_Twitter_Delete>;
  read: Maybe<MembersFields_Socials_Twitter_Read>;
  update: Maybe<MembersFields_Socials_Twitter_Update>;
};

export type MembersFields_Socials_Twitter_Create = {
  __typename?: 'MembersFields_socials_twitter_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Twitter_Delete = {
  __typename?: 'MembersFields_socials_twitter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Twitter_Read = {
  __typename?: 'MembersFields_socials_twitter_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Socials_Twitter_Update = {
  __typename?: 'MembersFields_socials_twitter_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures = {
  __typename?: 'MembersFields_textures';
  create: Maybe<MembersFields_Textures_Create>;
  delete: Maybe<MembersFields_Textures_Delete>;
  fields: Maybe<MembersFields_Textures_Fields>;
  read: Maybe<MembersFields_Textures_Read>;
  update: Maybe<MembersFields_Textures_Update>;
};

export type MembersFields_Textures_Create = {
  __typename?: 'MembersFields_textures_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Delete = {
  __typename?: 'MembersFields_textures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Fields = {
  __typename?: 'MembersFields_textures_Fields';
  id: Maybe<MembersFields_Textures_Id>;
  tex1: Maybe<MembersFields_Textures_Tex1>;
  tex2: Maybe<MembersFields_Textures_Tex2>;
  tex3: Maybe<MembersFields_Textures_Tex3>;
  tex4: Maybe<MembersFields_Textures_Tex4>;
};

export type MembersFields_Textures_Read = {
  __typename?: 'MembersFields_textures_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Update = {
  __typename?: 'MembersFields_textures_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Id = {
  __typename?: 'MembersFields_textures_id';
  create: Maybe<MembersFields_Textures_Id_Create>;
  delete: Maybe<MembersFields_Textures_Id_Delete>;
  read: Maybe<MembersFields_Textures_Id_Read>;
  update: Maybe<MembersFields_Textures_Id_Update>;
};

export type MembersFields_Textures_Id_Create = {
  __typename?: 'MembersFields_textures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Id_Delete = {
  __typename?: 'MembersFields_textures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Id_Read = {
  __typename?: 'MembersFields_textures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Id_Update = {
  __typename?: 'MembersFields_textures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex1 = {
  __typename?: 'MembersFields_textures_tex1';
  create: Maybe<MembersFields_Textures_Tex1_Create>;
  delete: Maybe<MembersFields_Textures_Tex1_Delete>;
  read: Maybe<MembersFields_Textures_Tex1_Read>;
  update: Maybe<MembersFields_Textures_Tex1_Update>;
};

export type MembersFields_Textures_Tex1_Create = {
  __typename?: 'MembersFields_textures_tex1_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex1_Delete = {
  __typename?: 'MembersFields_textures_tex1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex1_Read = {
  __typename?: 'MembersFields_textures_tex1_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex1_Update = {
  __typename?: 'MembersFields_textures_tex1_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex2 = {
  __typename?: 'MembersFields_textures_tex2';
  create: Maybe<MembersFields_Textures_Tex2_Create>;
  delete: Maybe<MembersFields_Textures_Tex2_Delete>;
  read: Maybe<MembersFields_Textures_Tex2_Read>;
  update: Maybe<MembersFields_Textures_Tex2_Update>;
};

export type MembersFields_Textures_Tex2_Create = {
  __typename?: 'MembersFields_textures_tex2_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex2_Delete = {
  __typename?: 'MembersFields_textures_tex2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex2_Read = {
  __typename?: 'MembersFields_textures_tex2_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex2_Update = {
  __typename?: 'MembersFields_textures_tex2_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex3 = {
  __typename?: 'MembersFields_textures_tex3';
  create: Maybe<MembersFields_Textures_Tex3_Create>;
  delete: Maybe<MembersFields_Textures_Tex3_Delete>;
  read: Maybe<MembersFields_Textures_Tex3_Read>;
  update: Maybe<MembersFields_Textures_Tex3_Update>;
};

export type MembersFields_Textures_Tex3_Create = {
  __typename?: 'MembersFields_textures_tex3_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex3_Delete = {
  __typename?: 'MembersFields_textures_tex3_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex3_Read = {
  __typename?: 'MembersFields_textures_tex3_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex3_Update = {
  __typename?: 'MembersFields_textures_tex3_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex4 = {
  __typename?: 'MembersFields_textures_tex4';
  create: Maybe<MembersFields_Textures_Tex4_Create>;
  delete: Maybe<MembersFields_Textures_Tex4_Delete>;
  read: Maybe<MembersFields_Textures_Tex4_Read>;
  update: Maybe<MembersFields_Textures_Tex4_Update>;
};

export type MembersFields_Textures_Tex4_Create = {
  __typename?: 'MembersFields_textures_tex4_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex4_Delete = {
  __typename?: 'MembersFields_textures_tex4_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex4_Read = {
  __typename?: 'MembersFields_textures_tex4_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Textures_Tex4_Update = {
  __typename?: 'MembersFields_textures_tex4_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Title = {
  __typename?: 'MembersFields_title';
  create: Maybe<MembersFields_Title_Create>;
  delete: Maybe<MembersFields_Title_Delete>;
  read: Maybe<MembersFields_Title_Read>;
  update: Maybe<MembersFields_Title_Update>;
};

export type MembersFields_Title_Create = {
  __typename?: 'MembersFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Title_Delete = {
  __typename?: 'MembersFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Title_Read = {
  __typename?: 'MembersFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_Title_Update = {
  __typename?: 'MembersFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_UpdatedAt = {
  __typename?: 'MembersFields_updatedAt';
  create: Maybe<MembersFields_UpdatedAt_Create>;
  delete: Maybe<MembersFields_UpdatedAt_Delete>;
  read: Maybe<MembersFields_UpdatedAt_Read>;
  update: Maybe<MembersFields_UpdatedAt_Update>;
};

export type MembersFields_UpdatedAt_Create = {
  __typename?: 'MembersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_UpdatedAt_Delete = {
  __typename?: 'MembersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_UpdatedAt_Read = {
  __typename?: 'MembersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MembersFields_UpdatedAt_Update = {
  __typename?: 'MembersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MembersReadAccess = {
  __typename?: 'MembersReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersReadDocAccess = {
  __typename?: 'MembersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersUpdateAccess = {
  __typename?: 'MembersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type MembersUpdateDocAccess = {
  __typename?: 'MembersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAllTeam: Maybe<AllTeam>;
  createFile: Maybe<File>;
  createHomeVideo: Maybe<HomeVideo>;
  createMedia: Maybe<Media>;
  createMember: Maybe<Member>;
  createNews: Maybe<News>;
  createPayloadPreference: Maybe<PayloadPreference>;
  createTexture: Maybe<Texture>;
  createUser: Maybe<User>;
  deleteAllTeam: Maybe<AllTeam>;
  deleteFile: Maybe<File>;
  deleteHomeVideo: Maybe<HomeVideo>;
  deleteMedia: Maybe<Media>;
  deleteMember: Maybe<Member>;
  deleteNews: Maybe<News>;
  deletePayloadPreference: Maybe<PayloadPreference>;
  deleteTexture: Maybe<Texture>;
  deleteUser: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser: Maybe<UsersLoginResult>;
  logoutUser: Maybe<Scalars['String']['output']>;
  refreshTokenUser: Maybe<UsersRefreshedUser>;
  resetPasswordUser: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateAllTeam: Maybe<AllTeam>;
  updateFile: Maybe<File>;
  updateHomeVideo: Maybe<HomeVideo>;
  updateMedia: Maybe<Media>;
  updateMember: Maybe<Member>;
  updateNews: Maybe<News>;
  updatePayloadPreference: Maybe<PayloadPreference>;
  updateTexture: Maybe<Texture>;
  updateUser: Maybe<User>;
  verifyEmailUser: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateAllTeamArgs = {
  data: MutationAllTeamInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateFileArgs = {
  data: MutationFileInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateHomeVideoArgs = {
  data: MutationHomeVideoInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMemberArgs = {
  data: MutationMemberInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateNewsArgs = {
  data: MutationNewsInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTextureArgs = {
  data: MutationTextureInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteAllTeamArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHomeVideoArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTextureArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password: InputMaybe<Scalars['String']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateAllTeamArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationAllTeamUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateFileArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFileUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateHomeVideoArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationHomeVideoUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateMemberArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMemberUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateNewsArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationNewsUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateTextureArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTextureUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token: InputMaybe<Scalars['String']['input']>;
};

export type News = {
  __typename?: 'News';
  Url: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Maybe<Scalars['String']['output']>;
  image: Media;
  title: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type NewsImageArgs = {
  where: InputMaybe<News_Image_Where>;
};

export type NewsCreateAccess = {
  __typename?: 'NewsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsCreateDocAccess = {
  __typename?: 'NewsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDeleteAccess = {
  __typename?: 'NewsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDeleteDocAccess = {
  __typename?: 'NewsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDocAccessFields = {
  __typename?: 'NewsDocAccessFields';
  Url: Maybe<NewsDocAccessFields_Url>;
  createdAt: Maybe<NewsDocAccessFields_CreatedAt>;
  date: Maybe<NewsDocAccessFields_Date>;
  description: Maybe<NewsDocAccessFields_Description>;
  image: Maybe<NewsDocAccessFields_Image>;
  title: Maybe<NewsDocAccessFields_Title>;
  updatedAt: Maybe<NewsDocAccessFields_UpdatedAt>;
};

export type NewsDocAccessFields_Url = {
  __typename?: 'NewsDocAccessFields_Url';
  create: Maybe<NewsDocAccessFields_Url_Create>;
  delete: Maybe<NewsDocAccessFields_Url_Delete>;
  read: Maybe<NewsDocAccessFields_Url_Read>;
  update: Maybe<NewsDocAccessFields_Url_Update>;
};

export type NewsDocAccessFields_Url_Create = {
  __typename?: 'NewsDocAccessFields_Url_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Url_Delete = {
  __typename?: 'NewsDocAccessFields_Url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Url_Read = {
  __typename?: 'NewsDocAccessFields_Url_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Url_Update = {
  __typename?: 'NewsDocAccessFields_Url_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt = {
  __typename?: 'NewsDocAccessFields_createdAt';
  create: Maybe<NewsDocAccessFields_CreatedAt_Create>;
  delete: Maybe<NewsDocAccessFields_CreatedAt_Delete>;
  read: Maybe<NewsDocAccessFields_CreatedAt_Read>;
  update: Maybe<NewsDocAccessFields_CreatedAt_Update>;
};

export type NewsDocAccessFields_CreatedAt_Create = {
  __typename?: 'NewsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'NewsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Read = {
  __typename?: 'NewsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Update = {
  __typename?: 'NewsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Date = {
  __typename?: 'NewsDocAccessFields_date';
  create: Maybe<NewsDocAccessFields_Date_Create>;
  delete: Maybe<NewsDocAccessFields_Date_Delete>;
  read: Maybe<NewsDocAccessFields_Date_Read>;
  update: Maybe<NewsDocAccessFields_Date_Update>;
};

export type NewsDocAccessFields_Date_Create = {
  __typename?: 'NewsDocAccessFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Date_Delete = {
  __typename?: 'NewsDocAccessFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Date_Read = {
  __typename?: 'NewsDocAccessFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Date_Update = {
  __typename?: 'NewsDocAccessFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Description = {
  __typename?: 'NewsDocAccessFields_description';
  create: Maybe<NewsDocAccessFields_Description_Create>;
  delete: Maybe<NewsDocAccessFields_Description_Delete>;
  read: Maybe<NewsDocAccessFields_Description_Read>;
  update: Maybe<NewsDocAccessFields_Description_Update>;
};

export type NewsDocAccessFields_Description_Create = {
  __typename?: 'NewsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Description_Delete = {
  __typename?: 'NewsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Description_Read = {
  __typename?: 'NewsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Description_Update = {
  __typename?: 'NewsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Image = {
  __typename?: 'NewsDocAccessFields_image';
  create: Maybe<NewsDocAccessFields_Image_Create>;
  delete: Maybe<NewsDocAccessFields_Image_Delete>;
  read: Maybe<NewsDocAccessFields_Image_Read>;
  update: Maybe<NewsDocAccessFields_Image_Update>;
};

export type NewsDocAccessFields_Image_Create = {
  __typename?: 'NewsDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Image_Delete = {
  __typename?: 'NewsDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Image_Read = {
  __typename?: 'NewsDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Image_Update = {
  __typename?: 'NewsDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title = {
  __typename?: 'NewsDocAccessFields_title';
  create: Maybe<NewsDocAccessFields_Title_Create>;
  delete: Maybe<NewsDocAccessFields_Title_Delete>;
  read: Maybe<NewsDocAccessFields_Title_Read>;
  update: Maybe<NewsDocAccessFields_Title_Update>;
};

export type NewsDocAccessFields_Title_Create = {
  __typename?: 'NewsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Delete = {
  __typename?: 'NewsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Read = {
  __typename?: 'NewsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Update = {
  __typename?: 'NewsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt = {
  __typename?: 'NewsDocAccessFields_updatedAt';
  create: Maybe<NewsDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<NewsDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<NewsDocAccessFields_UpdatedAt_Read>;
  update: Maybe<NewsDocAccessFields_UpdatedAt_Update>;
};

export type NewsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'NewsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'NewsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'NewsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'NewsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields = {
  __typename?: 'NewsFields';
  Url: Maybe<NewsFields_Url>;
  createdAt: Maybe<NewsFields_CreatedAt>;
  date: Maybe<NewsFields_Date>;
  description: Maybe<NewsFields_Description>;
  image: Maybe<NewsFields_Image>;
  title: Maybe<NewsFields_Title>;
  updatedAt: Maybe<NewsFields_UpdatedAt>;
};

export type NewsFields_Url = {
  __typename?: 'NewsFields_Url';
  create: Maybe<NewsFields_Url_Create>;
  delete: Maybe<NewsFields_Url_Delete>;
  read: Maybe<NewsFields_Url_Read>;
  update: Maybe<NewsFields_Url_Update>;
};

export type NewsFields_Url_Create = {
  __typename?: 'NewsFields_Url_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Url_Delete = {
  __typename?: 'NewsFields_Url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Url_Read = {
  __typename?: 'NewsFields_Url_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Url_Update = {
  __typename?: 'NewsFields_Url_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt = {
  __typename?: 'NewsFields_createdAt';
  create: Maybe<NewsFields_CreatedAt_Create>;
  delete: Maybe<NewsFields_CreatedAt_Delete>;
  read: Maybe<NewsFields_CreatedAt_Read>;
  update: Maybe<NewsFields_CreatedAt_Update>;
};

export type NewsFields_CreatedAt_Create = {
  __typename?: 'NewsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Delete = {
  __typename?: 'NewsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Read = {
  __typename?: 'NewsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Update = {
  __typename?: 'NewsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Date = {
  __typename?: 'NewsFields_date';
  create: Maybe<NewsFields_Date_Create>;
  delete: Maybe<NewsFields_Date_Delete>;
  read: Maybe<NewsFields_Date_Read>;
  update: Maybe<NewsFields_Date_Update>;
};

export type NewsFields_Date_Create = {
  __typename?: 'NewsFields_date_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Date_Delete = {
  __typename?: 'NewsFields_date_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Date_Read = {
  __typename?: 'NewsFields_date_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Date_Update = {
  __typename?: 'NewsFields_date_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Description = {
  __typename?: 'NewsFields_description';
  create: Maybe<NewsFields_Description_Create>;
  delete: Maybe<NewsFields_Description_Delete>;
  read: Maybe<NewsFields_Description_Read>;
  update: Maybe<NewsFields_Description_Update>;
};

export type NewsFields_Description_Create = {
  __typename?: 'NewsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Description_Delete = {
  __typename?: 'NewsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Description_Read = {
  __typename?: 'NewsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Description_Update = {
  __typename?: 'NewsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Image = {
  __typename?: 'NewsFields_image';
  create: Maybe<NewsFields_Image_Create>;
  delete: Maybe<NewsFields_Image_Delete>;
  read: Maybe<NewsFields_Image_Read>;
  update: Maybe<NewsFields_Image_Update>;
};

export type NewsFields_Image_Create = {
  __typename?: 'NewsFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Image_Delete = {
  __typename?: 'NewsFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Image_Read = {
  __typename?: 'NewsFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Image_Update = {
  __typename?: 'NewsFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title = {
  __typename?: 'NewsFields_title';
  create: Maybe<NewsFields_Title_Create>;
  delete: Maybe<NewsFields_Title_Delete>;
  read: Maybe<NewsFields_Title_Read>;
  update: Maybe<NewsFields_Title_Update>;
};

export type NewsFields_Title_Create = {
  __typename?: 'NewsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Delete = {
  __typename?: 'NewsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Read = {
  __typename?: 'NewsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Update = {
  __typename?: 'NewsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt = {
  __typename?: 'NewsFields_updatedAt';
  create: Maybe<NewsFields_UpdatedAt_Create>;
  delete: Maybe<NewsFields_UpdatedAt_Delete>;
  read: Maybe<NewsFields_UpdatedAt_Read>;
  update: Maybe<NewsFields_UpdatedAt_Update>;
};

export type NewsFields_UpdatedAt_Create = {
  __typename?: 'NewsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Delete = {
  __typename?: 'NewsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Read = {
  __typename?: 'NewsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Update = {
  __typename?: 'NewsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsReadAccess = {
  __typename?: 'NewsReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsReadDocAccess = {
  __typename?: 'NewsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsUpdateAccess = {
  __typename?: 'NewsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsUpdateDocAccess = {
  __typename?: 'NewsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type News_Image_Alt_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Image_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Image_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Image_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Sizes__Thumbnail__Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Image_Sizes__Thumbnail__Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Image_Sizes__Thumbnail__MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Sizes__Thumbnail__Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Sizes__Thumbnail__Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Image_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Image_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Where = {
  AND: InputMaybe<Array<InputMaybe<News_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Image_Where_Or>>>;
  alt: InputMaybe<News_Image_Alt_Operator>;
  createdAt: InputMaybe<News_Image_CreatedAt_Operator>;
  filename: InputMaybe<News_Image_Filename_Operator>;
  filesize: InputMaybe<News_Image_Filesize_Operator>;
  height: InputMaybe<News_Image_Height_Operator>;
  id: InputMaybe<News_Image_Id_Operator>;
  mimeType: InputMaybe<News_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<News_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<News_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<News_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<News_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<News_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<News_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<News_Image_UpdatedAt_Operator>;
  url: InputMaybe<News_Image_Url_Operator>;
  width: InputMaybe<News_Image_Width_Operator>;
};

export type News_Image_Where_And = {
  AND: InputMaybe<Array<InputMaybe<News_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Image_Where_Or>>>;
  alt: InputMaybe<News_Image_Alt_Operator>;
  createdAt: InputMaybe<News_Image_CreatedAt_Operator>;
  filename: InputMaybe<News_Image_Filename_Operator>;
  filesize: InputMaybe<News_Image_Filesize_Operator>;
  height: InputMaybe<News_Image_Height_Operator>;
  id: InputMaybe<News_Image_Id_Operator>;
  mimeType: InputMaybe<News_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<News_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<News_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<News_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<News_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<News_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<News_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<News_Image_UpdatedAt_Operator>;
  url: InputMaybe<News_Image_Url_Operator>;
  width: InputMaybe<News_Image_Width_Operator>;
};

export type News_Image_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<News_Image_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Image_Where_Or>>>;
  alt: InputMaybe<News_Image_Alt_Operator>;
  createdAt: InputMaybe<News_Image_CreatedAt_Operator>;
  filename: InputMaybe<News_Image_Filename_Operator>;
  filesize: InputMaybe<News_Image_Filesize_Operator>;
  height: InputMaybe<News_Image_Height_Operator>;
  id: InputMaybe<News_Image_Id_Operator>;
  mimeType: InputMaybe<News_Image_MimeType_Operator>;
  sizes__thumbnail__filename: InputMaybe<News_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize: InputMaybe<News_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height: InputMaybe<News_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType: InputMaybe<News_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url: InputMaybe<News_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width: InputMaybe<News_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt: InputMaybe<News_Image_UpdatedAt_Operator>;
  url: InputMaybe<News_Image_Url_Operator>;
  width: InputMaybe<News_Image_Width_Operator>;
};

export type News_Image_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type News_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Date_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Description_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_Image_Operator = {
  equals: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
};

export type News_Title_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Where = {
  AND: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  Url: InputMaybe<News_Url_Operator>;
  createdAt: InputMaybe<News_CreatedAt_Operator>;
  date: InputMaybe<News_Date_Operator>;
  description: InputMaybe<News_Description_Operator>;
  id: InputMaybe<News_Id_Operator>;
  image: InputMaybe<News_Image_Operator>;
  title: InputMaybe<News_Title_Operator>;
  updatedAt: InputMaybe<News_UpdatedAt_Operator>;
};

export type News_Where_And = {
  AND: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  Url: InputMaybe<News_Url_Operator>;
  createdAt: InputMaybe<News_CreatedAt_Operator>;
  date: InputMaybe<News_Date_Operator>;
  description: InputMaybe<News_Description_Operator>;
  id: InputMaybe<News_Id_Operator>;
  image: InputMaybe<News_Image_Operator>;
  title: InputMaybe<News_Title_Operator>;
  updatedAt: InputMaybe<News_UpdatedAt_Operator>;
};

export type News_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  Url: InputMaybe<News_Url_Operator>;
  createdAt: InputMaybe<News_CreatedAt_Operator>;
  date: InputMaybe<News_Date_Operator>;
  description: InputMaybe<News_Description_Operator>;
  id: InputMaybe<News_Id_Operator>;
  image: InputMaybe<News_Image_Operator>;
  title: InputMaybe<News_Title_Operator>;
  updatedAt: InputMaybe<News_UpdatedAt_Operator>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  id: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo: Maybe<PayloadPreference_User_RelationTo>;
  value: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains: InputMaybe<Scalars['JSON']['input']>;
  equals: InputMaybe<Scalars['JSON']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  intersects: InputMaybe<Scalars['JSON']['input']>;
  like: InputMaybe<Scalars['JSON']['input']>;
  not_equals: InputMaybe<Scalars['JSON']['input']>;
  within: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id: InputMaybe<PayloadPreference_Id_Operator>;
  key: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user: InputMaybe<PayloadPreference_User_Relation>;
  value: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user: Maybe<PayloadPreferencesDocAccessFields_User>;
  value: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt: Maybe<PayloadPreferencesFields_CreatedAt>;
  key: Maybe<PayloadPreferencesFields_Key>;
  updatedAt: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user: Maybe<PayloadPreferencesFields_User>;
  value: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create: Maybe<PayloadPreferencesFields_Key_Create>;
  delete: Maybe<PayloadPreferencesFields_Key_Delete>;
  read: Maybe<PayloadPreferencesFields_Key_Read>;
  update: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create: Maybe<PayloadPreferencesFields_User_Create>;
  delete: Maybe<PayloadPreferencesFields_User_Delete>;
  read: Maybe<PayloadPreferencesFields_User_Read>;
  update: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create: Maybe<PayloadPreferencesFields_Value_Create>;
  delete: Maybe<PayloadPreferencesFields_Value_Delete>;
  read: Maybe<PayloadPreferencesFields_Value_Read>;
  update: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access: Maybe<Access>;
  AllTeam: Maybe<AllTeam>;
  AllTeams: Maybe<AllTeams>;
  File: Maybe<File>;
  Files: Maybe<Files>;
  HomeVideo: Maybe<HomeVideo>;
  HomeVideos: Maybe<HomeVideos>;
  Media: Maybe<Media>;
  Member: Maybe<Member>;
  Members: Maybe<Members>;
  News: Maybe<News>;
  PayloadPreference: Maybe<PayloadPreference>;
  PayloadPreferences: Maybe<PayloadPreferences>;
  Texture: Maybe<Texture>;
  Textures: Maybe<Textures>;
  User: Maybe<User>;
  Users: Maybe<Users>;
  allMedia: Maybe<AllMedia>;
  allNews: Maybe<AllNews>;
  docAccessAllTeam: Maybe<AllTeamDocAccess>;
  docAccessFile: Maybe<FileDocAccess>;
  docAccessHomeVideo: Maybe<HomeVideoDocAccess>;
  docAccessMedia: Maybe<MediaDocAccess>;
  docAccessMember: Maybe<MembersDocAccess>;
  docAccessNews: Maybe<NewsDocAccess>;
  docAccessPayloadPreference: Maybe<Payload_PreferencesDocAccess>;
  docAccessTexture: Maybe<TextureDocAccess>;
  docAccessUser: Maybe<UsersDocAccess>;
  initializedUser: Maybe<Scalars['Boolean']['output']>;
  meUser: Maybe<UsersMe>;
};


export type QueryAllTeamArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryAllTeamsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<AllTeam_Where>;
};


export type QueryFileArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryFilesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<File_Where>;
};


export type QueryHomeVideoArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryHomeVideosArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<HomeVideo_Where>;
};


export type QueryMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryMemberArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryMembersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Member_Where>;
};


export type QueryNewsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferenceArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<PayloadPreference_Where>;
};


export type QueryTextureArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryTexturesArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Texture_Where>;
};


export type QueryUserArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<Media_Where>;
};


export type QueryAllNewsArgs = {
  draft: InputMaybe<Scalars['Boolean']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
  where: InputMaybe<News_Where>;
};


export type QueryDocAccessAllTeamArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessFileArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessHomeVideoArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMemberArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessNewsArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessTextureArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type Texture = {
  __typename?: 'Texture';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  filesize: Maybe<Scalars['Float']['output']>;
  height: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  mimeType: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Float']['output']>;
};

export type TextureCreateAccess = {
  __typename?: 'TextureCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureCreateDocAccess = {
  __typename?: 'TextureCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureDeleteAccess = {
  __typename?: 'TextureDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureDeleteDocAccess = {
  __typename?: 'TextureDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureDocAccessFields = {
  __typename?: 'TextureDocAccessFields';
  createdAt: Maybe<TextureDocAccessFields_CreatedAt>;
  filename: Maybe<TextureDocAccessFields_Filename>;
  filesize: Maybe<TextureDocAccessFields_Filesize>;
  height: Maybe<TextureDocAccessFields_Height>;
  mimeType: Maybe<TextureDocAccessFields_MimeType>;
  updatedAt: Maybe<TextureDocAccessFields_UpdatedAt>;
  url: Maybe<TextureDocAccessFields_Url>;
  width: Maybe<TextureDocAccessFields_Width>;
};

export type TextureDocAccessFields_CreatedAt = {
  __typename?: 'TextureDocAccessFields_createdAt';
  create: Maybe<TextureDocAccessFields_CreatedAt_Create>;
  delete: Maybe<TextureDocAccessFields_CreatedAt_Delete>;
  read: Maybe<TextureDocAccessFields_CreatedAt_Read>;
  update: Maybe<TextureDocAccessFields_CreatedAt_Update>;
};

export type TextureDocAccessFields_CreatedAt_Create = {
  __typename?: 'TextureDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TextureDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_CreatedAt_Read = {
  __typename?: 'TextureDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_CreatedAt_Update = {
  __typename?: 'TextureDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filename = {
  __typename?: 'TextureDocAccessFields_filename';
  create: Maybe<TextureDocAccessFields_Filename_Create>;
  delete: Maybe<TextureDocAccessFields_Filename_Delete>;
  read: Maybe<TextureDocAccessFields_Filename_Read>;
  update: Maybe<TextureDocAccessFields_Filename_Update>;
};

export type TextureDocAccessFields_Filename_Create = {
  __typename?: 'TextureDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filename_Delete = {
  __typename?: 'TextureDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filename_Read = {
  __typename?: 'TextureDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filename_Update = {
  __typename?: 'TextureDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filesize = {
  __typename?: 'TextureDocAccessFields_filesize';
  create: Maybe<TextureDocAccessFields_Filesize_Create>;
  delete: Maybe<TextureDocAccessFields_Filesize_Delete>;
  read: Maybe<TextureDocAccessFields_Filesize_Read>;
  update: Maybe<TextureDocAccessFields_Filesize_Update>;
};

export type TextureDocAccessFields_Filesize_Create = {
  __typename?: 'TextureDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filesize_Delete = {
  __typename?: 'TextureDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filesize_Read = {
  __typename?: 'TextureDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Filesize_Update = {
  __typename?: 'TextureDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Height = {
  __typename?: 'TextureDocAccessFields_height';
  create: Maybe<TextureDocAccessFields_Height_Create>;
  delete: Maybe<TextureDocAccessFields_Height_Delete>;
  read: Maybe<TextureDocAccessFields_Height_Read>;
  update: Maybe<TextureDocAccessFields_Height_Update>;
};

export type TextureDocAccessFields_Height_Create = {
  __typename?: 'TextureDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Height_Delete = {
  __typename?: 'TextureDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Height_Read = {
  __typename?: 'TextureDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Height_Update = {
  __typename?: 'TextureDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_MimeType = {
  __typename?: 'TextureDocAccessFields_mimeType';
  create: Maybe<TextureDocAccessFields_MimeType_Create>;
  delete: Maybe<TextureDocAccessFields_MimeType_Delete>;
  read: Maybe<TextureDocAccessFields_MimeType_Read>;
  update: Maybe<TextureDocAccessFields_MimeType_Update>;
};

export type TextureDocAccessFields_MimeType_Create = {
  __typename?: 'TextureDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_MimeType_Delete = {
  __typename?: 'TextureDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_MimeType_Read = {
  __typename?: 'TextureDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_MimeType_Update = {
  __typename?: 'TextureDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_UpdatedAt = {
  __typename?: 'TextureDocAccessFields_updatedAt';
  create: Maybe<TextureDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<TextureDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<TextureDocAccessFields_UpdatedAt_Read>;
  update: Maybe<TextureDocAccessFields_UpdatedAt_Update>;
};

export type TextureDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TextureDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TextureDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TextureDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TextureDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Url = {
  __typename?: 'TextureDocAccessFields_url';
  create: Maybe<TextureDocAccessFields_Url_Create>;
  delete: Maybe<TextureDocAccessFields_Url_Delete>;
  read: Maybe<TextureDocAccessFields_Url_Read>;
  update: Maybe<TextureDocAccessFields_Url_Update>;
};

export type TextureDocAccessFields_Url_Create = {
  __typename?: 'TextureDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Url_Delete = {
  __typename?: 'TextureDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Url_Read = {
  __typename?: 'TextureDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Url_Update = {
  __typename?: 'TextureDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Width = {
  __typename?: 'TextureDocAccessFields_width';
  create: Maybe<TextureDocAccessFields_Width_Create>;
  delete: Maybe<TextureDocAccessFields_Width_Delete>;
  read: Maybe<TextureDocAccessFields_Width_Read>;
  update: Maybe<TextureDocAccessFields_Width_Update>;
};

export type TextureDocAccessFields_Width_Create = {
  __typename?: 'TextureDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Width_Delete = {
  __typename?: 'TextureDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Width_Read = {
  __typename?: 'TextureDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureDocAccessFields_Width_Update = {
  __typename?: 'TextureDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields = {
  __typename?: 'TextureFields';
  createdAt: Maybe<TextureFields_CreatedAt>;
  filename: Maybe<TextureFields_Filename>;
  filesize: Maybe<TextureFields_Filesize>;
  height: Maybe<TextureFields_Height>;
  mimeType: Maybe<TextureFields_MimeType>;
  updatedAt: Maybe<TextureFields_UpdatedAt>;
  url: Maybe<TextureFields_Url>;
  width: Maybe<TextureFields_Width>;
};

export type TextureFields_CreatedAt = {
  __typename?: 'TextureFields_createdAt';
  create: Maybe<TextureFields_CreatedAt_Create>;
  delete: Maybe<TextureFields_CreatedAt_Delete>;
  read: Maybe<TextureFields_CreatedAt_Read>;
  update: Maybe<TextureFields_CreatedAt_Update>;
};

export type TextureFields_CreatedAt_Create = {
  __typename?: 'TextureFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_CreatedAt_Delete = {
  __typename?: 'TextureFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_CreatedAt_Read = {
  __typename?: 'TextureFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_CreatedAt_Update = {
  __typename?: 'TextureFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filename = {
  __typename?: 'TextureFields_filename';
  create: Maybe<TextureFields_Filename_Create>;
  delete: Maybe<TextureFields_Filename_Delete>;
  read: Maybe<TextureFields_Filename_Read>;
  update: Maybe<TextureFields_Filename_Update>;
};

export type TextureFields_Filename_Create = {
  __typename?: 'TextureFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filename_Delete = {
  __typename?: 'TextureFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filename_Read = {
  __typename?: 'TextureFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filename_Update = {
  __typename?: 'TextureFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filesize = {
  __typename?: 'TextureFields_filesize';
  create: Maybe<TextureFields_Filesize_Create>;
  delete: Maybe<TextureFields_Filesize_Delete>;
  read: Maybe<TextureFields_Filesize_Read>;
  update: Maybe<TextureFields_Filesize_Update>;
};

export type TextureFields_Filesize_Create = {
  __typename?: 'TextureFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filesize_Delete = {
  __typename?: 'TextureFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filesize_Read = {
  __typename?: 'TextureFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Filesize_Update = {
  __typename?: 'TextureFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Height = {
  __typename?: 'TextureFields_height';
  create: Maybe<TextureFields_Height_Create>;
  delete: Maybe<TextureFields_Height_Delete>;
  read: Maybe<TextureFields_Height_Read>;
  update: Maybe<TextureFields_Height_Update>;
};

export type TextureFields_Height_Create = {
  __typename?: 'TextureFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Height_Delete = {
  __typename?: 'TextureFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Height_Read = {
  __typename?: 'TextureFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Height_Update = {
  __typename?: 'TextureFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_MimeType = {
  __typename?: 'TextureFields_mimeType';
  create: Maybe<TextureFields_MimeType_Create>;
  delete: Maybe<TextureFields_MimeType_Delete>;
  read: Maybe<TextureFields_MimeType_Read>;
  update: Maybe<TextureFields_MimeType_Update>;
};

export type TextureFields_MimeType_Create = {
  __typename?: 'TextureFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_MimeType_Delete = {
  __typename?: 'TextureFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_MimeType_Read = {
  __typename?: 'TextureFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_MimeType_Update = {
  __typename?: 'TextureFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_UpdatedAt = {
  __typename?: 'TextureFields_updatedAt';
  create: Maybe<TextureFields_UpdatedAt_Create>;
  delete: Maybe<TextureFields_UpdatedAt_Delete>;
  read: Maybe<TextureFields_UpdatedAt_Read>;
  update: Maybe<TextureFields_UpdatedAt_Update>;
};

export type TextureFields_UpdatedAt_Create = {
  __typename?: 'TextureFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_UpdatedAt_Delete = {
  __typename?: 'TextureFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_UpdatedAt_Read = {
  __typename?: 'TextureFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_UpdatedAt_Update = {
  __typename?: 'TextureFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Url = {
  __typename?: 'TextureFields_url';
  create: Maybe<TextureFields_Url_Create>;
  delete: Maybe<TextureFields_Url_Delete>;
  read: Maybe<TextureFields_Url_Read>;
  update: Maybe<TextureFields_Url_Update>;
};

export type TextureFields_Url_Create = {
  __typename?: 'TextureFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Url_Delete = {
  __typename?: 'TextureFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Url_Read = {
  __typename?: 'TextureFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Url_Update = {
  __typename?: 'TextureFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Width = {
  __typename?: 'TextureFields_width';
  create: Maybe<TextureFields_Width_Create>;
  delete: Maybe<TextureFields_Width_Delete>;
  read: Maybe<TextureFields_Width_Read>;
  update: Maybe<TextureFields_Width_Update>;
};

export type TextureFields_Width_Create = {
  __typename?: 'TextureFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Width_Delete = {
  __typename?: 'TextureFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Width_Read = {
  __typename?: 'TextureFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type TextureFields_Width_Update = {
  __typename?: 'TextureFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type TextureReadAccess = {
  __typename?: 'TextureReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureReadDocAccess = {
  __typename?: 'TextureReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureUpdateAccess = {
  __typename?: 'TextureUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type TextureUpdateDocAccess = {
  __typename?: 'TextureUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type Texture_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Texture_Filename_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Texture_Filesize_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Texture_Height_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Texture_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Texture_MimeType_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Texture_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type Texture_Url_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Texture_Where = {
  AND: InputMaybe<Array<InputMaybe<Texture_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Texture_Where_Or>>>;
  createdAt: InputMaybe<Texture_CreatedAt_Operator>;
  filename: InputMaybe<Texture_Filename_Operator>;
  filesize: InputMaybe<Texture_Filesize_Operator>;
  height: InputMaybe<Texture_Height_Operator>;
  id: InputMaybe<Texture_Id_Operator>;
  mimeType: InputMaybe<Texture_MimeType_Operator>;
  updatedAt: InputMaybe<Texture_UpdatedAt_Operator>;
  url: InputMaybe<Texture_Url_Operator>;
  width: InputMaybe<Texture_Width_Operator>;
};

export type Texture_Where_And = {
  AND: InputMaybe<Array<InputMaybe<Texture_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Texture_Where_Or>>>;
  createdAt: InputMaybe<Texture_CreatedAt_Operator>;
  filename: InputMaybe<Texture_Filename_Operator>;
  filesize: InputMaybe<Texture_Filesize_Operator>;
  height: InputMaybe<Texture_Height_Operator>;
  id: InputMaybe<Texture_Id_Operator>;
  mimeType: InputMaybe<Texture_MimeType_Operator>;
  updatedAt: InputMaybe<Texture_UpdatedAt_Operator>;
  url: InputMaybe<Texture_Url_Operator>;
  width: InputMaybe<Texture_Width_Operator>;
};

export type Texture_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<Texture_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<Texture_Where_Or>>>;
  createdAt: InputMaybe<Texture_CreatedAt_Operator>;
  filename: InputMaybe<Texture_Filename_Operator>;
  filesize: InputMaybe<Texture_Filesize_Operator>;
  height: InputMaybe<Texture_Height_Operator>;
  id: InputMaybe<Texture_Id_Operator>;
  mimeType: InputMaybe<Texture_MimeType_Operator>;
  updatedAt: InputMaybe<Texture_UpdatedAt_Operator>;
  url: InputMaybe<Texture_Url_Operator>;
  width: InputMaybe<Texture_Width_Operator>;
};

export type Texture_Width_Operator = {
  equals: InputMaybe<Scalars['Float']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal: InputMaybe<Scalars['Float']['input']>;
  less_than: InputMaybe<Scalars['Float']['input']>;
  less_than_equal: InputMaybe<Scalars['Float']['input']>;
  not_equals: InputMaybe<Scalars['Float']['input']>;
};

export type Textures = {
  __typename?: 'Textures';
  docs: Maybe<Array<Maybe<Texture>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  apiKey: Maybe<Scalars['String']['output']>;
  apiKeyIndex: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  enableAPIKey: Maybe<Scalars['Boolean']['output']>;
  hash: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  lockUntil: Maybe<Scalars['DateTime']['output']>;
  loginAttempts: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken: Maybe<Scalars['String']['output']>;
  salt: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type User_ApiKey_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains: InputMaybe<Scalars['EmailAddress']['input']>;
  equals: InputMaybe<Scalars['EmailAddress']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
  equals: InputMaybe<Scalars['Boolean']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  not_equals: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Id_Operator = {
  all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  equals: InputMaybe<Scalars['String']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like: InputMaybe<Scalars['String']['input']>;
  not_equals: InputMaybe<Scalars['String']['input']>;
  not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals: InputMaybe<Scalars['DateTime']['input']>;
  exists: InputMaybe<Scalars['Boolean']['input']>;
  greater_than: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  less_than: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal: InputMaybe<Scalars['DateTime']['input']>;
  like: InputMaybe<Scalars['DateTime']['input']>;
  not_equals: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey: InputMaybe<User_ApiKey_Operator>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  enableAPIKey: InputMaybe<User_EnableApiKey_Operator>;
  id: InputMaybe<User_Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey: InputMaybe<User_ApiKey_Operator>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  enableAPIKey: InputMaybe<User_EnableApiKey_Operator>;
  id: InputMaybe<User_Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey: InputMaybe<User_ApiKey_Operator>;
  createdAt: InputMaybe<User_CreatedAt_Operator>;
  email: InputMaybe<User_Email_Operator>;
  enableAPIKey: InputMaybe<User_EnableApiKey_Operator>;
  id: InputMaybe<User_Id_Operator>;
  updatedAt: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Maybe<Array<Maybe<User>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  apiKey: Maybe<UsersDocAccessFields_ApiKey>;
  createdAt: Maybe<UsersDocAccessFields_CreatedAt>;
  email: Maybe<UsersDocAccessFields_Email>;
  enableAPIKey: Maybe<UsersDocAccessFields_EnableApiKey>;
  password: Maybe<UsersDocAccessFields_Password>;
  updatedAt: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_ApiKey = {
  __typename?: 'UsersDocAccessFields_apiKey';
  create: Maybe<UsersDocAccessFields_ApiKey_Create>;
  delete: Maybe<UsersDocAccessFields_ApiKey_Delete>;
  read: Maybe<UsersDocAccessFields_ApiKey_Read>;
  update: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
  __typename?: 'UsersDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
  __typename?: 'UsersDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
  __typename?: 'UsersDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create: Maybe<UsersDocAccessFields_Email_Create>;
  delete: Maybe<UsersDocAccessFields_Email_Delete>;
  read: Maybe<UsersDocAccessFields_Email_Read>;
  update: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
  __typename?: 'UsersDocAccessFields_enableAPIKey';
  create: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
  delete: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
  read: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
  update: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create: Maybe<UsersDocAccessFields_Password_Create>;
  delete: Maybe<UsersDocAccessFields_Password_Delete>;
  read: Maybe<UsersDocAccessFields_Password_Read>;
  update: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  apiKey: Maybe<UsersFields_ApiKey>;
  createdAt: Maybe<UsersFields_CreatedAt>;
  email: Maybe<UsersFields_Email>;
  enableAPIKey: Maybe<UsersFields_EnableApiKey>;
  password: Maybe<UsersFields_Password>;
  updatedAt: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_ApiKey = {
  __typename?: 'UsersFields_apiKey';
  create: Maybe<UsersFields_ApiKey_Create>;
  delete: Maybe<UsersFields_ApiKey_Delete>;
  read: Maybe<UsersFields_ApiKey_Read>;
  update: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
  __typename?: 'UsersFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
  __typename?: 'UsersFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
  __typename?: 'UsersFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
  __typename?: 'UsersFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create: Maybe<UsersFields_CreatedAt_Create>;
  delete: Maybe<UsersFields_CreatedAt_Delete>;
  read: Maybe<UsersFields_CreatedAt_Read>;
  update: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create: Maybe<UsersFields_Email_Create>;
  delete: Maybe<UsersFields_Email_Delete>;
  read: Maybe<UsersFields_Email_Read>;
  update: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
  __typename?: 'UsersFields_enableAPIKey';
  create: Maybe<UsersFields_EnableApiKey_Create>;
  delete: Maybe<UsersFields_EnableApiKey_Delete>;
  read: Maybe<UsersFields_EnableApiKey_Read>;
  update: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
  __typename?: 'UsersFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
  __typename?: 'UsersFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
  __typename?: 'UsersFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
  __typename?: 'UsersFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create: Maybe<UsersFields_Password_Create>;
  delete: Maybe<UsersFields_Password_Delete>;
  read: Maybe<UsersFields_Password_Read>;
  update: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create: Maybe<UsersFields_UpdatedAt_Create>;
  delete: Maybe<UsersFields_UpdatedAt_Delete>;
  read: Maybe<UsersFields_UpdatedAt_Read>;
  update: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Maybe<Array<Maybe<Media>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type AllNews = {
  __typename?: 'allNews';
  docs: Maybe<Array<Maybe<News>>>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage: Maybe<Scalars['Boolean']['output']>;
  limit: Maybe<Scalars['Int']['output']>;
  nextPage: Maybe<Scalars['Int']['output']>;
  offset: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
  pagingCounter: Maybe<Scalars['Int']['output']>;
  prevPage: Maybe<Scalars['Int']['output']>;
  totalDocs: Maybe<Scalars['Int']['output']>;
  totalPages: Maybe<Scalars['Int']['output']>;
};

export type AllTeamAccess = {
  __typename?: 'allTeamAccess';
  create: Maybe<AllTeamCreateAccess>;
  delete: Maybe<AllTeamDeleteAccess>;
  fields: Maybe<AllTeamFields>;
  read: Maybe<AllTeamReadAccess>;
  update: Maybe<AllTeamUpdateAccess>;
};

export type AllTeamDocAccess = {
  __typename?: 'allTeamDocAccess';
  create: Maybe<AllTeamCreateDocAccess>;
  delete: Maybe<AllTeamDeleteDocAccess>;
  fields: Maybe<AllTeamDocAccessFields>;
  read: Maybe<AllTeamReadDocAccess>;
  update: Maybe<AllTeamUpdateDocAccess>;
};

export type FileAccess = {
  __typename?: 'fileAccess';
  create: Maybe<FileCreateAccess>;
  delete: Maybe<FileDeleteAccess>;
  fields: Maybe<FileFields>;
  read: Maybe<FileReadAccess>;
  update: Maybe<FileUpdateAccess>;
};

export type FileDocAccess = {
  __typename?: 'fileDocAccess';
  create: Maybe<FileCreateDocAccess>;
  delete: Maybe<FileDeleteDocAccess>;
  fields: Maybe<FileDocAccessFields>;
  read: Maybe<FileReadDocAccess>;
  update: Maybe<FileUpdateDocAccess>;
};

export type HomeVideoAccess = {
  __typename?: 'homeVideoAccess';
  create: Maybe<HomeVideoCreateAccess>;
  delete: Maybe<HomeVideoDeleteAccess>;
  fields: Maybe<HomeVideoFields>;
  read: Maybe<HomeVideoReadAccess>;
  update: Maybe<HomeVideoUpdateAccess>;
};

export type HomeVideoDocAccess = {
  __typename?: 'homeVideoDocAccess';
  create: Maybe<HomeVideoCreateDocAccess>;
  delete: Maybe<HomeVideoDeleteDocAccess>;
  fields: Maybe<HomeVideoDocAccessFields>;
  read: Maybe<HomeVideoReadDocAccess>;
  update: Maybe<HomeVideoUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create: Maybe<MediaCreateAccess>;
  delete: Maybe<MediaDeleteAccess>;
  fields: Maybe<MediaFields>;
  read: Maybe<MediaReadAccess>;
  update: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create: Maybe<MediaCreateDocAccess>;
  delete: Maybe<MediaDeleteDocAccess>;
  fields: Maybe<MediaDocAccessFields>;
  read: Maybe<MediaReadDocAccess>;
  update: Maybe<MediaUpdateDocAccess>;
};

export type MembersAccess = {
  __typename?: 'membersAccess';
  create: Maybe<MembersCreateAccess>;
  delete: Maybe<MembersDeleteAccess>;
  fields: Maybe<MembersFields>;
  read: Maybe<MembersReadAccess>;
  update: Maybe<MembersUpdateAccess>;
};

export type MembersDocAccess = {
  __typename?: 'membersDocAccess';
  create: Maybe<MembersCreateDocAccess>;
  delete: Maybe<MembersDeleteDocAccess>;
  fields: Maybe<MembersDocAccessFields>;
  read: Maybe<MembersReadDocAccess>;
  update: Maybe<MembersUpdateDocAccess>;
};

export type MutationAllTeamInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  photo: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationAllTeamUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  photo: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationFileInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationFileUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationHomeVideoInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  video: Scalars['String']['input'];
};

export type MutationHomeVideoUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  video: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  sizes: InputMaybe<MutationMedia_SizesInput>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  sizes: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  thumbnail: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  thumbnail: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMemberInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  mat: Scalars['String']['input'];
  name: Scalars['String']['input'];
  obj: Scalars['String']['input'];
  socials: InputMaybe<Array<MutationMember_SocialsInput>>;
  textures: InputMaybe<Array<InputMaybe<MutationMember_TexturesInput>>>;
  title: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationMemberUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  mat: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  obj: InputMaybe<Scalars['String']['input']>;
  socials: InputMaybe<Array<InputMaybe<MutationMemberUpdate_SocialsInput>>>;
  textures: InputMaybe<Array<InputMaybe<MutationMemberUpdate_TexturesInput>>>;
  title: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationMemberUpdate_SocialsInput = {
  email: InputMaybe<Scalars['String']['input']>;
  facebook: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  instagram: InputMaybe<Scalars['String']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  twitter: InputMaybe<Scalars['String']['input']>;
};

export type MutationMemberUpdate_TexturesInput = {
  id: InputMaybe<Scalars['String']['input']>;
  tex1: InputMaybe<Scalars['String']['input']>;
  tex2: InputMaybe<Scalars['String']['input']>;
  tex3: InputMaybe<Scalars['String']['input']>;
  tex4: InputMaybe<Scalars['String']['input']>;
};

export type MutationMember_SocialsInput = {
  email: InputMaybe<Scalars['String']['input']>;
  facebook: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  instagram: InputMaybe<Scalars['String']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  twitter: InputMaybe<Scalars['String']['input']>;
};

export type MutationMember_TexturesInput = {
  id: InputMaybe<Scalars['String']['input']>;
  tex1: InputMaybe<Scalars['String']['input']>;
  tex2: InputMaybe<Scalars['String']['input']>;
  tex3: InputMaybe<Scalars['String']['input']>;
  tex4: InputMaybe<Scalars['String']['input']>;
};

export type MutationNewsInput = {
  Url: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationNewsUpdateInput = {
  Url: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  date: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  key: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  key: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  user: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationTextureInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationTextureUpdateInput = {
  createdAt: InputMaybe<Scalars['String']['input']>;
  filename: InputMaybe<Scalars['String']['input']>;
  filesize: InputMaybe<Scalars['Float']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type MutationUserInput = {
  apiKey: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enableAPIKey: InputMaybe<Scalars['Boolean']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  lockUntil: InputMaybe<Scalars['String']['input']>;
  loginAttempts: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  salt: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  apiKey: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  enableAPIKey: InputMaybe<Scalars['Boolean']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  lockUntil: InputMaybe<Scalars['String']['input']>;
  loginAttempts: InputMaybe<Scalars['Float']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  salt: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['String']['input']>;
};

export type NewsAccess = {
  __typename?: 'newsAccess';
  create: Maybe<NewsCreateAccess>;
  delete: Maybe<NewsDeleteAccess>;
  fields: Maybe<NewsFields>;
  read: Maybe<NewsReadAccess>;
  update: Maybe<NewsUpdateAccess>;
};

export type NewsDocAccess = {
  __typename?: 'newsDocAccess';
  create: Maybe<NewsCreateDocAccess>;
  delete: Maybe<NewsDeleteDocAccess>;
  fields: Maybe<NewsDocAccessFields>;
  read: Maybe<NewsReadDocAccess>;
  update: Maybe<NewsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create: Maybe<PayloadPreferencesCreateAccess>;
  delete: Maybe<PayloadPreferencesDeleteAccess>;
  fields: Maybe<PayloadPreferencesFields>;
  read: Maybe<PayloadPreferencesReadAccess>;
  update: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create: Maybe<PayloadPreferencesCreateDocAccess>;
  delete: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields: Maybe<PayloadPreferencesDocAccessFields>;
  read: Maybe<PayloadPreferencesReadDocAccess>;
  update: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type TextureAccess = {
  __typename?: 'textureAccess';
  create: Maybe<TextureCreateAccess>;
  delete: Maybe<TextureDeleteAccess>;
  fields: Maybe<TextureFields>;
  read: Maybe<TextureReadAccess>;
  update: Maybe<TextureUpdateAccess>;
};

export type TextureDocAccess = {
  __typename?: 'textureDocAccess';
  create: Maybe<TextureCreateDocAccess>;
  delete: Maybe<TextureDeleteDocAccess>;
  fields: Maybe<TextureDocAccessFields>;
  read: Maybe<TextureReadDocAccess>;
  update: Maybe<TextureUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create: Maybe<UsersCreateAccess>;
  delete: Maybe<UsersDeleteAccess>;
  fields: Maybe<UsersFields>;
  read: Maybe<UsersReadAccess>;
  unlock: Maybe<UsersUnlockAccess>;
  update: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create: Maybe<UsersCreateDocAccess>;
  delete: Maybe<UsersDeleteDocAccess>;
  fields: Maybe<UsersDocAccessFields>;
  read: Maybe<UsersReadDocAccess>;
  unlock: Maybe<UsersUnlockDocAccess>;
  update: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp: Maybe<Scalars['Int']['output']>;
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection: Maybe<Scalars['String']['output']>;
  exp: Maybe<Scalars['Int']['output']>;
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp: Maybe<Scalars['Int']['output']>;
  refreshedToken: Maybe<Scalars['String']['output']>;
  user: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type GetTeamDescriptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeamDescriptionsQuery = { __typename?: 'Query', AllTeams: { __typename?: 'AllTeams', docs: Array<{ __typename?: 'AllTeam', id: string | null, description: string, photo: { __typename?: 'Media', filename: string | null, url: string | null } } | null> | null } | null };

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { __typename?: 'Query', allNews: { __typename?: 'allNews', docs: Array<{ __typename?: 'News', id: string | null, title: string, description: string, date: any, Url: string, image: { __typename?: 'Media', id: string | null, filename: string | null, url: string | null } } | null> | null } | null };

export type GetAllTeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamMembersQuery = { __typename?: 'Query', Members: { __typename?: 'Members', docs: Array<{ __typename?: 'Member', id: string | null, name: string, title: string, description: string, socials: Array<{ __typename?: 'Member_Socials', email: any | null, facebook: string | null, linkedin: string | null, twitter: string | null }>, image: { __typename?: 'Media', filename: string | null, url: string | null, id: string | null }, obj: { __typename?: 'File', url: string | null }, mat: { __typename?: 'File', url: string | null } } | null> | null } | null };

export type GetHomeVideoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeVideoQuery = { __typename?: 'Query', HomeVideos: { __typename?: 'HomeVideos', docs: Array<{ __typename?: 'HomeVideo', video: { __typename?: 'File', url: string | null, filename: string | null, id: string | null } } | null> | null } | null };


export const GetTeamDescriptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeamDescriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AllTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeamDescriptionsQuery, GetTeamDescriptionsQueryVariables>;
export const GetAllNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Url"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const GetAllTeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTeamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"obj"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTeamMembersQuery, GetAllTeamMembersQueryVariables>;
export const GetHomeVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHomeVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomeVideos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomeVideoQuery, GetHomeVideoQueryVariables>;