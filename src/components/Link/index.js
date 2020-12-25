import './styles.scss';

function Link (props) {
  console.log (props)
  return (
    <>
      <div className="link">
        <a className="link__text" href={props.url}>{props.text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 20" class="SVGWrapper-c62y5b-0 ilbcfK" color="currentColor" role="img"><title>Arrow Right</title><g><path d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></g></svg></a>
      </div>
    </>
  );
}

export default Link;
