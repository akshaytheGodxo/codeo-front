import { create } from "zustand";

export type UserAuthState = {
    isAuthenticated: boolean,
}

export type UserDetails = {
    name: string,
    email: string,
}

export type UserStore = UserAuthState & {
  user: UserDetails | null;
  setUser: (user: UserDetails) => void;
  clearUser: () => void;
};
export const defaultAuthState: UserAuthState = {
  isAuthenticated: false,
};


export const useUserStore = create<UserStore>((set) => ({
  isAuthenticated: false,
  user: null,

  setUser: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  clearUser: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));