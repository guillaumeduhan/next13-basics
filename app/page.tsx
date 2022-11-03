async function getPosts() {
  const data = await fetch('http://localhost:3000/api/hello',
  {
    next: { revalidate: 10 }
  })
  const json = await data.json()
  return json?.posts as any[]
}

export default async function Home() {
  const posts = await getPosts()
  
  return (
    <div className="container mx-auto">
      {posts?.map((post, index) => (
        <div key={index}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
