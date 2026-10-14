const AUTH_KEY = "auth";

export const authService = {
  login() {
    // localStorage.setItem(
    //   AUTH_KEY,
    //   JSON.stringify({
    //     authenticated: true,
    //   }),
    // );
    document.cookie = `${AUTH_KEY}=true; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  },

  logout() {
    // localStorage.removeItem(AUTH_KEY);
    document.cookie = `${AUTH_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  },

  isAuthenticated() {
    return (
      document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${AUTH_KEY}=`))
        ?.split("=")[1] === "true"
    );

    // if (typeof window === "undefined") {
    //   return false;
    // }

    // const data = localStorage.getItem(AUTH_KEY);

    // if (!data) {
    //   return false;
    // }

    // try {
    //   return JSON.parse(data).authenticated;
    // } catch {
    //   return false;
    // }
  },
};
