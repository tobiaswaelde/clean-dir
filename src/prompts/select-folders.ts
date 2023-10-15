import { DistinctQuestion } from 'inquirer';
import { PromptsState } from './types.js';
import { findFolders } from '../util/find-folders.js';
import { getFolderNamesFromTypes } from '../types.js';

export const promptSelectFolders: DistinctQuestion<PromptsState> = {
	name: 'selectedFolders',
	type: 'checkbox',
	message: 'Select the folders you want to delete',
	choices: async (answers) => {
		const folders = await findFolders(
			answers.rootDir,
			getFolderNamesFromTypes(answers.selectedTypes)
		);

		return folders.map((folder) => ({
			value: folder,
			name: folder.replace(answers.rootDir, ''),
		}));
	},
	loop: false,
	pageSize: 10,
};
