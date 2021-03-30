import React, {Component} from 'react';
import '../App.css';

class Magic extends Component {
  constructor (props){
        super(props);
        this.state = {
          jobs: [],

        }
        this.chooseSpell = this.chooseSpell.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSpellChange = this.handleSpellChange.bind(this);
        this.handleSpellSubmit = this.handleSpellSubmit.bind(this);
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

handleSpellChange(event) {
  const jobs = this.state.jobs
  this.setState({jobChoice: jobs[event.target.value]});
}
handleSpellSubmit(event) {
  event.preventDefault();
}

// componentDidMount(){
//
//   fetch("/jobs/")
// .then(response => response.json())
// .then(response => this.setState({jobs: response}))
// }




        render(){

          const jobs = this.state.jobs;
          const jobChoice =
            <div className="spell-dropdown" value={this.state.jobs}>
            <label>
              Pick Your Class:
              <select onChange={this.handleSpellChange}>
              <option value={null}>Choose</option>
              {jobs
                .map((job, index) => (
                <option key={job.id} value={index}>{job.name}</option>))}
              </select>
            </label>
            <input className="saveButton" type="submit" value="Choose" />
          </div>








          const spellMenu = this.props.all.spells
          .map((spell) =>(
            <section key={spell.id}>
          <h4>Name: {spell.name}</h4>
          <p>Element: {spell.element}</p>
          </section>));

    return (
      <div>
      {jobChoice}
      </div>
  );
}
}
export default Magic;
