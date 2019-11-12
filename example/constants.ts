
export const DOCS_LINK = '/docs'
export const TWITTER_LINK = '/'
export const GITHUB_LINK = 'https://github.com/remorses/mongoke'

export const codeStr = `
schema: |
    type User {
        _id: ObjectId
        username: String
        email: String
    }
    type BlogPost {
        _id: ObjectId
        author_id: ObjectId
        title: String
        content: String
    }

types:
    User:
        collection: users
    BlogPost:
        collection: posts

relations:
    - field: posts
      from: User
      to: BlogPost
      relation_type: to_many
      where:
          author_id: $\{{ parent['_id'] }}
`

export const codeSchema = `
schema: |
    type User {
        _id: ObjectId
        username: String
        email: String
    }
    type BlogPost {
        _id: ObjectId
        author_id: ObjectId
        title: String
        content: String
    }
...
`

export const codeTypes = `
types:
    User:
        collection: users
        guards:
            -   expression: jwt and jwt['user_id'] == x['_id']
    BlogPost:
        collection: posts
        guards: # not everyone has access to content
            -   expression: |
                    jwt and jwt['user_id'] == x['author_id']
            -   expression: True
                excluded:
                    - content
`

export const codeRelations = `
relations:
    - field: posts
      from: User
      to: BlogPost
      relation_type: to_many
      where:
          author_id: $\{{ parent['_id'] }}
`

export const codeGraphql = `
{
    user(where: { username: { eq: "Mike" } }) {
        _id
        username
        email
        posts {
            nodes {
                title
            }
        }
    }

    blogPosts(first: 10, after: "Post 1", cursorField: title) {
        nodes {
            title
            content
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }
}
`