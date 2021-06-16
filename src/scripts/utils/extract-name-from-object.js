const extractNameFromObject = (arr) => {
  const arrName = [];
  arr.forEach((element) => {
    arrName.push(element.name);
  });
  return arrName;
};

export default extractNameFromObject;
