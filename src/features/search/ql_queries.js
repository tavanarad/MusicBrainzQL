import {gql} from '@apollo/client';

export const MB_SEARCH_ARTIST = gql`
query Artist($query: String!, $endCursor: String) {
  search {
    artists(query: $query, first: 50, after: $endCursor) {
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
      disambiguation
      type
      mediaWikiImages {
        url
      }
      rating {
        voteCount
        value
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
