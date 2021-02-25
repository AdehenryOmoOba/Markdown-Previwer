const initialState = `
  # Header one
  ## Header two
  >Block Quotes!
  **This is a bolded text**
  - This is a list item one
  - This is a list item two
  - This is a list item three  

  [Link to my random quotes app](https://adehenryomooba.github.io/hello/)
  \`\`\`
const adder = (a, b) => a + b;
      adder(2,3) = 5;
\`\`\`
This is an inline code \`<div></div>\`
![React logo](https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png)
`;

class App extends React.Component {
  state = {
    text: initialState,
  };

  render() {
    const { text } = this.state;
    const handleChange = (e) => {
      this.setState({
        text: e.target.value,
      });
    };

    const markdown = marked(text, { breaks: true });

    return (
      <div className="container">
        <h1 className="text-center p-4">Convert Your Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter Your Markdown Here:</h5>
            <textarea
              id="editor"
              cols="50"
              rows="5"
              value={text}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-6">
            <h5 className="text-center">Result:</h5>
            <div
              className="preview rounded"
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
