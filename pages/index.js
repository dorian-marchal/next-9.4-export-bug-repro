//  ----------------- Inline export function result: FAILS. --------------------
const foo = (query) => query;

export const FOO = foo("query");

const MyPage = () => {
  return "Hello World!";
};

const getServerSideProps = async () => {
  return { props: {} };
};

export default MyPage;
export { getServerSideProps };





// //  ---------- Inline export without `getServerSideProps`: WORKS.---------------
// const foo = (query) => query;

// export const FOO = foo("query");

// const MyPage = () => {
//   return "Hello World!";
// };

// export default MyPage;





// //  ---------------- Inline exports a simple string: WORKS. --------------------
// export const FOO = "query";

// const MyPage = () => {
//   return "Hello World!";
// };

// const getServerSideProps = async () => {
//   return { props: {} };
// };

// export default MyPage;
// export { getServerSideProps };





// //  -------------------------- Export list: WORKS. -----------------------------
// const foo = (query) => query;

// const FOO = foo("query");

// const MyPage = () => {
//   return "Hello World!";
// };

// const getServerSideProps = async () => {
//   return { props: {} };
// };

// export default MyPage;
// export { getServerSideProps, FOO };
