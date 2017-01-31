const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <input type='text'></input>
          <input type='password'></input>
          <button type='submit'></button>
        </form>
    )
  }
}
module.exports = RegistrationForm;
// // In a file in the same directory
// // const Tweet = require('./Tweet');
// ReactDOM.render(
//   <RegistrationForm />,
//   document.getElementById('main')
// );
