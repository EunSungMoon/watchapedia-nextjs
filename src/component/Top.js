import { GlobalContainer, Color } from "../styles/global-styles";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (
    <>
      <GlobalContainer />
      <Header__header>
        <nav>
          <Header__ul>
            <Header__logo>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={151}
                height={29}
              ></Image>
            </Header__logo>
            <Header__li>
              <Link href="/movie" as="/movie">
                <Header__a >영화</Header__a>
              </Link>
            </Header__li>
            <Header__li>
              <Link href="/tv" as="/tv">
                <Header__a>TV</Header__a>
              </Link>
            </Header__li>
          </Header__ul>
        </nav>
      </Header__header>
    </>
  );
}

const Header__header = styled.header`
  height: 62px;
`;

const Header__ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px 0;
  display: flex;
  align-items: center;
`;

const Header__logo = styled.li`
  margin-right: 15px;
`;

const Header__li = styled.li`
  margin-left: 24px;
`;

const Header__a= styled.a`
  text-decoration:none;
  color:${Color.darkGray};
  cursor:default
`