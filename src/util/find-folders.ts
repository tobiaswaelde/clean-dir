import path from 'node:path';
import fs from 'node:fs/promises';

export async function findFolders(dir: string, folderNames: string[]): Promise<string[]> {
	const result: Set<string> = new Set();

	const dirents = await fs.readdir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		if (dirent.isDirectory()) {
			if (folderNames.includes(dirent.name)) {
				result.add(path.join(dirent.path, dirent.name));
			} else {
				const subfolders = await findFolders(path.join(dir, dirent.name), folderNames);
				for (const subfolder of subfolders) {
					result.add(subfolder);
				}
			}
		}
	}

	return Array.from(result);
}
