import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return { currentUser };
};

export default useAuth;
