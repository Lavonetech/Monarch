import React, { useEffect, useState } from "react";
import "./side-bar.scss";
import { BASE_URL, Instance } from "../../utility/AxiosInstance";
import { useStore } from "../../utility/store";

const SideBar = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await Instance.get('/clothe/parts')
        setItems(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <nav id="side-bar">
      <div className="p-name-btn">Product Name</div>

      <ul className="btn-container">
        {
          items?.map((item) => (
            <Item key={item._id} name={item.name} image={item.thumbnail} _id={item._id} subParts={item.subParts} />
          ))
        }
      </ul>
    </nav>
  );
};

const Item = ({name, image, _id, subParts}) => {
  const setPart = useStore((state) => state.setPart);
  const part = useStore((state) => state.part);

  const selectPart = (id, subParts, name) => {
    setPart({ id, subParts, name });
  }
  return (
    <li className={part.id === _id ? "single-item active": "single-item"} onClick={() => selectPart(_id, subParts, name)} >
      <img src={`${BASE_URL}/clothe/image/${image}`} alt="icon" />
      <span className="item-name">{name}</span>
    </li>
  );
};

export default SideBar;
