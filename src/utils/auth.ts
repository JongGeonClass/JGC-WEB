interface AuthData {
  isAuthenticated: boolean;
  userData: {
    id: number;
    uuid: string;
    nickname: string;
    created_time: string;
    exp: number;
  } | null;
}

export const isAuthenticated = (): AuthData => {
  const cookieValue = getCookieValue("JGC_PUBLIC_SESSION");
  if (cookieValue) {
    try {
      const decodedValue = Buffer.from(cookieValue, "base64").toString();
      const userData = JSON.parse(decodedValue);
      return { isAuthenticated: true, userData };
    } catch (error) {
      console.error("Error decoding JGC_PUBLIC_SESSION cookie:", error);
    }
  }

  return {
    isAuthenticated: false,
    userData: null,
  };
};

const getCookieValue = (name: string): string | null => {
  const cookieName = encodeURIComponent(name) + "=";
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length));
    }
  }
  return null;
};
