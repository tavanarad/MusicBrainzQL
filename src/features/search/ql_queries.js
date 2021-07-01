import {gql} from '@apollo/client';

export const MB_SEARCH_ARTIST = gql`
query Artist($query: String!) {
  search {
    artists(query: $query, first: 50) {
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
      # releases {
      #   nodes {
      #     coverArtArchive {
      #       images {
      #         image
      #       }
      #     }
      #   }
      #   # edges {
      #   #   node {
      #   #     mbid
      #   #     title
      #   #     coverArtArchive {
      #   #       images {
      #   #         image
      #   #       }
      #   #     }
      #   #   }
      #   # }
      # }
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
