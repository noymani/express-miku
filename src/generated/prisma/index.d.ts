
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Mangas
 * 
 */
export type Mangas = $Result.DefaultSelection<Prisma.$MangasPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model MangasOnTypes
 * 
 */
export type MangasOnTypes = $Result.DefaultSelection<Prisma.$MangasOnTypesPayload>
/**
 * Model MangaCh
 * 
 */
export type MangaCh = $Result.DefaultSelection<Prisma.$MangaChPayload>
/**
 * Model MangaChImg
 * 
 */
export type MangaChImg = $Result.DefaultSelection<Prisma.$MangaChImgPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangas`: Exposes CRUD operations for the **Mangas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mangases
    * const mangases = await prisma.mangas.findMany()
    * ```
    */
  get mangas(): Prisma.MangasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangasOnTypes`: Exposes CRUD operations for the **MangasOnTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangasOnTypes
    * const mangasOnTypes = await prisma.mangasOnTypes.findMany()
    * ```
    */
  get mangasOnTypes(): Prisma.MangasOnTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangaCh`: Exposes CRUD operations for the **MangaCh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangaChes
    * const mangaChes = await prisma.mangaCh.findMany()
    * ```
    */
  get mangaCh(): Prisma.MangaChDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangaChImg`: Exposes CRUD operations for the **MangaChImg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangaChImgs
    * const mangaChImgs = await prisma.mangaChImg.findMany()
    * ```
    */
  get mangaChImg(): Prisma.MangaChImgDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Mangas: 'Mangas',
    Type: 'Type',
    MangasOnTypes: 'MangasOnTypes',
    MangaCh: 'MangaCh',
    MangaChImg: 'MangaChImg'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "mangas" | "type" | "mangasOnTypes" | "mangaCh" | "mangaChImg"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Mangas: {
        payload: Prisma.$MangasPayload<ExtArgs>
        fields: Prisma.MangasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          findFirst: {
            args: Prisma.MangasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          findMany: {
            args: Prisma.MangasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>[]
          }
          create: {
            args: Prisma.MangasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          createMany: {
            args: Prisma.MangasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>[]
          }
          delete: {
            args: Prisma.MangasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          update: {
            args: Prisma.MangasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          deleteMany: {
            args: Prisma.MangasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>[]
          }
          upsert: {
            args: Prisma.MangasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasPayload>
          }
          aggregate: {
            args: Prisma.MangasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangas>
          }
          groupBy: {
            args: Prisma.MangasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangasCountArgs<ExtArgs>
            result: $Utils.Optional<MangasCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      MangasOnTypes: {
        payload: Prisma.$MangasOnTypesPayload<ExtArgs>
        fields: Prisma.MangasOnTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangasOnTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangasOnTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          findFirst: {
            args: Prisma.MangasOnTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangasOnTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          findMany: {
            args: Prisma.MangasOnTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>[]
          }
          create: {
            args: Prisma.MangasOnTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          createMany: {
            args: Prisma.MangasOnTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangasOnTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>[]
          }
          delete: {
            args: Prisma.MangasOnTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          update: {
            args: Prisma.MangasOnTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          deleteMany: {
            args: Prisma.MangasOnTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangasOnTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangasOnTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>[]
          }
          upsert: {
            args: Prisma.MangasOnTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangasOnTypesPayload>
          }
          aggregate: {
            args: Prisma.MangasOnTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangasOnTypes>
          }
          groupBy: {
            args: Prisma.MangasOnTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangasOnTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangasOnTypesCountArgs<ExtArgs>
            result: $Utils.Optional<MangasOnTypesCountAggregateOutputType> | number
          }
        }
      }
      MangaCh: {
        payload: Prisma.$MangaChPayload<ExtArgs>
        fields: Prisma.MangaChFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaChFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaChFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          findFirst: {
            args: Prisma.MangaChFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaChFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          findMany: {
            args: Prisma.MangaChFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>[]
          }
          create: {
            args: Prisma.MangaChCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          createMany: {
            args: Prisma.MangaChCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaChCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>[]
          }
          delete: {
            args: Prisma.MangaChDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          update: {
            args: Prisma.MangaChUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          deleteMany: {
            args: Prisma.MangaChDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaChUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaChUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>[]
          }
          upsert: {
            args: Prisma.MangaChUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChPayload>
          }
          aggregate: {
            args: Prisma.MangaChAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangaCh>
          }
          groupBy: {
            args: Prisma.MangaChGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaChGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaChCountArgs<ExtArgs>
            result: $Utils.Optional<MangaChCountAggregateOutputType> | number
          }
        }
      }
      MangaChImg: {
        payload: Prisma.$MangaChImgPayload<ExtArgs>
        fields: Prisma.MangaChImgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaChImgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaChImgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          findFirst: {
            args: Prisma.MangaChImgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaChImgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          findMany: {
            args: Prisma.MangaChImgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>[]
          }
          create: {
            args: Prisma.MangaChImgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          createMany: {
            args: Prisma.MangaChImgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaChImgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>[]
          }
          delete: {
            args: Prisma.MangaChImgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          update: {
            args: Prisma.MangaChImgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          deleteMany: {
            args: Prisma.MangaChImgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaChImgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaChImgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>[]
          }
          upsert: {
            args: Prisma.MangaChImgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaChImgPayload>
          }
          aggregate: {
            args: Prisma.MangaChImgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangaChImg>
          }
          groupBy: {
            args: Prisma.MangaChImgGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaChImgGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaChImgCountArgs<ExtArgs>
            result: $Utils.Optional<MangaChImgCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    mangas?: MangasOmit
    type?: TypeOmit
    mangasOnTypes?: MangasOnTypesOmit
    mangaCh?: MangaChOmit
    mangaChImg?: MangaChImgOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type MangasCountOutputType
   */

  export type MangasCountOutputType = {
    mangaCh: number
    types: number
  }

  export type MangasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangaCh?: boolean | MangasCountOutputTypeCountMangaChArgs
    types?: boolean | MangasCountOutputTypeCountTypesArgs
  }

  // Custom InputTypes
  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasCountOutputType
     */
    select?: MangasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeCountMangaChArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaChWhereInput
  }

  /**
   * MangasCountOutputType without action
   */
  export type MangasCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasOnTypesWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    Mangas: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mangas?: boolean | TypeCountOutputTypeCountMangasArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasOnTypesWhereInput
  }


  /**
   * Count Type MangaChCountOutputType
   */

  export type MangaChCountOutputType = {
    mangaChImg: number
  }

  export type MangaChCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangaChImg?: boolean | MangaChCountOutputTypeCountMangaChImgArgs
  }

  // Custom InputTypes
  /**
   * MangaChCountOutputType without action
   */
  export type MangaChCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChCountOutputType
     */
    select?: MangaChCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MangaChCountOutputType without action
   */
  export type MangaChCountOutputTypeCountMangaChImgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaChImgWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hashedPassword: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashedPassword", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hashedPassword: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    authorId: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    published: number
    authorId: number
    updateAt: number
    create_at: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
    updateAt?: true
    create_at?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
    updateAt?: true
    create_at?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    authorId?: true
    updateAt?: true
    create_at?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    published: boolean | null
    authorId: string
    updateAt: Date
    create_at: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    updateAt?: boolean
    create_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    updateAt?: boolean
    create_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    updateAt?: boolean
    create_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    updateAt?: boolean
    create_at?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "published" | "authorId" | "updateAt" | "create_at", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      published: boolean | null
      authorId: string
      updateAt: Date
      create_at: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly updateAt: FieldRef<"Post", 'DateTime'>
    readonly create_at: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Mangas
   */

  export type AggregateMangas = {
    _count: MangasCountAggregateOutputType | null
    _min: MangasMinAggregateOutputType | null
    _max: MangasMaxAggregateOutputType | null
  }

  export type MangasMinAggregateOutputType = {
    id: string | null
    mangaId: string | null
    mangaImg: string | null
    mangaImgData: Uint8Array | null
    url: string | null
    mangaTitle: string | null
    storyName: string | null
    category: string | null
    subject: string | null
    painter: string | null
    language: string | null
    charecter: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type MangasMaxAggregateOutputType = {
    id: string | null
    mangaId: string | null
    mangaImg: string | null
    mangaImgData: Uint8Array | null
    url: string | null
    mangaTitle: string | null
    storyName: string | null
    category: string | null
    subject: string | null
    painter: string | null
    language: string | null
    charecter: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type MangasCountAggregateOutputType = {
    id: number
    mangaId: number
    mangaImg: number
    mangaImgData: number
    url: number
    mangaTitle: number
    storyName: number
    category: number
    subject: number
    painter: number
    language: number
    charecter: number
    updateAt: number
    create_at: number
    _all: number
  }


  export type MangasMinAggregateInputType = {
    id?: true
    mangaId?: true
    mangaImg?: true
    mangaImgData?: true
    url?: true
    mangaTitle?: true
    storyName?: true
    category?: true
    subject?: true
    painter?: true
    language?: true
    charecter?: true
    updateAt?: true
    create_at?: true
  }

  export type MangasMaxAggregateInputType = {
    id?: true
    mangaId?: true
    mangaImg?: true
    mangaImgData?: true
    url?: true
    mangaTitle?: true
    storyName?: true
    category?: true
    subject?: true
    painter?: true
    language?: true
    charecter?: true
    updateAt?: true
    create_at?: true
  }

  export type MangasCountAggregateInputType = {
    id?: true
    mangaId?: true
    mangaImg?: true
    mangaImgData?: true
    url?: true
    mangaTitle?: true
    storyName?: true
    category?: true
    subject?: true
    painter?: true
    language?: true
    charecter?: true
    updateAt?: true
    create_at?: true
    _all?: true
  }

  export type MangasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mangas to aggregate.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mangases
    **/
    _count?: true | MangasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangasMaxAggregateInputType
  }

  export type GetMangasAggregateType<T extends MangasAggregateArgs> = {
        [P in keyof T & keyof AggregateMangas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangas[P]>
      : GetScalarType<T[P], AggregateMangas[P]>
  }




  export type MangasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasWhereInput
    orderBy?: MangasOrderByWithAggregationInput | MangasOrderByWithAggregationInput[]
    by: MangasScalarFieldEnum[] | MangasScalarFieldEnum
    having?: MangasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangasCountAggregateInputType | true
    _min?: MangasMinAggregateInputType
    _max?: MangasMaxAggregateInputType
  }

  export type MangasGroupByOutputType = {
    id: string
    mangaId: string
    mangaImg: string
    mangaImgData: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt: Date
    create_at: Date
    _count: MangasCountAggregateOutputType | null
    _min: MangasMinAggregateOutputType | null
    _max: MangasMaxAggregateOutputType | null
  }

  type GetMangasGroupByPayload<T extends MangasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangasGroupByOutputType[P]>
            : GetScalarType<T[P], MangasGroupByOutputType[P]>
        }
      >
    >


  export type MangasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaId?: boolean
    mangaImg?: boolean
    mangaImgData?: boolean
    url?: boolean
    mangaTitle?: boolean
    storyName?: boolean
    category?: boolean
    subject?: boolean
    painter?: boolean
    language?: boolean
    charecter?: boolean
    updateAt?: boolean
    create_at?: boolean
    mangaCh?: boolean | Mangas$mangaChArgs<ExtArgs>
    types?: boolean | Mangas$typesArgs<ExtArgs>
    _count?: boolean | MangasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangas"]>

  export type MangasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaId?: boolean
    mangaImg?: boolean
    mangaImgData?: boolean
    url?: boolean
    mangaTitle?: boolean
    storyName?: boolean
    category?: boolean
    subject?: boolean
    painter?: boolean
    language?: boolean
    charecter?: boolean
    updateAt?: boolean
    create_at?: boolean
  }, ExtArgs["result"]["mangas"]>

  export type MangasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaId?: boolean
    mangaImg?: boolean
    mangaImgData?: boolean
    url?: boolean
    mangaTitle?: boolean
    storyName?: boolean
    category?: boolean
    subject?: boolean
    painter?: boolean
    language?: boolean
    charecter?: boolean
    updateAt?: boolean
    create_at?: boolean
  }, ExtArgs["result"]["mangas"]>

  export type MangasSelectScalar = {
    id?: boolean
    mangaId?: boolean
    mangaImg?: boolean
    mangaImgData?: boolean
    url?: boolean
    mangaTitle?: boolean
    storyName?: boolean
    category?: boolean
    subject?: boolean
    painter?: boolean
    language?: boolean
    charecter?: boolean
    updateAt?: boolean
    create_at?: boolean
  }

  export type MangasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mangaId" | "mangaImg" | "mangaImgData" | "url" | "mangaTitle" | "storyName" | "category" | "subject" | "painter" | "language" | "charecter" | "updateAt" | "create_at", ExtArgs["result"]["mangas"]>
  export type MangasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangaCh?: boolean | Mangas$mangaChArgs<ExtArgs>
    types?: boolean | Mangas$typesArgs<ExtArgs>
    _count?: boolean | MangasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MangasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MangasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MangasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mangas"
    objects: {
      mangaCh: Prisma.$MangaChPayload<ExtArgs>[]
      types: Prisma.$MangasOnTypesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mangaId: string
      mangaImg: string
      mangaImgData: Uint8Array | null
      url: string
      mangaTitle: string
      storyName: string
      category: string
      subject: string
      painter: string
      language: string
      charecter: string
      updateAt: Date
      create_at: Date
    }, ExtArgs["result"]["mangas"]>
    composites: {}
  }

  type MangasGetPayload<S extends boolean | null | undefined | MangasDefaultArgs> = $Result.GetResult<Prisma.$MangasPayload, S>

  type MangasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangasCountAggregateInputType | true
    }

  export interface MangasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mangas'], meta: { name: 'Mangas' } }
    /**
     * Find zero or one Mangas that matches the filter.
     * @param {MangasFindUniqueArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangasFindUniqueArgs>(args: SelectSubset<T, MangasFindUniqueArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mangas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangasFindUniqueOrThrowArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangasFindUniqueOrThrowArgs>(args: SelectSubset<T, MangasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mangas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindFirstArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangasFindFirstArgs>(args?: SelectSubset<T, MangasFindFirstArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mangas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindFirstOrThrowArgs} args - Arguments to find a Mangas
     * @example
     * // Get one Mangas
     * const mangas = await prisma.mangas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangasFindFirstOrThrowArgs>(args?: SelectSubset<T, MangasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mangases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mangases
     * const mangases = await prisma.mangas.findMany()
     * 
     * // Get first 10 Mangases
     * const mangases = await prisma.mangas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangasWithIdOnly = await prisma.mangas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangasFindManyArgs>(args?: SelectSubset<T, MangasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mangas.
     * @param {MangasCreateArgs} args - Arguments to create a Mangas.
     * @example
     * // Create one Mangas
     * const Mangas = await prisma.mangas.create({
     *   data: {
     *     // ... data to create a Mangas
     *   }
     * })
     * 
     */
    create<T extends MangasCreateArgs>(args: SelectSubset<T, MangasCreateArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mangases.
     * @param {MangasCreateManyArgs} args - Arguments to create many Mangases.
     * @example
     * // Create many Mangases
     * const mangas = await prisma.mangas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangasCreateManyArgs>(args?: SelectSubset<T, MangasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mangases and returns the data saved in the database.
     * @param {MangasCreateManyAndReturnArgs} args - Arguments to create many Mangases.
     * @example
     * // Create many Mangases
     * const mangas = await prisma.mangas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mangases and only return the `id`
     * const mangasWithIdOnly = await prisma.mangas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangasCreateManyAndReturnArgs>(args?: SelectSubset<T, MangasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mangas.
     * @param {MangasDeleteArgs} args - Arguments to delete one Mangas.
     * @example
     * // Delete one Mangas
     * const Mangas = await prisma.mangas.delete({
     *   where: {
     *     // ... filter to delete one Mangas
     *   }
     * })
     * 
     */
    delete<T extends MangasDeleteArgs>(args: SelectSubset<T, MangasDeleteArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mangas.
     * @param {MangasUpdateArgs} args - Arguments to update one Mangas.
     * @example
     * // Update one Mangas
     * const mangas = await prisma.mangas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangasUpdateArgs>(args: SelectSubset<T, MangasUpdateArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mangases.
     * @param {MangasDeleteManyArgs} args - Arguments to filter Mangases to delete.
     * @example
     * // Delete a few Mangases
     * const { count } = await prisma.mangas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangasDeleteManyArgs>(args?: SelectSubset<T, MangasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mangases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mangases
     * const mangas = await prisma.mangas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangasUpdateManyArgs>(args: SelectSubset<T, MangasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mangases and returns the data updated in the database.
     * @param {MangasUpdateManyAndReturnArgs} args - Arguments to update many Mangases.
     * @example
     * // Update many Mangases
     * const mangas = await prisma.mangas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mangases and only return the `id`
     * const mangasWithIdOnly = await prisma.mangas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangasUpdateManyAndReturnArgs>(args: SelectSubset<T, MangasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mangas.
     * @param {MangasUpsertArgs} args - Arguments to update or create a Mangas.
     * @example
     * // Update or create a Mangas
     * const mangas = await prisma.mangas.upsert({
     *   create: {
     *     // ... data to create a Mangas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mangas we want to update
     *   }
     * })
     */
    upsert<T extends MangasUpsertArgs>(args: SelectSubset<T, MangasUpsertArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mangases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasCountArgs} args - Arguments to filter Mangases to count.
     * @example
     * // Count the number of Mangases
     * const count = await prisma.mangas.count({
     *   where: {
     *     // ... the filter for the Mangases we want to count
     *   }
     * })
    **/
    count<T extends MangasCountArgs>(
      args?: Subset<T, MangasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangasAggregateArgs>(args: Subset<T, MangasAggregateArgs>): Prisma.PrismaPromise<GetMangasAggregateType<T>>

    /**
     * Group by Mangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangasGroupByArgs['orderBy'] }
        : { orderBy?: MangasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mangas model
   */
  readonly fields: MangasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mangas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mangaCh<T extends Mangas$mangaChArgs<ExtArgs> = {}>(args?: Subset<T, Mangas$mangaChArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    types<T extends Mangas$typesArgs<ExtArgs> = {}>(args?: Subset<T, Mangas$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mangas model
   */
  interface MangasFieldRefs {
    readonly id: FieldRef<"Mangas", 'String'>
    readonly mangaId: FieldRef<"Mangas", 'String'>
    readonly mangaImg: FieldRef<"Mangas", 'String'>
    readonly mangaImgData: FieldRef<"Mangas", 'Bytes'>
    readonly url: FieldRef<"Mangas", 'String'>
    readonly mangaTitle: FieldRef<"Mangas", 'String'>
    readonly storyName: FieldRef<"Mangas", 'String'>
    readonly category: FieldRef<"Mangas", 'String'>
    readonly subject: FieldRef<"Mangas", 'String'>
    readonly painter: FieldRef<"Mangas", 'String'>
    readonly language: FieldRef<"Mangas", 'String'>
    readonly charecter: FieldRef<"Mangas", 'String'>
    readonly updateAt: FieldRef<"Mangas", 'DateTime'>
    readonly create_at: FieldRef<"Mangas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mangas findUnique
   */
  export type MangasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas findUniqueOrThrow
   */
  export type MangasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas findFirst
   */
  export type MangasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mangases.
     */
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas findFirstOrThrow
   */
  export type MangasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangas to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mangases.
     */
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas findMany
   */
  export type MangasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter, which Mangases to fetch.
     */
    where?: MangasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mangases to fetch.
     */
    orderBy?: MangasOrderByWithRelationInput | MangasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mangases.
     */
    cursor?: MangasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mangases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mangases.
     */
    skip?: number
    distinct?: MangasScalarFieldEnum | MangasScalarFieldEnum[]
  }

  /**
   * Mangas create
   */
  export type MangasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The data needed to create a Mangas.
     */
    data: XOR<MangasCreateInput, MangasUncheckedCreateInput>
  }

  /**
   * Mangas createMany
   */
  export type MangasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mangases.
     */
    data: MangasCreateManyInput | MangasCreateManyInput[]
  }

  /**
   * Mangas createManyAndReturn
   */
  export type MangasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * The data used to create many Mangases.
     */
    data: MangasCreateManyInput | MangasCreateManyInput[]
  }

  /**
   * Mangas update
   */
  export type MangasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The data needed to update a Mangas.
     */
    data: XOR<MangasUpdateInput, MangasUncheckedUpdateInput>
    /**
     * Choose, which Mangas to update.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas updateMany
   */
  export type MangasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mangases.
     */
    data: XOR<MangasUpdateManyMutationInput, MangasUncheckedUpdateManyInput>
    /**
     * Filter which Mangases to update
     */
    where?: MangasWhereInput
    /**
     * Limit how many Mangases to update.
     */
    limit?: number
  }

  /**
   * Mangas updateManyAndReturn
   */
  export type MangasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * The data used to update Mangases.
     */
    data: XOR<MangasUpdateManyMutationInput, MangasUncheckedUpdateManyInput>
    /**
     * Filter which Mangases to update
     */
    where?: MangasWhereInput
    /**
     * Limit how many Mangases to update.
     */
    limit?: number
  }

  /**
   * Mangas upsert
   */
  export type MangasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * The filter to search for the Mangas to update in case it exists.
     */
    where: MangasWhereUniqueInput
    /**
     * In case the Mangas found by the `where` argument doesn't exist, create a new Mangas with this data.
     */
    create: XOR<MangasCreateInput, MangasUncheckedCreateInput>
    /**
     * In case the Mangas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangasUpdateInput, MangasUncheckedUpdateInput>
  }

  /**
   * Mangas delete
   */
  export type MangasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
    /**
     * Filter which Mangas to delete.
     */
    where: MangasWhereUniqueInput
  }

  /**
   * Mangas deleteMany
   */
  export type MangasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mangases to delete
     */
    where?: MangasWhereInput
    /**
     * Limit how many Mangases to delete.
     */
    limit?: number
  }

  /**
   * Mangas.mangaCh
   */
  export type Mangas$mangaChArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    where?: MangaChWhereInput
    orderBy?: MangaChOrderByWithRelationInput | MangaChOrderByWithRelationInput[]
    cursor?: MangaChWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaChScalarFieldEnum | MangaChScalarFieldEnum[]
  }

  /**
   * Mangas.types
   */
  export type Mangas$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    where?: MangasOnTypesWhereInput
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    cursor?: MangasOnTypesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangasOnTypesScalarFieldEnum | MangasOnTypesScalarFieldEnum[]
  }

  /**
   * Mangas without action
   */
  export type MangasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mangas
     */
    select?: MangasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mangas
     */
    omit?: MangasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Mangas?: boolean | Type$MangasArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mangas?: boolean | Type$MangasArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      Mangas: Prisma.$MangasOnTypesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mangas<T extends Type$MangasArgs<ExtArgs> = {}>(args?: Subset<T, Type$MangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.Mangas
   */
  export type Type$MangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    where?: MangasOnTypesWhereInput
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    cursor?: MangasOnTypesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangasOnTypesScalarFieldEnum | MangasOnTypesScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model MangasOnTypes
   */

  export type AggregateMangasOnTypes = {
    _count: MangasOnTypesCountAggregateOutputType | null
    _avg: MangasOnTypesAvgAggregateOutputType | null
    _sum: MangasOnTypesSumAggregateOutputType | null
    _min: MangasOnTypesMinAggregateOutputType | null
    _max: MangasOnTypesMaxAggregateOutputType | null
  }

  export type MangasOnTypesAvgAggregateOutputType = {
    typeId: number | null
  }

  export type MangasOnTypesSumAggregateOutputType = {
    typeId: number | null
  }

  export type MangasOnTypesMinAggregateOutputType = {
    mangasId: string | null
    typeId: number | null
  }

  export type MangasOnTypesMaxAggregateOutputType = {
    mangasId: string | null
    typeId: number | null
  }

  export type MangasOnTypesCountAggregateOutputType = {
    mangasId: number
    typeId: number
    _all: number
  }


  export type MangasOnTypesAvgAggregateInputType = {
    typeId?: true
  }

  export type MangasOnTypesSumAggregateInputType = {
    typeId?: true
  }

  export type MangasOnTypesMinAggregateInputType = {
    mangasId?: true
    typeId?: true
  }

  export type MangasOnTypesMaxAggregateInputType = {
    mangasId?: true
    typeId?: true
  }

  export type MangasOnTypesCountAggregateInputType = {
    mangasId?: true
    typeId?: true
    _all?: true
  }

  export type MangasOnTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangasOnTypes to aggregate.
     */
    where?: MangasOnTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangasOnTypes to fetch.
     */
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangasOnTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangasOnTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangasOnTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangasOnTypes
    **/
    _count?: true | MangasOnTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MangasOnTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MangasOnTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangasOnTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangasOnTypesMaxAggregateInputType
  }

  export type GetMangasOnTypesAggregateType<T extends MangasOnTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateMangasOnTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangasOnTypes[P]>
      : GetScalarType<T[P], AggregateMangasOnTypes[P]>
  }




  export type MangasOnTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangasOnTypesWhereInput
    orderBy?: MangasOnTypesOrderByWithAggregationInput | MangasOnTypesOrderByWithAggregationInput[]
    by: MangasOnTypesScalarFieldEnum[] | MangasOnTypesScalarFieldEnum
    having?: MangasOnTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangasOnTypesCountAggregateInputType | true
    _avg?: MangasOnTypesAvgAggregateInputType
    _sum?: MangasOnTypesSumAggregateInputType
    _min?: MangasOnTypesMinAggregateInputType
    _max?: MangasOnTypesMaxAggregateInputType
  }

  export type MangasOnTypesGroupByOutputType = {
    mangasId: string
    typeId: number
    _count: MangasOnTypesCountAggregateOutputType | null
    _avg: MangasOnTypesAvgAggregateOutputType | null
    _sum: MangasOnTypesSumAggregateOutputType | null
    _min: MangasOnTypesMinAggregateOutputType | null
    _max: MangasOnTypesMaxAggregateOutputType | null
  }

  type GetMangasOnTypesGroupByPayload<T extends MangasOnTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangasOnTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangasOnTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangasOnTypesGroupByOutputType[P]>
            : GetScalarType<T[P], MangasOnTypesGroupByOutputType[P]>
        }
      >
    >


  export type MangasOnTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangasId?: boolean
    typeId?: boolean
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangasOnTypes"]>

  export type MangasOnTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangasId?: boolean
    typeId?: boolean
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangasOnTypes"]>

  export type MangasOnTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangasId?: boolean
    typeId?: boolean
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangasOnTypes"]>

  export type MangasOnTypesSelectScalar = {
    mangasId?: boolean
    typeId?: boolean
  }

  export type MangasOnTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mangasId" | "typeId", ExtArgs["result"]["mangasOnTypes"]>
  export type MangasOnTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }
  export type MangasOnTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }
  export type MangasOnTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Type?: boolean | TypeDefaultArgs<ExtArgs>
    Mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }

  export type $MangasOnTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangasOnTypes"
    objects: {
      Type: Prisma.$TypePayload<ExtArgs>
      Mangas: Prisma.$MangasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mangasId: string
      typeId: number
    }, ExtArgs["result"]["mangasOnTypes"]>
    composites: {}
  }

  type MangasOnTypesGetPayload<S extends boolean | null | undefined | MangasOnTypesDefaultArgs> = $Result.GetResult<Prisma.$MangasOnTypesPayload, S>

  type MangasOnTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangasOnTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangasOnTypesCountAggregateInputType | true
    }

  export interface MangasOnTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangasOnTypes'], meta: { name: 'MangasOnTypes' } }
    /**
     * Find zero or one MangasOnTypes that matches the filter.
     * @param {MangasOnTypesFindUniqueArgs} args - Arguments to find a MangasOnTypes
     * @example
     * // Get one MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangasOnTypesFindUniqueArgs>(args: SelectSubset<T, MangasOnTypesFindUniqueArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangasOnTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangasOnTypesFindUniqueOrThrowArgs} args - Arguments to find a MangasOnTypes
     * @example
     * // Get one MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangasOnTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, MangasOnTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangasOnTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesFindFirstArgs} args - Arguments to find a MangasOnTypes
     * @example
     * // Get one MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangasOnTypesFindFirstArgs>(args?: SelectSubset<T, MangasOnTypesFindFirstArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangasOnTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesFindFirstOrThrowArgs} args - Arguments to find a MangasOnTypes
     * @example
     * // Get one MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangasOnTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, MangasOnTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangasOnTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findMany()
     * 
     * // Get first 10 MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.findMany({ take: 10 })
     * 
     * // Only select the `mangasId`
     * const mangasOnTypesWithMangasIdOnly = await prisma.mangasOnTypes.findMany({ select: { mangasId: true } })
     * 
     */
    findMany<T extends MangasOnTypesFindManyArgs>(args?: SelectSubset<T, MangasOnTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangasOnTypes.
     * @param {MangasOnTypesCreateArgs} args - Arguments to create a MangasOnTypes.
     * @example
     * // Create one MangasOnTypes
     * const MangasOnTypes = await prisma.mangasOnTypes.create({
     *   data: {
     *     // ... data to create a MangasOnTypes
     *   }
     * })
     * 
     */
    create<T extends MangasOnTypesCreateArgs>(args: SelectSubset<T, MangasOnTypesCreateArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangasOnTypes.
     * @param {MangasOnTypesCreateManyArgs} args - Arguments to create many MangasOnTypes.
     * @example
     * // Create many MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangasOnTypesCreateManyArgs>(args?: SelectSubset<T, MangasOnTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangasOnTypes and returns the data saved in the database.
     * @param {MangasOnTypesCreateManyAndReturnArgs} args - Arguments to create many MangasOnTypes.
     * @example
     * // Create many MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangasOnTypes and only return the `mangasId`
     * const mangasOnTypesWithMangasIdOnly = await prisma.mangasOnTypes.createManyAndReturn({
     *   select: { mangasId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangasOnTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, MangasOnTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangasOnTypes.
     * @param {MangasOnTypesDeleteArgs} args - Arguments to delete one MangasOnTypes.
     * @example
     * // Delete one MangasOnTypes
     * const MangasOnTypes = await prisma.mangasOnTypes.delete({
     *   where: {
     *     // ... filter to delete one MangasOnTypes
     *   }
     * })
     * 
     */
    delete<T extends MangasOnTypesDeleteArgs>(args: SelectSubset<T, MangasOnTypesDeleteArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangasOnTypes.
     * @param {MangasOnTypesUpdateArgs} args - Arguments to update one MangasOnTypes.
     * @example
     * // Update one MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangasOnTypesUpdateArgs>(args: SelectSubset<T, MangasOnTypesUpdateArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangasOnTypes.
     * @param {MangasOnTypesDeleteManyArgs} args - Arguments to filter MangasOnTypes to delete.
     * @example
     * // Delete a few MangasOnTypes
     * const { count } = await prisma.mangasOnTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangasOnTypesDeleteManyArgs>(args?: SelectSubset<T, MangasOnTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangasOnTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangasOnTypesUpdateManyArgs>(args: SelectSubset<T, MangasOnTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangasOnTypes and returns the data updated in the database.
     * @param {MangasOnTypesUpdateManyAndReturnArgs} args - Arguments to update many MangasOnTypes.
     * @example
     * // Update many MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangasOnTypes and only return the `mangasId`
     * const mangasOnTypesWithMangasIdOnly = await prisma.mangasOnTypes.updateManyAndReturn({
     *   select: { mangasId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangasOnTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, MangasOnTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangasOnTypes.
     * @param {MangasOnTypesUpsertArgs} args - Arguments to update or create a MangasOnTypes.
     * @example
     * // Update or create a MangasOnTypes
     * const mangasOnTypes = await prisma.mangasOnTypes.upsert({
     *   create: {
     *     // ... data to create a MangasOnTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangasOnTypes we want to update
     *   }
     * })
     */
    upsert<T extends MangasOnTypesUpsertArgs>(args: SelectSubset<T, MangasOnTypesUpsertArgs<ExtArgs>>): Prisma__MangasOnTypesClient<$Result.GetResult<Prisma.$MangasOnTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangasOnTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesCountArgs} args - Arguments to filter MangasOnTypes to count.
     * @example
     * // Count the number of MangasOnTypes
     * const count = await prisma.mangasOnTypes.count({
     *   where: {
     *     // ... the filter for the MangasOnTypes we want to count
     *   }
     * })
    **/
    count<T extends MangasOnTypesCountArgs>(
      args?: Subset<T, MangasOnTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangasOnTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangasOnTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangasOnTypesAggregateArgs>(args: Subset<T, MangasOnTypesAggregateArgs>): Prisma.PrismaPromise<GetMangasOnTypesAggregateType<T>>

    /**
     * Group by MangasOnTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangasOnTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangasOnTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangasOnTypesGroupByArgs['orderBy'] }
        : { orderBy?: MangasOnTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangasOnTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangasOnTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangasOnTypes model
   */
  readonly fields: MangasOnTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangasOnTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangasOnTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Mangas<T extends MangasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MangasDefaultArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MangasOnTypes model
   */
  interface MangasOnTypesFieldRefs {
    readonly mangasId: FieldRef<"MangasOnTypes", 'String'>
    readonly typeId: FieldRef<"MangasOnTypes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MangasOnTypes findUnique
   */
  export type MangasOnTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter, which MangasOnTypes to fetch.
     */
    where: MangasOnTypesWhereUniqueInput
  }

  /**
   * MangasOnTypes findUniqueOrThrow
   */
  export type MangasOnTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter, which MangasOnTypes to fetch.
     */
    where: MangasOnTypesWhereUniqueInput
  }

  /**
   * MangasOnTypes findFirst
   */
  export type MangasOnTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter, which MangasOnTypes to fetch.
     */
    where?: MangasOnTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangasOnTypes to fetch.
     */
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangasOnTypes.
     */
    cursor?: MangasOnTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangasOnTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangasOnTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangasOnTypes.
     */
    distinct?: MangasOnTypesScalarFieldEnum | MangasOnTypesScalarFieldEnum[]
  }

  /**
   * MangasOnTypes findFirstOrThrow
   */
  export type MangasOnTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter, which MangasOnTypes to fetch.
     */
    where?: MangasOnTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangasOnTypes to fetch.
     */
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangasOnTypes.
     */
    cursor?: MangasOnTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangasOnTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangasOnTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangasOnTypes.
     */
    distinct?: MangasOnTypesScalarFieldEnum | MangasOnTypesScalarFieldEnum[]
  }

  /**
   * MangasOnTypes findMany
   */
  export type MangasOnTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter, which MangasOnTypes to fetch.
     */
    where?: MangasOnTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangasOnTypes to fetch.
     */
    orderBy?: MangasOnTypesOrderByWithRelationInput | MangasOnTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangasOnTypes.
     */
    cursor?: MangasOnTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangasOnTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangasOnTypes.
     */
    skip?: number
    distinct?: MangasOnTypesScalarFieldEnum | MangasOnTypesScalarFieldEnum[]
  }

  /**
   * MangasOnTypes create
   */
  export type MangasOnTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a MangasOnTypes.
     */
    data: XOR<MangasOnTypesCreateInput, MangasOnTypesUncheckedCreateInput>
  }

  /**
   * MangasOnTypes createMany
   */
  export type MangasOnTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangasOnTypes.
     */
    data: MangasOnTypesCreateManyInput | MangasOnTypesCreateManyInput[]
  }

  /**
   * MangasOnTypes createManyAndReturn
   */
  export type MangasOnTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * The data used to create many MangasOnTypes.
     */
    data: MangasOnTypesCreateManyInput | MangasOnTypesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangasOnTypes update
   */
  export type MangasOnTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a MangasOnTypes.
     */
    data: XOR<MangasOnTypesUpdateInput, MangasOnTypesUncheckedUpdateInput>
    /**
     * Choose, which MangasOnTypes to update.
     */
    where: MangasOnTypesWhereUniqueInput
  }

  /**
   * MangasOnTypes updateMany
   */
  export type MangasOnTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangasOnTypes.
     */
    data: XOR<MangasOnTypesUpdateManyMutationInput, MangasOnTypesUncheckedUpdateManyInput>
    /**
     * Filter which MangasOnTypes to update
     */
    where?: MangasOnTypesWhereInput
    /**
     * Limit how many MangasOnTypes to update.
     */
    limit?: number
  }

  /**
   * MangasOnTypes updateManyAndReturn
   */
  export type MangasOnTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * The data used to update MangasOnTypes.
     */
    data: XOR<MangasOnTypesUpdateManyMutationInput, MangasOnTypesUncheckedUpdateManyInput>
    /**
     * Filter which MangasOnTypes to update
     */
    where?: MangasOnTypesWhereInput
    /**
     * Limit how many MangasOnTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangasOnTypes upsert
   */
  export type MangasOnTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the MangasOnTypes to update in case it exists.
     */
    where: MangasOnTypesWhereUniqueInput
    /**
     * In case the MangasOnTypes found by the `where` argument doesn't exist, create a new MangasOnTypes with this data.
     */
    create: XOR<MangasOnTypesCreateInput, MangasOnTypesUncheckedCreateInput>
    /**
     * In case the MangasOnTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangasOnTypesUpdateInput, MangasOnTypesUncheckedUpdateInput>
  }

  /**
   * MangasOnTypes delete
   */
  export type MangasOnTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
    /**
     * Filter which MangasOnTypes to delete.
     */
    where: MangasOnTypesWhereUniqueInput
  }

  /**
   * MangasOnTypes deleteMany
   */
  export type MangasOnTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangasOnTypes to delete
     */
    where?: MangasOnTypesWhereInput
    /**
     * Limit how many MangasOnTypes to delete.
     */
    limit?: number
  }

  /**
   * MangasOnTypes without action
   */
  export type MangasOnTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangasOnTypes
     */
    select?: MangasOnTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangasOnTypes
     */
    omit?: MangasOnTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangasOnTypesInclude<ExtArgs> | null
  }


  /**
   * Model MangaCh
   */

  export type AggregateMangaCh = {
    _count: MangaChCountAggregateOutputType | null
    _min: MangaChMinAggregateOutputType | null
    _max: MangaChMaxAggregateOutputType | null
  }

  export type MangaChMinAggregateOutputType = {
    id: string | null
    mangaChId: string | null
    mangaId: string | null
    mangaChName: string | null
    mangaChUrl: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type MangaChMaxAggregateOutputType = {
    id: string | null
    mangaChId: string | null
    mangaId: string | null
    mangaChName: string | null
    mangaChUrl: string | null
    updateAt: Date | null
    create_at: Date | null
  }

  export type MangaChCountAggregateOutputType = {
    id: number
    mangaChId: number
    mangaId: number
    mangaChName: number
    mangaChUrl: number
    updateAt: number
    create_at: number
    _all: number
  }


  export type MangaChMinAggregateInputType = {
    id?: true
    mangaChId?: true
    mangaId?: true
    mangaChName?: true
    mangaChUrl?: true
    updateAt?: true
    create_at?: true
  }

  export type MangaChMaxAggregateInputType = {
    id?: true
    mangaChId?: true
    mangaId?: true
    mangaChName?: true
    mangaChUrl?: true
    updateAt?: true
    create_at?: true
  }

  export type MangaChCountAggregateInputType = {
    id?: true
    mangaChId?: true
    mangaId?: true
    mangaChName?: true
    mangaChUrl?: true
    updateAt?: true
    create_at?: true
    _all?: true
  }

  export type MangaChAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaCh to aggregate.
     */
    where?: MangaChWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChes to fetch.
     */
    orderBy?: MangaChOrderByWithRelationInput | MangaChOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaChWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangaChes
    **/
    _count?: true | MangaChCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaChMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaChMaxAggregateInputType
  }

  export type GetMangaChAggregateType<T extends MangaChAggregateArgs> = {
        [P in keyof T & keyof AggregateMangaCh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangaCh[P]>
      : GetScalarType<T[P], AggregateMangaCh[P]>
  }




  export type MangaChGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaChWhereInput
    orderBy?: MangaChOrderByWithAggregationInput | MangaChOrderByWithAggregationInput[]
    by: MangaChScalarFieldEnum[] | MangaChScalarFieldEnum
    having?: MangaChScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaChCountAggregateInputType | true
    _min?: MangaChMinAggregateInputType
    _max?: MangaChMaxAggregateInputType
  }

  export type MangaChGroupByOutputType = {
    id: string
    mangaChId: string
    mangaId: string
    mangaChName: string
    mangaChUrl: string
    updateAt: Date
    create_at: Date
    _count: MangaChCountAggregateOutputType | null
    _min: MangaChMinAggregateOutputType | null
    _max: MangaChMaxAggregateOutputType | null
  }

  type GetMangaChGroupByPayload<T extends MangaChGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaChGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaChGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaChGroupByOutputType[P]>
            : GetScalarType<T[P], MangaChGroupByOutputType[P]>
        }
      >
    >


  export type MangaChSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChId?: boolean
    mangaId?: boolean
    mangaChName?: boolean
    mangaChUrl?: boolean
    updateAt?: boolean
    create_at?: boolean
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
    mangaChImg?: boolean | MangaCh$mangaChImgArgs<ExtArgs>
    _count?: boolean | MangaChCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaCh"]>

  export type MangaChSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChId?: boolean
    mangaId?: boolean
    mangaChName?: boolean
    mangaChUrl?: boolean
    updateAt?: boolean
    create_at?: boolean
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaCh"]>

  export type MangaChSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChId?: boolean
    mangaId?: boolean
    mangaChName?: boolean
    mangaChUrl?: boolean
    updateAt?: boolean
    create_at?: boolean
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaCh"]>

  export type MangaChSelectScalar = {
    id?: boolean
    mangaChId?: boolean
    mangaId?: boolean
    mangaChName?: boolean
    mangaChUrl?: boolean
    updateAt?: boolean
    create_at?: boolean
  }

  export type MangaChOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mangaChId" | "mangaId" | "mangaChName" | "mangaChUrl" | "updateAt" | "create_at", ExtArgs["result"]["mangaCh"]>
  export type MangaChInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
    mangaChImg?: boolean | MangaCh$mangaChImgArgs<ExtArgs>
    _count?: boolean | MangaChCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MangaChIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }
  export type MangaChIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | MangasDefaultArgs<ExtArgs>
  }

  export type $MangaChPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangaCh"
    objects: {
      mangas: Prisma.$MangasPayload<ExtArgs>
      mangaChImg: Prisma.$MangaChImgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mangaChId: string
      mangaId: string
      mangaChName: string
      mangaChUrl: string
      updateAt: Date
      create_at: Date
    }, ExtArgs["result"]["mangaCh"]>
    composites: {}
  }

  type MangaChGetPayload<S extends boolean | null | undefined | MangaChDefaultArgs> = $Result.GetResult<Prisma.$MangaChPayload, S>

  type MangaChCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaChFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaChCountAggregateInputType | true
    }

  export interface MangaChDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangaCh'], meta: { name: 'MangaCh' } }
    /**
     * Find zero or one MangaCh that matches the filter.
     * @param {MangaChFindUniqueArgs} args - Arguments to find a MangaCh
     * @example
     * // Get one MangaCh
     * const mangaCh = await prisma.mangaCh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaChFindUniqueArgs>(args: SelectSubset<T, MangaChFindUniqueArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangaCh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaChFindUniqueOrThrowArgs} args - Arguments to find a MangaCh
     * @example
     * // Get one MangaCh
     * const mangaCh = await prisma.mangaCh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaChFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaChFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaCh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChFindFirstArgs} args - Arguments to find a MangaCh
     * @example
     * // Get one MangaCh
     * const mangaCh = await prisma.mangaCh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaChFindFirstArgs>(args?: SelectSubset<T, MangaChFindFirstArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaCh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChFindFirstOrThrowArgs} args - Arguments to find a MangaCh
     * @example
     * // Get one MangaCh
     * const mangaCh = await prisma.mangaCh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaChFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaChFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangaChes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangaChes
     * const mangaChes = await prisma.mangaCh.findMany()
     * 
     * // Get first 10 MangaChes
     * const mangaChes = await prisma.mangaCh.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaChWithIdOnly = await prisma.mangaCh.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangaChFindManyArgs>(args?: SelectSubset<T, MangaChFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangaCh.
     * @param {MangaChCreateArgs} args - Arguments to create a MangaCh.
     * @example
     * // Create one MangaCh
     * const MangaCh = await prisma.mangaCh.create({
     *   data: {
     *     // ... data to create a MangaCh
     *   }
     * })
     * 
     */
    create<T extends MangaChCreateArgs>(args: SelectSubset<T, MangaChCreateArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangaChes.
     * @param {MangaChCreateManyArgs} args - Arguments to create many MangaChes.
     * @example
     * // Create many MangaChes
     * const mangaCh = await prisma.mangaCh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaChCreateManyArgs>(args?: SelectSubset<T, MangaChCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangaChes and returns the data saved in the database.
     * @param {MangaChCreateManyAndReturnArgs} args - Arguments to create many MangaChes.
     * @example
     * // Create many MangaChes
     * const mangaCh = await prisma.mangaCh.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangaChes and only return the `id`
     * const mangaChWithIdOnly = await prisma.mangaCh.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaChCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaChCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangaCh.
     * @param {MangaChDeleteArgs} args - Arguments to delete one MangaCh.
     * @example
     * // Delete one MangaCh
     * const MangaCh = await prisma.mangaCh.delete({
     *   where: {
     *     // ... filter to delete one MangaCh
     *   }
     * })
     * 
     */
    delete<T extends MangaChDeleteArgs>(args: SelectSubset<T, MangaChDeleteArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangaCh.
     * @param {MangaChUpdateArgs} args - Arguments to update one MangaCh.
     * @example
     * // Update one MangaCh
     * const mangaCh = await prisma.mangaCh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaChUpdateArgs>(args: SelectSubset<T, MangaChUpdateArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangaChes.
     * @param {MangaChDeleteManyArgs} args - Arguments to filter MangaChes to delete.
     * @example
     * // Delete a few MangaChes
     * const { count } = await prisma.mangaCh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaChDeleteManyArgs>(args?: SelectSubset<T, MangaChDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaChes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangaChes
     * const mangaCh = await prisma.mangaCh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaChUpdateManyArgs>(args: SelectSubset<T, MangaChUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaChes and returns the data updated in the database.
     * @param {MangaChUpdateManyAndReturnArgs} args - Arguments to update many MangaChes.
     * @example
     * // Update many MangaChes
     * const mangaCh = await prisma.mangaCh.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangaChes and only return the `id`
     * const mangaChWithIdOnly = await prisma.mangaCh.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaChUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaChUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangaCh.
     * @param {MangaChUpsertArgs} args - Arguments to update or create a MangaCh.
     * @example
     * // Update or create a MangaCh
     * const mangaCh = await prisma.mangaCh.upsert({
     *   create: {
     *     // ... data to create a MangaCh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangaCh we want to update
     *   }
     * })
     */
    upsert<T extends MangaChUpsertArgs>(args: SelectSubset<T, MangaChUpsertArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangaChes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChCountArgs} args - Arguments to filter MangaChes to count.
     * @example
     * // Count the number of MangaChes
     * const count = await prisma.mangaCh.count({
     *   where: {
     *     // ... the filter for the MangaChes we want to count
     *   }
     * })
    **/
    count<T extends MangaChCountArgs>(
      args?: Subset<T, MangaChCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaChCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangaCh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangaChAggregateArgs>(args: Subset<T, MangaChAggregateArgs>): Prisma.PrismaPromise<GetMangaChAggregateType<T>>

    /**
     * Group by MangaCh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangaChGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaChGroupByArgs['orderBy'] }
        : { orderBy?: MangaChGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangaChGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaChGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangaCh model
   */
  readonly fields: MangaChFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangaCh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaChClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mangas<T extends MangasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MangasDefaultArgs<ExtArgs>>): Prisma__MangasClient<$Result.GetResult<Prisma.$MangasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mangaChImg<T extends MangaCh$mangaChImgArgs<ExtArgs> = {}>(args?: Subset<T, MangaCh$mangaChImgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MangaCh model
   */
  interface MangaChFieldRefs {
    readonly id: FieldRef<"MangaCh", 'String'>
    readonly mangaChId: FieldRef<"MangaCh", 'String'>
    readonly mangaId: FieldRef<"MangaCh", 'String'>
    readonly mangaChName: FieldRef<"MangaCh", 'String'>
    readonly mangaChUrl: FieldRef<"MangaCh", 'String'>
    readonly updateAt: FieldRef<"MangaCh", 'DateTime'>
    readonly create_at: FieldRef<"MangaCh", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MangaCh findUnique
   */
  export type MangaChFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter, which MangaCh to fetch.
     */
    where: MangaChWhereUniqueInput
  }

  /**
   * MangaCh findUniqueOrThrow
   */
  export type MangaChFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter, which MangaCh to fetch.
     */
    where: MangaChWhereUniqueInput
  }

  /**
   * MangaCh findFirst
   */
  export type MangaChFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter, which MangaCh to fetch.
     */
    where?: MangaChWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChes to fetch.
     */
    orderBy?: MangaChOrderByWithRelationInput | MangaChOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaChes.
     */
    cursor?: MangaChWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaChes.
     */
    distinct?: MangaChScalarFieldEnum | MangaChScalarFieldEnum[]
  }

  /**
   * MangaCh findFirstOrThrow
   */
  export type MangaChFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter, which MangaCh to fetch.
     */
    where?: MangaChWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChes to fetch.
     */
    orderBy?: MangaChOrderByWithRelationInput | MangaChOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaChes.
     */
    cursor?: MangaChWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaChes.
     */
    distinct?: MangaChScalarFieldEnum | MangaChScalarFieldEnum[]
  }

  /**
   * MangaCh findMany
   */
  export type MangaChFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter, which MangaChes to fetch.
     */
    where?: MangaChWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChes to fetch.
     */
    orderBy?: MangaChOrderByWithRelationInput | MangaChOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangaChes.
     */
    cursor?: MangaChWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChes.
     */
    skip?: number
    distinct?: MangaChScalarFieldEnum | MangaChScalarFieldEnum[]
  }

  /**
   * MangaCh create
   */
  export type MangaChCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * The data needed to create a MangaCh.
     */
    data: XOR<MangaChCreateInput, MangaChUncheckedCreateInput>
  }

  /**
   * MangaCh createMany
   */
  export type MangaChCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangaChes.
     */
    data: MangaChCreateManyInput | MangaChCreateManyInput[]
  }

  /**
   * MangaCh createManyAndReturn
   */
  export type MangaChCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * The data used to create many MangaChes.
     */
    data: MangaChCreateManyInput | MangaChCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaCh update
   */
  export type MangaChUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * The data needed to update a MangaCh.
     */
    data: XOR<MangaChUpdateInput, MangaChUncheckedUpdateInput>
    /**
     * Choose, which MangaCh to update.
     */
    where: MangaChWhereUniqueInput
  }

  /**
   * MangaCh updateMany
   */
  export type MangaChUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangaChes.
     */
    data: XOR<MangaChUpdateManyMutationInput, MangaChUncheckedUpdateManyInput>
    /**
     * Filter which MangaChes to update
     */
    where?: MangaChWhereInput
    /**
     * Limit how many MangaChes to update.
     */
    limit?: number
  }

  /**
   * MangaCh updateManyAndReturn
   */
  export type MangaChUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * The data used to update MangaChes.
     */
    data: XOR<MangaChUpdateManyMutationInput, MangaChUncheckedUpdateManyInput>
    /**
     * Filter which MangaChes to update
     */
    where?: MangaChWhereInput
    /**
     * Limit how many MangaChes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaCh upsert
   */
  export type MangaChUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * The filter to search for the MangaCh to update in case it exists.
     */
    where: MangaChWhereUniqueInput
    /**
     * In case the MangaCh found by the `where` argument doesn't exist, create a new MangaCh with this data.
     */
    create: XOR<MangaChCreateInput, MangaChUncheckedCreateInput>
    /**
     * In case the MangaCh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaChUpdateInput, MangaChUncheckedUpdateInput>
  }

  /**
   * MangaCh delete
   */
  export type MangaChDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    /**
     * Filter which MangaCh to delete.
     */
    where: MangaChWhereUniqueInput
  }

  /**
   * MangaCh deleteMany
   */
  export type MangaChDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaChes to delete
     */
    where?: MangaChWhereInput
    /**
     * Limit how many MangaChes to delete.
     */
    limit?: number
  }

  /**
   * MangaCh.mangaChImg
   */
  export type MangaCh$mangaChImgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    where?: MangaChImgWhereInput
    orderBy?: MangaChImgOrderByWithRelationInput | MangaChImgOrderByWithRelationInput[]
    cursor?: MangaChImgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaChImgScalarFieldEnum | MangaChImgScalarFieldEnum[]
  }

  /**
   * MangaCh without action
   */
  export type MangaChDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
  }


  /**
   * Model MangaChImg
   */

  export type AggregateMangaChImg = {
    _count: MangaChImgCountAggregateOutputType | null
    _min: MangaChImgMinAggregateOutputType | null
    _max: MangaChImgMaxAggregateOutputType | null
  }

  export type MangaChImgMinAggregateOutputType = {
    id: string | null
    mangaChImgId: string | null
    data: Uint8Array | null
    url: string | null
    status_download: boolean | null
    mangaChId: string | null
  }

  export type MangaChImgMaxAggregateOutputType = {
    id: string | null
    mangaChImgId: string | null
    data: Uint8Array | null
    url: string | null
    status_download: boolean | null
    mangaChId: string | null
  }

  export type MangaChImgCountAggregateOutputType = {
    id: number
    mangaChImgId: number
    data: number
    url: number
    status_download: number
    mangaChId: number
    _all: number
  }


  export type MangaChImgMinAggregateInputType = {
    id?: true
    mangaChImgId?: true
    data?: true
    url?: true
    status_download?: true
    mangaChId?: true
  }

  export type MangaChImgMaxAggregateInputType = {
    id?: true
    mangaChImgId?: true
    data?: true
    url?: true
    status_download?: true
    mangaChId?: true
  }

  export type MangaChImgCountAggregateInputType = {
    id?: true
    mangaChImgId?: true
    data?: true
    url?: true
    status_download?: true
    mangaChId?: true
    _all?: true
  }

  export type MangaChImgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaChImg to aggregate.
     */
    where?: MangaChImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChImgs to fetch.
     */
    orderBy?: MangaChImgOrderByWithRelationInput | MangaChImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaChImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangaChImgs
    **/
    _count?: true | MangaChImgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaChImgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaChImgMaxAggregateInputType
  }

  export type GetMangaChImgAggregateType<T extends MangaChImgAggregateArgs> = {
        [P in keyof T & keyof AggregateMangaChImg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangaChImg[P]>
      : GetScalarType<T[P], AggregateMangaChImg[P]>
  }




  export type MangaChImgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaChImgWhereInput
    orderBy?: MangaChImgOrderByWithAggregationInput | MangaChImgOrderByWithAggregationInput[]
    by: MangaChImgScalarFieldEnum[] | MangaChImgScalarFieldEnum
    having?: MangaChImgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaChImgCountAggregateInputType | true
    _min?: MangaChImgMinAggregateInputType
    _max?: MangaChImgMaxAggregateInputType
  }

  export type MangaChImgGroupByOutputType = {
    id: string
    mangaChImgId: string | null
    data: Uint8Array | null
    url: string
    status_download: boolean | null
    mangaChId: string | null
    _count: MangaChImgCountAggregateOutputType | null
    _min: MangaChImgMinAggregateOutputType | null
    _max: MangaChImgMaxAggregateOutputType | null
  }

  type GetMangaChImgGroupByPayload<T extends MangaChImgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaChImgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaChImgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaChImgGroupByOutputType[P]>
            : GetScalarType<T[P], MangaChImgGroupByOutputType[P]>
        }
      >
    >


  export type MangaChImgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChImgId?: boolean
    data?: boolean
    url?: boolean
    status_download?: boolean
    mangaChId?: boolean
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }, ExtArgs["result"]["mangaChImg"]>

  export type MangaChImgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChImgId?: boolean
    data?: boolean
    url?: boolean
    status_download?: boolean
    mangaChId?: boolean
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }, ExtArgs["result"]["mangaChImg"]>

  export type MangaChImgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mangaChImgId?: boolean
    data?: boolean
    url?: boolean
    status_download?: boolean
    mangaChId?: boolean
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }, ExtArgs["result"]["mangaChImg"]>

  export type MangaChImgSelectScalar = {
    id?: boolean
    mangaChImgId?: boolean
    data?: boolean
    url?: boolean
    status_download?: boolean
    mangaChId?: boolean
  }

  export type MangaChImgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mangaChImgId" | "data" | "url" | "status_download" | "mangaChId", ExtArgs["result"]["mangaChImg"]>
  export type MangaChImgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }
  export type MangaChImgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }
  export type MangaChImgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MangaCh?: boolean | MangaChImg$MangaChArgs<ExtArgs>
  }

  export type $MangaChImgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangaChImg"
    objects: {
      MangaCh: Prisma.$MangaChPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mangaChImgId: string | null
      data: Uint8Array | null
      url: string
      status_download: boolean | null
      mangaChId: string | null
    }, ExtArgs["result"]["mangaChImg"]>
    composites: {}
  }

  type MangaChImgGetPayload<S extends boolean | null | undefined | MangaChImgDefaultArgs> = $Result.GetResult<Prisma.$MangaChImgPayload, S>

  type MangaChImgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaChImgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaChImgCountAggregateInputType | true
    }

  export interface MangaChImgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangaChImg'], meta: { name: 'MangaChImg' } }
    /**
     * Find zero or one MangaChImg that matches the filter.
     * @param {MangaChImgFindUniqueArgs} args - Arguments to find a MangaChImg
     * @example
     * // Get one MangaChImg
     * const mangaChImg = await prisma.mangaChImg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaChImgFindUniqueArgs>(args: SelectSubset<T, MangaChImgFindUniqueArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangaChImg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaChImgFindUniqueOrThrowArgs} args - Arguments to find a MangaChImg
     * @example
     * // Get one MangaChImg
     * const mangaChImg = await prisma.mangaChImg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaChImgFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaChImgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaChImg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgFindFirstArgs} args - Arguments to find a MangaChImg
     * @example
     * // Get one MangaChImg
     * const mangaChImg = await prisma.mangaChImg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaChImgFindFirstArgs>(args?: SelectSubset<T, MangaChImgFindFirstArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaChImg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgFindFirstOrThrowArgs} args - Arguments to find a MangaChImg
     * @example
     * // Get one MangaChImg
     * const mangaChImg = await prisma.mangaChImg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaChImgFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaChImgFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangaChImgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangaChImgs
     * const mangaChImgs = await prisma.mangaChImg.findMany()
     * 
     * // Get first 10 MangaChImgs
     * const mangaChImgs = await prisma.mangaChImg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaChImgWithIdOnly = await prisma.mangaChImg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangaChImgFindManyArgs>(args?: SelectSubset<T, MangaChImgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangaChImg.
     * @param {MangaChImgCreateArgs} args - Arguments to create a MangaChImg.
     * @example
     * // Create one MangaChImg
     * const MangaChImg = await prisma.mangaChImg.create({
     *   data: {
     *     // ... data to create a MangaChImg
     *   }
     * })
     * 
     */
    create<T extends MangaChImgCreateArgs>(args: SelectSubset<T, MangaChImgCreateArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangaChImgs.
     * @param {MangaChImgCreateManyArgs} args - Arguments to create many MangaChImgs.
     * @example
     * // Create many MangaChImgs
     * const mangaChImg = await prisma.mangaChImg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaChImgCreateManyArgs>(args?: SelectSubset<T, MangaChImgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangaChImgs and returns the data saved in the database.
     * @param {MangaChImgCreateManyAndReturnArgs} args - Arguments to create many MangaChImgs.
     * @example
     * // Create many MangaChImgs
     * const mangaChImg = await prisma.mangaChImg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangaChImgs and only return the `id`
     * const mangaChImgWithIdOnly = await prisma.mangaChImg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaChImgCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaChImgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangaChImg.
     * @param {MangaChImgDeleteArgs} args - Arguments to delete one MangaChImg.
     * @example
     * // Delete one MangaChImg
     * const MangaChImg = await prisma.mangaChImg.delete({
     *   where: {
     *     // ... filter to delete one MangaChImg
     *   }
     * })
     * 
     */
    delete<T extends MangaChImgDeleteArgs>(args: SelectSubset<T, MangaChImgDeleteArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangaChImg.
     * @param {MangaChImgUpdateArgs} args - Arguments to update one MangaChImg.
     * @example
     * // Update one MangaChImg
     * const mangaChImg = await prisma.mangaChImg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaChImgUpdateArgs>(args: SelectSubset<T, MangaChImgUpdateArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangaChImgs.
     * @param {MangaChImgDeleteManyArgs} args - Arguments to filter MangaChImgs to delete.
     * @example
     * // Delete a few MangaChImgs
     * const { count } = await prisma.mangaChImg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaChImgDeleteManyArgs>(args?: SelectSubset<T, MangaChImgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaChImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangaChImgs
     * const mangaChImg = await prisma.mangaChImg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaChImgUpdateManyArgs>(args: SelectSubset<T, MangaChImgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaChImgs and returns the data updated in the database.
     * @param {MangaChImgUpdateManyAndReturnArgs} args - Arguments to update many MangaChImgs.
     * @example
     * // Update many MangaChImgs
     * const mangaChImg = await prisma.mangaChImg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangaChImgs and only return the `id`
     * const mangaChImgWithIdOnly = await prisma.mangaChImg.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaChImgUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaChImgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangaChImg.
     * @param {MangaChImgUpsertArgs} args - Arguments to update or create a MangaChImg.
     * @example
     * // Update or create a MangaChImg
     * const mangaChImg = await prisma.mangaChImg.upsert({
     *   create: {
     *     // ... data to create a MangaChImg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangaChImg we want to update
     *   }
     * })
     */
    upsert<T extends MangaChImgUpsertArgs>(args: SelectSubset<T, MangaChImgUpsertArgs<ExtArgs>>): Prisma__MangaChImgClient<$Result.GetResult<Prisma.$MangaChImgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangaChImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgCountArgs} args - Arguments to filter MangaChImgs to count.
     * @example
     * // Count the number of MangaChImgs
     * const count = await prisma.mangaChImg.count({
     *   where: {
     *     // ... the filter for the MangaChImgs we want to count
     *   }
     * })
    **/
    count<T extends MangaChImgCountArgs>(
      args?: Subset<T, MangaChImgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaChImgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangaChImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangaChImgAggregateArgs>(args: Subset<T, MangaChImgAggregateArgs>): Prisma.PrismaPromise<GetMangaChImgAggregateType<T>>

    /**
     * Group by MangaChImg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaChImgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangaChImgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaChImgGroupByArgs['orderBy'] }
        : { orderBy?: MangaChImgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangaChImgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaChImgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangaChImg model
   */
  readonly fields: MangaChImgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangaChImg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaChImgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MangaCh<T extends MangaChImg$MangaChArgs<ExtArgs> = {}>(args?: Subset<T, MangaChImg$MangaChArgs<ExtArgs>>): Prisma__MangaChClient<$Result.GetResult<Prisma.$MangaChPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MangaChImg model
   */
  interface MangaChImgFieldRefs {
    readonly id: FieldRef<"MangaChImg", 'String'>
    readonly mangaChImgId: FieldRef<"MangaChImg", 'String'>
    readonly data: FieldRef<"MangaChImg", 'Bytes'>
    readonly url: FieldRef<"MangaChImg", 'String'>
    readonly status_download: FieldRef<"MangaChImg", 'Boolean'>
    readonly mangaChId: FieldRef<"MangaChImg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MangaChImg findUnique
   */
  export type MangaChImgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter, which MangaChImg to fetch.
     */
    where: MangaChImgWhereUniqueInput
  }

  /**
   * MangaChImg findUniqueOrThrow
   */
  export type MangaChImgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter, which MangaChImg to fetch.
     */
    where: MangaChImgWhereUniqueInput
  }

  /**
   * MangaChImg findFirst
   */
  export type MangaChImgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter, which MangaChImg to fetch.
     */
    where?: MangaChImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChImgs to fetch.
     */
    orderBy?: MangaChImgOrderByWithRelationInput | MangaChImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaChImgs.
     */
    cursor?: MangaChImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaChImgs.
     */
    distinct?: MangaChImgScalarFieldEnum | MangaChImgScalarFieldEnum[]
  }

  /**
   * MangaChImg findFirstOrThrow
   */
  export type MangaChImgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter, which MangaChImg to fetch.
     */
    where?: MangaChImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChImgs to fetch.
     */
    orderBy?: MangaChImgOrderByWithRelationInput | MangaChImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaChImgs.
     */
    cursor?: MangaChImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaChImgs.
     */
    distinct?: MangaChImgScalarFieldEnum | MangaChImgScalarFieldEnum[]
  }

  /**
   * MangaChImg findMany
   */
  export type MangaChImgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter, which MangaChImgs to fetch.
     */
    where?: MangaChImgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaChImgs to fetch.
     */
    orderBy?: MangaChImgOrderByWithRelationInput | MangaChImgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangaChImgs.
     */
    cursor?: MangaChImgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaChImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaChImgs.
     */
    skip?: number
    distinct?: MangaChImgScalarFieldEnum | MangaChImgScalarFieldEnum[]
  }

  /**
   * MangaChImg create
   */
  export type MangaChImgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * The data needed to create a MangaChImg.
     */
    data: XOR<MangaChImgCreateInput, MangaChImgUncheckedCreateInput>
  }

  /**
   * MangaChImg createMany
   */
  export type MangaChImgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangaChImgs.
     */
    data: MangaChImgCreateManyInput | MangaChImgCreateManyInput[]
  }

  /**
   * MangaChImg createManyAndReturn
   */
  export type MangaChImgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * The data used to create many MangaChImgs.
     */
    data: MangaChImgCreateManyInput | MangaChImgCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaChImg update
   */
  export type MangaChImgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * The data needed to update a MangaChImg.
     */
    data: XOR<MangaChImgUpdateInput, MangaChImgUncheckedUpdateInput>
    /**
     * Choose, which MangaChImg to update.
     */
    where: MangaChImgWhereUniqueInput
  }

  /**
   * MangaChImg updateMany
   */
  export type MangaChImgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangaChImgs.
     */
    data: XOR<MangaChImgUpdateManyMutationInput, MangaChImgUncheckedUpdateManyInput>
    /**
     * Filter which MangaChImgs to update
     */
    where?: MangaChImgWhereInput
    /**
     * Limit how many MangaChImgs to update.
     */
    limit?: number
  }

  /**
   * MangaChImg updateManyAndReturn
   */
  export type MangaChImgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * The data used to update MangaChImgs.
     */
    data: XOR<MangaChImgUpdateManyMutationInput, MangaChImgUncheckedUpdateManyInput>
    /**
     * Filter which MangaChImgs to update
     */
    where?: MangaChImgWhereInput
    /**
     * Limit how many MangaChImgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaChImg upsert
   */
  export type MangaChImgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * The filter to search for the MangaChImg to update in case it exists.
     */
    where: MangaChImgWhereUniqueInput
    /**
     * In case the MangaChImg found by the `where` argument doesn't exist, create a new MangaChImg with this data.
     */
    create: XOR<MangaChImgCreateInput, MangaChImgUncheckedCreateInput>
    /**
     * In case the MangaChImg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaChImgUpdateInput, MangaChImgUncheckedUpdateInput>
  }

  /**
   * MangaChImg delete
   */
  export type MangaChImgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
    /**
     * Filter which MangaChImg to delete.
     */
    where: MangaChImgWhereUniqueInput
  }

  /**
   * MangaChImg deleteMany
   */
  export type MangaChImgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaChImgs to delete
     */
    where?: MangaChImgWhereInput
    /**
     * Limit how many MangaChImgs to delete.
     */
    limit?: number
  }

  /**
   * MangaChImg.MangaCh
   */
  export type MangaChImg$MangaChArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCh
     */
    select?: MangaChSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaCh
     */
    omit?: MangaChOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChInclude<ExtArgs> | null
    where?: MangaChWhereInput
  }

  /**
   * MangaChImg without action
   */
  export type MangaChImgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaChImg
     */
    select?: MangaChImgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaChImg
     */
    omit?: MangaChImgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaChImgInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    published: 'published',
    authorId: 'authorId',
    updateAt: 'updateAt',
    create_at: 'create_at'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const MangasScalarFieldEnum: {
    id: 'id',
    mangaId: 'mangaId',
    mangaImg: 'mangaImg',
    mangaImgData: 'mangaImgData',
    url: 'url',
    mangaTitle: 'mangaTitle',
    storyName: 'storyName',
    category: 'category',
    subject: 'subject',
    painter: 'painter',
    language: 'language',
    charecter: 'charecter',
    updateAt: 'updateAt',
    create_at: 'create_at'
  };

  export type MangasScalarFieldEnum = (typeof MangasScalarFieldEnum)[keyof typeof MangasScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const MangasOnTypesScalarFieldEnum: {
    mangasId: 'mangasId',
    typeId: 'typeId'
  };

  export type MangasOnTypesScalarFieldEnum = (typeof MangasOnTypesScalarFieldEnum)[keyof typeof MangasOnTypesScalarFieldEnum]


  export const MangaChScalarFieldEnum: {
    id: 'id',
    mangaChId: 'mangaChId',
    mangaId: 'mangaId',
    mangaChName: 'mangaChName',
    mangaChUrl: 'mangaChUrl',
    updateAt: 'updateAt',
    create_at: 'create_at'
  };

  export type MangaChScalarFieldEnum = (typeof MangaChScalarFieldEnum)[keyof typeof MangaChScalarFieldEnum]


  export const MangaChImgScalarFieldEnum: {
    id: 'id',
    mangaChImgId: 'mangaChImgId',
    data: 'data',
    url: 'url',
    status_download: 'status_download',
    mangaChId: 'mangaChId'
  };

  export type MangaChImgScalarFieldEnum = (typeof MangaChImgScalarFieldEnum)[keyof typeof MangaChImgScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    published?: BoolNullableFilter<"Post"> | boolean | null
    authorId?: StringFilter<"Post"> | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    create_at?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrderInput | SortOrder
    authorId?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    published?: BoolNullableFilter<"Post"> | boolean | null
    authorId?: StringFilter<"Post"> | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    create_at?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrderInput | SortOrder
    authorId?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null
    authorId?: StringWithAggregatesFilter<"Post"> | string
    updateAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    create_at?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type MangasWhereInput = {
    AND?: MangasWhereInput | MangasWhereInput[]
    OR?: MangasWhereInput[]
    NOT?: MangasWhereInput | MangasWhereInput[]
    id?: StringFilter<"Mangas"> | string
    mangaId?: StringFilter<"Mangas"> | string
    mangaImg?: StringFilter<"Mangas"> | string
    mangaImgData?: BytesNullableFilter<"Mangas"> | Uint8Array | null
    url?: StringFilter<"Mangas"> | string
    mangaTitle?: StringFilter<"Mangas"> | string
    storyName?: StringFilter<"Mangas"> | string
    category?: StringFilter<"Mangas"> | string
    subject?: StringFilter<"Mangas"> | string
    painter?: StringFilter<"Mangas"> | string
    language?: StringFilter<"Mangas"> | string
    charecter?: StringFilter<"Mangas"> | string
    updateAt?: DateTimeFilter<"Mangas"> | Date | string
    create_at?: DateTimeFilter<"Mangas"> | Date | string
    mangaCh?: MangaChListRelationFilter
    types?: MangasOnTypesListRelationFilter
  }

  export type MangasOrderByWithRelationInput = {
    id?: SortOrder
    mangaId?: SortOrder
    mangaImg?: SortOrder
    mangaImgData?: SortOrderInput | SortOrder
    url?: SortOrder
    mangaTitle?: SortOrder
    storyName?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    painter?: SortOrder
    language?: SortOrder
    charecter?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    mangaCh?: MangaChOrderByRelationAggregateInput
    types?: MangasOnTypesOrderByRelationAggregateInput
  }

  export type MangasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mangaId?: string
    AND?: MangasWhereInput | MangasWhereInput[]
    OR?: MangasWhereInput[]
    NOT?: MangasWhereInput | MangasWhereInput[]
    mangaImg?: StringFilter<"Mangas"> | string
    mangaImgData?: BytesNullableFilter<"Mangas"> | Uint8Array | null
    url?: StringFilter<"Mangas"> | string
    mangaTitle?: StringFilter<"Mangas"> | string
    storyName?: StringFilter<"Mangas"> | string
    category?: StringFilter<"Mangas"> | string
    subject?: StringFilter<"Mangas"> | string
    painter?: StringFilter<"Mangas"> | string
    language?: StringFilter<"Mangas"> | string
    charecter?: StringFilter<"Mangas"> | string
    updateAt?: DateTimeFilter<"Mangas"> | Date | string
    create_at?: DateTimeFilter<"Mangas"> | Date | string
    mangaCh?: MangaChListRelationFilter
    types?: MangasOnTypesListRelationFilter
  }, "id" | "mangaId">

  export type MangasOrderByWithAggregationInput = {
    id?: SortOrder
    mangaId?: SortOrder
    mangaImg?: SortOrder
    mangaImgData?: SortOrderInput | SortOrder
    url?: SortOrder
    mangaTitle?: SortOrder
    storyName?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    painter?: SortOrder
    language?: SortOrder
    charecter?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    _count?: MangasCountOrderByAggregateInput
    _max?: MangasMaxOrderByAggregateInput
    _min?: MangasMinOrderByAggregateInput
  }

  export type MangasScalarWhereWithAggregatesInput = {
    AND?: MangasScalarWhereWithAggregatesInput | MangasScalarWhereWithAggregatesInput[]
    OR?: MangasScalarWhereWithAggregatesInput[]
    NOT?: MangasScalarWhereWithAggregatesInput | MangasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mangas"> | string
    mangaId?: StringWithAggregatesFilter<"Mangas"> | string
    mangaImg?: StringWithAggregatesFilter<"Mangas"> | string
    mangaImgData?: BytesNullableWithAggregatesFilter<"Mangas"> | Uint8Array | null
    url?: StringWithAggregatesFilter<"Mangas"> | string
    mangaTitle?: StringWithAggregatesFilter<"Mangas"> | string
    storyName?: StringWithAggregatesFilter<"Mangas"> | string
    category?: StringWithAggregatesFilter<"Mangas"> | string
    subject?: StringWithAggregatesFilter<"Mangas"> | string
    painter?: StringWithAggregatesFilter<"Mangas"> | string
    language?: StringWithAggregatesFilter<"Mangas"> | string
    charecter?: StringWithAggregatesFilter<"Mangas"> | string
    updateAt?: DateTimeWithAggregatesFilter<"Mangas"> | Date | string
    create_at?: DateTimeWithAggregatesFilter<"Mangas"> | Date | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    Mangas?: MangasOnTypesListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Mangas?: MangasOnTypesOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    Mangas?: MangasOnTypesListRelationFilter
  }, "id" | "name">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
  }

  export type MangasOnTypesWhereInput = {
    AND?: MangasOnTypesWhereInput | MangasOnTypesWhereInput[]
    OR?: MangasOnTypesWhereInput[]
    NOT?: MangasOnTypesWhereInput | MangasOnTypesWhereInput[]
    mangasId?: StringFilter<"MangasOnTypes"> | string
    typeId?: IntFilter<"MangasOnTypes"> | number
    Type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    Mangas?: XOR<MangasScalarRelationFilter, MangasWhereInput>
  }

  export type MangasOnTypesOrderByWithRelationInput = {
    mangasId?: SortOrder
    typeId?: SortOrder
    Type?: TypeOrderByWithRelationInput
    Mangas?: MangasOrderByWithRelationInput
  }

  export type MangasOnTypesWhereUniqueInput = Prisma.AtLeast<{
    mangasId_typeId?: MangasOnTypesMangasIdTypeIdCompoundUniqueInput
    AND?: MangasOnTypesWhereInput | MangasOnTypesWhereInput[]
    OR?: MangasOnTypesWhereInput[]
    NOT?: MangasOnTypesWhereInput | MangasOnTypesWhereInput[]
    mangasId?: StringFilter<"MangasOnTypes"> | string
    typeId?: IntFilter<"MangasOnTypes"> | number
    Type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    Mangas?: XOR<MangasScalarRelationFilter, MangasWhereInput>
  }, "mangasId_typeId">

  export type MangasOnTypesOrderByWithAggregationInput = {
    mangasId?: SortOrder
    typeId?: SortOrder
    _count?: MangasOnTypesCountOrderByAggregateInput
    _avg?: MangasOnTypesAvgOrderByAggregateInput
    _max?: MangasOnTypesMaxOrderByAggregateInput
    _min?: MangasOnTypesMinOrderByAggregateInput
    _sum?: MangasOnTypesSumOrderByAggregateInput
  }

  export type MangasOnTypesScalarWhereWithAggregatesInput = {
    AND?: MangasOnTypesScalarWhereWithAggregatesInput | MangasOnTypesScalarWhereWithAggregatesInput[]
    OR?: MangasOnTypesScalarWhereWithAggregatesInput[]
    NOT?: MangasOnTypesScalarWhereWithAggregatesInput | MangasOnTypesScalarWhereWithAggregatesInput[]
    mangasId?: StringWithAggregatesFilter<"MangasOnTypes"> | string
    typeId?: IntWithAggregatesFilter<"MangasOnTypes"> | number
  }

  export type MangaChWhereInput = {
    AND?: MangaChWhereInput | MangaChWhereInput[]
    OR?: MangaChWhereInput[]
    NOT?: MangaChWhereInput | MangaChWhereInput[]
    id?: StringFilter<"MangaCh"> | string
    mangaChId?: StringFilter<"MangaCh"> | string
    mangaId?: StringFilter<"MangaCh"> | string
    mangaChName?: StringFilter<"MangaCh"> | string
    mangaChUrl?: StringFilter<"MangaCh"> | string
    updateAt?: DateTimeFilter<"MangaCh"> | Date | string
    create_at?: DateTimeFilter<"MangaCh"> | Date | string
    mangas?: XOR<MangasScalarRelationFilter, MangasWhereInput>
    mangaChImg?: MangaChImgListRelationFilter
  }

  export type MangaChOrderByWithRelationInput = {
    id?: SortOrder
    mangaChId?: SortOrder
    mangaId?: SortOrder
    mangaChName?: SortOrder
    mangaChUrl?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    mangas?: MangasOrderByWithRelationInput
    mangaChImg?: MangaChImgOrderByRelationAggregateInput
  }

  export type MangaChWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MangaChWhereInput | MangaChWhereInput[]
    OR?: MangaChWhereInput[]
    NOT?: MangaChWhereInput | MangaChWhereInput[]
    mangaChId?: StringFilter<"MangaCh"> | string
    mangaId?: StringFilter<"MangaCh"> | string
    mangaChName?: StringFilter<"MangaCh"> | string
    mangaChUrl?: StringFilter<"MangaCh"> | string
    updateAt?: DateTimeFilter<"MangaCh"> | Date | string
    create_at?: DateTimeFilter<"MangaCh"> | Date | string
    mangas?: XOR<MangasScalarRelationFilter, MangasWhereInput>
    mangaChImg?: MangaChImgListRelationFilter
  }, "id">

  export type MangaChOrderByWithAggregationInput = {
    id?: SortOrder
    mangaChId?: SortOrder
    mangaId?: SortOrder
    mangaChName?: SortOrder
    mangaChUrl?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
    _count?: MangaChCountOrderByAggregateInput
    _max?: MangaChMaxOrderByAggregateInput
    _min?: MangaChMinOrderByAggregateInput
  }

  export type MangaChScalarWhereWithAggregatesInput = {
    AND?: MangaChScalarWhereWithAggregatesInput | MangaChScalarWhereWithAggregatesInput[]
    OR?: MangaChScalarWhereWithAggregatesInput[]
    NOT?: MangaChScalarWhereWithAggregatesInput | MangaChScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MangaCh"> | string
    mangaChId?: StringWithAggregatesFilter<"MangaCh"> | string
    mangaId?: StringWithAggregatesFilter<"MangaCh"> | string
    mangaChName?: StringWithAggregatesFilter<"MangaCh"> | string
    mangaChUrl?: StringWithAggregatesFilter<"MangaCh"> | string
    updateAt?: DateTimeWithAggregatesFilter<"MangaCh"> | Date | string
    create_at?: DateTimeWithAggregatesFilter<"MangaCh"> | Date | string
  }

  export type MangaChImgWhereInput = {
    AND?: MangaChImgWhereInput | MangaChImgWhereInput[]
    OR?: MangaChImgWhereInput[]
    NOT?: MangaChImgWhereInput | MangaChImgWhereInput[]
    id?: StringFilter<"MangaChImg"> | string
    mangaChImgId?: StringNullableFilter<"MangaChImg"> | string | null
    data?: BytesNullableFilter<"MangaChImg"> | Uint8Array | null
    url?: StringFilter<"MangaChImg"> | string
    status_download?: BoolNullableFilter<"MangaChImg"> | boolean | null
    mangaChId?: StringNullableFilter<"MangaChImg"> | string | null
    MangaCh?: XOR<MangaChNullableScalarRelationFilter, MangaChWhereInput> | null
  }

  export type MangaChImgOrderByWithRelationInput = {
    id?: SortOrder
    mangaChImgId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    url?: SortOrder
    status_download?: SortOrderInput | SortOrder
    mangaChId?: SortOrderInput | SortOrder
    MangaCh?: MangaChOrderByWithRelationInput
  }

  export type MangaChImgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MangaChImgWhereInput | MangaChImgWhereInput[]
    OR?: MangaChImgWhereInput[]
    NOT?: MangaChImgWhereInput | MangaChImgWhereInput[]
    mangaChImgId?: StringNullableFilter<"MangaChImg"> | string | null
    data?: BytesNullableFilter<"MangaChImg"> | Uint8Array | null
    url?: StringFilter<"MangaChImg"> | string
    status_download?: BoolNullableFilter<"MangaChImg"> | boolean | null
    mangaChId?: StringNullableFilter<"MangaChImg"> | string | null
    MangaCh?: XOR<MangaChNullableScalarRelationFilter, MangaChWhereInput> | null
  }, "id">

  export type MangaChImgOrderByWithAggregationInput = {
    id?: SortOrder
    mangaChImgId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    url?: SortOrder
    status_download?: SortOrderInput | SortOrder
    mangaChId?: SortOrderInput | SortOrder
    _count?: MangaChImgCountOrderByAggregateInput
    _max?: MangaChImgMaxOrderByAggregateInput
    _min?: MangaChImgMinOrderByAggregateInput
  }

  export type MangaChImgScalarWhereWithAggregatesInput = {
    AND?: MangaChImgScalarWhereWithAggregatesInput | MangaChImgScalarWhereWithAggregatesInput[]
    OR?: MangaChImgScalarWhereWithAggregatesInput[]
    NOT?: MangaChImgScalarWhereWithAggregatesInput | MangaChImgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MangaChImg"> | string
    mangaChImgId?: StringNullableWithAggregatesFilter<"MangaChImg"> | string | null
    data?: BytesNullableWithAggregatesFilter<"MangaChImg"> | Uint8Array | null
    url?: StringWithAggregatesFilter<"MangaChImg"> | string
    status_download?: BoolNullableWithAggregatesFilter<"MangaChImg"> | boolean | null
    mangaChId?: StringNullableWithAggregatesFilter<"MangaChImg"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hashedPassword: string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hashedPassword: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hashedPassword: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    updateAt?: Date | string
    create_at?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    authorId: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    authorId?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    authorId: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    authorId?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangasCreateInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaCh?: MangaChCreateNestedManyWithoutMangasInput
    types?: MangasOnTypesCreateNestedManyWithoutMangasInput
  }

  export type MangasUncheckedCreateInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaCh?: MangaChUncheckedCreateNestedManyWithoutMangasInput
    types?: MangasOnTypesUncheckedCreateNestedManyWithoutMangasInput
  }

  export type MangasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaCh?: MangaChUpdateManyWithoutMangasNestedInput
    types?: MangasOnTypesUpdateManyWithoutMangasNestedInput
  }

  export type MangasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaCh?: MangaChUncheckedUpdateManyWithoutMangasNestedInput
    types?: MangasOnTypesUncheckedUpdateManyWithoutMangasNestedInput
  }

  export type MangasCreateManyInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type MangasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCreateInput = {
    name: string
    Mangas?: MangasOnTypesCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    name: string
    Mangas?: MangasOnTypesUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Mangas?: MangasOnTypesUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Mangas?: MangasOnTypesUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: number
    name: string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangasOnTypesCreateInput = {
    Type: TypeCreateNestedOneWithoutMangasInput
    Mangas: MangasCreateNestedOneWithoutTypesInput
  }

  export type MangasOnTypesUncheckedCreateInput = {
    mangasId: string
    typeId: number
  }

  export type MangasOnTypesUpdateInput = {
    Type?: TypeUpdateOneRequiredWithoutMangasNestedInput
    Mangas?: MangasUpdateOneRequiredWithoutTypesNestedInput
  }

  export type MangasOnTypesUncheckedUpdateInput = {
    mangasId?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type MangasOnTypesCreateManyInput = {
    mangasId: string
    typeId: number
  }

  export type MangasOnTypesUpdateManyMutationInput = {

  }

  export type MangasOnTypesUncheckedUpdateManyInput = {
    mangasId?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type MangaChCreateInput = {
    id?: string
    mangaChId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
    mangas: MangasCreateNestedOneWithoutMangaChInput
    mangaChImg?: MangaChImgCreateNestedManyWithoutMangaChInput
  }

  export type MangaChUncheckedCreateInput = {
    id?: string
    mangaChId: string
    mangaId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaChImg?: MangaChImgUncheckedCreateNestedManyWithoutMangaChInput
  }

  export type MangaChUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangas?: MangasUpdateOneRequiredWithoutMangaChNestedInput
    mangaChImg?: MangaChImgUpdateManyWithoutMangaChNestedInput
  }

  export type MangaChUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaChImg?: MangaChImgUncheckedUpdateManyWithoutMangaChNestedInput
  }

  export type MangaChCreateManyInput = {
    id?: string
    mangaChId: string
    mangaId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type MangaChUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaChUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaChImgCreateInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
    MangaCh?: MangaChCreateNestedOneWithoutMangaChImgInput
  }

  export type MangaChImgUncheckedCreateInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
    mangaChId?: string | null
  }

  export type MangaChImgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
    MangaCh?: MangaChUpdateOneWithoutMangaChImgNestedInput
  }

  export type MangaChImgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mangaChId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MangaChImgCreateManyInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
    mangaChId?: string | null
  }

  export type MangaChImgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MangaChImgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mangaChId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type MangaChListRelationFilter = {
    every?: MangaChWhereInput
    some?: MangaChWhereInput
    none?: MangaChWhereInput
  }

  export type MangasOnTypesListRelationFilter = {
    every?: MangasOnTypesWhereInput
    some?: MangasOnTypesWhereInput
    none?: MangasOnTypesWhereInput
  }

  export type MangaChOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangasOnTypesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangasCountOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
    mangaImg?: SortOrder
    mangaImgData?: SortOrder
    url?: SortOrder
    mangaTitle?: SortOrder
    storyName?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    painter?: SortOrder
    language?: SortOrder
    charecter?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type MangasMaxOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
    mangaImg?: SortOrder
    mangaImgData?: SortOrder
    url?: SortOrder
    mangaTitle?: SortOrder
    storyName?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    painter?: SortOrder
    language?: SortOrder
    charecter?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type MangasMinOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
    mangaImg?: SortOrder
    mangaImgData?: SortOrder
    url?: SortOrder
    mangaTitle?: SortOrder
    storyName?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    painter?: SortOrder
    language?: SortOrder
    charecter?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type MangasScalarRelationFilter = {
    is?: MangasWhereInput
    isNot?: MangasWhereInput
  }

  export type MangasOnTypesMangasIdTypeIdCompoundUniqueInput = {
    mangasId: string
    typeId: number
  }

  export type MangasOnTypesCountOrderByAggregateInput = {
    mangasId?: SortOrder
    typeId?: SortOrder
  }

  export type MangasOnTypesAvgOrderByAggregateInput = {
    typeId?: SortOrder
  }

  export type MangasOnTypesMaxOrderByAggregateInput = {
    mangasId?: SortOrder
    typeId?: SortOrder
  }

  export type MangasOnTypesMinOrderByAggregateInput = {
    mangasId?: SortOrder
    typeId?: SortOrder
  }

  export type MangasOnTypesSumOrderByAggregateInput = {
    typeId?: SortOrder
  }

  export type MangaChImgListRelationFilter = {
    every?: MangaChImgWhereInput
    some?: MangaChImgWhereInput
    none?: MangaChImgWhereInput
  }

  export type MangaChImgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangaChCountOrderByAggregateInput = {
    id?: SortOrder
    mangaChId?: SortOrder
    mangaId?: SortOrder
    mangaChName?: SortOrder
    mangaChUrl?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type MangaChMaxOrderByAggregateInput = {
    id?: SortOrder
    mangaChId?: SortOrder
    mangaId?: SortOrder
    mangaChName?: SortOrder
    mangaChUrl?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type MangaChMinOrderByAggregateInput = {
    id?: SortOrder
    mangaChId?: SortOrder
    mangaId?: SortOrder
    mangaChName?: SortOrder
    mangaChUrl?: SortOrder
    updateAt?: SortOrder
    create_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MangaChNullableScalarRelationFilter = {
    is?: MangaChWhereInput | null
    isNot?: MangaChWhereInput | null
  }

  export type MangaChImgCountOrderByAggregateInput = {
    id?: SortOrder
    mangaChImgId?: SortOrder
    data?: SortOrder
    url?: SortOrder
    status_download?: SortOrder
    mangaChId?: SortOrder
  }

  export type MangaChImgMaxOrderByAggregateInput = {
    id?: SortOrder
    mangaChImgId?: SortOrder
    data?: SortOrder
    url?: SortOrder
    status_download?: SortOrder
    mangaChId?: SortOrder
  }

  export type MangaChImgMinOrderByAggregateInput = {
    id?: SortOrder
    mangaChImgId?: SortOrder
    data?: SortOrder
    url?: SortOrder
    status_download?: SortOrder
    mangaChId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type MangaChCreateNestedManyWithoutMangasInput = {
    create?: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput> | MangaChCreateWithoutMangasInput[] | MangaChUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangaChCreateOrConnectWithoutMangasInput | MangaChCreateOrConnectWithoutMangasInput[]
    createMany?: MangaChCreateManyMangasInputEnvelope
    connect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
  }

  export type MangasOnTypesCreateNestedManyWithoutMangasInput = {
    create?: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput> | MangasOnTypesCreateWithoutMangasInput[] | MangasOnTypesUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutMangasInput | MangasOnTypesCreateOrConnectWithoutMangasInput[]
    createMany?: MangasOnTypesCreateManyMangasInputEnvelope
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
  }

  export type MangaChUncheckedCreateNestedManyWithoutMangasInput = {
    create?: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput> | MangaChCreateWithoutMangasInput[] | MangaChUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangaChCreateOrConnectWithoutMangasInput | MangaChCreateOrConnectWithoutMangasInput[]
    createMany?: MangaChCreateManyMangasInputEnvelope
    connect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
  }

  export type MangasOnTypesUncheckedCreateNestedManyWithoutMangasInput = {
    create?: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput> | MangasOnTypesCreateWithoutMangasInput[] | MangasOnTypesUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutMangasInput | MangasOnTypesCreateOrConnectWithoutMangasInput[]
    createMany?: MangasOnTypesCreateManyMangasInputEnvelope
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type MangaChUpdateManyWithoutMangasNestedInput = {
    create?: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput> | MangaChCreateWithoutMangasInput[] | MangaChUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangaChCreateOrConnectWithoutMangasInput | MangaChCreateOrConnectWithoutMangasInput[]
    upsert?: MangaChUpsertWithWhereUniqueWithoutMangasInput | MangaChUpsertWithWhereUniqueWithoutMangasInput[]
    createMany?: MangaChCreateManyMangasInputEnvelope
    set?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    disconnect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    delete?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    connect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    update?: MangaChUpdateWithWhereUniqueWithoutMangasInput | MangaChUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: MangaChUpdateManyWithWhereWithoutMangasInput | MangaChUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: MangaChScalarWhereInput | MangaChScalarWhereInput[]
  }

  export type MangasOnTypesUpdateManyWithoutMangasNestedInput = {
    create?: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput> | MangasOnTypesCreateWithoutMangasInput[] | MangasOnTypesUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutMangasInput | MangasOnTypesCreateOrConnectWithoutMangasInput[]
    upsert?: MangasOnTypesUpsertWithWhereUniqueWithoutMangasInput | MangasOnTypesUpsertWithWhereUniqueWithoutMangasInput[]
    createMany?: MangasOnTypesCreateManyMangasInputEnvelope
    set?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    disconnect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    delete?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    update?: MangasOnTypesUpdateWithWhereUniqueWithoutMangasInput | MangasOnTypesUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: MangasOnTypesUpdateManyWithWhereWithoutMangasInput | MangasOnTypesUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
  }

  export type MangaChUncheckedUpdateManyWithoutMangasNestedInput = {
    create?: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput> | MangaChCreateWithoutMangasInput[] | MangaChUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangaChCreateOrConnectWithoutMangasInput | MangaChCreateOrConnectWithoutMangasInput[]
    upsert?: MangaChUpsertWithWhereUniqueWithoutMangasInput | MangaChUpsertWithWhereUniqueWithoutMangasInput[]
    createMany?: MangaChCreateManyMangasInputEnvelope
    set?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    disconnect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    delete?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    connect?: MangaChWhereUniqueInput | MangaChWhereUniqueInput[]
    update?: MangaChUpdateWithWhereUniqueWithoutMangasInput | MangaChUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: MangaChUpdateManyWithWhereWithoutMangasInput | MangaChUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: MangaChScalarWhereInput | MangaChScalarWhereInput[]
  }

  export type MangasOnTypesUncheckedUpdateManyWithoutMangasNestedInput = {
    create?: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput> | MangasOnTypesCreateWithoutMangasInput[] | MangasOnTypesUncheckedCreateWithoutMangasInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutMangasInput | MangasOnTypesCreateOrConnectWithoutMangasInput[]
    upsert?: MangasOnTypesUpsertWithWhereUniqueWithoutMangasInput | MangasOnTypesUpsertWithWhereUniqueWithoutMangasInput[]
    createMany?: MangasOnTypesCreateManyMangasInputEnvelope
    set?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    disconnect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    delete?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    update?: MangasOnTypesUpdateWithWhereUniqueWithoutMangasInput | MangasOnTypesUpdateWithWhereUniqueWithoutMangasInput[]
    updateMany?: MangasOnTypesUpdateManyWithWhereWithoutMangasInput | MangasOnTypesUpdateManyWithWhereWithoutMangasInput[]
    deleteMany?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
  }

  export type MangasOnTypesCreateNestedManyWithoutTypeInput = {
    create?: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput> | MangasOnTypesCreateWithoutTypeInput[] | MangasOnTypesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutTypeInput | MangasOnTypesCreateOrConnectWithoutTypeInput[]
    createMany?: MangasOnTypesCreateManyTypeInputEnvelope
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
  }

  export type MangasOnTypesUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput> | MangasOnTypesCreateWithoutTypeInput[] | MangasOnTypesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutTypeInput | MangasOnTypesCreateOrConnectWithoutTypeInput[]
    createMany?: MangasOnTypesCreateManyTypeInputEnvelope
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
  }

  export type MangasOnTypesUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput> | MangasOnTypesCreateWithoutTypeInput[] | MangasOnTypesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutTypeInput | MangasOnTypesCreateOrConnectWithoutTypeInput[]
    upsert?: MangasOnTypesUpsertWithWhereUniqueWithoutTypeInput | MangasOnTypesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MangasOnTypesCreateManyTypeInputEnvelope
    set?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    disconnect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    delete?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    update?: MangasOnTypesUpdateWithWhereUniqueWithoutTypeInput | MangasOnTypesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MangasOnTypesUpdateManyWithWhereWithoutTypeInput | MangasOnTypesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MangasOnTypesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput> | MangasOnTypesCreateWithoutTypeInput[] | MangasOnTypesUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MangasOnTypesCreateOrConnectWithoutTypeInput | MangasOnTypesCreateOrConnectWithoutTypeInput[]
    upsert?: MangasOnTypesUpsertWithWhereUniqueWithoutTypeInput | MangasOnTypesUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MangasOnTypesCreateManyTypeInputEnvelope
    set?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    disconnect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    delete?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    connect?: MangasOnTypesWhereUniqueInput | MangasOnTypesWhereUniqueInput[]
    update?: MangasOnTypesUpdateWithWhereUniqueWithoutTypeInput | MangasOnTypesUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MangasOnTypesUpdateManyWithWhereWithoutTypeInput | MangasOnTypesUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
  }

  export type TypeCreateNestedOneWithoutMangasInput = {
    create?: XOR<TypeCreateWithoutMangasInput, TypeUncheckedCreateWithoutMangasInput>
    connectOrCreate?: TypeCreateOrConnectWithoutMangasInput
    connect?: TypeWhereUniqueInput
  }

  export type MangasCreateNestedOneWithoutTypesInput = {
    create?: XOR<MangasCreateWithoutTypesInput, MangasUncheckedCreateWithoutTypesInput>
    connectOrCreate?: MangasCreateOrConnectWithoutTypesInput
    connect?: MangasWhereUniqueInput
  }

  export type TypeUpdateOneRequiredWithoutMangasNestedInput = {
    create?: XOR<TypeCreateWithoutMangasInput, TypeUncheckedCreateWithoutMangasInput>
    connectOrCreate?: TypeCreateOrConnectWithoutMangasInput
    upsert?: TypeUpsertWithoutMangasInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutMangasInput, TypeUpdateWithoutMangasInput>, TypeUncheckedUpdateWithoutMangasInput>
  }

  export type MangasUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<MangasCreateWithoutTypesInput, MangasUncheckedCreateWithoutTypesInput>
    connectOrCreate?: MangasCreateOrConnectWithoutTypesInput
    upsert?: MangasUpsertWithoutTypesInput
    connect?: MangasWhereUniqueInput
    update?: XOR<XOR<MangasUpdateToOneWithWhereWithoutTypesInput, MangasUpdateWithoutTypesInput>, MangasUncheckedUpdateWithoutTypesInput>
  }

  export type MangasCreateNestedOneWithoutMangaChInput = {
    create?: XOR<MangasCreateWithoutMangaChInput, MangasUncheckedCreateWithoutMangaChInput>
    connectOrCreate?: MangasCreateOrConnectWithoutMangaChInput
    connect?: MangasWhereUniqueInput
  }

  export type MangaChImgCreateNestedManyWithoutMangaChInput = {
    create?: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput> | MangaChImgCreateWithoutMangaChInput[] | MangaChImgUncheckedCreateWithoutMangaChInput[]
    connectOrCreate?: MangaChImgCreateOrConnectWithoutMangaChInput | MangaChImgCreateOrConnectWithoutMangaChInput[]
    createMany?: MangaChImgCreateManyMangaChInputEnvelope
    connect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
  }

  export type MangaChImgUncheckedCreateNestedManyWithoutMangaChInput = {
    create?: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput> | MangaChImgCreateWithoutMangaChInput[] | MangaChImgUncheckedCreateWithoutMangaChInput[]
    connectOrCreate?: MangaChImgCreateOrConnectWithoutMangaChInput | MangaChImgCreateOrConnectWithoutMangaChInput[]
    createMany?: MangaChImgCreateManyMangaChInputEnvelope
    connect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
  }

  export type MangasUpdateOneRequiredWithoutMangaChNestedInput = {
    create?: XOR<MangasCreateWithoutMangaChInput, MangasUncheckedCreateWithoutMangaChInput>
    connectOrCreate?: MangasCreateOrConnectWithoutMangaChInput
    upsert?: MangasUpsertWithoutMangaChInput
    connect?: MangasWhereUniqueInput
    update?: XOR<XOR<MangasUpdateToOneWithWhereWithoutMangaChInput, MangasUpdateWithoutMangaChInput>, MangasUncheckedUpdateWithoutMangaChInput>
  }

  export type MangaChImgUpdateManyWithoutMangaChNestedInput = {
    create?: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput> | MangaChImgCreateWithoutMangaChInput[] | MangaChImgUncheckedCreateWithoutMangaChInput[]
    connectOrCreate?: MangaChImgCreateOrConnectWithoutMangaChInput | MangaChImgCreateOrConnectWithoutMangaChInput[]
    upsert?: MangaChImgUpsertWithWhereUniqueWithoutMangaChInput | MangaChImgUpsertWithWhereUniqueWithoutMangaChInput[]
    createMany?: MangaChImgCreateManyMangaChInputEnvelope
    set?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    disconnect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    delete?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    connect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    update?: MangaChImgUpdateWithWhereUniqueWithoutMangaChInput | MangaChImgUpdateWithWhereUniqueWithoutMangaChInput[]
    updateMany?: MangaChImgUpdateManyWithWhereWithoutMangaChInput | MangaChImgUpdateManyWithWhereWithoutMangaChInput[]
    deleteMany?: MangaChImgScalarWhereInput | MangaChImgScalarWhereInput[]
  }

  export type MangaChImgUncheckedUpdateManyWithoutMangaChNestedInput = {
    create?: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput> | MangaChImgCreateWithoutMangaChInput[] | MangaChImgUncheckedCreateWithoutMangaChInput[]
    connectOrCreate?: MangaChImgCreateOrConnectWithoutMangaChInput | MangaChImgCreateOrConnectWithoutMangaChInput[]
    upsert?: MangaChImgUpsertWithWhereUniqueWithoutMangaChInput | MangaChImgUpsertWithWhereUniqueWithoutMangaChInput[]
    createMany?: MangaChImgCreateManyMangaChInputEnvelope
    set?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    disconnect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    delete?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    connect?: MangaChImgWhereUniqueInput | MangaChImgWhereUniqueInput[]
    update?: MangaChImgUpdateWithWhereUniqueWithoutMangaChInput | MangaChImgUpdateWithWhereUniqueWithoutMangaChInput[]
    updateMany?: MangaChImgUpdateManyWithWhereWithoutMangaChInput | MangaChImgUpdateManyWithWhereWithoutMangaChInput[]
    deleteMany?: MangaChImgScalarWhereInput | MangaChImgScalarWhereInput[]
  }

  export type MangaChCreateNestedOneWithoutMangaChImgInput = {
    create?: XOR<MangaChCreateWithoutMangaChImgInput, MangaChUncheckedCreateWithoutMangaChImgInput>
    connectOrCreate?: MangaChCreateOrConnectWithoutMangaChImgInput
    connect?: MangaChWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MangaChUpdateOneWithoutMangaChImgNestedInput = {
    create?: XOR<MangaChCreateWithoutMangaChImgInput, MangaChUncheckedCreateWithoutMangaChImgInput>
    connectOrCreate?: MangaChCreateOrConnectWithoutMangaChImgInput
    upsert?: MangaChUpsertWithoutMangaChImgInput
    disconnect?: MangaChWhereInput | boolean
    delete?: MangaChWhereInput | boolean
    connect?: MangaChWhereUniqueInput
    update?: XOR<XOR<MangaChUpdateToOneWithWhereWithoutMangaChImgInput, MangaChUpdateWithoutMangaChImgInput>, MangaChUncheckedUpdateWithoutMangaChImgInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    published?: BoolNullableFilter<"Post"> | boolean | null
    authorId?: StringFilter<"Post"> | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    create_at?: DateTimeFilter<"Post"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    hashedPassword: string
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    hashedPassword: string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type MangaChCreateWithoutMangasInput = {
    id?: string
    mangaChId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaChImg?: MangaChImgCreateNestedManyWithoutMangaChInput
  }

  export type MangaChUncheckedCreateWithoutMangasInput = {
    id?: string
    mangaChId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaChImg?: MangaChImgUncheckedCreateNestedManyWithoutMangaChInput
  }

  export type MangaChCreateOrConnectWithoutMangasInput = {
    where: MangaChWhereUniqueInput
    create: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput>
  }

  export type MangaChCreateManyMangasInputEnvelope = {
    data: MangaChCreateManyMangasInput | MangaChCreateManyMangasInput[]
  }

  export type MangasOnTypesCreateWithoutMangasInput = {
    Type: TypeCreateNestedOneWithoutMangasInput
  }

  export type MangasOnTypesUncheckedCreateWithoutMangasInput = {
    typeId: number
  }

  export type MangasOnTypesCreateOrConnectWithoutMangasInput = {
    where: MangasOnTypesWhereUniqueInput
    create: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput>
  }

  export type MangasOnTypesCreateManyMangasInputEnvelope = {
    data: MangasOnTypesCreateManyMangasInput | MangasOnTypesCreateManyMangasInput[]
  }

  export type MangaChUpsertWithWhereUniqueWithoutMangasInput = {
    where: MangaChWhereUniqueInput
    update: XOR<MangaChUpdateWithoutMangasInput, MangaChUncheckedUpdateWithoutMangasInput>
    create: XOR<MangaChCreateWithoutMangasInput, MangaChUncheckedCreateWithoutMangasInput>
  }

  export type MangaChUpdateWithWhereUniqueWithoutMangasInput = {
    where: MangaChWhereUniqueInput
    data: XOR<MangaChUpdateWithoutMangasInput, MangaChUncheckedUpdateWithoutMangasInput>
  }

  export type MangaChUpdateManyWithWhereWithoutMangasInput = {
    where: MangaChScalarWhereInput
    data: XOR<MangaChUpdateManyMutationInput, MangaChUncheckedUpdateManyWithoutMangasInput>
  }

  export type MangaChScalarWhereInput = {
    AND?: MangaChScalarWhereInput | MangaChScalarWhereInput[]
    OR?: MangaChScalarWhereInput[]
    NOT?: MangaChScalarWhereInput | MangaChScalarWhereInput[]
    id?: StringFilter<"MangaCh"> | string
    mangaChId?: StringFilter<"MangaCh"> | string
    mangaId?: StringFilter<"MangaCh"> | string
    mangaChName?: StringFilter<"MangaCh"> | string
    mangaChUrl?: StringFilter<"MangaCh"> | string
    updateAt?: DateTimeFilter<"MangaCh"> | Date | string
    create_at?: DateTimeFilter<"MangaCh"> | Date | string
  }

  export type MangasOnTypesUpsertWithWhereUniqueWithoutMangasInput = {
    where: MangasOnTypesWhereUniqueInput
    update: XOR<MangasOnTypesUpdateWithoutMangasInput, MangasOnTypesUncheckedUpdateWithoutMangasInput>
    create: XOR<MangasOnTypesCreateWithoutMangasInput, MangasOnTypesUncheckedCreateWithoutMangasInput>
  }

  export type MangasOnTypesUpdateWithWhereUniqueWithoutMangasInput = {
    where: MangasOnTypesWhereUniqueInput
    data: XOR<MangasOnTypesUpdateWithoutMangasInput, MangasOnTypesUncheckedUpdateWithoutMangasInput>
  }

  export type MangasOnTypesUpdateManyWithWhereWithoutMangasInput = {
    where: MangasOnTypesScalarWhereInput
    data: XOR<MangasOnTypesUpdateManyMutationInput, MangasOnTypesUncheckedUpdateManyWithoutMangasInput>
  }

  export type MangasOnTypesScalarWhereInput = {
    AND?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
    OR?: MangasOnTypesScalarWhereInput[]
    NOT?: MangasOnTypesScalarWhereInput | MangasOnTypesScalarWhereInput[]
    mangasId?: StringFilter<"MangasOnTypes"> | string
    typeId?: IntFilter<"MangasOnTypes"> | number
  }

  export type MangasOnTypesCreateWithoutTypeInput = {
    Mangas: MangasCreateNestedOneWithoutTypesInput
  }

  export type MangasOnTypesUncheckedCreateWithoutTypeInput = {
    mangasId: string
  }

  export type MangasOnTypesCreateOrConnectWithoutTypeInput = {
    where: MangasOnTypesWhereUniqueInput
    create: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput>
  }

  export type MangasOnTypesCreateManyTypeInputEnvelope = {
    data: MangasOnTypesCreateManyTypeInput | MangasOnTypesCreateManyTypeInput[]
  }

  export type MangasOnTypesUpsertWithWhereUniqueWithoutTypeInput = {
    where: MangasOnTypesWhereUniqueInput
    update: XOR<MangasOnTypesUpdateWithoutTypeInput, MangasOnTypesUncheckedUpdateWithoutTypeInput>
    create: XOR<MangasOnTypesCreateWithoutTypeInput, MangasOnTypesUncheckedCreateWithoutTypeInput>
  }

  export type MangasOnTypesUpdateWithWhereUniqueWithoutTypeInput = {
    where: MangasOnTypesWhereUniqueInput
    data: XOR<MangasOnTypesUpdateWithoutTypeInput, MangasOnTypesUncheckedUpdateWithoutTypeInput>
  }

  export type MangasOnTypesUpdateManyWithWhereWithoutTypeInput = {
    where: MangasOnTypesScalarWhereInput
    data: XOR<MangasOnTypesUpdateManyMutationInput, MangasOnTypesUncheckedUpdateManyWithoutTypeInput>
  }

  export type TypeCreateWithoutMangasInput = {
    name: string
  }

  export type TypeUncheckedCreateWithoutMangasInput = {
    id?: number
    name: string
  }

  export type TypeCreateOrConnectWithoutMangasInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutMangasInput, TypeUncheckedCreateWithoutMangasInput>
  }

  export type MangasCreateWithoutTypesInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaCh?: MangaChCreateNestedManyWithoutMangasInput
  }

  export type MangasUncheckedCreateWithoutTypesInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    mangaCh?: MangaChUncheckedCreateNestedManyWithoutMangasInput
  }

  export type MangasCreateOrConnectWithoutTypesInput = {
    where: MangasWhereUniqueInput
    create: XOR<MangasCreateWithoutTypesInput, MangasUncheckedCreateWithoutTypesInput>
  }

  export type TypeUpsertWithoutMangasInput = {
    update: XOR<TypeUpdateWithoutMangasInput, TypeUncheckedUpdateWithoutMangasInput>
    create: XOR<TypeCreateWithoutMangasInput, TypeUncheckedCreateWithoutMangasInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutMangasInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutMangasInput, TypeUncheckedUpdateWithoutMangasInput>
  }

  export type TypeUpdateWithoutMangasInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateWithoutMangasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangasUpsertWithoutTypesInput = {
    update: XOR<MangasUpdateWithoutTypesInput, MangasUncheckedUpdateWithoutTypesInput>
    create: XOR<MangasCreateWithoutTypesInput, MangasUncheckedCreateWithoutTypesInput>
    where?: MangasWhereInput
  }

  export type MangasUpdateToOneWithWhereWithoutTypesInput = {
    where?: MangasWhereInput
    data: XOR<MangasUpdateWithoutTypesInput, MangasUncheckedUpdateWithoutTypesInput>
  }

  export type MangasUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaCh?: MangaChUpdateManyWithoutMangasNestedInput
  }

  export type MangasUncheckedUpdateWithoutTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaCh?: MangaChUncheckedUpdateManyWithoutMangasNestedInput
  }

  export type MangasCreateWithoutMangaChInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    types?: MangasOnTypesCreateNestedManyWithoutMangasInput
  }

  export type MangasUncheckedCreateWithoutMangaChInput = {
    id?: string
    mangaId: string
    mangaImg: string
    mangaImgData?: Uint8Array | null
    url: string
    mangaTitle: string
    storyName: string
    category: string
    subject: string
    painter: string
    language: string
    charecter: string
    updateAt?: Date | string
    create_at?: Date | string
    types?: MangasOnTypesUncheckedCreateNestedManyWithoutMangasInput
  }

  export type MangasCreateOrConnectWithoutMangaChInput = {
    where: MangasWhereUniqueInput
    create: XOR<MangasCreateWithoutMangaChInput, MangasUncheckedCreateWithoutMangaChInput>
  }

  export type MangaChImgCreateWithoutMangaChInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
  }

  export type MangaChImgUncheckedCreateWithoutMangaChInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
  }

  export type MangaChImgCreateOrConnectWithoutMangaChInput = {
    where: MangaChImgWhereUniqueInput
    create: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput>
  }

  export type MangaChImgCreateManyMangaChInputEnvelope = {
    data: MangaChImgCreateManyMangaChInput | MangaChImgCreateManyMangaChInput[]
  }

  export type MangasUpsertWithoutMangaChInput = {
    update: XOR<MangasUpdateWithoutMangaChInput, MangasUncheckedUpdateWithoutMangaChInput>
    create: XOR<MangasCreateWithoutMangaChInput, MangasUncheckedCreateWithoutMangaChInput>
    where?: MangasWhereInput
  }

  export type MangasUpdateToOneWithWhereWithoutMangaChInput = {
    where?: MangasWhereInput
    data: XOR<MangasUpdateWithoutMangaChInput, MangasUncheckedUpdateWithoutMangaChInput>
  }

  export type MangasUpdateWithoutMangaChInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: MangasOnTypesUpdateManyWithoutMangasNestedInput
  }

  export type MangasUncheckedUpdateWithoutMangaChInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaImg?: StringFieldUpdateOperationsInput | string
    mangaImgData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    mangaTitle?: StringFieldUpdateOperationsInput | string
    storyName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    charecter?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    types?: MangasOnTypesUncheckedUpdateManyWithoutMangasNestedInput
  }

  export type MangaChImgUpsertWithWhereUniqueWithoutMangaChInput = {
    where: MangaChImgWhereUniqueInput
    update: XOR<MangaChImgUpdateWithoutMangaChInput, MangaChImgUncheckedUpdateWithoutMangaChInput>
    create: XOR<MangaChImgCreateWithoutMangaChInput, MangaChImgUncheckedCreateWithoutMangaChInput>
  }

  export type MangaChImgUpdateWithWhereUniqueWithoutMangaChInput = {
    where: MangaChImgWhereUniqueInput
    data: XOR<MangaChImgUpdateWithoutMangaChInput, MangaChImgUncheckedUpdateWithoutMangaChInput>
  }

  export type MangaChImgUpdateManyWithWhereWithoutMangaChInput = {
    where: MangaChImgScalarWhereInput
    data: XOR<MangaChImgUpdateManyMutationInput, MangaChImgUncheckedUpdateManyWithoutMangaChInput>
  }

  export type MangaChImgScalarWhereInput = {
    AND?: MangaChImgScalarWhereInput | MangaChImgScalarWhereInput[]
    OR?: MangaChImgScalarWhereInput[]
    NOT?: MangaChImgScalarWhereInput | MangaChImgScalarWhereInput[]
    id?: StringFilter<"MangaChImg"> | string
    mangaChImgId?: StringNullableFilter<"MangaChImg"> | string | null
    data?: BytesNullableFilter<"MangaChImg"> | Uint8Array | null
    url?: StringFilter<"MangaChImg"> | string
    status_download?: BoolNullableFilter<"MangaChImg"> | boolean | null
    mangaChId?: StringNullableFilter<"MangaChImg"> | string | null
  }

  export type MangaChCreateWithoutMangaChImgInput = {
    id?: string
    mangaChId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
    mangas: MangasCreateNestedOneWithoutMangaChInput
  }

  export type MangaChUncheckedCreateWithoutMangaChImgInput = {
    id?: string
    mangaChId: string
    mangaId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type MangaChCreateOrConnectWithoutMangaChImgInput = {
    where: MangaChWhereUniqueInput
    create: XOR<MangaChCreateWithoutMangaChImgInput, MangaChUncheckedCreateWithoutMangaChImgInput>
  }

  export type MangaChUpsertWithoutMangaChImgInput = {
    update: XOR<MangaChUpdateWithoutMangaChImgInput, MangaChUncheckedUpdateWithoutMangaChImgInput>
    create: XOR<MangaChCreateWithoutMangaChImgInput, MangaChUncheckedCreateWithoutMangaChImgInput>
    where?: MangaChWhereInput
  }

  export type MangaChUpdateToOneWithWhereWithoutMangaChImgInput = {
    where?: MangaChWhereInput
    data: XOR<MangaChUpdateWithoutMangaChImgInput, MangaChUncheckedUpdateWithoutMangaChImgInput>
  }

  export type MangaChUpdateWithoutMangaChImgInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangas?: MangasUpdateOneRequiredWithoutMangaChNestedInput
  }

  export type MangaChUncheckedUpdateWithoutMangaChImgInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean | null
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaChCreateManyMangasInput = {
    id?: string
    mangaChId: string
    mangaChName: string
    mangaChUrl: string
    updateAt?: Date | string
    create_at?: Date | string
  }

  export type MangasOnTypesCreateManyMangasInput = {
    typeId: number
  }

  export type MangaChUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaChImg?: MangaChImgUpdateManyWithoutMangaChNestedInput
  }

  export type MangaChUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaChImg?: MangaChImgUncheckedUpdateManyWithoutMangaChNestedInput
  }

  export type MangaChUncheckedUpdateManyWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChId?: StringFieldUpdateOperationsInput | string
    mangaChName?: StringFieldUpdateOperationsInput | string
    mangaChUrl?: StringFieldUpdateOperationsInput | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangasOnTypesUpdateWithoutMangasInput = {
    Type?: TypeUpdateOneRequiredWithoutMangasNestedInput
  }

  export type MangasOnTypesUncheckedUpdateWithoutMangasInput = {
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type MangasOnTypesUncheckedUpdateManyWithoutMangasInput = {
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type MangasOnTypesCreateManyTypeInput = {
    mangasId: string
  }

  export type MangasOnTypesUpdateWithoutTypeInput = {
    Mangas?: MangasUpdateOneRequiredWithoutTypesNestedInput
  }

  export type MangasOnTypesUncheckedUpdateWithoutTypeInput = {
    mangasId?: StringFieldUpdateOperationsInput | string
  }

  export type MangasOnTypesUncheckedUpdateManyWithoutTypeInput = {
    mangasId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaChImgCreateManyMangaChInput = {
    id?: string
    mangaChImgId?: string | null
    data?: Uint8Array | null
    url: string
    status_download?: boolean | null
  }

  export type MangaChImgUpdateWithoutMangaChInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MangaChImgUncheckedUpdateWithoutMangaChInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MangaChImgUncheckedUpdateManyWithoutMangaChInput = {
    id?: StringFieldUpdateOperationsInput | string
    mangaChImgId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    url?: StringFieldUpdateOperationsInput | string
    status_download?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}