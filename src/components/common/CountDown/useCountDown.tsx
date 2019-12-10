import React, {
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react';

interface IProps {
  isLoading: boolean;
  btnText: string;
  totalSecond: number;
  smsVerifyReq: (T) => {};
}

interface IOpts {
  url: string;
  data: {
    phone: string;
  }
}

const useCountDown = (initState: IProps) => {
  const timerRef = useRef<number | null>(null);
  const [isLoading, setLoading] = useState(initState.isLoading);
  const [btnText, setBtnText] = useState(initState.btnText);
  const [totalSecond, setTotalSecond] = useState(initState.totalSecond);
  const countRef = useRef(totalSecond);

  const clearAll = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setLoading(false);
    setTotalSecond(initState.totalSecond);
    countRef.current = initState.totalSecond;
  }, []);

  const setTimer = useCallback(() => {
    if (countRef.current <= 0) {
      clearAll();
      return;
    }
    countRef.current = countRef.current - 1;
    setTotalSecond(countRef.current);
    
    const timerId = window.setTimeout(() => {
      setTimer();
    }, 1000);

    if (timerRef.current) {
      timerRef.current = timerId;
    }
  }, []);

  const timerStart = useCallback(() => {
    const opts = {
      phone: '17600667952'
    }
    initState.smsVerifyReq(opts)
    if (isLoading) {
      return;
    }
    countRef.current = totalSecond;
    setLoading(true);
    setTimer();
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, []);

  return {
    timerStart,
    isLoading,
    totalSecond,
    btnText
  }
}

export default useCountDown;
