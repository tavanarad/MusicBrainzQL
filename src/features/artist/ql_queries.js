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
  releases(type: ALBUM, status: OFFICIAL) {
    totalCount
    nodes {
      mbid
      title
      disambiguation
      media {
        title
        format
        trackCount
        tracks {
          title
          number
          length
        }
      }
      date
      coverArtArchive {
        artwork
        images {
          image
          thumbnails {
            large
          }
        }
      }
      recordings{
        totalCount
        nodes{
          mbid
          title
          length
          rating {
            voteCount
            value
          }
        }
      }
    }
  }
}
`;
