const postController = (req, res, next) => {
  let firstname = isEmpty(req.body.firstName);
  let lastName = isEmpty(req.body.lastName);
  let phoneNumber = isEmpty(req.body.phoneNumber);
  if (req.method === "POST") {
    if (firstname || lastName || phoneNumber) {
      res.status(400);
      res.send({
        sucess: false,
        message: "firstname, last name or phoneNumber can not be an Empty",
      });
    } else {
      next();
    }
  } else {
    next();
  }
};

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
// function isNumber(str) {
//   console.log(str);
//   let convertNumber = parseInt(str);
//   console.log(convertNumber);
//   console.log(str.length);
//   console.log(typeof convertNumber);
//   if (typeof convertNumber === "number" && str.length > 5 && str.length < 13) {
//     return true;
//   }
//   return false;
// }
module.exports = postController;
