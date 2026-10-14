import Input from "@/components/common/Input";
import Search from "@/components/common/Search";

export default function Main() {
  return (
    <div className="main-wrap">
      <h1>글로벌 노마드</h1>
      <Input
        type="text"
        label="이름"
        placeholder="이름을 입력하세요"
        pwd={false}
      />
      <Search />
    </div>
  );
}
