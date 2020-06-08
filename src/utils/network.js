export function responseObj(title, content, ott, poster, synopsis, cast, director) {
  this.title = title;
  this.content = content;
  this.ott = ott;
  this.poster = poster;
  this.synopsis = synopsis;
  this.cast = cast;
  this.director = director;
}

export function commentsObj(comment, userName) {
  this.comment = comment;
  this.userName = userName;
}