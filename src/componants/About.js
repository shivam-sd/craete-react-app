import React , {useState} from 'react'

export default function About() {
    
  const [mystyle , setmystyle] = useState({
    color:"black",
    backgroundColor:"",
    padding:"20px"
  })

  let btn = {
    marginLeft:"40%",
    marginTop:"10px"
  }

  const [btntext , setbtntext] = useState("Enable Dark Mode")

  const toggle = () => {
    if(mystyle.color === "black"){
      setmystyle({
        color: "white",
        backgroundColor:"black",
        padding:"20px"
      })
      setbtntext("Enable White Mode");
    }else{
      setmystyle({
        color:"black",
        backgroundColor:"white",
        padding:"20px"
      })
      setbtntext("Enable Dark Mode");
    }
  }
    
  return (
      <div>
      <div className='container' style={mystyle}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni non quo assumenda porro. Beatae velit expedita inventore aspernatur doloremque tempora eveniet, a voluptate, asperiores nostrum, sint doloribus non debitis.
       Rerum dolorum cum molestias ipsam. Dignissimos deleniti quidem nulla. Porro, iure eveniet? Sequi illo animi nihil accusamus architecto expedita! Blanditiis porro ex exercitationem quidem facilis error sapiente vitae consequuntur suscipit?
       Corporis sit velit, vel quisquam aperiam laboriosam soluta dolor est cumque eligendi necessitatibus non modi. Molestiae libero consequuntur at dicta enim, ut fuga vero quidem dolorem odio inventore! Quidem, deleniti!
       Minus voluptates saepe cupiditate voluptatem provident. Assumenda quam exercitationem officia accusantium repellat nulla quis quaerat velit impedit, itaque corrupti quidem dolorem rem. Ea quos dolores aspernatur pariatur necessitatibus est nisi.
       Cum voluptatibus alias perspiciatis expedita voluptatum odit assumenda aut quae amet exercitationem rem ex, quia illum porro nisi eligendi! Voluptate sint cupiditate rerum odit omnis. Non nihil expedita minima error.
    </div>
    <button onClick={toggle} style={btn}>{btntext}</button>
    </div> 
  )
}
