import * as React from 'react';

export const Search = (props: any) => {
    const { onChange } = props;
    return <input type="search" className="search" placeholder="search" onChange={onChange} />
};

export default Search;