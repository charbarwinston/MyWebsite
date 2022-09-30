import HeaderLink from "./HeaderLink"

let links = [
    {
        index: '1',
        href: '#home',
        title: 'Home'
    },
    {
        index: '2',
        href: '#rortfolio',
        title: 'Portfolio'
    },
    {
        index: '3',
        href: '#resume',
        title: 'Resume'
    },
    {
        index: '4',
        href: '#random',
        title: 'Random'
    },
]

const Header = () => {
  return (
    <div className="header">
        {
            links.map((link) => {
                return <HeaderLink key={link.index} link={link}></HeaderLink>
            })
        }
    </div>
  )
}
export default Header