class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputText:''
    }
    //critical otherwise this is not recognized in the function trying to set
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(ev){
    var typedText = ev.target.value;
    this.setState({inputText:typedText});
  }
  render(){
    return(
      <div>
        <ConvertedMessage userinput={this.state.inputText} />
        <textarea onChange={this.updateInput} rows="4" cols="50">
        </textarea>
      </div>
    )
  }
}

class ConvertedMessage extends React.Component{
  render(){
    return <h1>{this.props.userinput}</h1>
  }
}

ReactDOM.render(
  <InputBox />,
  document.getElementById('app')
)
