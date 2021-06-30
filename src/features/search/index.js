import Header from "./header";
import {useQueryParam} from "../../shared/hooks";

function SearchPage() {
  const queryParameters = useQueryParam();

  return (
    <Header />
  );
}

export default SearchPage;
