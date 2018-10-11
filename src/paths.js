export const removeSpaces = (name) => name.replace(' ', '_')
export const gameNameToPath = (name) => `/${removeSpaces(name)}`;
