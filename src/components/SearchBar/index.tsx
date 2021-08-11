import { SearchBarInput } from './style';

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SearchBar = (props: SearchBarProps) => {
    const { onChange } = props;
    return (
        <SearchBarInput placeholder="Pesquise pelo titulo" onChange={onChange} />
    );
}