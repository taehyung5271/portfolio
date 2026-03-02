const STORAGE_KEY = "portfolio_user_key";

const randomKey = () => crypto.randomUUID();

export const getOrCreateUserKey = () => {
  if (typeof window === "undefined") return null;
  let key = localStorage.getItem(STORAGE_KEY);
  if (!key) {
    key = randomKey();
    localStorage.setItem(STORAGE_KEY, key);
  }
  return key;
};
