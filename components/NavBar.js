import Link from "next/link";

function NavBar() {
  return (
    <>
        <nav>
          <div>
            <Link href="/">
              <a>Index</a>
            </Link>
              <br/>
            <Link href="/about">
                <a>About</a>
            </Link>
          </div>
            <style jsx>{`
                a {
                    background-color: #f5f5f5;
                    text-decoration: none;
                    color: #333;
                }
            `}</style>
        </nav>
    </>
  );
}

export default NavBar;
