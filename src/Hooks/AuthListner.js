import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

export default function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return user
    ? {
        user: {
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      }
    : { user };
}
