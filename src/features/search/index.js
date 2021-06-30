import {useQueryParam} from "../../shared/hooks";

function SearchPage() {
  const queryParameters = useQueryParam();

  return (<p>Search for {queryParameters.get('query')} {queryParameters.get('type')}</p>);
}

export default SearchPage;
