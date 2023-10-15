import { DistinctQuestion, Question } from 'inquirer';
import { PromptsState } from './types.js';
import { FOLDER_NAMES, FOLDER_TYPES, FolderType } from '../types.js';

export const promptSelectTypes: DistinctQuestion<PromptsState> = {
	name: 'selectedTypes',
	type: 'checkbox',
	message: 'What do you want to clean up?',
	choices: FOLDER_TYPES.map((folderType) => ({
		value: folderType,
		name: `${folderType} (${FOLDER_NAMES[folderType].join(', ')})`,
	})),
	loop: false,
	validate: (input: FolderType[], answers) => {
		if (input.length === 0) {
			return 'At least one type needs to be selected.';
		}
		return true;
	},
};
