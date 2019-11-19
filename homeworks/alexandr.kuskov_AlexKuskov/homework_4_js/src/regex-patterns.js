// eslint(no-useless-escape) causes errors in the email pattern, so I have disabled it
// eslint-disable-next-line
export const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const phonePattern = /\+38\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/;
