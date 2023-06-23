import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);
export function formatAgo(data, lang = "en_US") {
  return format(data, lang);
}

//yarn add timeago.js 설치, 단순한 시간을
