import { useState } from "react";

export default function Header() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="header">
        <h1>🎃 Todo</h1>
        <button onClick={() => setModal(!modal)}>정보</button>
      </div>

      <div className={modal ? "modal show" : "modal"}>
        <div className="inner">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos culpa nesciunt quidem voluptate enim accusantium magni
            distinctio mollitia ipsum fugiat, laudantium eius voluptas molestiae
            temporibus unde voluptates maxime? Odio, accusamus?
          </p>
          <button onClick={() => setModal(!modal)}>닫기</button>
        </div>
      </div>
    </>
  );
}
