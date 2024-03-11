import React,{ Component, useState} from 'react';


const Header = () =>{
    const [text,settext] = useState("");

    let inputChange= (event)=> {
        settext(event.target.value)    
        {/*this.setState({userInput:event.target.value?event.target.value:'User text Here'})*/}
    }
    return(
        <>
            <div>
                <center>
                    <h1> Music Store</h1>
                    <center>
                        <input placeholder="PLEASE ENTER USER SEARCH"
                        onChange={inputChange}/>
                    </center>
                    <p>{text}</p>
                </center>
                <hr/>
            </div>
            </>
        );
};

    
export default Header;