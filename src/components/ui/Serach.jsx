import { SearchInput } from "./ui.style";

export default function Search({ search, handleSearchChange }) {
  return (
    <SearchInput
      type="text"
      placeholder="Search..."
      value={search}
      onChange={handleSearchChange}
    />
  );
}
