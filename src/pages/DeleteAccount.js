import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DeleteAccount = (account) => {
  const [account, setaccount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  const requestId = params.id;

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      console.log(requestId);
      try {
        const response = await fetch (`http://localhost:3000/account/userDelete/` + requestId,{
        method: 'DELETE',
        signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }else{
          navigate(`/viewusers`);
        }
        
        setaccount(data.users);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
    </div>
  );
};

export default DeleteAccount;