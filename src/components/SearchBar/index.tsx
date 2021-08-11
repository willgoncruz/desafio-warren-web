
interface SearchBarProps {
    term: string
}

const SearchBar = (props: SearchBarProps) => {
    const { term } = props;
    return (
        <div>{term}</div>
    );
}

export default SearchBar;