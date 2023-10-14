import path from 'node:path';
import fs from 'node:fs';

export function checkPathExists(value: string): boolean {
	return fs.existsSync(path.resolve(value));
}

export function checkFolder(value: string): boolean {
	return fs.statSync(path.resolve(value)).isDirectory();
}
