const Helmet = (props) => {
  document.title = "Shop Wave - " + props.title;
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet