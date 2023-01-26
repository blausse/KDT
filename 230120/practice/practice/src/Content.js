function Content(props) {
  console.log('content.js 렌더링 완료')
    return (
      <article>
      <h2>{props.title}</h2>
      {props.content}
  </article>
    );
  }

  export default Content;