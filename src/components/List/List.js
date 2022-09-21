import React from "react";
import Map from '../Map/Map'
import './styles.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import $ from "jquery";

export default function List() {
    const icon = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAu0lEQVRIie2VQQrCMBBFf9z1Ap7BRV3ZpV7HW3ZV0INUkPYSz80siiZI61gi5kMgTJL/JpOQSEW5CrjyqouXeRcxX6ouxti4ZPpmHyswfkAhNQC4lCiEEGWsccZRFXC24KOkRtI4iY0WO7lklHiFDjZWA4O12mJNbIEXeAqqn/rDN8EAI7CfzNsB99TklL/X5fJ7j3MrtdvlmlvqCmgktZK21lqLVXOMyieRBfjm4N8vAZ8/hPfmUfSnegA2268orRY1KwAAAABJRU5ErkJggg==">'

    var i = 1;

    return (
        <div id="listbody">
            <div id="list">
                <div className="lihead">
                    <h1>Add Destinations To Your List: </h1>
                    <div className="enter">
                    <input id="place" placeholder="Enter Destination..." type="text" name="destination" onKeyDown={entered} onClick={()=>{document.getElementById('place').value=''}}/>
                    <Fab color="primary" id="add" onClick={add} aria-label="add">
                        <AddIcon />
                    </Fab>
                    </div>
                </div>
                <ul id="items"></ul>
                
            </div>
            <Map/>
        </div>
    )

    function add (){
        
        var rad = document.createElement('input')
        rad.setAttribute('type', 'checkbox')
        const place = document.getElementById('place').value
        var item = document.getElementById('items')
        const li = document.createElement('li')
        li.setAttribute('id', 'listitem'+i)   
        li.setAttribute('class', 'listitem')   
        const del = document.createElement('span')
        const data = document.createTextNode(place)

        li.appendChild(rad)
        li.appendChild(data)
        del.innerHTML += icon
        del.setAttribute('class', 'icon')     
        li.appendChild(del)
        item.appendChild(li)
        document.getElementById('place').value = ''
        i = i+1        
    }
    
    function entered(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("add").addEventListener('click', add());
          document.getElementById('place').value = ''
        }
      }

      function Delete(){
        document.getElementById('list').removeChild(document.getElementById('add'))
        alert('go')
      }
}
