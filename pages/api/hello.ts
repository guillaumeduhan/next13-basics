// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  title: string
  content: string
}

type Data = {
  posts: Post[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  res.status(200).json({
    posts: [
      {
        title: "This is my new post",
        content: "This is the content"
      },
      {
        title: "This is another new post",
        content: "This is the content of this another post"
      }
    ]
  })
}
