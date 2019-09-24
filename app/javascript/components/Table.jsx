import React from "react"
import PropTypes from "prop-types"
class Table extends React.Component {

  handleDelete = (id) => {
    $.ajax({
        url: `records/${id}`,
        type: 'DELETE',
        success(response) {
            console.log('successfully removed item')
        }
    });
  }
  renderdata = (data) => {
    return (
      <React.Fragment>
      {JSON.parse(data).map(({names, lastnames, phone, id}) => (
        <tr key={phone}>
        <td>{names}</td>
        <td>{lastnames}</td>
        <td>{phone}</td>
        <td> <a href={`records/${id}`}>Ver</a> </td>
        <td><a href={`records/${id}/edit`}>Editar</a> </td>
        <td><button onClick={() => this.handleDelete(id)} >Borrar</button></td>
      </tr>
      ))}
      </React.Fragment>
    )
  } 

  render () {
    return (
      <React.Fragment>
          <table>
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th colSpan="3"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderdata(this.props.data)}
            </tbody> 
          </table>
      </React.Fragment>
    );
  }
}

Table.propTypes = {
  greeting: PropTypes.string
};
export default Table
