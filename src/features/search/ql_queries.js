import {gql} from '@apollo/client';

export const MB_SEARCH_ARTIST = gql`
query Artist($query: String!) {
  search {
    artists(query: $query, first: 1) {
      ...labelResults
    }
  }
}

fragment labelResults on ArtistConnection {
  pageInfo {
    endCursor
    hasNextPage
  }
  edges {
    cursor
    node {
      mbid
      name
      type
      releases {
        edges {
          node {
            mbid
            title
            coverArtArchive {
              images {
                image
              }
            }
          }
        }
      }
      tags {
        edges {
          node {
            name
            count
          }
        }
      }
      area {
        name
      }
    }
  }
}
`;
