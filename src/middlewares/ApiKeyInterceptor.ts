import { Request, Response, NextFunction} from 'express';
import { apiKey, apiKeyName } from '../config/env.variables';

class ApiKeyInterceptor {
    constructor(private apiKey: string, private apiKeyName: string) {}

    public validate(req: Request, res: Response, next: NextFunction) {
        const providedApiKey = req.headers[this.apiKeyName];
        if (providedApiKey != this.apiKey) {
            return res.status(403).json({
                message: 'forbidden'
            })
        }

        next();
    }

    get getApiKey() {
        return this.apiKey;
    }

    get getApiKeyName() {
        return this.apiKeyName;
    }
};

const apiKeyInterceptor = new ApiKeyInterceptor(apiKey, apiKeyName);

export default apiKeyInterceptor;