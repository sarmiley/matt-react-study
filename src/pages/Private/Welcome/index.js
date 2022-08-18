import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate();

  function back (e) {
    return navigate('/home', {replace: true});
  }

  return (
    <>
      <h1>就決定是你了！</h1>
      <button onClick={back}>返回</button>
    </>
  );
}

export default Welcome;
