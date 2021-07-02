export const getConnectionCursor = (hashValue) => {
  const decodedValue = atob(hashValue);
  const regex = /arrayconnection:(\d+)/gm;
  const matches = regex.exec(decodedValue);

  return matches && matches.length > 1 ? +matches[1] : 0;
};

export const shouldFetchMore = (endCursor, currentCursor) =>
  getConnectionCursor(endCursor) - getConnectionCursor(currentCursor) === 25;
