import fr from './lang/fr.json';
import en from './lang/en.json';
import TokenService from './token';

class LanguageService {
    private readonly texts: { [key: string]: any } = {};
    private tokenService: TokenService;
    private readonly lang: string;

    constructor(tokenService: TokenService) {
        this.tokenService = tokenService;
        this.lang = this.tokenService.getLanguage();
        switch (this.lang) {
            case 'fr':
                this.texts = fr;
                break;
            case 'en':
                this.texts = en;
                break;
            default:
                this.texts = en;
                break;
        }
    }

    public getText(key: string): string {
        return this.texts[key];
    }
}

export default LanguageService;