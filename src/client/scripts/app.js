/* Test function to check babel is compiling */
function test () {
  const testVars = [1,2,3,4,5,6,7,8];
  return testVars.map((int) => {
    return int + 1;
  });
}
