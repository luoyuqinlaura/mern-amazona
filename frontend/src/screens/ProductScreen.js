import { useParams } from 'react-router-dom';

function ProductScreen() {
  //get the slug in the url and show it in the screen
  //so we need to use a hook, which is useparams from react router dom
  const params = useParams();
  const { slug } = params;
  return <div>{slug}</div>;
}

export default ProductScreen;
