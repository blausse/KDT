import React,{Component} from 'react'

class ClassType extends Component {
  render(){  
  return (
      <nav>
        <ul>
          <li><a href="1">{this.props.title1}</a></li>
          <li><a href="2">{this.props.title2}</a></li>
          <li><a href="3">{this.props.title3}</a></li>
        </ul>
      </nav>
    );
  }
}

  export default ClassType;