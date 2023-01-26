import React,{Component} from 'react'
import Content from './Content'
// import TOD from './TOD';
// import Subject from './Subject';

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        lists:[],
        mode:'read',
        content_mode:'html',
        welcome:{title:'welcome',desc:'Hello,React!!'},
        sayHi:{title:'?!?!?!?',content:'hihi'},
        sayHo:{title:'hoho',content:'hohoho'},
        contents:[
          {id:"1",title:'html',content:'HTML'},
          {id:"2",title:'css',content:'CSS'},
          {id:"3",title:'js',content:'JS'},
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
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].content
    };
    if(this.state.content_mode === 'html'){
    _title = this.state.contents[0].title;
    _desc = this.state.contents[0].content
    } else if(this.state.content_mode === 'css'){
      _title = this.state.contents[1].title;
    _desc = this.state.contents[1].content
    }else if(this.state.content_content_mode === 'js'){
      _title = this.state.contents[2].title;
    _desc = this.state.contents[2].content
    };
    // var lists = []
    var i = 0
    var data = this.state.contents
    for(i = 0; i < 3 ;i++){
      this.state.lists.push(
        <li key={data[i].id}><a href={data[i].id}>{data[i].title}</a></li>
      ) 
  }
  return (
    <div>
      <header>
        <h1><a href='/' onClick={
          function(e){
            e.preventDefault();
            if(this.state.mode === 'read'){
            this.setState({mode:"welcome"})}
            else{
              this.setState({mode:"read"})
            };
          }.bind(this)
          }>{this.state.sayHi.content}</a></h1>
      </header>
      <nav>
        <ul>
          {this.state.lists}
        </ul>
      </nav>
      <Content title={_title} content={_desc}/>
    </div>
  );
    
  }
}

export default App;
