export const preparePhotoList = (album) =>
  album.coverArtArchive.artwork
    ? album.coverArtArchive.images.reduce(
        (accumulator, currentValue) => [
          ...accumulator,
          { source: currentValue.thumbnails.large },
        ],
        []
      )
    : [];
