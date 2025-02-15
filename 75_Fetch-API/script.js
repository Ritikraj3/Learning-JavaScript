// fetch('https://dummyjson.com/products')
// .then((res) =>  res.json())
// .then((data) => console.log(data))
// .catch((err) => {
//     console.log(err);
//   })


fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
      category: 'stationary'
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  })




// from callback hell chapter here done with fetch 

// fetch('https://dummyjson.com/users')
// .then((res) =>  res.json())
// .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
// .then((res) =>  res.json())
// .then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
// .then((res) =>  res.json())
// .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
// .then((res) =>  res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

  

