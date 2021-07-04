import { gql } from "@apollo/client";

export const MB_LOOKUP_ARTIST = gql`
  query Artist($mbid: MBID!) {
    lookup {
      artist(mbid: $mbid) {
        ...artistInfo
      }
    }
  }

  fragment artistInfo on Artist {
    mbid
    name
    disambiguation
    mediaWikiImages {
      url
    }
    type
    rating {
      voteCount
      value
    }
    releases(type: ALBUM, status: OFFICIAL) {
      totalCount
      nodes {
        mbid
        title
        disambiguation
        coverArtArchive {
          artwork
          images {
            image
            thumbnails {
              large
            }
          }
        }
      }
    }
  }
`;

export const MB_LOOKUP_RELEASE = gql`
  query Release($mbid: MBID!) {
    lookup {
      release(mbid: $mbid) {
        mbid
        title
        recordings {
          nodes {
            mbid
            title
            length
            rating {
              value
              voteCount
            }
          }
        }
      }
    }
  }
`;
