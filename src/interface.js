document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('button').addEventListener('click', () => {
    const notes = new Note();

  })

    const notes = new Note();
   unorderlist.push(text)
  }   

});

//------------------------
/**
document.addEventListener("DOMContentLoaded", () => {
});
 * it creates new notes inputted by users

function createNote() { 
                                                      // padded = using DOM to select ID "pad" from textarea. 
                                                      // .value takes the value from the text area.
  let texted = document.getElementById("textarea").value;
                                                      // lists = using DOM to select ID "ya" from Unodered List
  let lists = document.getElementById("unorderedlist");
                                                      // li = creating element "li"
  let li = document.createElement("li");
                                                      // appendChild adds a child underneath - creating a text to "li"
  li.appendChild(document.createTextNode(texted));
                                                      // lists.push(li)
  lists.appendChild(li);
}
// console.log(createNote());

 */