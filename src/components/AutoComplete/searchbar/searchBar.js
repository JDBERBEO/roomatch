import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import Places from "../places/widget";

const searchClient = algoliasearch(
  "42SLU0EWF4",
  "59a93d399b8f7aae245ecd864ad09d92"
);

const SearchBar = () => (
  <InstantSearch indexName="airports" searchClient={searchClient}>
    <Places
      defaultRefinement={{
        lat: 37.7793,
        lng: -122.419,
      }}
    />
  </InstantSearch>
);

export default SearchBar;
