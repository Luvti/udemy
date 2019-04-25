//synchronous
const second1 = () => {
  console.log("Second");
};
const first1 = () => {
  console.log("Hey there");
  second1();
  console.log("The end");
};
first1();

//async
const second2 = () => {
  //timer running in a background in WEB APIS, then - message queue - when execution stack is empty in goes to execution stack
  setTimeout(() => {
    console.log("Async second");
  }, 2000);
};
const first2 = () => {
  console.log("Hey there");
  second2();
  console.log("The end");
};
first2();
