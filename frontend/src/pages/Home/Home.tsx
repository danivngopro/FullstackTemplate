import i18next from "i18next";

function Home() {
  console.log(`${i18next.t("common.Home")}`);

  return (
    <>
      <h1>{i18next.t("common.Home")}</h1>
    </>
  );
}

export default Home;