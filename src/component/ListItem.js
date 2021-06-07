import React from 'react';
const done="done"
const undone="undone"
export default class ListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item,Onclick,index}=this.props;
        return(
            <li key={index} className={item.status===done?"text":""} onClick={Onclick}>{item.name}</li>
        )
    }
}