import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
function CommunityPostPage() {
    const params=useParams()
    const navigate=useNavigate()
    const username=params.comID
    // console.log(username)

    // const [heading,setHeading]=useState()
    const [post ,setPost]=useState({
        heading:'',
        post:'',
        tags:''
    })
    const changeheading=(e)=>{
        setPost({...post,heading:e.target.value})
    }
    const changepost=(e)=>{
        setPost({...post,post:e.target.value})
    }
    const changetag=(e)=>{
        setPost({...post,tags:e.target.value})
    }
    const submit=async (e)=>{
        e.preventDefault()
        console.log(post)
        const res= await fetch(
            `https://hacked-e6f56-default-rtdb.firebaseio.com/Community/${username}/content/${post.heading}.json`,{
            method:"PUT",
            headers:{
                'Content-Type':"application/json",
            },
            body:
                JSON.stringify({
                    heading:post.heading,
                    post:post.post,
                    tags:post.tags
                })
            
            }
            
                );
        navigate(-1)
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Heading</Form.Label>
        <Form.Control type="text" placeholder="Heading" value={post.heading} onChange={changeheading}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post</Form.Label>
        <Form.Control as="textarea" rows={7} column={7} value={post.post}  onChange={changepost}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>#Tags</Form.Label>
        <Form.Control type="text" placeholder="Tags" value={post.tags} onChange={changetag}/>
      </Form.Group>
      <button onClick={submit}>POST</button>
      <button>Cancle</button>
    </Form>
  );
}

export default CommunityPostPage;