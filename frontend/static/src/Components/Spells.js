import React, {Component} from 'react';
import '../App.css';

class Spells extends Component {
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
          const char = this.props.all.char
          const spellMenu = this.props.all.spells
          .filter(spell => spell.level <= char.level)
          .map((spell) =>(
            <section onClick={this.props.showInfo} className="spellMenu" key={spell.id}>
          <h5>Name: {spell.name}</h5>
          <p>Element: {spell.element}</p>
          </section>));



          return(
<div>
{spellMenu}
</div>
          )
        }
      }

      export default Spells
