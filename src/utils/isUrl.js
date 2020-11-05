const regex = /^((http|https|ftp):\/\/|file:\/\/\/)([a-zA-Z0-9\-\.]+)((\.[a-zA-Z]{2,4})|(:[0-9]+))(\/[a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~]*)?$/

export default function isUrl(check) {
  return regex.test(check);
}