
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model FinanceData
 * 
 */
export type FinanceData = $Result.DefaultSelection<Prisma.$FinanceDataPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserAccess
 * 
 */
export type UserAccess = $Result.DefaultSelection<Prisma.$UserAccessPayload>
/**
 * Model Access
 * 
 */
export type Access = $Result.DefaultSelection<Prisma.$AccessPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Finances
 * const finances = await prisma.finance.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Finances
   * const finances = await prisma.finance.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs>;

  /**
   * `prisma.financeData`: Exposes CRUD operations for the **FinanceData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceData
    * const financeData = await prisma.financeData.findMany()
    * ```
    */
  get financeData(): Prisma.FinanceDataDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userAccess`: Exposes CRUD operations for the **UserAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccesses
    * const userAccesses = await prisma.userAccess.findMany()
    * ```
    */
  get userAccess(): Prisma.UserAccessDelegate<ExtArgs>;

  /**
   * `prisma.access`: Exposes CRUD operations for the **Access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesses
    * const accesses = await prisma.access.findMany()
    * ```
    */
  get access(): Prisma.AccessDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.2.0
   * Query Engine version: e90b936d84779543cbe0e494bc8b9d7337fad8e4
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Finance: 'Finance',
    FinanceData: 'FinanceData',
    User: 'User',
    UserAccess: 'UserAccess',
    Access: 'Access'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'finance' | 'financeData' | 'user' | 'userAccess' | 'access'
      txIsolationLevel: never
    },
    model: {
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FinanceFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FinanceAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>,
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      FinanceData: {
        payload: Prisma.$FinanceDataPayload<ExtArgs>
        fields: Prisma.FinanceDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          findFirst: {
            args: Prisma.FinanceDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          findMany: {
            args: Prisma.FinanceDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>[]
          }
          create: {
            args: Prisma.FinanceDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          createMany: {
            args: Prisma.FinanceDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FinanceDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          update: {
            args: Prisma.FinanceDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          deleteMany: {
            args: Prisma.FinanceDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FinanceDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinanceDataPayload>
          }
          aggregate: {
            args: Prisma.FinanceDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFinanceData>
          }
          groupBy: {
            args: Prisma.FinanceDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FinanceDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FinanceDataFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FinanceDataAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FinanceDataCountArgs<ExtArgs>,
            result: $Utils.Optional<FinanceDataCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserAccess: {
        payload: Prisma.$UserAccessPayload<ExtArgs>
        fields: Prisma.UserAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findFirst: {
            args: Prisma.UserAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findMany: {
            args: Prisma.UserAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>[]
          }
          create: {
            args: Prisma.UserAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          createMany: {
            args: Prisma.UserAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          update: {
            args: Prisma.UserAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          aggregate: {
            args: Prisma.UserAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserAccess>
          }
          groupBy: {
            args: Prisma.UserAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserAccessGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAccessFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAccessAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<UserAccessCountAggregateOutputType> | number
          }
        }
      }
      Access: {
        payload: Prisma.$AccessPayload<ExtArgs>
        fields: Prisma.AccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findFirst: {
            args: Prisma.AccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findMany: {
            args: Prisma.AccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          create: {
            args: Prisma.AccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          createMany: {
            args: Prisma.AccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          update: {
            args: Prisma.AccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          deleteMany: {
            args: Prisma.AccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          aggregate: {
            args: Prisma.AccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccess>
          }
          groupBy: {
            args: Prisma.AccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccessGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccessFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccessAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AccessCountArgs<ExtArgs>,
            result: $Utils.Optional<AccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type FinanceDataCountOutputType
   */

  export type FinanceDataCountOutputType = {
    finance: number
  }

  export type FinanceDataCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    finance?: boolean | FinanceDataCountOutputTypeCountFinanceArgs
  }

  // Custom InputTypes

  /**
   * FinanceDataCountOutputType without action
   */
  export type FinanceDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceDataCountOutputType
     */
    select?: FinanceDataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FinanceDataCountOutputType without action
   */
  export type FinanceDataCountOutputTypeCountFinanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userAccess: number
    Finance: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAccess?: boolean | UserCountOutputTypeCountUserAccessArgs
    Finance?: boolean | UserCountOutputTypeCountFinanceArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
  }



  /**
   * Count Type AccessCountOutputType
   */

  export type AccessCountOutputType = {
    userAccess: number
  }

  export type AccessCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAccess?: boolean | AccessCountOutputTypeCountUserAccessArgs
  }

  // Custom InputTypes

  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCountOutputType
     */
    select?: AccessCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeCountUserAccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    financeDataId: string | null
  }

  export type FinanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    financeDataId: string | null
  }

  export type FinanceCountAggregateOutputType = {
    id: number
    userId: number
    financeDataId: number
    _all: number
  }


  export type FinanceMinAggregateInputType = {
    id?: true
    userId?: true
    financeDataId?: true
  }

  export type FinanceMaxAggregateInputType = {
    id?: true
    userId?: true
    financeDataId?: true
  }

  export type FinanceCountAggregateInputType = {
    id?: true
    userId?: true
    financeDataId?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    id: string
    userId: string | null
    financeDataId: string | null
    _count: FinanceCountAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    financeDataId?: boolean
    User?: boolean | Finance$UserArgs<ExtArgs>
    FinanceData?: boolean | Finance$FinanceDataArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectScalar = {
    id?: boolean
    userId?: boolean
    financeDataId?: boolean
  }

  export type FinanceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | Finance$UserArgs<ExtArgs>
    FinanceData?: boolean | Finance$FinanceDataArgs<ExtArgs>
  }


  export type $FinancePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      FinanceData: Prisma.$FinanceDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string | null
      financeDataId: string | null
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }


  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FinanceFindManyArgs, 'select' | 'include'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FinanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Finance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FinanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeWithIdOnly = await prisma.finance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FinanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
    **/
    create<T extends FinanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Finances.
     *     @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     *     @example
     *     // Create many Finances
     *     const finance = await prisma.finance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FinanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
    **/
    delete<T extends FinanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FinanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FinanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FinanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
    **/
    upsert<T extends FinanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>
    ): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Finances that matches the filter.
     * @param {FinanceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const finance = await prisma.finance.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FinanceFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Finance.
     * @param {FinanceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const finance = await prisma.finance.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FinanceAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
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
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Finance$UserArgs<ExtArgs> = {}>(args?: Subset<T, Finance$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    FinanceData<T extends Finance$FinanceDataArgs<ExtArgs> = {}>(args?: Subset<T, Finance$FinanceDataArgs<ExtArgs>>): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Finance model
   */ 
  interface FinanceFieldRefs {
    readonly id: FieldRef<"Finance", 'String'>
    readonly userId: FieldRef<"Finance", 'String'>
    readonly financeDataId: FieldRef<"Finance", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }


  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }


  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }


  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }


  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }


  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data?: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }


  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
  }


  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }


  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
  }


  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }


  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }


  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
  }


  /**
   * Finance findRaw
   */
  export type FinanceFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Finance aggregateRaw
   */
  export type FinanceAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Finance.User
   */
  export type Finance$UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Finance.FinanceData
   */
  export type Finance$FinanceDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    where?: FinanceDataWhereInput
  }


  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
  }



  /**
   * Model FinanceData
   */

  export type AggregateFinanceData = {
    _count: FinanceDataCountAggregateOutputType | null
    _avg: FinanceDataAvgAggregateOutputType | null
    _sum: FinanceDataSumAggregateOutputType | null
    _min: FinanceDataMinAggregateOutputType | null
    _max: FinanceDataMaxAggregateOutputType | null
  }

  export type FinanceDataAvgAggregateOutputType = {
    value: number | null
  }

  export type FinanceDataSumAggregateOutputType = {
    value: number | null
  }

  export type FinanceDataMinAggregateOutputType = {
    id: string | null
    product: string | null
    store: string | null
    value: number | null
    month: string | null
    day: string | null
    year: string | null
    hour: string | null
    minutes: string | null
    payment: string | null
    transation: string | null
  }

  export type FinanceDataMaxAggregateOutputType = {
    id: string | null
    product: string | null
    store: string | null
    value: number | null
    month: string | null
    day: string | null
    year: string | null
    hour: string | null
    minutes: string | null
    payment: string | null
    transation: string | null
  }

  export type FinanceDataCountAggregateOutputType = {
    id: number
    product: number
    store: number
    value: number
    month: number
    day: number
    year: number
    hour: number
    minutes: number
    payment: number
    transation: number
    _all: number
  }


  export type FinanceDataAvgAggregateInputType = {
    value?: true
  }

  export type FinanceDataSumAggregateInputType = {
    value?: true
  }

  export type FinanceDataMinAggregateInputType = {
    id?: true
    product?: true
    store?: true
    value?: true
    month?: true
    day?: true
    year?: true
    hour?: true
    minutes?: true
    payment?: true
    transation?: true
  }

  export type FinanceDataMaxAggregateInputType = {
    id?: true
    product?: true
    store?: true
    value?: true
    month?: true
    day?: true
    year?: true
    hour?: true
    minutes?: true
    payment?: true
    transation?: true
  }

  export type FinanceDataCountAggregateInputType = {
    id?: true
    product?: true
    store?: true
    value?: true
    month?: true
    day?: true
    year?: true
    hour?: true
    minutes?: true
    payment?: true
    transation?: true
    _all?: true
  }

  export type FinanceDataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceData to aggregate.
     */
    where?: FinanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceData to fetch.
     */
    orderBy?: FinanceDataOrderByWithRelationInput | FinanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceData
    **/
    _count?: true | FinanceDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceDataMaxAggregateInputType
  }

  export type GetFinanceDataAggregateType<T extends FinanceDataAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceData[P]>
      : GetScalarType<T[P], AggregateFinanceData[P]>
  }




  export type FinanceDataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FinanceDataWhereInput
    orderBy?: FinanceDataOrderByWithAggregationInput | FinanceDataOrderByWithAggregationInput[]
    by: FinanceDataScalarFieldEnum[] | FinanceDataScalarFieldEnum
    having?: FinanceDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceDataCountAggregateInputType | true
    _avg?: FinanceDataAvgAggregateInputType
    _sum?: FinanceDataSumAggregateInputType
    _min?: FinanceDataMinAggregateInputType
    _max?: FinanceDataMaxAggregateInputType
  }

  export type FinanceDataGroupByOutputType = {
    id: string
    product: string | null
    store: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment: string | null
    transation: string | null
    _count: FinanceDataCountAggregateOutputType | null
    _avg: FinanceDataAvgAggregateOutputType | null
    _sum: FinanceDataSumAggregateOutputType | null
    _min: FinanceDataMinAggregateOutputType | null
    _max: FinanceDataMaxAggregateOutputType | null
  }

  type GetFinanceDataGroupByPayload<T extends FinanceDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceDataGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceDataGroupByOutputType[P]>
        }
      >
    >


  export type FinanceDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    store?: boolean
    value?: boolean
    month?: boolean
    day?: boolean
    year?: boolean
    hour?: boolean
    minutes?: boolean
    payment?: boolean
    transation?: boolean
    finance?: boolean | FinanceData$financeArgs<ExtArgs>
    _count?: boolean | FinanceDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financeData"]>

  export type FinanceDataSelectScalar = {
    id?: boolean
    product?: boolean
    store?: boolean
    value?: boolean
    month?: boolean
    day?: boolean
    year?: boolean
    hour?: boolean
    minutes?: boolean
    payment?: boolean
    transation?: boolean
  }

  export type FinanceDataInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    finance?: boolean | FinanceData$financeArgs<ExtArgs>
    _count?: boolean | FinanceDataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FinanceDataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FinanceData"
    objects: {
      finance: Prisma.$FinancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      product: string | null
      store: string | null
      value: number
      month: string
      day: string
      year: string
      hour: string
      minutes: string
      payment: string | null
      transation: string | null
    }, ExtArgs["result"]["financeData"]>
    composites: {}
  }


  type FinanceDataGetPayload<S extends boolean | null | undefined | FinanceDataDefaultArgs> = $Result.GetResult<Prisma.$FinanceDataPayload, S>

  type FinanceDataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FinanceDataFindManyArgs, 'select' | 'include'> & {
      select?: FinanceDataCountAggregateInputType | true
    }

  export interface FinanceDataDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceData'], meta: { name: 'FinanceData' } }
    /**
     * Find zero or one FinanceData that matches the filter.
     * @param {FinanceDataFindUniqueArgs} args - Arguments to find a FinanceData
     * @example
     * // Get one FinanceData
     * const financeData = await prisma.financeData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FinanceDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataFindUniqueArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FinanceData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FinanceDataFindUniqueOrThrowArgs} args - Arguments to find a FinanceData
     * @example
     * // Get one FinanceData
     * const financeData = await prisma.financeData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FinanceDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FinanceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataFindFirstArgs} args - Arguments to find a FinanceData
     * @example
     * // Get one FinanceData
     * const financeData = await prisma.financeData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FinanceDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataFindFirstArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FinanceData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataFindFirstOrThrowArgs} args - Arguments to find a FinanceData
     * @example
     * // Get one FinanceData
     * const financeData = await prisma.financeData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FinanceDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FinanceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceData
     * const financeData = await prisma.financeData.findMany()
     * 
     * // Get first 10 FinanceData
     * const financeData = await prisma.financeData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeDataWithIdOnly = await prisma.financeData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FinanceDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FinanceData.
     * @param {FinanceDataCreateArgs} args - Arguments to create a FinanceData.
     * @example
     * // Create one FinanceData
     * const FinanceData = await prisma.financeData.create({
     *   data: {
     *     // ... data to create a FinanceData
     *   }
     * })
     * 
    **/
    create<T extends FinanceDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataCreateArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FinanceData.
     *     @param {FinanceDataCreateManyArgs} args - Arguments to create many FinanceData.
     *     @example
     *     // Create many FinanceData
     *     const financeData = await prisma.financeData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FinanceDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FinanceData.
     * @param {FinanceDataDeleteArgs} args - Arguments to delete one FinanceData.
     * @example
     * // Delete one FinanceData
     * const FinanceData = await prisma.financeData.delete({
     *   where: {
     *     // ... filter to delete one FinanceData
     *   }
     * })
     * 
    **/
    delete<T extends FinanceDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataDeleteArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FinanceData.
     * @param {FinanceDataUpdateArgs} args - Arguments to update one FinanceData.
     * @example
     * // Update one FinanceData
     * const financeData = await prisma.financeData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FinanceDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataUpdateArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FinanceData.
     * @param {FinanceDataDeleteManyArgs} args - Arguments to filter FinanceData to delete.
     * @example
     * // Delete a few FinanceData
     * const { count } = await prisma.financeData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FinanceDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinanceDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceData
     * const financeData = await prisma.financeData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FinanceDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinanceData.
     * @param {FinanceDataUpsertArgs} args - Arguments to update or create a FinanceData.
     * @example
     * // Update or create a FinanceData
     * const financeData = await prisma.financeData.upsert({
     *   create: {
     *     // ... data to create a FinanceData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceData we want to update
     *   }
     * })
    **/
    upsert<T extends FinanceDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FinanceDataUpsertArgs<ExtArgs>>
    ): Prisma__FinanceDataClient<$Result.GetResult<Prisma.$FinanceDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more FinanceData that matches the filter.
     * @param {FinanceDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const financeData = await prisma.financeData.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FinanceDataFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FinanceData.
     * @param {FinanceDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const financeData = await prisma.financeData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FinanceDataAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FinanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataCountArgs} args - Arguments to filter FinanceData to count.
     * @example
     * // Count the number of FinanceData
     * const count = await prisma.financeData.count({
     *   where: {
     *     // ... the filter for the FinanceData we want to count
     *   }
     * })
    **/
    count<T extends FinanceDataCountArgs>(
      args?: Subset<T, FinanceDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceDataAggregateArgs>(args: Subset<T, FinanceDataAggregateArgs>): Prisma.PrismaPromise<GetFinanceDataAggregateType<T>>

    /**
     * Group by FinanceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceDataGroupByArgs} args - Group by arguments.
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
      T extends FinanceDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceDataGroupByArgs['orderBy'] }
        : { orderBy?: FinanceDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceData model
   */
  readonly fields: FinanceDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceDataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    finance<T extends FinanceData$financeArgs<ExtArgs> = {}>(args?: Subset<T, FinanceData$financeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FinanceData model
   */ 
  interface FinanceDataFieldRefs {
    readonly id: FieldRef<"FinanceData", 'String'>
    readonly product: FieldRef<"FinanceData", 'String'>
    readonly store: FieldRef<"FinanceData", 'String'>
    readonly value: FieldRef<"FinanceData", 'Float'>
    readonly month: FieldRef<"FinanceData", 'String'>
    readonly day: FieldRef<"FinanceData", 'String'>
    readonly year: FieldRef<"FinanceData", 'String'>
    readonly hour: FieldRef<"FinanceData", 'String'>
    readonly minutes: FieldRef<"FinanceData", 'String'>
    readonly payment: FieldRef<"FinanceData", 'String'>
    readonly transation: FieldRef<"FinanceData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FinanceData findUnique
   */
  export type FinanceDataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter, which FinanceData to fetch.
     */
    where: FinanceDataWhereUniqueInput
  }


  /**
   * FinanceData findUniqueOrThrow
   */
  export type FinanceDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter, which FinanceData to fetch.
     */
    where: FinanceDataWhereUniqueInput
  }


  /**
   * FinanceData findFirst
   */
  export type FinanceDataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter, which FinanceData to fetch.
     */
    where?: FinanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceData to fetch.
     */
    orderBy?: FinanceDataOrderByWithRelationInput | FinanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceData.
     */
    cursor?: FinanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceData.
     */
    distinct?: FinanceDataScalarFieldEnum | FinanceDataScalarFieldEnum[]
  }


  /**
   * FinanceData findFirstOrThrow
   */
  export type FinanceDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter, which FinanceData to fetch.
     */
    where?: FinanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceData to fetch.
     */
    orderBy?: FinanceDataOrderByWithRelationInput | FinanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceData.
     */
    cursor?: FinanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceData.
     */
    distinct?: FinanceDataScalarFieldEnum | FinanceDataScalarFieldEnum[]
  }


  /**
   * FinanceData findMany
   */
  export type FinanceDataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter, which FinanceData to fetch.
     */
    where?: FinanceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceData to fetch.
     */
    orderBy?: FinanceDataOrderByWithRelationInput | FinanceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceData.
     */
    cursor?: FinanceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceData.
     */
    skip?: number
    distinct?: FinanceDataScalarFieldEnum | FinanceDataScalarFieldEnum[]
  }


  /**
   * FinanceData create
   */
  export type FinanceDataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * The data needed to create a FinanceData.
     */
    data: XOR<FinanceDataCreateInput, FinanceDataUncheckedCreateInput>
  }


  /**
   * FinanceData createMany
   */
  export type FinanceDataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceData.
     */
    data: FinanceDataCreateManyInput | FinanceDataCreateManyInput[]
  }


  /**
   * FinanceData update
   */
  export type FinanceDataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * The data needed to update a FinanceData.
     */
    data: XOR<FinanceDataUpdateInput, FinanceDataUncheckedUpdateInput>
    /**
     * Choose, which FinanceData to update.
     */
    where: FinanceDataWhereUniqueInput
  }


  /**
   * FinanceData updateMany
   */
  export type FinanceDataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceData.
     */
    data: XOR<FinanceDataUpdateManyMutationInput, FinanceDataUncheckedUpdateManyInput>
    /**
     * Filter which FinanceData to update
     */
    where?: FinanceDataWhereInput
  }


  /**
   * FinanceData upsert
   */
  export type FinanceDataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * The filter to search for the FinanceData to update in case it exists.
     */
    where: FinanceDataWhereUniqueInput
    /**
     * In case the FinanceData found by the `where` argument doesn't exist, create a new FinanceData with this data.
     */
    create: XOR<FinanceDataCreateInput, FinanceDataUncheckedCreateInput>
    /**
     * In case the FinanceData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceDataUpdateInput, FinanceDataUncheckedUpdateInput>
  }


  /**
   * FinanceData delete
   */
  export type FinanceDataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
    /**
     * Filter which FinanceData to delete.
     */
    where: FinanceDataWhereUniqueInput
  }


  /**
   * FinanceData deleteMany
   */
  export type FinanceDataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceData to delete
     */
    where?: FinanceDataWhereInput
  }


  /**
   * FinanceData findRaw
   */
  export type FinanceDataFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FinanceData aggregateRaw
   */
  export type FinanceDataAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * FinanceData.finance
   */
  export type FinanceData$financeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    cursor?: FinanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }


  /**
   * FinanceData without action
   */
  export type FinanceDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceData
     */
    select?: FinanceDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceDataInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    account: string | null
    balance: number | null
    cpf: string | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    account: string | null
    balance: number | null
    cpf: string | null
    created_At: Date | null
    updated_At: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    account: number
    balance: number
    cpf: number
    created_At: number
    updated_At: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    account?: true
    balance?: true
    cpf?: true
    created_At?: true
    updated_At?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    account?: true
    balance?: true
    cpf?: true
    created_At?: true
    updated_At?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    account?: true
    balance?: true
    cpf?: true
    created_At?: true
    updated_At?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    account: string
    balance: number
    cpf: string
    created_At: Date
    updated_At: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    account?: boolean
    balance?: boolean
    cpf?: boolean
    created_At?: boolean
    updated_At?: boolean
    userAccess?: boolean | User$userAccessArgs<ExtArgs>
    Finance?: boolean | User$FinanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    account?: boolean
    balance?: boolean
    cpf?: boolean
    created_At?: boolean
    updated_At?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAccess?: boolean | User$userAccessArgs<ExtArgs>
    Finance?: boolean | User$FinanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userAccess: Prisma.$UserAccessPayload<ExtArgs>[]
      Finance: Prisma.$FinancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      email: string
      name: string
      password: string
      account: string
      balance: number
      cpf: string
      created_At: Date
      updated_At: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userAccess<T extends User$userAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$userAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    Finance<T extends User$FinanceArgs<ExtArgs> = {}>(args?: Subset<T, User$FinanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly account: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly created_At: FieldRef<"User", 'DateTime'>
    readonly updated_At: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.userAccess
   */
  export type User$userAccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    cursor?: UserAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }


  /**
   * User.Finance
   */
  export type User$FinanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    cursor?: FinanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model UserAccess
   */

  export type AggregateUserAccess = {
    _count: UserAccessCountAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  export type UserAccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accessId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accessId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAccessCountAggregateOutputType = {
    id: number
    userId: number
    accessId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAccessMinAggregateInputType = {
    id?: true
    userId?: true
    accessId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAccessMaxAggregateInputType = {
    id?: true
    userId?: true
    accessId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAccessCountAggregateInputType = {
    id?: true
    userId?: true
    accessId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAccessAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccess to aggregate.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccesses
    **/
    _count?: true | UserAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccessMaxAggregateInputType
  }

  export type GetUserAccessAggregateType<T extends UserAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccess[P]>
      : GetScalarType<T[P], AggregateUserAccess[P]>
  }




  export type UserAccessGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithAggregationInput | UserAccessOrderByWithAggregationInput[]
    by: UserAccessScalarFieldEnum[] | UserAccessScalarFieldEnum
    having?: UserAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccessCountAggregateInputType | true
    _min?: UserAccessMinAggregateInputType
    _max?: UserAccessMaxAggregateInputType
  }

  export type UserAccessGroupByOutputType = {
    id: string
    userId: string | null
    accessId: string | null
    created_at: Date
    updated_at: Date
    _count: UserAccessCountAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  type GetUserAccessGroupByPayload<T extends UserAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserAccessSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessId?: boolean
    created_at?: boolean
    updated_at?: boolean
    User?: boolean | UserAccess$UserArgs<ExtArgs>
    Access?: boolean | UserAccess$AccessArgs<ExtArgs>
  }, ExtArgs["result"]["userAccess"]>

  export type UserAccessSelectScalar = {
    id?: boolean
    userId?: boolean
    accessId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserAccessInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserAccess$UserArgs<ExtArgs>
    Access?: boolean | UserAccess$AccessArgs<ExtArgs>
  }


  export type $UserAccessPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserAccess"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Access: Prisma.$AccessPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string | null
      accessId: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userAccess"]>
    composites: {}
  }


  type UserAccessGetPayload<S extends boolean | null | undefined | UserAccessDefaultArgs> = $Result.GetResult<Prisma.$UserAccessPayload, S>

  type UserAccessCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserAccessFindManyArgs, 'select' | 'include'> & {
      select?: UserAccessCountAggregateInputType | true
    }

  export interface UserAccessDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAccess'], meta: { name: 'UserAccess' } }
    /**
     * Find zero or one UserAccess that matches the filter.
     * @param {UserAccessFindUniqueArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserAccess that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAccessFindUniqueOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessFindFirstArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccesses
     * const userAccesses = await prisma.userAccess.findMany()
     * 
     * // Get first 10 UserAccesses
     * const userAccesses = await prisma.userAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAccessWithIdOnly = await prisma.userAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserAccess.
     * @param {UserAccessCreateArgs} args - Arguments to create a UserAccess.
     * @example
     * // Create one UserAccess
     * const UserAccess = await prisma.userAccess.create({
     *   data: {
     *     // ... data to create a UserAccess
     *   }
     * })
     * 
    **/
    create<T extends UserAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessCreateArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserAccesses.
     *     @param {UserAccessCreateManyArgs} args - Arguments to create many UserAccesses.
     *     @example
     *     // Create many UserAccesses
     *     const userAccess = await prisma.userAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAccess.
     * @param {UserAccessDeleteArgs} args - Arguments to delete one UserAccess.
     * @example
     * // Delete one UserAccess
     * const UserAccess = await prisma.userAccess.delete({
     *   where: {
     *     // ... filter to delete one UserAccess
     *   }
     * })
     * 
    **/
    delete<T extends UserAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessDeleteArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserAccess.
     * @param {UserAccessUpdateArgs} args - Arguments to update one UserAccess.
     * @example
     * // Update one UserAccess
     * const userAccess = await prisma.userAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessUpdateArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserAccesses.
     * @param {UserAccessDeleteManyArgs} args - Arguments to filter UserAccesses to delete.
     * @example
     * // Delete a few UserAccesses
     * const { count } = await prisma.userAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccesses
     * const userAccess = await prisma.userAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAccess.
     * @param {UserAccessUpsertArgs} args - Arguments to update or create a UserAccess.
     * @example
     * // Update or create a UserAccess
     * const userAccess = await prisma.userAccess.upsert({
     *   create: {
     *     // ... data to create a UserAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccess we want to update
     *   }
     * })
    **/
    upsert<T extends UserAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserAccessUpsertArgs<ExtArgs>>
    ): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserAccesses that matches the filter.
     * @param {UserAccessFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAccess = await prisma.userAccess.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserAccessFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAccess.
     * @param {UserAccessAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAccess = await prisma.userAccess.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAccessAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessCountArgs} args - Arguments to filter UserAccesses to count.
     * @example
     * // Count the number of UserAccesses
     * const count = await prisma.userAccess.count({
     *   where: {
     *     // ... the filter for the UserAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserAccessCountArgs>(
      args?: Subset<T, UserAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAccessAggregateArgs>(args: Subset<T, UserAccessAggregateArgs>): Prisma.PrismaPromise<GetUserAccessAggregateType<T>>

    /**
     * Group by UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessGroupByArgs} args - Group by arguments.
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
      T extends UserAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAccess model
   */
  readonly fields: UserAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAccessClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserAccess$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserAccess$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Access<T extends UserAccess$AccessArgs<ExtArgs> = {}>(args?: Subset<T, UserAccess$AccessArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserAccess model
   */ 
  interface UserAccessFieldRefs {
    readonly id: FieldRef<"UserAccess", 'String'>
    readonly userId: FieldRef<"UserAccess", 'String'>
    readonly accessId: FieldRef<"UserAccess", 'String'>
    readonly created_at: FieldRef<"UserAccess", 'DateTime'>
    readonly updated_at: FieldRef<"UserAccess", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserAccess findUnique
   */
  export type UserAccessFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }


  /**
   * UserAccess findUniqueOrThrow
   */
  export type UserAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }


  /**
   * UserAccess findFirst
   */
  export type UserAccessFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }


  /**
   * UserAccess findFirstOrThrow
   */
  export type UserAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }


  /**
   * UserAccess findMany
   */
  export type UserAccessFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccesses to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }


  /**
   * UserAccess create
   */
  export type UserAccessCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAccess.
     */
    data: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
  }


  /**
   * UserAccess createMany
   */
  export type UserAccessCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAccesses.
     */
    data: UserAccessCreateManyInput | UserAccessCreateManyInput[]
  }


  /**
   * UserAccess update
   */
  export type UserAccessUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAccess.
     */
    data: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
    /**
     * Choose, which UserAccess to update.
     */
    where: UserAccessWhereUniqueInput
  }


  /**
   * UserAccess updateMany
   */
  export type UserAccessUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAccesses.
     */
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserAccesses to update
     */
    where?: UserAccessWhereInput
  }


  /**
   * UserAccess upsert
   */
  export type UserAccessUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAccess to update in case it exists.
     */
    where: UserAccessWhereUniqueInput
    /**
     * In case the UserAccess found by the `where` argument doesn't exist, create a new UserAccess with this data.
     */
    create: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
    /**
     * In case the UserAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
  }


  /**
   * UserAccess delete
   */
  export type UserAccessDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter which UserAccess to delete.
     */
    where: UserAccessWhereUniqueInput
  }


  /**
   * UserAccess deleteMany
   */
  export type UserAccessDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccesses to delete
     */
    where?: UserAccessWhereInput
  }


  /**
   * UserAccess findRaw
   */
  export type UserAccessFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAccess aggregateRaw
   */
  export type UserAccessAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAccess.User
   */
  export type UserAccess$UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * UserAccess.Access
   */
  export type UserAccess$AccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    where?: AccessWhereInput
  }


  /**
   * UserAccess without action
   */
  export type UserAccessDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
  }



  /**
   * Model Access
   */

  export type AggregateAccess = {
    _count: AccessCountAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  export type AccessMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccessMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccessCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccessMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type AccessMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type AccessCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccessAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Access to aggregate.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accesses
    **/
    _count?: true | AccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessMaxAggregateInputType
  }

  export type GetAccessAggregateType<T extends AccessAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess[P]>
      : GetScalarType<T[P], AggregateAccess[P]>
  }




  export type AccessGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccessWhereInput
    orderBy?: AccessOrderByWithAggregationInput | AccessOrderByWithAggregationInput[]
    by: AccessScalarFieldEnum[] | AccessScalarFieldEnum
    having?: AccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessCountAggregateInputType | true
    _min?: AccessMinAggregateInputType
    _max?: AccessMaxAggregateInputType
  }

  export type AccessGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: AccessCountAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  type GetAccessGroupByPayload<T extends AccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessGroupByOutputType[P]>
            : GetScalarType<T[P], AccessGroupByOutputType[P]>
        }
      >
    >


  export type AccessSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    userAccess?: boolean | Access$userAccessArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type AccessSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AccessInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    userAccess?: boolean | Access$userAccessArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccessPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Access"
    objects: {
      userAccess: Prisma.$UserAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["access"]>
    composites: {}
  }


  type AccessGetPayload<S extends boolean | null | undefined | AccessDefaultArgs> = $Result.GetResult<Prisma.$AccessPayload, S>

  type AccessCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccessFindManyArgs, 'select' | 'include'> & {
      select?: AccessCountAggregateInputType | true
    }

  export interface AccessDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Access'], meta: { name: 'Access' } }
    /**
     * Find zero or one Access that matches the filter.
     * @param {AccessFindUniqueArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccessFindUniqueArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Access that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccessFindUniqueOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessFindFirstArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesses
     * const accesses = await prisma.access.findMany()
     * 
     * // Get first 10 Accesses
     * const accesses = await prisma.access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessWithIdOnly = await prisma.access.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Access.
     * @param {AccessCreateArgs} args - Arguments to create a Access.
     * @example
     * // Create one Access
     * const Access = await prisma.access.create({
     *   data: {
     *     // ... data to create a Access
     *   }
     * })
     * 
    **/
    create<T extends AccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessCreateArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accesses.
     *     @param {AccessCreateManyArgs} args - Arguments to create many Accesses.
     *     @example
     *     // Create many Accesses
     *     const access = await prisma.access.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Access.
     * @param {AccessDeleteArgs} args - Arguments to delete one Access.
     * @example
     * // Delete one Access
     * const Access = await prisma.access.delete({
     *   where: {
     *     // ... filter to delete one Access
     *   }
     * })
     * 
    **/
    delete<T extends AccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccessDeleteArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Access.
     * @param {AccessUpdateArgs} args - Arguments to update one Access.
     * @example
     * // Update one Access
     * const access = await prisma.access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessUpdateArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accesses.
     * @param {AccessDeleteManyArgs} args - Arguments to filter Accesses to delete.
     * @example
     * // Delete a few Accesses
     * const { count } = await prisma.access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Access.
     * @param {AccessUpsertArgs} args - Arguments to update or create a Access.
     * @example
     * // Update or create a Access
     * const access = await prisma.access.upsert({
     *   create: {
     *     // ... data to create a Access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access we want to update
     *   }
     * })
    **/
    upsert<T extends AccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccessUpsertArgs<ExtArgs>>
    ): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Accesses that matches the filter.
     * @param {AccessFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const access = await prisma.access.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AccessFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Access.
     * @param {AccessAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const access = await prisma.access.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AccessAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCountArgs} args - Arguments to filter Accesses to count.
     * @example
     * // Count the number of Accesses
     * const count = await prisma.access.count({
     *   where: {
     *     // ... the filter for the Accesses we want to count
     *   }
     * })
    **/
    count<T extends AccessCountArgs>(
      args?: Subset<T, AccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessAggregateArgs>(args: Subset<T, AccessAggregateArgs>): Prisma.PrismaPromise<GetAccessAggregateType<T>>

    /**
     * Group by Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGroupByArgs} args - Group by arguments.
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
      T extends AccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessGroupByArgs['orderBy'] }
        : { orderBy?: AccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Access model
   */
  readonly fields: AccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userAccess<T extends Access$userAccessArgs<ExtArgs> = {}>(args?: Subset<T, Access$userAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Access model
   */ 
  interface AccessFieldRefs {
    readonly id: FieldRef<"Access", 'String'>
    readonly name: FieldRef<"Access", 'String'>
    readonly created_at: FieldRef<"Access", 'DateTime'>
    readonly updated_at: FieldRef<"Access", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Access findUnique
   */
  export type AccessFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }


  /**
   * Access findUniqueOrThrow
   */
  export type AccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }


  /**
   * Access findFirst
   */
  export type AccessFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }


  /**
   * Access findFirstOrThrow
   */
  export type AccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }


  /**
   * Access findMany
   */
  export type AccessFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Accesses to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }


  /**
   * Access create
   */
  export type AccessCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to create a Access.
     */
    data: XOR<AccessCreateInput, AccessUncheckedCreateInput>
  }


  /**
   * Access createMany
   */
  export type AccessCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accesses.
     */
    data: AccessCreateManyInput | AccessCreateManyInput[]
  }


  /**
   * Access update
   */
  export type AccessUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to update a Access.
     */
    data: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
    /**
     * Choose, which Access to update.
     */
    where: AccessWhereUniqueInput
  }


  /**
   * Access updateMany
   */
  export type AccessUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accesses.
     */
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyInput>
    /**
     * Filter which Accesses to update
     */
    where?: AccessWhereInput
  }


  /**
   * Access upsert
   */
  export type AccessUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The filter to search for the Access to update in case it exists.
     */
    where: AccessWhereUniqueInput
    /**
     * In case the Access found by the `where` argument doesn't exist, create a new Access with this data.
     */
    create: XOR<AccessCreateInput, AccessUncheckedCreateInput>
    /**
     * In case the Access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
  }


  /**
   * Access delete
   */
  export type AccessDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter which Access to delete.
     */
    where: AccessWhereUniqueInput
  }


  /**
   * Access deleteMany
   */
  export type AccessDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accesses to delete
     */
    where?: AccessWhereInput
  }


  /**
   * Access findRaw
   */
  export type AccessFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Access aggregateRaw
   */
  export type AccessAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Access.userAccess
   */
  export type Access$userAccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAccessInclude<ExtArgs> | null
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    cursor?: UserAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }


  /**
   * Access without action
   */
  export type AccessDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const FinanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    financeDataId: 'financeDataId'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const FinanceDataScalarFieldEnum: {
    id: 'id',
    product: 'product',
    store: 'store',
    value: 'value',
    month: 'month',
    day: 'day',
    year: 'year',
    hour: 'hour',
    minutes: 'minutes',
    payment: 'payment',
    transation: 'transation'
  };

  export type FinanceDataScalarFieldEnum = (typeof FinanceDataScalarFieldEnum)[keyof typeof FinanceDataScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    account: 'account',
    balance: 'balance',
    cpf: 'cpf',
    created_At: 'created_At',
    updated_At: 'updated_At'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessId: 'accessId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserAccessScalarFieldEnum = (typeof UserAccessScalarFieldEnum)[keyof typeof UserAccessScalarFieldEnum]


  export const AccessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccessScalarFieldEnum = (typeof AccessScalarFieldEnum)[keyof typeof AccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    id?: StringFilter<"Finance"> | string
    userId?: StringNullableFilter<"Finance"> | string | null
    financeDataId?: StringNullableFilter<"Finance"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    FinanceData?: XOR<FinanceDataNullableRelationFilter, FinanceDataWhereInput> | null
  }

  export type FinanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    financeDataId?: SortOrder
    User?: UserOrderByWithRelationInput
    FinanceData?: FinanceDataOrderByWithRelationInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    userId?: StringNullableFilter<"Finance"> | string | null
    financeDataId?: StringNullableFilter<"Finance"> | string | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    FinanceData?: XOR<FinanceDataNullableRelationFilter, FinanceDataWhereInput> | null
  }, "id">

  export type FinanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    financeDataId?: SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Finance"> | string
    userId?: StringNullableWithAggregatesFilter<"Finance"> | string | null
    financeDataId?: StringNullableWithAggregatesFilter<"Finance"> | string | null
  }

  export type FinanceDataWhereInput = {
    AND?: FinanceDataWhereInput | FinanceDataWhereInput[]
    OR?: FinanceDataWhereInput[]
    NOT?: FinanceDataWhereInput | FinanceDataWhereInput[]
    id?: StringFilter<"FinanceData"> | string
    product?: StringNullableFilter<"FinanceData"> | string | null
    store?: StringNullableFilter<"FinanceData"> | string | null
    value?: FloatFilter<"FinanceData"> | number
    month?: StringFilter<"FinanceData"> | string
    day?: StringFilter<"FinanceData"> | string
    year?: StringFilter<"FinanceData"> | string
    hour?: StringFilter<"FinanceData"> | string
    minutes?: StringFilter<"FinanceData"> | string
    payment?: StringNullableFilter<"FinanceData"> | string | null
    transation?: StringNullableFilter<"FinanceData"> | string | null
    finance?: FinanceListRelationFilter
  }

  export type FinanceDataOrderByWithRelationInput = {
    id?: SortOrder
    product?: SortOrder
    store?: SortOrder
    value?: SortOrder
    month?: SortOrder
    day?: SortOrder
    year?: SortOrder
    hour?: SortOrder
    minutes?: SortOrder
    payment?: SortOrder
    transation?: SortOrder
    finance?: FinanceOrderByRelationAggregateInput
  }

  export type FinanceDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceDataWhereInput | FinanceDataWhereInput[]
    OR?: FinanceDataWhereInput[]
    NOT?: FinanceDataWhereInput | FinanceDataWhereInput[]
    product?: StringNullableFilter<"FinanceData"> | string | null
    store?: StringNullableFilter<"FinanceData"> | string | null
    value?: FloatFilter<"FinanceData"> | number
    month?: StringFilter<"FinanceData"> | string
    day?: StringFilter<"FinanceData"> | string
    year?: StringFilter<"FinanceData"> | string
    hour?: StringFilter<"FinanceData"> | string
    minutes?: StringFilter<"FinanceData"> | string
    payment?: StringNullableFilter<"FinanceData"> | string | null
    transation?: StringNullableFilter<"FinanceData"> | string | null
    finance?: FinanceListRelationFilter
  }, "id">

  export type FinanceDataOrderByWithAggregationInput = {
    id?: SortOrder
    product?: SortOrder
    store?: SortOrder
    value?: SortOrder
    month?: SortOrder
    day?: SortOrder
    year?: SortOrder
    hour?: SortOrder
    minutes?: SortOrder
    payment?: SortOrder
    transation?: SortOrder
    _count?: FinanceDataCountOrderByAggregateInput
    _avg?: FinanceDataAvgOrderByAggregateInput
    _max?: FinanceDataMaxOrderByAggregateInput
    _min?: FinanceDataMinOrderByAggregateInput
    _sum?: FinanceDataSumOrderByAggregateInput
  }

  export type FinanceDataScalarWhereWithAggregatesInput = {
    AND?: FinanceDataScalarWhereWithAggregatesInput | FinanceDataScalarWhereWithAggregatesInput[]
    OR?: FinanceDataScalarWhereWithAggregatesInput[]
    NOT?: FinanceDataScalarWhereWithAggregatesInput | FinanceDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceData"> | string
    product?: StringNullableWithAggregatesFilter<"FinanceData"> | string | null
    store?: StringNullableWithAggregatesFilter<"FinanceData"> | string | null
    value?: FloatWithAggregatesFilter<"FinanceData"> | number
    month?: StringWithAggregatesFilter<"FinanceData"> | string
    day?: StringWithAggregatesFilter<"FinanceData"> | string
    year?: StringWithAggregatesFilter<"FinanceData"> | string
    hour?: StringWithAggregatesFilter<"FinanceData"> | string
    minutes?: StringWithAggregatesFilter<"FinanceData"> | string
    payment?: StringNullableWithAggregatesFilter<"FinanceData"> | string | null
    transation?: StringNullableWithAggregatesFilter<"FinanceData"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    account?: StringFilter<"User"> | string
    balance?: FloatFilter<"User"> | number
    cpf?: StringFilter<"User"> | string
    created_At?: DateTimeFilter<"User"> | Date | string
    updated_At?: DateTimeFilter<"User"> | Date | string
    userAccess?: UserAccessListRelationFilter
    Finance?: FinanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    account?: SortOrder
    balance?: SortOrder
    cpf?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    userAccess?: UserAccessOrderByRelationAggregateInput
    Finance?: FinanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    account?: StringFilter<"User"> | string
    balance?: FloatFilter<"User"> | number
    created_At?: DateTimeFilter<"User"> | Date | string
    updated_At?: DateTimeFilter<"User"> | Date | string
    userAccess?: UserAccessListRelationFilter
    Finance?: FinanceListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    account?: SortOrder
    balance?: SortOrder
    cpf?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    account?: StringWithAggregatesFilter<"User"> | string
    balance?: FloatWithAggregatesFilter<"User"> | number
    cpf?: StringWithAggregatesFilter<"User"> | string
    created_At?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_At?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserAccessWhereInput = {
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    id?: StringFilter<"UserAccess"> | string
    userId?: StringNullableFilter<"UserAccess"> | string | null
    accessId?: StringNullableFilter<"UserAccess"> | string | null
    created_at?: DateTimeFilter<"UserAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserAccess"> | Date | string
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Access?: XOR<AccessNullableRelationFilter, AccessWhereInput> | null
  }

  export type UserAccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    User?: UserOrderByWithRelationInput
    Access?: AccessOrderByWithRelationInput
  }

  export type UserAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    userId?: StringNullableFilter<"UserAccess"> | string | null
    accessId?: StringNullableFilter<"UserAccess"> | string | null
    created_at?: DateTimeFilter<"UserAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserAccess"> | Date | string
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Access?: XOR<AccessNullableRelationFilter, AccessWhereInput> | null
  }, "id">

  export type UserAccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserAccessCountOrderByAggregateInput
    _max?: UserAccessMaxOrderByAggregateInput
    _min?: UserAccessMinOrderByAggregateInput
  }

  export type UserAccessScalarWhereWithAggregatesInput = {
    AND?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    OR?: UserAccessScalarWhereWithAggregatesInput[]
    NOT?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAccess"> | string
    userId?: StringNullableWithAggregatesFilter<"UserAccess"> | string | null
    accessId?: StringNullableWithAggregatesFilter<"UserAccess"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"UserAccess"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserAccess"> | Date | string
  }

  export type AccessWhereInput = {
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    id?: StringFilter<"Access"> | string
    name?: StringFilter<"Access"> | string
    created_at?: DateTimeFilter<"Access"> | Date | string
    updated_at?: DateTimeFilter<"Access"> | Date | string
    userAccess?: UserAccessListRelationFilter
  }

  export type AccessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userAccess?: UserAccessOrderByRelationAggregateInput
  }

  export type AccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    created_at?: DateTimeFilter<"Access"> | Date | string
    updated_at?: DateTimeFilter<"Access"> | Date | string
    userAccess?: UserAccessListRelationFilter
  }, "id" | "name">

  export type AccessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AccessCountOrderByAggregateInput
    _max?: AccessMaxOrderByAggregateInput
    _min?: AccessMinOrderByAggregateInput
  }

  export type AccessScalarWhereWithAggregatesInput = {
    AND?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    OR?: AccessScalarWhereWithAggregatesInput[]
    NOT?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Access"> | string
    name?: StringWithAggregatesFilter<"Access"> | string
    created_at?: DateTimeWithAggregatesFilter<"Access"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Access"> | Date | string
  }

  export type FinanceCreateInput = {
    id?: string
    User?: UserCreateNestedOneWithoutFinanceInput
    FinanceData?: FinanceDataCreateNestedOneWithoutFinanceInput
  }

  export type FinanceUncheckedCreateInput = {
    id?: string
    userId?: string | null
    financeDataId?: string | null
  }

  export type FinanceUpdateInput = {
    User?: UserUpdateOneWithoutFinanceNestedInput
    FinanceData?: FinanceDataUpdateOneWithoutFinanceNestedInput
  }

  export type FinanceUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    financeDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceCreateManyInput = {
    id?: string
    userId?: string | null
    financeDataId?: string | null
  }

  export type FinanceUpdateManyMutationInput = {

  }

  export type FinanceUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    financeDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceDataCreateInput = {
    id?: string
    product?: string | null
    store?: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment?: string | null
    transation?: string | null
    finance?: FinanceCreateNestedManyWithoutFinanceDataInput
  }

  export type FinanceDataUncheckedCreateInput = {
    id?: string
    product?: string | null
    store?: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment?: string | null
    transation?: string | null
    finance?: FinanceUncheckedCreateNestedManyWithoutFinanceDataInput
  }

  export type FinanceDataUpdateInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
    finance?: FinanceUpdateManyWithoutFinanceDataNestedInput
  }

  export type FinanceDataUncheckedUpdateInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
    finance?: FinanceUncheckedUpdateManyWithoutFinanceDataNestedInput
  }

  export type FinanceDataCreateManyInput = {
    id?: string
    product?: string | null
    store?: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment?: string | null
    transation?: string | null
  }

  export type FinanceDataUpdateManyMutationInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceDataUncheckedUpdateManyInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    userAccess?: UserAccessCreateNestedManyWithoutUserInput
    Finance?: FinanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    userAccess?: UserAccessUncheckedCreateNestedManyWithoutUserInput
    Finance?: FinanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUpdateManyWithoutUserNestedInput
    Finance?: FinanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
    Finance?: FinanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserCreateNestedOneWithoutUserAccessInput
    Access?: AccessCreateNestedOneWithoutUserAccessInput
  }

  export type UserAccessUncheckedCreateInput = {
    id?: string
    userId?: string | null
    accessId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAccessUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutUserAccessNestedInput
    Access?: AccessUpdateOneWithoutUserAccessNestedInput
  }

  export type UserAccessUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accessId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessCreateManyInput = {
    id?: string
    userId?: string | null
    accessId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAccessUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    accessId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userAccess?: UserAccessCreateNestedManyWithoutAccessInput
  }

  export type AccessUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    userAccess?: UserAccessUncheckedCreateNestedManyWithoutAccessInput
  }

  export type AccessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUpdateManyWithoutAccessNestedInput
  }

  export type AccessUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type AccessCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FinanceDataNullableRelationFilter = {
    is?: FinanceDataWhereInput | null
    isNot?: FinanceDataWhereInput | null
  }

  export type FinanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    financeDataId?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    financeDataId?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    financeDataId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FinanceListRelationFilter = {
    every?: FinanceWhereInput
    some?: FinanceWhereInput
    none?: FinanceWhereInput
  }

  export type FinanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceDataCountOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    store?: SortOrder
    value?: SortOrder
    month?: SortOrder
    day?: SortOrder
    year?: SortOrder
    hour?: SortOrder
    minutes?: SortOrder
    payment?: SortOrder
    transation?: SortOrder
  }

  export type FinanceDataAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FinanceDataMaxOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    store?: SortOrder
    value?: SortOrder
    month?: SortOrder
    day?: SortOrder
    year?: SortOrder
    hour?: SortOrder
    minutes?: SortOrder
    payment?: SortOrder
    transation?: SortOrder
  }

  export type FinanceDataMinOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    store?: SortOrder
    value?: SortOrder
    month?: SortOrder
    day?: SortOrder
    year?: SortOrder
    hour?: SortOrder
    minutes?: SortOrder
    payment?: SortOrder
    transation?: SortOrder
  }

  export type FinanceDataSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserAccessListRelationFilter = {
    every?: UserAccessWhereInput
    some?: UserAccessWhereInput
    none?: UserAccessWhereInput
  }

  export type UserAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    account?: SortOrder
    balance?: SortOrder
    cpf?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    account?: SortOrder
    balance?: SortOrder
    cpf?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    account?: SortOrder
    balance?: SortOrder
    cpf?: SortOrder
    created_At?: SortOrder
    updated_At?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccessNullableRelationFilter = {
    is?: AccessWhereInput | null
    isNot?: AccessWhereInput | null
  }

  export type UserAccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCreateNestedOneWithoutFinanceInput = {
    create?: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceInput
    connect?: UserWhereUniqueInput
  }

  export type FinanceDataCreateNestedOneWithoutFinanceInput = {
    create?: XOR<FinanceDataCreateWithoutFinanceInput, FinanceDataUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: FinanceDataCreateOrConnectWithoutFinanceInput
    connect?: FinanceDataWhereUniqueInput
  }

  export type UserUpdateOneWithoutFinanceNestedInput = {
    create?: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinanceInput
    upsert?: UserUpsertWithoutFinanceInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinanceInput, UserUpdateWithoutFinanceInput>, UserUncheckedUpdateWithoutFinanceInput>
  }

  export type FinanceDataUpdateOneWithoutFinanceNestedInput = {
    create?: XOR<FinanceDataCreateWithoutFinanceInput, FinanceDataUncheckedCreateWithoutFinanceInput>
    connectOrCreate?: FinanceDataCreateOrConnectWithoutFinanceInput
    upsert?: FinanceDataUpsertWithoutFinanceInput
    disconnect?: boolean
    delete?: FinanceDataWhereInput | boolean
    connect?: FinanceDataWhereUniqueInput
    update?: XOR<XOR<FinanceDataUpdateToOneWithWhereWithoutFinanceInput, FinanceDataUpdateWithoutFinanceInput>, FinanceDataUncheckedUpdateWithoutFinanceInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type FinanceCreateNestedManyWithoutFinanceDataInput = {
    create?: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput> | FinanceCreateWithoutFinanceDataInput[] | FinanceUncheckedCreateWithoutFinanceDataInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutFinanceDataInput | FinanceCreateOrConnectWithoutFinanceDataInput[]
    createMany?: FinanceCreateManyFinanceDataInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedManyWithoutFinanceDataInput = {
    create?: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput> | FinanceCreateWithoutFinanceDataInput[] | FinanceUncheckedCreateWithoutFinanceDataInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutFinanceDataInput | FinanceCreateOrConnectWithoutFinanceDataInput[]
    createMany?: FinanceCreateManyFinanceDataInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FinanceUpdateManyWithoutFinanceDataNestedInput = {
    create?: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput> | FinanceCreateWithoutFinanceDataInput[] | FinanceUncheckedCreateWithoutFinanceDataInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutFinanceDataInput | FinanceCreateOrConnectWithoutFinanceDataInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutFinanceDataInput | FinanceUpsertWithWhereUniqueWithoutFinanceDataInput[]
    createMany?: FinanceCreateManyFinanceDataInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutFinanceDataInput | FinanceUpdateWithWhereUniqueWithoutFinanceDataInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutFinanceDataInput | FinanceUpdateManyWithWhereWithoutFinanceDataInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateManyWithoutFinanceDataNestedInput = {
    create?: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput> | FinanceCreateWithoutFinanceDataInput[] | FinanceUncheckedCreateWithoutFinanceDataInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutFinanceDataInput | FinanceCreateOrConnectWithoutFinanceDataInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutFinanceDataInput | FinanceUpsertWithWhereUniqueWithoutFinanceDataInput[]
    createMany?: FinanceCreateManyFinanceDataInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutFinanceDataInput | FinanceUpdateWithWhereUniqueWithoutFinanceDataInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutFinanceDataInput | FinanceUpdateManyWithWhereWithoutFinanceDataInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type UserAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type FinanceCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput> | FinanceCreateWithoutUserInput[] | FinanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput | FinanceCreateOrConnectWithoutUserInput[]
    createMany?: FinanceCreateManyUserInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type UserAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput> | FinanceCreateWithoutUserInput[] | FinanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput | FinanceCreateOrConnectWithoutUserInput[]
    createMany?: FinanceCreateManyUserInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutUserInput | UserAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutUserInput | UserAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutUserInput | UserAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type FinanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput> | FinanceCreateWithoutUserInput[] | FinanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput | FinanceCreateOrConnectWithoutUserInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutUserInput | FinanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceCreateManyUserInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutUserInput | FinanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutUserInput | FinanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type UserAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutUserInput | UserAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutUserInput | UserAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutUserInput | UserAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput> | FinanceCreateWithoutUserInput[] | FinanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutUserInput | FinanceCreateOrConnectWithoutUserInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutUserInput | FinanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinanceCreateManyUserInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutUserInput | FinanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutUserInput | FinanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAccessInput = {
    create?: XOR<UserCreateWithoutUserAccessInput, UserUncheckedCreateWithoutUserAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAccessInput
    connect?: UserWhereUniqueInput
  }

  export type AccessCreateNestedOneWithoutUserAccessInput = {
    create?: XOR<AccessCreateWithoutUserAccessInput, AccessUncheckedCreateWithoutUserAccessInput>
    connectOrCreate?: AccessCreateOrConnectWithoutUserAccessInput
    connect?: AccessWhereUniqueInput
  }

  export type UserUpdateOneWithoutUserAccessNestedInput = {
    create?: XOR<UserCreateWithoutUserAccessInput, UserUncheckedCreateWithoutUserAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAccessInput
    upsert?: UserUpsertWithoutUserAccessInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAccessInput, UserUpdateWithoutUserAccessInput>, UserUncheckedUpdateWithoutUserAccessInput>
  }

  export type AccessUpdateOneWithoutUserAccessNestedInput = {
    create?: XOR<AccessCreateWithoutUserAccessInput, AccessUncheckedCreateWithoutUserAccessInput>
    connectOrCreate?: AccessCreateOrConnectWithoutUserAccessInput
    upsert?: AccessUpsertWithoutUserAccessInput
    disconnect?: boolean
    delete?: AccessWhereInput | boolean
    connect?: AccessWhereUniqueInput
    update?: XOR<XOR<AccessUpdateToOneWithWhereWithoutUserAccessInput, AccessUpdateWithoutUserAccessInput>, AccessUncheckedUpdateWithoutUserAccessInput>
  }

  export type UserAccessCreateNestedManyWithoutAccessInput = {
    create?: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput> | UserAccessCreateWithoutAccessInput[] | UserAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutAccessInput | UserAccessCreateOrConnectWithoutAccessInput[]
    createMany?: UserAccessCreateManyAccessInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type UserAccessUncheckedCreateNestedManyWithoutAccessInput = {
    create?: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput> | UserAccessCreateWithoutAccessInput[] | UserAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutAccessInput | UserAccessCreateOrConnectWithoutAccessInput[]
    createMany?: UserAccessCreateManyAccessInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type UserAccessUpdateManyWithoutAccessNestedInput = {
    create?: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput> | UserAccessCreateWithoutAccessInput[] | UserAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutAccessInput | UserAccessCreateOrConnectWithoutAccessInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutAccessInput | UserAccessUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: UserAccessCreateManyAccessInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutAccessInput | UserAccessUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutAccessInput | UserAccessUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type UserAccessUncheckedUpdateManyWithoutAccessNestedInput = {
    create?: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput> | UserAccessCreateWithoutAccessInput[] | UserAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutAccessInput | UserAccessCreateOrConnectWithoutAccessInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutAccessInput | UserAccessUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: UserAccessCreateManyAccessInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutAccessInput | UserAccessUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutAccessInput | UserAccessUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutFinanceInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    userAccess?: UserAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinanceInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    userAccess?: UserAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
  }

  export type FinanceDataCreateWithoutFinanceInput = {
    id?: string
    product?: string | null
    store?: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment?: string | null
    transation?: string | null
  }

  export type FinanceDataUncheckedCreateWithoutFinanceInput = {
    id?: string
    product?: string | null
    store?: string | null
    value: number
    month: string
    day: string
    year: string
    hour: string
    minutes: string
    payment?: string | null
    transation?: string | null
  }

  export type FinanceDataCreateOrConnectWithoutFinanceInput = {
    where: FinanceDataWhereUniqueInput
    create: XOR<FinanceDataCreateWithoutFinanceInput, FinanceDataUncheckedCreateWithoutFinanceInput>
  }

  export type UserUpsertWithoutFinanceInput = {
    update: XOR<UserUpdateWithoutFinanceInput, UserUncheckedUpdateWithoutFinanceInput>
    create: XOR<UserCreateWithoutFinanceInput, UserUncheckedCreateWithoutFinanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinanceInput, UserUncheckedUpdateWithoutFinanceInput>
  }

  export type UserUpdateWithoutFinanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    userAccess?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FinanceDataUpsertWithoutFinanceInput = {
    update: XOR<FinanceDataUpdateWithoutFinanceInput, FinanceDataUncheckedUpdateWithoutFinanceInput>
    create: XOR<FinanceDataCreateWithoutFinanceInput, FinanceDataUncheckedCreateWithoutFinanceInput>
    where?: FinanceDataWhereInput
  }

  export type FinanceDataUpdateToOneWithWhereWithoutFinanceInput = {
    where?: FinanceDataWhereInput
    data: XOR<FinanceDataUpdateWithoutFinanceInput, FinanceDataUncheckedUpdateWithoutFinanceInput>
  }

  export type FinanceDataUpdateWithoutFinanceInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceDataUncheckedUpdateWithoutFinanceInput = {
    product?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    value?: FloatFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    minutes?: StringFieldUpdateOperationsInput | string
    payment?: NullableStringFieldUpdateOperationsInput | string | null
    transation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceCreateWithoutFinanceDataInput = {
    id?: string
    User?: UserCreateNestedOneWithoutFinanceInput
  }

  export type FinanceUncheckedCreateWithoutFinanceDataInput = {
    id?: string
    userId?: string | null
  }

  export type FinanceCreateOrConnectWithoutFinanceDataInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput>
  }

  export type FinanceCreateManyFinanceDataInputEnvelope = {
    data: FinanceCreateManyFinanceDataInput | FinanceCreateManyFinanceDataInput[]
  }

  export type FinanceUpsertWithWhereUniqueWithoutFinanceDataInput = {
    where: FinanceWhereUniqueInput
    update: XOR<FinanceUpdateWithoutFinanceDataInput, FinanceUncheckedUpdateWithoutFinanceDataInput>
    create: XOR<FinanceCreateWithoutFinanceDataInput, FinanceUncheckedCreateWithoutFinanceDataInput>
  }

  export type FinanceUpdateWithWhereUniqueWithoutFinanceDataInput = {
    where: FinanceWhereUniqueInput
    data: XOR<FinanceUpdateWithoutFinanceDataInput, FinanceUncheckedUpdateWithoutFinanceDataInput>
  }

  export type FinanceUpdateManyWithWhereWithoutFinanceDataInput = {
    where: FinanceScalarWhereInput
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyWithoutFinanceDataInput>
  }

  export type FinanceScalarWhereInput = {
    AND?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    OR?: FinanceScalarWhereInput[]
    NOT?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    id?: StringFilter<"Finance"> | string
    userId?: StringNullableFilter<"Finance"> | string | null
    financeDataId?: StringNullableFilter<"Finance"> | string | null
  }

  export type UserAccessCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    Access?: AccessCreateNestedOneWithoutUserAccessInput
  }

  export type UserAccessUncheckedCreateWithoutUserInput = {
    id?: string
    accessId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAccessCreateOrConnectWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    create: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput>
  }

  export type UserAccessCreateManyUserInputEnvelope = {
    data: UserAccessCreateManyUserInput | UserAccessCreateManyUserInput[]
  }

  export type FinanceCreateWithoutUserInput = {
    id?: string
    FinanceData?: FinanceDataCreateNestedOneWithoutFinanceInput
  }

  export type FinanceUncheckedCreateWithoutUserInput = {
    id?: string
    financeDataId?: string | null
  }

  export type FinanceCreateOrConnectWithoutUserInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
  }

  export type FinanceCreateManyUserInputEnvelope = {
    data: FinanceCreateManyUserInput | FinanceCreateManyUserInput[]
  }

  export type UserAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    update: XOR<UserAccessUpdateWithoutUserInput, UserAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput>
  }

  export type UserAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    data: XOR<UserAccessUpdateWithoutUserInput, UserAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserAccessScalarWhereInput
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAccessScalarWhereInput = {
    AND?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
    OR?: UserAccessScalarWhereInput[]
    NOT?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
    id?: StringFilter<"UserAccess"> | string
    userId?: StringNullableFilter<"UserAccess"> | string | null
    accessId?: StringNullableFilter<"UserAccess"> | string | null
    created_at?: DateTimeFilter<"UserAccess"> | Date | string
    updated_at?: DateTimeFilter<"UserAccess"> | Date | string
  }

  export type FinanceUpsertWithWhereUniqueWithoutUserInput = {
    where: FinanceWhereUniqueInput
    update: XOR<FinanceUpdateWithoutUserInput, FinanceUncheckedUpdateWithoutUserInput>
    create: XOR<FinanceCreateWithoutUserInput, FinanceUncheckedCreateWithoutUserInput>
  }

  export type FinanceUpdateWithWhereUniqueWithoutUserInput = {
    where: FinanceWhereUniqueInput
    data: XOR<FinanceUpdateWithoutUserInput, FinanceUncheckedUpdateWithoutUserInput>
  }

  export type FinanceUpdateManyWithWhereWithoutUserInput = {
    where: FinanceScalarWhereInput
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutUserAccessInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    Finance?: FinanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAccessInput = {
    id?: string
    email: string
    name: string
    password: string
    account?: string
    balance?: number
    cpf: string
    created_At?: Date | string
    updated_At?: Date | string
    Finance?: FinanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAccessInput, UserUncheckedCreateWithoutUserAccessInput>
  }

  export type AccessCreateWithoutUserAccessInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccessUncheckedCreateWithoutUserAccessInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AccessCreateOrConnectWithoutUserAccessInput = {
    where: AccessWhereUniqueInput
    create: XOR<AccessCreateWithoutUserAccessInput, AccessUncheckedCreateWithoutUserAccessInput>
  }

  export type UserUpsertWithoutUserAccessInput = {
    update: XOR<UserUpdateWithoutUserAccessInput, UserUncheckedUpdateWithoutUserAccessInput>
    create: XOR<UserCreateWithoutUserAccessInput, UserUncheckedCreateWithoutUserAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAccessInput, UserUncheckedUpdateWithoutUserAccessInput>
  }

  export type UserUpdateWithoutUserAccessInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    Finance?: FinanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAccessInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    created_At?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_At?: DateTimeFieldUpdateOperationsInput | Date | string
    Finance?: FinanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccessUpsertWithoutUserAccessInput = {
    update: XOR<AccessUpdateWithoutUserAccessInput, AccessUncheckedUpdateWithoutUserAccessInput>
    create: XOR<AccessCreateWithoutUserAccessInput, AccessUncheckedCreateWithoutUserAccessInput>
    where?: AccessWhereInput
  }

  export type AccessUpdateToOneWithWhereWithoutUserAccessInput = {
    where?: AccessWhereInput
    data: XOR<AccessUpdateWithoutUserAccessInput, AccessUncheckedUpdateWithoutUserAccessInput>
  }

  export type AccessUpdateWithoutUserAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessUncheckedUpdateWithoutUserAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessCreateWithoutAccessInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserCreateNestedOneWithoutUserAccessInput
  }

  export type UserAccessUncheckedCreateWithoutAccessInput = {
    id?: string
    userId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAccessCreateOrConnectWithoutAccessInput = {
    where: UserAccessWhereUniqueInput
    create: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput>
  }

  export type UserAccessCreateManyAccessInputEnvelope = {
    data: UserAccessCreateManyAccessInput | UserAccessCreateManyAccessInput[]
  }

  export type UserAccessUpsertWithWhereUniqueWithoutAccessInput = {
    where: UserAccessWhereUniqueInput
    update: XOR<UserAccessUpdateWithoutAccessInput, UserAccessUncheckedUpdateWithoutAccessInput>
    create: XOR<UserAccessCreateWithoutAccessInput, UserAccessUncheckedCreateWithoutAccessInput>
  }

  export type UserAccessUpdateWithWhereUniqueWithoutAccessInput = {
    where: UserAccessWhereUniqueInput
    data: XOR<UserAccessUpdateWithoutAccessInput, UserAccessUncheckedUpdateWithoutAccessInput>
  }

  export type UserAccessUpdateManyWithWhereWithoutAccessInput = {
    where: UserAccessScalarWhereInput
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyWithoutAccessInput>
  }

  export type FinanceCreateManyFinanceDataInput = {
    id?: string
    userId?: string | null
  }

  export type FinanceUpdateWithoutFinanceDataInput = {
    User?: UserUpdateOneWithoutFinanceNestedInput
  }

  export type FinanceUncheckedUpdateWithoutFinanceDataInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceUncheckedUpdateManyWithoutFinanceDataInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAccessCreateManyUserInput = {
    id?: string
    accessId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinanceCreateManyUserInput = {
    id?: string
    financeDataId?: string | null
  }

  export type UserAccessUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Access?: AccessUpdateOneWithoutUserAccessNestedInput
  }

  export type UserAccessUncheckedUpdateWithoutUserInput = {
    accessId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessUncheckedUpdateManyWithoutUserInput = {
    accessId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceUpdateWithoutUserInput = {
    FinanceData?: FinanceDataUpdateOneWithoutFinanceNestedInput
  }

  export type FinanceUncheckedUpdateWithoutUserInput = {
    financeDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceUncheckedUpdateManyWithoutUserInput = {
    financeDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAccessCreateManyAccessInput = {
    id?: string
    userId?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAccessUpdateWithoutAccessInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutUserAccessNestedInput
  }

  export type UserAccessUncheckedUpdateWithoutAccessInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAccessUncheckedUpdateManyWithoutAccessInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FinanceDataCountOutputTypeDefaultArgs instead
     */
    export type FinanceDataCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FinanceDataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessCountOutputTypeDefaultArgs instead
     */
    export type AccessCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccessCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinanceDefaultArgs instead
     */
    export type FinanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FinanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinanceDataDefaultArgs instead
     */
    export type FinanceDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FinanceDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAccessDefaultArgs instead
     */
    export type UserAccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserAccessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessDefaultArgs instead
     */
    export type AccessArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccessDefaultArgs<ExtArgs>

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