export function responseObj(title, content, ott, poster, synopsis, cast, director, year) {
  this.title = title;
  this.content = content;
  this.ott = ott;
  this.poster = poster;
  this.synopsis = synopsis;
  this.cast = cast;
  this.director = director;
  this.year = year;
}

export function commentsObj(comment, userName) {
  this.comment = comment;
  this.userName = userName;
}