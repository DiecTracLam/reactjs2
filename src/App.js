import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './component/ListItem'
import Form from './component/Form'
const done="done"
const undone="undone"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // information:{
      //   name:"Lam",
      //   age:20,
      //   job:"mobile engineer"
      // },
      // uncore:["item1","item2","item3","item4","item5"]  ,
      // done:[] 
      title:"",
      undone:[
        {
          name:"Item 1",
          status:undone
        },
        {
          name:"Item 2",
          status:undone
        },
        {
          name:"Item 3",
          status:undone
        },
        {
          name:"Item 4",
          status:undone
        },
        {
          name:"Item 5",
          status:undone
        }
      ]   
    }
    this.onKeyup=this.onKeyup.bind(this);
  }


  // changename=()=>{
  //   let newOb={
  //     name:"new Name"
  //   }
  //   console.log(newOb.name)
  //   const Ob={...this.state.information,...newOb};
  //   // const newObject=Object.assign(this.state.information,newOb);
  //   console.log(Ob)
  //   this.setState({
  //     information:Ob
  //   })
  // }
  // changeItem=(item,index,name)=>{
  //   return ()=>{
  //     if(name=="uncore"){
  //       console.log(index);
  //       this.state.done.splice(index,0,item);
  //       this.setState({
  //         uncore:[
  //           ...this.state.uncore.slice(0,index),
  //           ...this.state.uncore.slice(index+1)
  //         ]
  //       })
  //     }
  //     else if(name=="done"){
  //       console.log(index);
  //       this.state.uncore.splice(index,0,item);
  //       this.setState({
  //         done:[
  //           ...this.state.done.slice(0,index),
  //           ...this.state.done.slice(index+1)
  //         ]
  //     })
  //     }
  //   }
  // }

  done=(element,index)=>{
    return ()=>{
      if(element.status===undone){
        this.setState({
          undone:[
            ...this.state.undone.slice(0,index),
            {
              ...element,
              status:done
            },
            ...this.state.undone.slice(index+1)
          ]
        })
      }
      else if(element.status===done){
        this.setState({
          undone:[
            ...this.state.undone.slice(0,index),
            {
              ...element,
              status:undone
            },
            ...this.state.undone.slice(index+1)
          ]
        })
      }
    }
  }
  onKeyup(e){
    this.setState({
      title:e.target.value
    })
  }
  add=()=>{
    return ()=>{
      let newItem=[{
        name:this.state.title,
        status:undone
      }]
      console.log(...newItem);
      let newundone=[...this.state.undone,...newItem];
      console.log(newundone)
      this.setState({
        undone:newundone
      })
    }
  }
  render(){
    return (
      <div className="App">
          <input onKeyUp={this.onKeyup} type='text'></input>
          <button onClick={this.add()}>ADD</button> 
          <Form OnClickB={this.done} items={this.state.undone}/>

          {/* <ul className="frame"> */}
            {/* {this.state.uncore.map((element,index)=> <li onClick={this.changeItem(element,index,"uncore")}>{element}</li>)} */}
              {/* {this.state.undone.map((element,index)=> <ListItem key={index} item={element} Onclick={this.done(element,index)}/>)} */}
          {/* </ul> */}
          {/* <ul className="frame">
            {this.state.done.map((element,index)=> <li onClick={this.changeItem(element,index,"done")}>{element}</li>)}
          </ul> */}
        {/* <button onClick={this.changename}>Change information</button>
            <p>{this.state.information.name}</p>
            <p>{this.state.information.age}</p>
            <p>{this.state.information.job}</p> */}
      </div>
    );
  }
}

export default App;
