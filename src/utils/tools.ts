export function querystring(name: string, url = window.location.href): any {
  const n = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp(`[?&]?${n}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}