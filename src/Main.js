import React from 'react';
import HornedBeast from './HornedBeast.js'
class Main extends React.Component{
render(){
    return(
    <>
        <HornedBeast
         name = "Rhino"
         img = "placeholder"
         alt = "placeholder"
         title = "placeholder"
         description = "Horned beast from Africa"/>
        <HornedBeast 
        name = "Deer"
        img ="placeholder"
        alt ="placeholder"
        title ="placeholder"
        description = "Horned Beast?"
        />
        <HornedBeast
        name = "Unicorn"
        img ="placeholder"
        alt = "placeholder"
        title = "placeholder"
        description = "Fantasy Horned beast"/>
    </>
    )
}
}

export default Main;