import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <Link href="/">
          <h1>
            <Image
              src="/images/header-logo.png"
              alt="로고"
              width={170}
              height={30}
            />
          </h1>
        </Link>

        <ul className="header-menu">
          <li>
            <Link
              href="/login"
              className="text-md-medium"
            >
              로그인
            </Link>
          </li>
          <li>
            <Link
              href="/sign"
              className="text-md-medium"
            >
              회원가입
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
