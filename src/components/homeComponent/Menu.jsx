import { Link } from "react-router";

const menuItem = [
  { id: 1, name: "logo & branding", path: "/" },
  { id: 2, name: "book & magazine", path: "/" },
  { id: 3, name: "art & illustration", path: "/" },
  { id: 4, name: "web & app design", path: "/" },
  { id: 5, name: "apparel", path: "/" },
  { id: 6, name: "canva template", path: "/" },
  { id: 7, name: "visual design", path: "/" },
  { id: 8, name: "social media", path: "/" },
  { id: 9, name: "packaging & labels", path: "/" },
  { id: 10, name: "print design", path: "/" },
];
const Menu = () => {
  return (
    <div className="container mb-[52px]!">
      <ul className="flex justify-between">
        {menuItem?.map((item) => (
          <Link key={item.id} to={item.path} className="text-lg text-[#A1A6BF]">
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
