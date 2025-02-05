import{useState}from "react";
//state ,components

//jsx


function App() {
  const[count , setCount]= useState(0);
 

  function onClickHandler(){
    setCount(count+1);
  }
  
  return(
      <div>
        <CustomButton count={count}setCount={setCount}></CustomButton>
      </div>

  )
}
function CustomButton(props){
  function onClickHandler(){
    props.setCount(count+1);
  }
  return(
    <button>Counter(props.count)</button>
  )
}

export default App
