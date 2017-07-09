
export function isClass(cls) {
  return typeof cls === 'function' && /^\s*class\s+/.test(cls.toString());
}
