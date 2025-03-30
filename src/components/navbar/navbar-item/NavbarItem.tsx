import './NavbarItem.scss';


interface NavbarItemProps {
    title: string
}

export default function NavbarItem({title}: NavbarItemProps) {
    return (
        <div className="navbar-item-container">{title}</div>
    );
}