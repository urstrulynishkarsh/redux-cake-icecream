import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


function CakeContainer(props) {
  return (
    <div>
        <h2>No Of Cakes -{props.noOfCake}</h2>
        <button onClick={props.buyCake}>Buy Now</button>
    </div>
  )
}

const mapStateToProps=state=>{
  return {
    noOfCake:state.noOfCake
  }
}

const mapDispatchToProps={
    buyCake
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)