import type { NeonQueryFunction } from '../../dist/npm';

const now = new Date();
export const sampleQueries = (sql: NeonQueryFunction<any, any>) => [
  // tagged-template
  sql`SELECT ${1} AS int_uncast`,
  sql`SELECT ${-1}::int AS int`,
  sql`SELECT ${1}::int8 AS int8num`,
  sql`SELECT ${-1}::decimal AS decimalnum`,
  sql`SELECT ${2n} AS bigint`,
  sql`SELECT ${9007199254740993n} AS bigint`, // > MAX_SAFE_INTEGER
  sql`SELECT ${Math.PI} AS pi`,
  sql`SELECT ${Math.PI}::real AS pi`,
  sql`SELECT ${Math.PI}::double precision AS pi`,
  sql`SELECT ${'[1,4)'}::int4range AS int4range`,
  sql`SELECT ${'hello'} AS str`,
  sql`SELECT ${['a', 'b', 'c']} AS arrstr_uncast`,
  sql`SELECT ${[[2], [4]]}::int[][] AS arrnumnested`,
  sql`SELECT ${now}::timestamptz AS timestamptznow`,
  sql`SELECT ${'16:17:18+01:00'}::timetz AS timetz`,
  sql`SELECT ${'17:18:19'}::time AS time`,
  sql`SELECT ${now}::date AS datenow`,
  sql`SELECT ${{ x: 'y' }} AS obj_uncast`,
  sql`SELECT ${'11:22:33:44:55:66'}::macaddr AS macaddr`,
  sql`SELECT ${'\\xDEADBEEF'}::bytea AS bytea`,
  sql`SELECT ${'(2, 3)'}::point AS point`,
  sql`SELECT ${'<(2, 3), 1>'}::circle AS circle`,
  sql`SELECT ${'10.10.10.0/24'}::cidr AS cidr`,
  sql`SELECT ${true} AS bool_uncast`,
  sql`SELECT ${'hello'} || ' ' || ${'world'} AS greeting`,
  sql`SELECT ${[1, 2, 3]}::int[] AS arrnum`,
  sql`SELECT ${['a', 'b', 'c']}::text[] AS arrstr`,
  sql`SELECT ${{ x: 'y' }}::jsonb AS jsonb_obj`,
  sql`SELECT ${{ x: 'y' }}::json AS json_obj`,
  sql`SELECT ${{ x: 'y' }} AS json_obj_uncast`,
  sql`SELECT ${['11:22:33:44:55:66']}::macaddr[] AS arrmacaddr`,
  sql`SELECT ${['10.10.10.0/24']}::cidr[] AS arrcidr`,
  sql`SELECT ${true}::boolean AS bool`,
  sql`SELECT ${[now]}::timestamptz[] AS arrtstz`,
  sql`SELECT ${['(2, 3)']}::point[] AS arrpoint`,
  sql`SELECT ${['<(2, 3), 1>']}::circle[] AS arrcircle`,
  sql`SELECT ${['\\xDEADBEEF', '\\xDEADBEEF']}::bytea[] AS arrbytea`,
  sql`SELECT null AS null`,
  sql`SELECT ${null} AS null`,
  sql`SELECT ${'NULL'} AS null_str`,
  sql`SELECT ${[1, 2, 3]} AS arrnum_uncast`,
  sql`SELECT ${[[2], [4]]} AS arrnumnested_uncast`,
  sql`SELECT ${now} AS timenow_uncast`,
  sql`SELECT ${now}::timestamp AS timestampnow`,
  sql`SELECT ${new Uint8Array([65, 66, 67])} AS bytea`,
  sql`SELECT ${new Uint8Array(65536).fill(128)} AS bytea`,
  sql`SELECT ${Buffer.from([65, 66, 67])} AS bytea`,
  sql`SELECT ${1} AS one, ${sql("'raw'")} AS raw, ${'x'} AS x, ${now} AS date`, // multiple types plus raw SQL

  // non-tagged-template
  sql('SELECT $1::timestamp AS timestampnow', [now]),
  sql("SELECT $1 || ' ' || $2 AS greeting", ['hello', 'world']),
  sql('SELECT 123 AS num'),
  sql('SELECT 123 AS num', []),
];
