import { useContext, createContext } from "react";
import TokenService from '@/app/core/token';
import LanguageService from '@/app/core/lang';

interface SessionContextType {
    tokenService: TokenService;
    languageService: LanguageService;
}

const SessionContext = createContext<SessionContextType | null>(null);

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const tokenService = new TokenService(window.location.href);
    const session = {
        tokenService: tokenService,
        languageService: new LanguageService(tokenService)
    };

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );

}

