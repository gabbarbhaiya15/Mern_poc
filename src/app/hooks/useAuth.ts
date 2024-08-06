import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useAuth = () => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.user.token);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);
};

export default useAuth;
