import { onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../Firebase";
import { setData } from "../store/allFood";

export default function GetData() {
  const dispatch = useDispatch();
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    const subScribe = () => {
      const snapShoot = (snapshot) => {
        const res = snapshot.val();
        if (!res) {
          dispatch(setData());
        } else {
          setDataProducts([...Object.values(res.foods)]);
        }
      };
      onValue(ref(db), snapShoot);
    };
    subScribe();
  }, [dispatch]);

  return [...dataProducts];
}
