export const castMapper = castData => {
  return castData.map(({ id, name, character, profile_path: profilePath }) => ({
    id,
    name,
    character,
    profilePath,
  }));
};
