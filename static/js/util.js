function checkIsPhoneOrEmail (lname) {
  /* 判断是手机还是邮箱，邮箱1，手机2 */
  let email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  let phone = /^1(3|4|5|6|7|8|9)\d{9}$/
  if (lname.test(email)) {
    return 1
  }
  if (lname.test(phone)) {
    return 2
  }
  return 0
}
