import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
    async logToFile(entry) {
        const formattedEntry = `${new Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'Asia/Colombo',
        }).format(new Date())}\t${entry}\n`;

        try {
            const logsDirectoryPath = path.join(__dirname, '..', '..', 'logs');
            if (!fs.existsSync(logsDirectoryPath)) {
                await fsPromises.mkdir(logsDirectoryPath, { recursive: true });
            }
            await fsPromises.appendFile(path.join(logsDirectoryPath, 'myLogFile.log'), formattedEntry);
        } catch (e) {
            if (e instanceof Error) console.error(e.message);
        }
    }

    log(message: any, context?: string) {
        const entry = `${context}\t${message}`;
        this.logToFile(entry);
        super.log(message, context);
    }

    error(message: any, stackOrContext?: string) {
        const entry = `${stackOrContext}\t${message}`;
        this.logToFile(entry);
        super.error(message, stackOrContext);
    }
}
