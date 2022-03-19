import React, { useState } from "react";
import { sendMessage } from './api';


const Message = (props) => {
    const postId = props.postId
    const [content, setContent] = useState('')
    const createMessage = async (event) => {
        event.preventDefault()
        try {
            console.log(postId)
            const messageSubmit = await sendMessage(postId, content)
            console.log(messageSubmit.data)

            if (messageSubmit.success){
                setContent("Your message has been sent!")
            }
            
        } catch {console.error("Something's wrong with the new message!")}   
    }



    return (
        <div>           
            <h3>Send Message</h3>
            <input id="messagecontent"
            type='text'
            required
            value={content}
            onChange={(event) => setContent(event.target.value)}
            
            ></input>
            <button id="message" onClick={(event)=> createMessage(event)}>Send</button>
        </div>       
    )
}

export default Message;