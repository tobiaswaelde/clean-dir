import path from 'node:path';
import { FOLDER_NAMES, FOLDER_TYPES, FolderType } from '../types.js';
import { singlePrompt } from '../util/prompt.js';
import { checkFolder, checkPathExists } from '../util/fs.js';

export async function promptEnterRootDir(): Promise<string> {
	return singlePrompt<string>({
		type: 'input',
		message: 'Enter folder to clean up:',
		default: path.resolve(process.cwd()),
		validate(input) {
			if (!checkPathExists(input)) {
				return 'The folder does not exist.';
			}
			if (!checkFolder(input)) {
				return 'The path is not a folder.';
			}
			return true;
		},
	});
}

export async function promptSelectTypes(): Promise<FolderType[]> {
	return singlePrompt<FolderType[]>({
		type: 'checkbox',
		message: 'What do you want to clean up?',
		choices: FOLDER_TYPES.map((folderType) => ({
			value: folderType,
			name: `${folderType} (${FOLDER_NAMES[folderType].join(', ')})`,
		})),
		loop: false,
		validate: (input: FolderType[]) => {
			return input.length > 0;
		},
	});
}

export async function promptSelectFoldersToDelete(
	rootDir: string,
	folders: string[]
): Promise<string[]> {
	return singlePrompt<string[]>({
		type: 'checkbox',
		message: 'Select the folders you want to delete',
		choices: folders.map((folder) => ({
			value: folder,
			name: folder.replace(rootDir, ''),
		})),
		loop: false,
		pageSize: 10,
	});
}

export async function promptConfirmDelete(count: number) {
	const selectedString = count === 1 ? `${count} folder selected.` : `${count} folders selected.`;
	const confirmString =
		count === 1
			? 'Dou you really want to delete this folder?'
			: 'Dou you really want to delete these folders?';

	return singlePrompt<boolean>({
		type: 'confirm',
		message: `${selectedString} ${confirmString}`,
		default: false,
	});
}
