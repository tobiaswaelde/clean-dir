import path from 'node:path';
import { getFolderNamesFromTypes } from './types.js';
import { findFolders } from './util/find-folders.js';
import {
	promptConfirmDelete,
	promptEnterRootDir,
	promptSelectFoldersToDelete,
	promptSelectTypes,
} from './prompts/select-types.js';

const rootDir = path.resolve('/Users/tobiaswaelde/Projects');

const dir = await promptEnterRootDir();
const typesToFind = await promptSelectTypes();

const folders = await findFolders(dir, getFolderNamesFromTypes(typesToFind));

const foldersToDelete = await promptSelectFoldersToDelete(rootDir, folders);
if (foldersToDelete.length === 0) {
	console.log('No folders selected.');
	process.exit();
}

const confirmDelete = await promptConfirmDelete(foldersToDelete.length);
console.log(confirmDelete);
