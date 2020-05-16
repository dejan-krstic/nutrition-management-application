import { useHistory } from "react-router-dom";
import { useCallback } from "react";

const navigationHook = () => {
  const history = useHistory();
  const historyPush = useCallback((path, state) => {
    history.push(path, state);
  }, []);
  return { historyPush };
};

export default navigationHook;
