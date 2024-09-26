// @ts-ignore
import jwt from 'jsonwebtoken';

class TokenService {
    private token: string;
    private decodedToken: any;

    constructor(url: string) {
         // TODO: this.token = this.extractTokenFromUrl(url);
        // TODO: this.decodedToken = this.decodeToken(this.token);
        this.token = 'mockToken';
        this.decodedToken = { lang: 'fr', apiUrl: 'https://api.example.com', userId: '12345' };
    }

    private extractTokenFromUrl(url: string): string {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get('token') || '';
    }

    private decodeToken(token: string): any {
        try {
            return jwt.decode(token);
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    }

    public getLanguage(): string {
        return this.decodedToken?.lang || 'default';
    }

    public getApiUrl(): string {
        return this.decodedToken?.apiUrl || '';
    }

    public getUserId(): string {
        return this.decodedToken?.userId || '';
    }
}

export default TokenService;