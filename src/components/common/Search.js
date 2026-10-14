import Image from "next/image";

const Search = () => {
  return (
    <div className="search-wrap">
      <h3 className="search-title text-xl-bold">무엇을 체험하고 싶으신가요?</h3>
      <div className="search-inner">
        <Image
          className="search-icon"
          src="/images/icons/icon-search.svg"
          alt="검색 아이콘"
          width={24}
          height={24}
        />
        <input
          className="search-input"
          type="text"
          placeholder="내가 원하는 체험은"
        />
        <button
          className="search-button text-lg-bold"
          type="button"
        >
          검색하기
        </button>
      </div>
    </div>
  );
};
export default Search;
