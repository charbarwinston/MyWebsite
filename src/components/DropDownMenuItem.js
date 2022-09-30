
const DropDownMenuItem = ({item}) => {
  return <a className="DropDownMenu__item" href={item.href}>{item.title}</a>
}

export default DropDownMenuItem