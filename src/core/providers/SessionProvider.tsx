import { createContext, useContext, useState, ReactNode } from 'react';

interface SessionContextProps {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => {
        setUser(username);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <SessionContext.Provider value={{ user, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};