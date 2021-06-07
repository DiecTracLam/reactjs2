import React from 'react'

export default class From extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {items,OnClickB}=this.props
        return(
                <ul className="frame">
                    {items.map((element,index)=><li className={element.status=="done"?"text":""} onClick={OnClickB(element,index)}>{element.name}</li>)}
                </ul>
        )
    }
}