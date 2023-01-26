import React,{Component} from 'react'

class TOD extends Component {
  render(){
    console.log('tod.js 렌더링 완료')
    var lists = []
    var i = 0
    var data = this.props.data
    while( i < data.length ){
      lists.push(
        <li key={data[i].id}><a href={data[i].id}>{data[i].title}</a></li>
      ) 
      i = i + 1;
  }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
  }

  export default TOD;