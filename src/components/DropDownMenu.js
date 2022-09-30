import MenuItem from "./DropDownMenuItem"

const DropDownMenu = ({list}) => {
  return (
    <div className="DropDown">
        <button className="DropButton"> help
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="DropDownMenu">
            {list.map((item) => { return <MenuItem key={item.index} item={item}></MenuItem> })}      
        </div>
    </div>
  )
}


export default DropDownMenu