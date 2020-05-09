import { useHistory } from "react-router-dom";
import { useCallback } from "react";

const navigationHook = () => {
  const history = useHistory();
  const historyPush = useCallback((path) => {
    history.push(path);
  }, []);
  return { historyPush };
};

export default navigationHook;
