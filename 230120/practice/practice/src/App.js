import React,{Component} from 'react'
import Content from './Content'
import TOD from './TOD';
// import Subject from './Subject';

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        mode:'read',
        selected_id:2,
        content_mode:'html',
        welcome:{title:'welcome',desc:'Hello,React!!'},
        sayHi:{title:'?!?!?!?',content:'hihi'},
        sayHo:{title:'hoho',content:'hohoho'},
        contents:[
          {id:1,title:'html',content:'HTML'},
          {id:2,title:'css',content:'CSS'},
          {id:3,title:'js',content:'JS'},
        ]
      }
  }
  render(){
    console.log('app.js 렌더링 완료')
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc
    } else if(this.state.mode === 'read'){
    var i
    for(i = 0 ; i < this.state.contents.length ; i++){
      if(this.state.contents[i].id  === this.state.selected_id){
        _title = this.state.contents[i].title;
        _desc = this.state.contents[i].content;
        break;
      }
    }
    };
    
  return (
    <div>
      <header>
        <h1>
          <a href='/' onClick={
          function(e){
            e.preventDefault();
            if(this.state.mode === 'read'){
            this.setState({mode:"welcome"})}
            else{
              this.setState({mode:'read'})
            };
          }.bind(this)
          }>{this.state.sayHi.content}</a>
          </h1>
      </header>
      <TOD data={this.state.contents} onChangePage={function(id){
        console.log(id)
        this.setState(
        {mode:'read',selected_id:Number(id)}
        )
      }.bind(this)}></TOD>
      <Content title={_title} content={_desc}/>
    </div>
  );
  }
}

export default App;
