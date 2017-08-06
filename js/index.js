class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputText:'',
      outputText:''
    }
    //critical otherwise this is not recognized in the function trying to set
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(ev){
    var typedText = ev.target.value;
    var chcode = typedText.charCodeAt((typedText.length-1))
    this.setState({inputText:typedText});
    this.setState({outputText:performMarking(typedText)});
  }

  render(){
    return(
      <div>
        <textarea onChange={this.updateInput} rows="4" cols="50"></textarea>
        <div id ="markedUp"></div>
      </div>
    )
  }
}

class ConvertedMessage extends React.Component{
  render(){
    return <div>{this.props.userinput}</div>
  }
}

ReactDOM.render(
  <InputBox />,
  document.getElementById('app')
)


//outside function testing()
function performMarking(someparam){
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
var markedArea = document.getElementById("markedUp");
markedArea.innerHTML = marked(someparam);
return marked(someparam)
}
