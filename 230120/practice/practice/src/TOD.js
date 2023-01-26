import React,{Component} from 'react'

class TOD extends Component {
  render(){
    console.log('tod.js 렌더링 완료')
    var lists = []
    var i = 0
    var data = this.props.data
    for(i = 0; i < 3 ;i++){
      lists.push(
        <li key={data[i].id} ><a href='/'data-id={data[i].id} onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>{data[i].title}</a></li>
      ) 
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