import React, {Component} from 'react';
import '../App.css';

class Magic extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
        this.chooseSpell = this.chooseSpell.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(event) {
        this.setState({value: event.target.value});
      }
chooseSpell(){
  alert('spell choice')
}
handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}


        render(){
          // const spelllist = this.props.all.spells;
          // const test = <select value={this.state.value} onChange={this.handleChange}>
          //    {spelllist.map(spell => {
          //        <option value={spell}> {spell} </option>
          //    })}
          // </select>
          //
          //
          // const spellChoice = <div><button onClick={this.chooseSpell}>SpellChoice</button></div>
          //
          const spellMenu = this.props.all.spells
          .map((spell) =>(
            <section key={spell.id}>
          <h4>Name: {spell.name}</h4>
          <p>Element: {spell.element}</p>
          </section>));

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your spell:
          <select value={this.state.value} onChange={this.handleChange}>
          {this.props.all.spells
            .map((spell) => (
            <option value={spell.name}>{spell.name}</option>))}
          </select>
        </label>
        <input type="submit" value="Cast!" />
      </form>
  );
}
}
export default Magic;
