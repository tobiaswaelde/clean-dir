import { FolderType } from '../types.js';

export type PromptsState = {
	rootDir: string;
	selectedTypes: FolderType[];
	selectedFolders: string[];
	confirmation?: boolean;
};
