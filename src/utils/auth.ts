import { cookies } from "next/headers";
export interface AuthData {
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
  const myCookie = cookies().get(name);
  if (!myCookie) return null;
  return myCookie.value;
};
