
import './App.css';
import { useGetAllPostQuery , useGetPostByIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} from './services/post';


function App() {
  // const responseInfo = useGetAllPostQuery()
    //  const responseInfo = useGetPostByIdQuery(4)
    // const responseInfo = useGetPostByLimitQuery(7)
    // const [deletePost,responseInfo] = useDeletePostMutation()
    // const [createPost , responseInfo] = useCreatePostMutation()
    const [updatePost , responseInfo] = useUpdatePostMutation()


    const updatePostData = {
      id:1,
      title:'THIS IS UPDATE TITLE',
      body:'THIS IS UPDATE BODY',
      userId:1,
    }

  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if(responseInfo.isLoading){
    return <div>
      .....loading
    </div>
  }
  if(responseInfo.isError){
    return <div>
      An Error Occured {responseInfo.error.error}
    </div>
  }
  return (
    //Get All Data
    // <div className="App">
    //  <h1>RTK-QUERY(GET ALL DATA)</h1>
    //  {
    //   responseInfo.data.map((post,index)=>
    //   <div key={index}>
    //     <h3>{post.id}</h3>
    //    <h2>{post.title}</h2>
    //    <p>{post.body}</p>
    //    </div>
    //   )
    //  }
     
    // </div>

    //Get Single Data
    // <div className='App'>
    //  <h1>RTK-QUERY(GET SINGLE DATA)</h1>
    //  <h2>{responseInfo.data.id}{responseInfo.data.title}</h2>
    //  <p>{responseInfo.data.body}</p>
    // </div>

    //Get POST BY LIMIT
    // <div className='App'>
    //   <h1>RTK-QUERY(GET POST BY LIMIT)</h1>
    //   {
    //   responseInfo.data.map((post,index)=>
    //   <div key={index}>
    //     <h3>{post.id}</h3>
    //    <h2>{post.title}</h2>
    //    <p>{post.body}</p>
    //    </div>
    //   )
    //  }
    // </div>

    //DELETE post
    //  <div className='App'>
    //   <h1>RTK-QUERY(deletePost)</h1>
    //   <button onClick={()=>{deletePost(3)}}>Delete Post</button>

    //  </div>

    // create post
    //  <div className='App'>
    //   <h1>RTK-QUERY(createPost)</h1>
    //   <button onClick={()=>{createPost()}}>Create Post</button>

    //  </div>
    //update post
    <div className='App'>
      <h1>Update Post</h1>
      <button onClick={()=>{updatePost(updatePostData)}}>update post</button>
    </div>
  );
}

export default App;
