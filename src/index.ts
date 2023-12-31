import inquirer from 'inquirer';
import { PromptsState } from './prompts/types.js';
import { promptInputRootDir } from './prompts/input-root-dir.js';
import { promptSelectTypes } from './prompts/select-types.js';
import { promptSelectFolders } from './prompts/select-folders.js';
import { promptConfirmation } from './prompts/confirmation.js';
import { deleteFolders } from './util/delete-folders.js';

const res = await inquirer.prompt<PromptsState>([
	promptInputRootDir,
	promptSelectTypes,
	promptSelectFolders,
	promptConfirmation,
]);

if (res.confirmation === true) {
	console.log(`Deleting ${res.selectedFolders.length} folders...`);
	const countDeleted = await deleteFolders(res.selectedFolders);
	console.log(`${countDeleted} folders deleted.`);
} else {
	console.log('No folders deleted.');
}
