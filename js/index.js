//no need for import as I am not using the production package
class InputBox extends React.Component {
  //standard always include
  constructor(props) {
    super(props);
    //I don't really need state for this project but good practice
    this.state={
      inputText:'',
      outputText:''
    }
    //critical otherwise this is not recognized in the function trying to set
    this.updateInput = this.updateInput.bind(this);
  }
  //updates on change of text area
  updateInput(ev){
    //note this captures everything in text box not just change
    var typedText = ev.target.value;
    //just incase I need the character change
    var chcode = typedText.charCodeAt((typedText.length-1))
    //set state will need for future but not really for this project
    //as performMarking directly injects marking into div
    this.setState({inputText:typedText});
    this.setState({outputText:performMarking(typedText)});
  }
  //standard always include render function
  render(){
    return(
      //returns just the one input area div
      <div>
        <textarea className = "textarea" onChange={this.updateInput}></textarea>
      </div>
    )
  }
}

//standard must always include
ReactDOM.render(
  <InputBox />,
  document.getElementById('app')
);


//outside function performMarking() does the mardown on inputText
function performMarking(someparam){
    //options from documentation of library
    marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
  //inject marking
  var markedArea = document.getElementById("markedUp");
  markedArea.innerHTML = marked(someparam);
  return marked(someparam);
}
