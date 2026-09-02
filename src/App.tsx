
import { Suspense } from 'react'
import './App.css'
// import Cart from './Cart'
// import Counter from './Counter'
// import Batter from './Batter'
import Users from './Users'
import Posts from './Posts'
import Todos from './Todos'




const usersDataPromise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data
 }

const postDataPromise = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return data
}




function App() {
//   // const handleClick = (id) =>{
//   //   alert('buying item'+ id)
//   // }
  return (
    <>

    <Todos></Todos>






    <Suspense fallback={<p>plaese wait guy</p>} >
      <Users usersDataPromise={usersDataPromise()}></Users>
    </Suspense>
    

    <Suspense fallback ={<p>fucking bor</p>} >
     <Posts Pos={postDataPromise()} ></Posts>
    </Suspense>



    {/* <Counter></Counter>
    <Batter></Batter> */}
    {/* <Cart></Cart> */}

  {/* <button onecilck="handleClick()">Click M</button> */}
  {/* <button onClick ={handleClick} >Click Me 2</button>
  <button onClick={handleClick}>Click me 3</button>
  <button onClick={handleClick}>badhan</button>
  <button onClick={() => handleClick(65)}>Buy this</button>
  */}


      
    </>
  )
}

export default App
