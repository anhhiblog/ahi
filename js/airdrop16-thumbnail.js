function showrecentpostswiththumbs(t) {
  document.write('<ul class="recent_posts_with_thumbs">');
  for (var e = 0; e < numposts; e++) {
    var r,
      i,
      n = t.feed.entry[e],
      l = n.title.$t;
    if (e == t.feed.entry.length) break;
    for (var o = 0; o < n.link.length; o++) {
      if ("replies" == n.link[o].rel && "text/html" == n.link[o].type)
        n.link[o].title, n.link[o].href;
      if ("alternate" == n.link[o].rel) {
        r = n.link[o].href;
        break;
      }
    }
    try {
      i = n.media$thumbnail.url;
    } catch (t) {
      (s = n.content.$t),
        (a = s.indexOf("<img")),
        (b = s.indexOf('src="', a)),
        (c = s.indexOf('"', b + 5)),
        (d = s.substr(b + 5, c - b - 5)),
        (i =
          -1 != a && -1 != b && -1 != c && "" != d
            ? d
            : "http://2.bp.blogspot.com/-47IVKYb5jes/XaHB5E0-GAI/AAAAAAAADKs/goXot52XGHo_8uZicLPwrh_S6umaKHePQCK4BGAYYCw/s400/no%2Bimage.png");
    }
    var u = n.published.$t,
      m = u.substring(0, 4),
      h = u.substring(5, 7),
      p = u.substring(8, 10),
      w = new Array();
    (w[1] = "Jan"),
      (w[2] = "Feb"),
      (w[3] = "Mar"),
      (w[4] = "Apr"),
      (w[5] = "May"),
      (w[6] = "Jun"),
      (w[7] = "Jul"),
      (w[8] = "Aug"),
      (w[9] = "Sep"),
      (w[10] = "Oct"),
      (w[11] = "Nov"),
      (w[12] = "Dec"),
      document.write('<li class="recent-box">'),
      1 == showpostthumbnails &&
        document.write('<img class="recent_thumb" src="' + i + '"/>'),
      document.write(
        '<div class="label_title"><a href="' +
          r +
          '" target ="_top">' +
          l +
          "</a></div>"
      );
    var f = "",
      g = 0;
    document.write(""),
      1 == showpostdate &&
        ((f = f + w[parseInt(h, 10)] + "-" + p + " - " + m), (g = 1)),
      1 == displaymore &&
        (1 == g && (f += ""),
        (f =
          f +
          '<div class="recent-com"> <a href="' +
          r +
          '" target ="_top"><i aria-hidden="true" class="fa fa-info-circle"></i> Chi tiết</a></div>'),
        (g = 1)),
      document.write(f),
      document.write("</li>");
  }
  document.write("</ul>");
}
