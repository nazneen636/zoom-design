import add1 from "../../assets/1.png";
import add2 from "../../assets/2.png";
import add3 from "../../assets/3.png";
import add4 from "../../assets/4.png";
import add5 from "../../assets/5.png";
import add6 from "../../assets/6.png";
import add7 from "../../assets/7.png";

const addItem = [
  {
    id: 1,
    img: add1,
  },
  {
    id: 2,
    img: add2,
  },
  {
    id: 3,
    img: add3,
  },
  {
    id: 4,
    img: add4,
  },
  {
    id: 5,
    img: add5,
  },
  {
    id: 6,
    img: add6,
  },
  {
    id: 7,
    img: add7,
  },
];
const Add = () => {
  return (
    <div className="py-8 bg-[#F0F0F0] mb-[30px]">
      <div className="flex items-center justify-center gap-x-[74px] w-full">
        {addItem?.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={item.img}
            className="object-fit-cover cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Add;
