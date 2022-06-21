export function getHost(req) {
  return (
    (process.env.NODE_ENV == 'production' ? 'https://' : 'http://') +
    req?.headers?.host
  );
}
