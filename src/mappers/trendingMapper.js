export const trendingMapper = results => {
  return results.map(
    ({ id, title, poster_path: posterPath, release_date: release }) => ({
      id,
      title,
      posterPath,
      release,
    })
  );
};

