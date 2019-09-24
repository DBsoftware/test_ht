import React from "react"

class Form extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.data)
      let {names, lastnames, phone} = JSON.parse(this.props.data)
      this.state = {names, lastnames, phone};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      let {id} = JSON.parse(this.props.data)
      event.preventDefault();
      let method = id ? 'PUT' : 'POST'
      let url = id ? `/records/${id}` : '/records'
      console.log('url',{record: {...this.state}})
      $.ajax({
        url,
        method,
        headers: {
          'Content-Type': 'application/json'
         },
        data: JSON.stringify({record: {...this.state}}),
        success(response) {
            console.log('item created or edited', response)
          }
    });
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombres:
            <input type="text"  name='names' value={this.state.names || ''} onChange={this.handleChange} />
          </label>
          <label>
            Apellidos:
            <input type="text"  name='lastnames' value={this.state.lastnames || ''} onChange={this.handleChange} />
          </label>
          <label>
            Telefono:
            <input type="text"  name='phone' value={this.state.phone || ''} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"  />
        </form>
      );
    }
  }

  export default Form