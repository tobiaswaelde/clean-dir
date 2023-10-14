export enum FolderType {
	NodeModules = 'Node Modules',
	BuildFolders = 'Build Folders',
	NextFolders = 'Next',
	NuxtFolders = 'Nuxt',
}
export const FOLDER_TYPES = Object.values(FolderType);

export const FOLDER_NAMES = {
	[FolderType.NodeModules]: ['node_modules'],
	[FolderType.BuildFolders]: ['build', 'dist', 'out'],
	[FolderType.NextFolders]: ['.next'],
	[FolderType.NuxtFolders]: ['.nuxt', '.output'],
};

export function getFolderNamesFromTypes(folderTypes: FolderType[]) {
	const names: Set<string> = new Set();

	for (const folderType of folderTypes) {
		for (const name of FOLDER_NAMES[folderType]) {
			names.add(name);
		}
	}

	return Array.from(names);
}
