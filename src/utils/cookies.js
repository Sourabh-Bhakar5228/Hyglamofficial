// Save cookie with JSON support
export function setCookie(name, value, days = 365) {
  try {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const jsonValue = JSON.stringify(value);
    document.cookie = `${name}=${encodeURIComponent(
      jsonValue
    )}; expires=${expires}; path=/; SameSite=Lax`;
  } catch (e) {
    console.error("Error setting cookie:", e);
  }
}

// Get cookie and parse JSON
export function getCookie(name) {
  try {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (!match) return null;
    return JSON.parse(decodeURIComponent(match[2]));
  } catch (e) {
    console.error("Error getting cookie:", e);
    return null;
  }
}

// Delete cookie
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}
