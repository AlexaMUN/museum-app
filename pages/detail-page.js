function submitComment() {
    var inputField = document.getElementById("name");
    var name = inputField.value;
    var textArea = document.getElementById("msg");
    var msg = textArea.value;

    console.log("checksubmitfunction", name, msg)

    if(doesNotPassAllValidations(name, msg)){
      return null
    }

    

    var commentSection = document.getElementById("comments");
    var comment = document.createElement("section");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
  
    name = capitalize(name);
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
  
    
    commentSection.appendChild(comment);
  
    inputField.value = null;
    textArea.value = null;
  }

  function doesNotPassAllValidations(name,msg){
      console.log("checkvalidfunction", name, msg)
      if (!name) {
        alert('Please fill in your name')
        return true
    }

    if (!msg) {
      alert('Please write a message')
      return true;
    }
  
    if(msg.length > 280) {
      alert('Your message is too long')
      return true;
    }
} 

function capitalize(s){
    var result = s.charAt(0).toUpperCase() + s.slice(1);

    return result;
}

